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
];

function getBlogSlugs() {
  const content = readFileSync(path.resolve(ROOT, 'src/lib/blogData.ts'), 'utf8');
  const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  return matches.map(m => m[1]);
}

function routeToOutputPath(route) {
  if (route === '/') return path.resolve(ROOT, 'dist/index.html');
  return path.resolve(ROOT, `dist${route}/index.html`);
}

async function main() {
  const blogSlugs = getBlogSlugs();
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
