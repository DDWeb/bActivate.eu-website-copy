#!/usr/bin/env node

/**
 * Ecwid Store Migration Script
 *
 * Copies all data from the old Ecwid store to the new one:
 * - Store profile settings
 * - Categories (preserving hierarchy)
 * - Products (with images, options, variants)
 * - Customers
 * - Discount coupons
 *
 * Usage: node scripts/migrate-ecwid.mjs
 */

const OLD_STORE_ID = '100041286';
const OLD_TOKEN = 'GZ2rGZ13711rgHXXrOSMFSQ05u7eV57Y';

const NEW_STORE_ID = '130367502';
const NEW_TOKEN = 'ZQsUpG5FISk91rPHtkZMinsTxH6rkQCb';

const OLD_BASE = `https://app.ecwid.com/api/v3/${OLD_STORE_ID}`;
const NEW_BASE = `https://app.ecwid.com/api/v3/${NEW_STORE_ID}`;

// ── Helpers ──────────────────────────────────────────────────────────

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function apiFetch(base, token, endpoint, options = {}) {
  const url = new URL(`${base}${endpoint}`);
  url.searchParams.set('token', token);

  const res = await fetch(url.toString(), {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    ...options,
  });

  if (res.status === 429) {
    console.log('  Rate limited, waiting 5s...');
    await sleep(5000);
    return apiFetch(base, token, endpoint, options);
  }

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`API ${res.status} ${endpoint}: ${text}`);
  }

  return text ? JSON.parse(text) : {};
}

function oldGet(endpoint) {
  return apiFetch(OLD_BASE, OLD_TOKEN, endpoint);
}

function newGet(endpoint) {
  return apiFetch(NEW_BASE, NEW_TOKEN, endpoint);
}

