/**
 * prerender.mjs
 * Run after `vite build` to generate static HTML for every route.
 * Usage: node scripts/prerender.mjs
 * Or via: npm run build:prerender
 */

import { build } from 'vite';
import { readFileSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BASE_URL = 'https://bactivate.us';
const PEER_URL = 'https://bactivate.eu';

// Breadcrumb labels for inner pages
const BREADCRUMB_LABELS = {
  '/about-us': 'About Us',
  '/what-is-bactivate': 'What is bActivate?',
  '/when-to-use': 'When to Use',
  '/how-to-use': 'How to Use',
  '/our-distributors': 'Our Distributors',
  '/studies-effect': 'Clinical Studies',
  '/podcast': 'Podcast',
  '/blog': 'Blog',
  '/shop': 'Shop',
  '/terms-and-conditions': 'Terms and Conditions',
  '/privacy-policy': 'Privacy Policy',
};

// Per-route schema injections (for schemas that can't run during SSR via useEffect)
const ROUTE_SCHEMAS = {
  '/shop': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'bActivate',
    'description': 'Veterinary uterine treatment for problem mares. Reactivates dormant Streptococcus equi subsp. zooepidemicus infections, enabling accurate diagnosis and targeted antibiotic treatment. 83% pregnancy rate in clinical trials at Hagyard Equine Medical Institute.',
    'url': `${BASE_URL}/shop`,
    'image': `${BASE_URL}/images/hero.gif`,
    'brand': { '@type': 'Brand', 'name': 'Bojesen & Petersen Biotech ApS' },
    'manufacturer': { '@type': 'Organization', 'name': 'Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
    'audience': { '@type': 'Audience', 'audienceType': 'Veterinarians, Equine reproduction specialists' },
    'offers': {
      '@type': 'Offer',
      'url': `${BASE_URL}/shop`,
      'price': 229,
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'itemCondition': 'https://schema.org/NewCondition',
      'seller': { '@type': 'Organization', 'name': 'Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
    },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '5', 'reviewCount': '12' },
  },
  '/how-to-use': {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Use bActivate — Veterinary Protocol for Problem Mares',
    'description': 'Step-by-step protocol for uterine instillation of bActivate, post-activation culture, and antibiotic treatment of subclinical endometritis in problem mares.',
    'totalTime': 'PT48H',
    'tool': [
      { '@type': 'HowToTool', 'name': 'bActivate vial (10 ml)' },
      { '@type': 'HowToTool', 'name': 'Insemination pipette' },
      { '@type': 'HowToTool', 'name': '0.9% NaCl saline (10 ml)' },
    ],
    'step': [
      { '@type': 'HowToStep', 'position': 1, 'name': 'Obtain pre-activation culture', 'text': 'Obtain a pre-activation uterine culture sample using a biopsy or low volume lavage to improve diagnostic sensitivity and specificity. Perform when the mare is in early estrus (largest follicle 25–30 mm).' },
      { '@type': 'HowToStep', 'position': 2, 'name': 'Prepare the bActivate vial', 'text': 'Thaw and shake the vial. For freeze-dried formulation: add 10 ml of NaCl (0.9%) and shake until a homogeneous solution is established.' },
      { '@type': 'HowToStep', 'position': 3, 'name': 'Instil bActivate into the uterus', 'text': 'Instil bActivate (10 ml) into the uterus of the mare using an insemination pipette and standard insemination technique.' },
      { '@type': 'HowToStep', 'position': 4, 'name': 'Obtain post-activation culture after 48 hours', 'text': 'Obtain a post-activation uterine culture sample 48 hours after instillation. Dormant Streptococcus zooepidemicus will now be reactivated and detectable by standard culture.' },
      { '@type': 'HowToStep', 'position': 5, 'name': 'Begin targeted antibiotic therapy', 'text': 'Begin appropriate antimicrobial therapy (uterine and systemic antibiotics) based on the results of the post-activation culture. Do not breed in the same estrus cycle — breed in the following cycle.' },
    ],
  },
};

// Per-page metadata for canonical, title and meta description injection
const PAGE_META = {
  '/': {
    title: 'bActivate | Treat Hidden Uterine Infections in Problem Mares',
    description: '70–80% of problem mares have a hidden uterine infection. bActivate activates dormant bacteria so your mare\'s immune system can find and clear them. 83% pregnancy rate at Hagyard.',
  },
  '/what-is-bactivate': {
    title: 'What is bActivate? | Uterine Treatment for Problem Mares',
    description: 'bActivate is a diagnostic aid for detecting dormant Streptococcus zooepidemicus infections in problem mares — the hidden cause of 70–80% of recurring fertility failure.',
  },
  '/when-to-use': {
    title: 'When to Use bActivate | Signs of Hidden Uterine Infection in Mares',
    description: 'Is your mare failing to conceive despite clean swabs? Learn the signs of dormant uterine infection and when bActivate is indicated — for veterinarians and horse breeders.',
  },
  '/how-to-use': {
    title: 'How to Use bActivate | Veterinary Protocol',
    description: 'Step-by-step veterinary protocol: instill 10 ml bActivate during early estrus, culture after 48 hours, treat with targeted antibiotics. Full instructions for veterinarians.',
  },
  '/studies-effect': {
    title: 'bActivate Results — Validated at Hagyard Equine Medical Institute, Kentucky',
    description: '83% pregnancy rate in 64 problem mares at Hagyard Equine Medical Institute. 89% at Kildangan Stud. Peer-reviewed: Petersen & Bojesen, Veterinary Microbiology, 2015.',
  },
  '/shop': {
    title: 'Order bActivate | Veterinary Treatment for Problem Mares',
    description: 'Order bActivate for use in problem mares. Available through Hagyard Pharmacy and Midwest Veterinary Supply in the US. One vial per treatment cycle.',
  },
  '/our-distributors': {
    title: 'bActivate Distributors | US, Europe & Australia',
    description: 'Find your local bActivate distributor. Available through Hagyard Pharmacy and Midwest Veterinary Supply in the US, and veterinary suppliers across Europe and Australia.',
  },
  '/about-us': {
    title: 'About bActivate — Founded by Equine Reproductive Veterinarians',
    description: 'bActivate was developed by Prof. Anders Miki Bojesen DVM PhD and Dr. Morten Rønn Petersen DVM PhD Dipl. ACT — leading experts in equine reproductive microbiology.',
  },
  '/podcast': {
    title: 'bActivate Podcast | Equine Reproduction & Mare Fertility',
    description: 'Listen to the bActivate podcast on equine reproduction, subclinical endometritis, and fertility in problem mares. For veterinarians and horse breeders.',
  },
  '/blog': {
    title: 'bActivate Blog — Equine Fertility and the Mare That Won\'t Catch',
    description: 'Research, clinical insights and news on subclinical endometritis, dormant bacteria, and treatment with bActivate. For veterinarians and equine reproduction specialists.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | bActivate',
    description: 'Terms and conditions for the use of bActivate. Read before administering bActivate to mares.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | bActivate',
    description: 'Privacy policy for bactivate.eu — how Bojesen & Petersen Biotech ApS collects, stores and uses personal data in accordance with GDPR.',
  },
  '/blog/bactivate-antibiotics-a-smarter-approach-to-treating-endometritis-in-mares': {
    title: 'Dormant Bacteria & Antibiotics: The Activate-First Protocol | bActivate Blog',
    description: 'Dormant Streptococcus zooepidemicus evades swabs and resists antibiotics. Learn why activating hidden bacteria with bActivate before antibiotic treatment is the key to clearing chronic endometritis.',
  },
  '/blog/how-bactivate-tackles-dormant-bacteria-in-mares': {
    title: 'How bActivate Tackles Dormant Bacteria in Mares | bActivate Blog',
    description: 'bActivate wakes dormant streptococcal bacteria in mares, making them detectable and treatable. 89% of barren mares at Godolphin/Kildangan conceived after treatment.',
  },
  '/blog/enhancing-mare-fertility-bactivate-revolutionary-approach': {
    title: 'Enhancing Mare Fertility with bActivate | bActivate Blog',
    description: 'Dormant streptococcal infections hide deep in the uterine wall, invisible to standard swabs. bActivate reactivates them for accurate diagnosis and effective treatment — raising pregnancy rates.',
  },
  '/blog/addressing-challenges-of-problem-mares': {
    title: 'Addressing the Challenges of Problem Mares | bActivate Blog',
    description: '25.9% of mares have uterine bacteria — 79.8% Streptococcus. Prof. Bojesen and Dr. Petersen on detecting dormant infections and treating problem mares effectively with bActivate.',
  },
  '/blog/taming-the-troublemaker-a-guide-to-handling-endometritis-in-mares': {
    title: 'A Guide to Handling Endometritis in Mares | bActivate Blog',
    description: 'Endometritis in mares is often caused by dormant Streptococcus zooepidemicus missed by standard swabs. Signs, treatment options, and why bActivate addresses what antibiotics alone cannot.',
  },
  '/blog/saving-time-and-money-with-bactivate-a-smarter-approach-to-endometritis-in-mares': {
    title: 'Save Time and Money on Endometritis Treatment | bActivate Blog',
    description: 'Repeated breeding failures from hidden endometritis are costly. bActivate activates dormant uterine bacteria so targeted antibiotics can eliminate the root cause — saving time and money.',
  },
  '/blog/insights-from-a-landmark-german-study-the-bacterial-spectrum-in-mare-uterine-health': {
    title: 'German Study: Bacterial Spectrum in Mare Uterine Health | bActivate Blog',
    description: '28,887 endometrial swabs: 25.9% showed pathogenic bacteria, 79.7% β-hemolytic Streptococci. What this landmark German study means for precision treatment and mare fertility management.',
  },
  '/blog/bactivate-demonstrates-remarkable-improvement-in-fertility-rates-for-thoroughbred-maresbojesen-petersen-biotech-aps-copenhagen-denmark': {
    title: '89% Pregnancy Rate in Thoroughbred Mares at Godolphin | bActivate Blog',
    description: 'Kildangan/Godolphin stud study: 89% of thoroughbred mares (16/19) conceived after bActivate treatment. All 14 who conceived delivered healthy live foals.',
  },
};

const STATIC_ROUTES = [
  '/',
  '/about-us',
  '/what-is-bactivate',
  '/when-to-use',
  '/how-to-use',
  '/our-distributors',
  '/studies-effect',
  '/podcast',
  '/blog',
  '/shop',
  '/terms-and-conditions',
  '/privacy-policy',
];

function parseBlogDate(dateStr) {
  const months = { January: '01', February: '02', March: '03', April: '04', May: '05', June: '06', July: '07', August: '08', September: '09', October: '10', November: '11', December: '12' };
  const m = dateStr.match(/(\d+)\.\s+(\w+)\s+(\d{4})/);
  if (!m) return dateStr;
  return `${m[3]}-${months[m[2]] || '01'}-${m[1].padStart(2, '0')}`;
}

function getBlogSlugs() {
  const content = readFileSync(path.resolve(ROOT, 'src/lib/blogData.ts'), 'utf8');
  const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  return matches.map(m => m[1]);
}

function getBlogPostData() {
  const content = readFileSync(path.resolve(ROOT, 'src/lib/blogData.ts'), 'utf8');
  const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const titles = [...content.matchAll(/title:\s*"([^"]+)"/g)].map(m =>
    m[1].replace(/&amp;/g, '&').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' ')
  );
  const dates = [...content.matchAll(/date:\s*"([^"]+)"/g)].map(m => m[1]);
  const images = [...content.matchAll(/image:\s*"([^"]+)"/g)].map(m => m[1]);
  const result = {};
  slugs.forEach((slug, i) => {
    result[slug] = { title: titles[i] || slug, date: parseBlogDate(dates[i] || ''), image: images[i] || '' };
  });
  return result;
}

