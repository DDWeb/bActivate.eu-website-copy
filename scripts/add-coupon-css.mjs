#!/usr/bin/env node

/**
 * Add Custom CSS to expand coupon box at checkout
 */

const STORE_ID = '130367502';
const TOKEN = 'ZQsUpG5FISk91rPHtkZMinsTxH6rkQCb';
const BASE_URL = `https://app.ecwid.com/api/v3/${STORE_ID}`;

const COUPON_CSS = `
/* Expand coupon box at checkout - always visible */
.ec-cart__coupon-tooltip {
  display: block !important;
  position: static !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

.ec-cart__coupon-tooltip::before,
.ec-cart__coupon-tooltip::after {
  display: none !important;
}

/* Hide the "Redeem coupon" toggle link since box is always open */
.ec-cart__coupon-toggle {
  display: none !important;
}
`;

async function main() {
  console.log('Adding custom CSS to expand coupon box...\n');

  // First, get current profile to see existing CSS
  const getUrl = new URL(`${BASE_URL}/profile`);
  getUrl.searchParams.set('token', TOKEN);

  const profileRes = await fetch(getUrl.toString());
  if (!profileRes.ok) {
    throw new Error(`Failed to get profile: ${profileRes.status}`);
  }
  const profile = await profileRes.json();

  // Get existing custom CSS (if any)
  const existingCSS = profile.designSettings?.customCSS || '';
  console.log('Existing custom CSS length:', existingCSS.length, 'chars');

  // Check if coupon CSS already exists
  if (existingCSS.includes('ec-cart__coupon-tooltip')) {
    console.log('\n⚠ Coupon CSS already exists in store. Skipping.');
    return;
  }

  // Append new CSS
  const newCSS = existingCSS + '\n' + COUPON_CSS;

  // Update profile with new CSS
  const putUrl = new URL(`${BASE_URL}/profile`);
  putUrl.searchParams.set('token', TOKEN);

  const updateRes = await fetch(putUrl.toString(), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      designSettings: {
        customCSS: newCSS
      }
    })
  });

  if (!updateRes.ok) {
    const text = await updateRes.text();
    throw new Error(`Failed to update: ${updateRes.status} - ${text}`);
  }

  console.log('✓ Custom CSS added successfully!');
  console.log('\nThe coupon input field will now be expanded by default at checkout.');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