function newPost(endpoint, body) {
  return apiFetch(NEW_BASE, NEW_TOKEN, endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

function newPut(endpoint, body) {
  return apiFetch(NEW_BASE, NEW_TOKEN, endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

// ── Paginated fetch ──────────────────────────────────────────────────

async function fetchAll(getFn, endpoint, key = 'items') {
  const items = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const data = await getFn(`${endpoint}?limit=${limit}&offset=${offset}`);
    if (data[key]) items.push(...data[key]);
    if (!data[key] || data[key].length < limit) break;
    offset += limit;
  }

  return items;
}

// ── Migration steps ──────────────────────────────────────────────────

async function migrateProfile() {
  console.log('\n═══ Migrating Store Profile ═══');
  try {
    const profile = await oldGet('/profile');
    // Only copy general settings, not account-specific data
    const updates = {};
    if (profile.generalInfo) {
      updates.generalInfo = {
        storeUrl: profile.generalInfo.storeUrl,
        starterSite: profile.generalInfo.starterSite,
      };
    }
    if (profile.company) updates.company = profile.company;
    if (profile.formatsAndUnits) updates.formatsAndUnits = profile.formatsAndUnits;

    await newPut('/profile', updates);
    console.log('  ✓ Store profile migrated');
  } catch (e) {
    console.log(`  ⚠ Profile migration skipped: ${e.message}`);
  }
}

async function migrateCategories() {
  console.log('\n═══ Migrating Categories ═══');
  const categories = await fetchAll(oldGet, '/categories');
  console.log(`  Found ${categories.length} categories`);

  // Map old category IDs to new ones
  const categoryMap = new Map();

  // Sort by parentId to create parents first (0 or undefined = root)
  const sorted = categories.sort((a, b) => (a.parentId || 0) - (b.parentId || 0));

  for (const cat of sorted) {
    try {
      const newCat = {
        name: cat.name,
        description: cat.description || '',
        enabled: cat.enabled,
        orderBy: cat.orderBy,
        productIds: [], // will be populated when products are migrated
      };

      if (cat.parentId && categoryMap.has(cat.parentId)) {
        newCat.parentId = categoryMap.get(cat.parentId);
      }

      const result = await newPost('/categories', newCat);
      categoryMap.set(cat.id, result.id);
      console.log(`  ✓ Category: ${cat.name} (${cat.id} → ${result.id})`);

      // Upload category image if present
      if (cat.originalImageUrl) {
        try {
          const imgRes = await fetch(cat.originalImageUrl);
          const imgBuffer = await imgRes.arrayBuffer();
          const uploadUrl = new URL(`${NEW_BASE}/categories/${result.id}/image`);
          uploadUrl.searchParams.set('token', NEW_TOKEN);
          await fetch(uploadUrl.toString(), {
            method: 'POST',
            headers: { 'Content-Type': 'image/jpeg' },
            body: Buffer.from(imgBuffer),
          });
          console.log(`    ✓ Image uploaded`);
        } catch (e) {
          console.log(`    ⚠ Image upload failed: ${e.message}`);
        }
      }

      await sleep(300); // rate limit buffer
    } catch (e) {
      console.log(`  ✗ Failed: ${cat.name} - ${e.message}`);
    }
  }

  return categoryMap;
}

async function migrateProducts(categoryMap) {
  console.log('\n═══ Migrating Products ═══');
  const products = await fetchAll(oldGet, '/products');
  console.log(`  Found ${products.length} products`);

  const productMap = new Map();

  for (const prod of products) {
    try {
      // Fetch full product details (includes options, variations, etc.)
      const full = await oldGet(`/products/${prod.id}`);

      const newProd = {
        name: full.name,
        sku: full.sku || '',
        price: full.price,
        compareToPrice: full.compareToPrice,
        weight: full.weight,
        description: full.description || '',
        enabled: full.enabled,
        quantity: full.quantity,
        unlimited: full.unlimited,
        warningLimit: full.warningLimit,
        tax: full.tax,
        shipping: full.shipping,
        attributes: full.attributes,
        options: full.options || [],
        seoTitle: full.seoTitle,
        seoDescription: full.seoDescription,
      };

      // Map category IDs
      if (full.categoryIds && full.categoryIds.length > 0) {
        newProd.categoryIds = full.categoryIds
          .map((id) => categoryMap.get(id))
          .filter(Boolean);
      }
      if (full.defaultCategoryId && categoryMap.has(full.defaultCategoryId)) {
        newProd.defaultCategoryId = categoryMap.get(full.defaultCategoryId);
      }

      const result = await newPost('/products', newProd);
      productMap.set(full.id, result.id);
      console.log(`  ✓ Product: ${full.name} (${full.id} → ${result.id})`);

      // Upload main product image
      if (full.originalImageUrl) {
        try {
          const imgRes = await fetch(full.originalImageUrl);
          const imgBuffer = await imgRes.arrayBuffer();
          const uploadUrl = new URL(`${NEW_BASE}/products/${result.id}/image`);
          uploadUrl.searchParams.set('token', NEW_TOKEN);
          await fetch(uploadUrl.toString(), {
            method: 'POST',
            headers: { 'Content-Type': 'image/jpeg' },
            body: Buffer.from(imgBuffer),
          });
          console.log(`    ✓ Main image uploaded`);
        } catch (e) {
          console.log(`    ⚠ Main image failed: ${e.message}`);
        }
      }

      // Upload gallery images
      if (full.galleryImages && full.galleryImages.length > 0) {
        for (const img of full.galleryImages) {
          try {
            const imgRes = await fetch(img.originalImageUrl);
            const imgBuffer = await imgRes.arrayBuffer();
            const uploadUrl = new URL(`${NEW_BASE}/products/${result.id}/gallery`);
            uploadUrl.searchParams.set('token', NEW_TOKEN);
            await fetch(uploadUrl.toString(), {
              method: 'POST',
              headers: { 'Content-Type': 'image/jpeg' },
              body: Buffer.from(imgBuffer),
            });
            console.log(`    ✓ Gallery image uploaded`);
          } catch (e) {
            console.log(`    ⚠ Gallery image failed: ${e.message}`);
          }
          await sleep(200);
        }
      }

      // Migrate product variations/combinations
      if (full.combinations && full.combinations.length > 0) {
        for (const combo of full.combinations) {
          try {
            await newPost(`/products/${result.id}/combinations`, {
              options: combo.options,
              sku: combo.sku,
              price: combo.price,
              quantity: combo.quantity,
              unlimited: combo.unlimited,
              weight: combo.weight,
              warningLimit: combo.warningLimit,
            });
          } catch (e) {
            console.log(`    ⚠ Combination failed: ${e.message}`);
          }
        }
        console.log(`    ✓ ${full.combinations.length} variations migrated`);
      }

      await sleep(500); // rate limit buffer
    } catch (e) {
      console.log(`  ✗ Failed: ${prod.name} - ${e.message}`);
    }
  }

  return productMap;
}

async function migrateCustomers() {
  console.log('\n═══ Migrating Customers ═══');
  try {
    const customers = await fetchAll(oldGet, '/customers');
    console.log(`  Found ${customers.length} customers`);

    for (const cust of customers) {
      try {
        const full = await oldGet(`/customers/${cust.id}`);
        const newCust = {
          email: full.email,
          name: full.name,
          billingPerson: full.billingPerson,
          shippingAddresses: full.shippingAddresses,
          taxId: full.taxId,
          taxExempt: full.taxExempt,
        };

        await newPost('/customers', newCust);
        console.log(`  ✓ Customer: ${full.email}`);
        await sleep(300);
      } catch (e) {
        console.log(`  ✗ Failed: ${cust.email} - ${e.message}`);
      }
    }
  } catch (e) {
    console.log(`  ⚠ Customer migration skipped: ${e.message}`);
  }
}

async function migrateDiscountCoupons() {
  console.log('\n═══ Migrating Discount Coupons ═══');
  try {
    const coupons = await fetchAll(oldGet, '/discount_coupons');
    console.log(`  Found ${coupons.length} coupons`);

    for (const coupon of coupons) {
      try {
        const newCoupon = {
          name: coupon.name,
          code: coupon.code,
          discountType: coupon.discountType,
          status: coupon.status,
          discount: coupon.discount,
          launchDate: coupon.launchDate,
          expirationDate: coupon.expirationDate,
          totalLimit: coupon.totalLimit,
          usesLimit: coupon.usesLimit,
          orderCount: 0,
        };
        await newPost('/discount_coupons', newCoupon);
        console.log(`  ✓ Coupon: ${coupon.code}`);
        await sleep(300);
      } catch (e) {
        console.log(`  ✗ Failed: ${coupon.code} - ${e.message}`);
      }
    }
  } catch (e) {
    console.log(`  ⚠ Coupon migration skipped: ${e.message}`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  console.log('╔═══════════════════════════════════════╗');
  console.log('║   Ecwid Store Migration               ║');
  console.log('║   Old: 100041286 → New: 130367502     ║');
  console.log('╚═══════════════════════════════════════╝');

  // Verify access to both stores
  console.log('\nVerifying API access...');
  try {
    const oldProfile = await oldGet('/profile');
    console.log(`  ✓ Old store: ${oldProfile.generalInfo?.storeUrl || 'connected'}`);
  } catch (e) {
    console.error(`  ✗ Cannot access old store: ${e.message}`);
    process.exit(1);
  }

  try {
    const newProfile = await newGet('/profile');
    console.log(`  ✓ New store: ${newProfile.generalInfo?.storeUrl || 'connected'}`);
  } catch (e) {
    console.error(`  ✗ Cannot access new store: ${e.message}`);
    process.exit(1);
  }

  // Run migration steps in order
  await migrateProfile();
  const categoryMap = await migrateCategories();
  await migrateProducts(categoryMap);
  await migrateCustomers();
  await migrateDiscountCoupons();

  console.log('\n╔═══════════════════════════════════════╗');
  console.log('║   Migration Complete!                 ║');
  console.log('╚═══════════════════════════════════════╝');
  console.log('\nCheck your new store at:');
  console.log(`  https://my.ecwid.com/store/${NEW_STORE_ID}`);
}

main().catch((e) => {
  console.error('\nMigration failed:', e.message);
  process.exit(1);
});