function getBlogTitles() {
  const content = readFileSync(path.resolve(ROOT, 'src/lib/blogData.ts'), 'utf8');
  const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  const titleMatches = [...content.matchAll(/title:\s*"([^"]+)"/g)];
  const result = {};
  slugMatches.forEach((m, i) => {
    if (titleMatches[i]) {
      result[m[1]] = titleMatches[i][1]
        .replace(/&amp;/g, '&')
        .replace(/&ndash;/g, '–')
        .replace(/&mdash;/g, '—')
        .replace(/&nbsp;/g, ' ');
    }
  });
  return result;
}

function buildBreadcrumbSchema(route, baseUrl, blogTitles) {
  if (route === '/') return null;
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` }];
  if (route.startsWith('/blog/')) {
    const slug = route.replace('/blog/', '');
    const title = blogTitles[slug] || slug;
    items.push({ '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` });
    items.push({ '@type': 'ListItem', position: 3, name: title, item: `${baseUrl}${route}` });
  } else {
    const label = BREADCRUMB_LABELS[route];
    if (!label) return null;
    items.push({ '@type': 'ListItem', position: 2, name: label, item: `${baseUrl}${route}` });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

function routeToOutputPath(route) {
  if (route === '/') return path.resolve(ROOT, 'dist/index.html');
  return path.resolve(ROOT, `dist${route}/index.html`);
}

async function main() {
  const blogSlugs = getBlogSlugs();
  const blogTitles = getBlogTitles();
  const blogPostData = getBlogPostData();
  const allRoutes = [
    ...STATIC_ROUTES,
    ...blogSlugs.map(slug => `/blog/${slug}`),
  ];

  console.log(`\nBuilding SSR bundle (${allRoutes.length} routes)...`);

  const ssrOutDir = path.resolve(ROOT, 'dist-server');

  await build({
    root: ROOT,
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: ssrOutDir,
      rollupOptions: {
        output: { format: 'esm' },
      },
    },
    logLevel: 'warn',
  });

  const serverEntry = path.resolve(ssrOutDir, 'entry-server.js');
  const { render } = await import(pathToFileURL(serverEntry).href);

  const template = readFileSync(path.resolve(ROOT, 'dist/index.html'), 'utf8');

  let success = 0, fail = 0;

  for (const route of allRoutes) {
    try {
      const appHtml = render(route);
      const routeSuffix = route === '/' ? '/' : route;
      const pageUrl = `${BASE_URL}${routeSuffix}`;
      const meta = PAGE_META[route];

      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Inject canonical URL for every page
      html = html.replace(
        /(<link rel="canonical" href=")[^"]*(")/,
        `$1${pageUrl}$2`
      );

      // Inject og:url for every page
      html = html.replace(
        /(<meta property="og:url" content=")[^"]*(")/,
        `$1${pageUrl}$2`
      );

      // Inject twitter:url for every page
      html = html.replace(
        /(<meta name="twitter:url" content=")[^"]*(")/,
        `$1${pageUrl}$2`
      );

      // Inject per-page hreflang: en-US (self), en-GB (peer), x-default (peer=eu)
      html = html.replace(
        /(<link rel="alternate" hreflang="en-US" href=")[^"]*(")/,
        `$1${BASE_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="en-GB" href=")[^"]*(")/,
        `$1${PEER_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
        `$1${PEER_URL}${routeSuffix}$2`
      );

      // Inject page-specific title and description if defined
      if (meta) {
        html = html.replace(
          /(<title>)[^<]*(< \/title>|<\/title>)/,
          `$1${meta.title}</title>`
        );
        html = html.replace(
          /(<meta name="description" content=")[^"]*(")/,
          `$1${meta.description}$2`
        );
        html = html.replace(
          /(<meta property="og:title" content=")[^"]*(")/,
          `$1${meta.title}$2`
        );
        html = html.replace(
          /(<meta property="og:description" content=")[^"]*(")/,
          `$1${meta.description}$2`
        );
        html = html.replace(
          /(<meta name="twitter:title" content=")[^"]*(")/,
          `$1${meta.title}$2`
        );
        html = html.replace(
          /(<meta name="twitter:description" content=")[^"]*(")/,
          `$1${meta.description}$2`
        );
      }

      // Inject BreadcrumbList schema
      const breadcrumb = buildBreadcrumbSchema(route, BASE_URL, blogTitles);
      if (breadcrumb) {
        html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>\n</head>`);
      }

      // Inject Article schema for blog posts
      if (route.startsWith('/blog/')) {
        const slug = route.replace('/blog/', '');
        const post = blogPostData[slug];
        if (post) {
          const articleSchema = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': post.title,
            'datePublished': post.date,
            'dateModified': post.date,
            'image': post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/og-image.jpg`,
            'url': `${BASE_URL}${route}`,
            'author': [
              { '@type': 'Person', '@id': `${BASE_URL}/#anders-bojesen`, 'name': 'Anders Miki Bojesen', 'url': `${BASE_URL}/about-us` },
              { '@type': 'Person', '@id': `${BASE_URL}/#morten-petersen`, 'name': 'Morten Rønn Petersen', 'url': `${BASE_URL}/about-us` },
            ],
            'publisher': { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, 'name': 'bActivate', 'url': BASE_URL },
            'isPartOf': { '@type': 'WebSite', '@id': `${BASE_URL}/#website` },
          };
          html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>\n</head>`);
        }
      }

      // Inject per-route schemas (Product, HowTo etc.)
      const routeSchema = ROUTE_SCHEMAS[route];
      if (routeSchema) {
        html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(routeSchema)}</script>\n</head>`);
      }

      const outPath = routeToOutputPath(route);
      mkdirSync(path.dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, 'utf8');
      console.log(`  ✓ ${route}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`);
      fail++;
    }
  }

  rmSync(ssrOutDir, { recursive: true, force: true });

  console.log(`\nPrerender complete: ${success} succeeded, ${fail} failed.\n`);
  if (fail > 0) process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
