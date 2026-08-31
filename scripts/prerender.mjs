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

const BASE_URL = 'https://bactivate.jp';
const EU_URL = 'https://bactivate.eu';
const US_URL = 'https://bactivate.us';

// Breadcrumb labels for inner pages
const BREADCRUMB_LABELS = {
  '/about-us': '私たちについて',
  '/what-is-bactivate': 'bActivateとは？',
  '/when-to-use': '使うタイミング',
  '/how-to-use': '使い方',
  '/our-distributors': '販売店一覧',
  '/studies-effect': '臨床研究',
  '/podcast': 'ポッドキャスト',
  '/blog': 'ブログ',
  '/shop': 'ご注文',
  '/terms-and-conditions': '利用規約',
  '/privacy-policy': 'プライバシーポリシー',
  '/contact': 'お問い合わせ',
  '/swab-culture-vs-bactivate': 'スワブ培養 vs bActivate',
  '/glossary': '用語集',
  '/affiliate-program': 'アフィリエイトプログラム',
  '/tokushoho': '特定商取引法に基づく表記',
};

// Per-route schema injections (for schemas that can't run during SSR via useEffect)
const ROUTE_SCHEMAS = {
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'bActivateへのお問い合わせ',
    'url': `${BASE_URL}/contact`,
    'about': {
      '@type': 'Organization',
      'name': 'Bojesen & Petersen Biotech ApS',
      'url': BASE_URL,
      'vatID': 'DK34690324',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Strandboulevarden 23',
        'postalCode': '2100',
        'addressLocality': 'Copenhagen',
        'addressCountry': 'DK',
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'email': 'contact@bactivate.eu',
          'telephone': '+45 60 71 21 69',
          'availableLanguage': ['English', 'Danish'],
        },
        {
          '@type': 'ContactPoint',
          'contactType': 'sales',
          'email': 'contact@bactivate.eu',
          'availableLanguage': ['English', 'Danish'],
        },
      ],
    },
  },
  '/shop': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'bActivate',
    'description': '不受胎牝馬のための獣医用診断培地。休眠状態の Streptococcus equi subsp. zooepidemicus を活性化して検出可能にし、獣医師による正確な診断と的を絞った抗生物質治療を可能にします。Hagyard Equine Medical Institute の臨床研究で受胎率83%。',
    'url': `${BASE_URL}/shop`,
    'image': `${BASE_URL}/images/hero.gif`,
    'brand': { '@type': 'Brand', 'name': 'Bojesen & Petersen Biotech ApS' },
    'manufacturer': { '@type': 'Organization', 'name': 'Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
    'audience': { '@type': 'Audience', 'audienceType': 'Veterinarians, Equine reproduction specialists' },
    'offers': {
      '@type': 'Offer',
      'url': `${BASE_URL}/shop`,
      'price': 41999,
      'priceCurrency': 'JPY',
      'availability': 'https://schema.org/InStock',
      'itemCondition': 'https://schema.org/NewCondition',
      'priceValidUntil': '2026-12-31',
      'seller': { '@type': 'Organization', 'name': 'Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
    },
    'sku': 'bactivate-1-vial',
    '@id': `${BASE_URL}/shop#product`,
    'review': [
      { '@type': 'Review', 'author': { '@type': 'Person', 'name': 'Dr. Kristina Lu, DVM' }, 'reviewBody': 'We incorporated bActivate into our standard reproductive work-up for problem mares at Hagyard. Out of 64 mares that had failed to conceive for at least 3 cycles, 83% became pregnant following bActivate activation and targeted antibiotic treatment.' },
      { '@type': 'Review', 'author': { '@type': 'Person', 'name': 'Meta Osborne MVB CertESM MRCVS' }, 'reviewBody': 'We used bActivate on 19 of our most persistent problem mares, horses that had been barren for over a year despite every conventional treatment we tried. 89% of them got in foal. What really opened our eyes was how many had a hidden infection.' },
      { '@type': 'Review', 'author': { '@type': 'Person', 'name': 'Charlotte Meldgaard, DVM' }, 'reviewBody': 'This mare lost her foal during delivery and developed a uterine infection resistant to conventional treatment. bActivate confirmed what we suspected, bacteria lying dormant deep in the endometrium, completely invisible to standard diagnostics.' },
      { '@type': 'Review', 'author': { '@type': 'Person', 'name': 'Maria Borre Nielsen' }, 'reviewBody': 'My biggest problem mare would never get in foal until we used bActivate. Last time we started with this and she was in foal on the very first insemination, instead of the usual 5 or 6 attempts.' },
    ],
  },
};

// Per-page metadata for canonical, title and meta description injection
// FAQPage schema is generated from the SAME arrays that render the visible
// accordion (src/components/FAQSection.tsx), so markup and visible content
// cannot drift apart. Home shows the general set, /shop the purchase set.
function getFaqItems(exportName) {
  const content = readFileSync(path.resolve(ROOT, 'src/components/FAQSection.tsx'), 'utf8');
  const block = content.match(new RegExp(`export const ${exportName} = \\[([\\s\\S]*?)\\n\\];`));
  if (!block) throw new Error(`FAQ export ${exportName} not found in FAQSection.tsx`);
  const items = [...block[1].matchAll(/question:\s*"((?:[^"\\]|\\.)*)",\s*\n\s*answer:\s*"((?:[^"\\]|\\.)*)",/g)];
  if (!items.length) throw new Error(`No FAQ items parsed from ${exportName}`);
  return items.map(m => ({
    '@type': 'Question',
    'name': JSON.parse(`"${m[1]}"`),
    'acceptedAnswer': { '@type': 'Answer', 'text': JSON.parse(`"${m[2]}"`) },
  }));
}

// Podcast VideoObject graph is prerendered (crawlers reading raw HTML must see
// it), sourced from the same arrays that render the page. Falls back silently
// if parsing fails so a refactor of Podcast.tsx cannot break the build.
function getPodcastSchema() {
  try {
    const pod = readFileSync(path.resolve(ROOT, 'src/pages/Podcast.tsx'), 'utf8');
    const vids = [...pod.matchAll(/\{ id: "([^"]+)", title: "([^"]+)", date: "([^"]+)" \}/g)];
    if (vids.length === 0) return null;
    const lib = readFileSync(path.resolve(ROOT, 'src/lib/podcastTranscript.ts'), 'utf8');
    const tm = lib.match(/export const podcastTranscriptHtml = ("[\s\S]*?");\s*\n/);
    const transcribedId = (pod.match(/TRANSCRIBED_EPISODE_ID = '([^']+)'/) || [])[1];
    let transcript = null;
    if (tm) {
      try { transcript = JSON.parse(tm[1]).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); } catch { /* keep null */ }
    }
    const faqm = lib.match(/export const podcastFaq[\s\S]*?=\s*\[([\s\S]*?)\n\];/);
    const faqItems = faqm
      ? [...faqm[1].matchAll(/"q":\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*"a":\s*"((?:[^"\\]|\\.)*)"/g)]
          .map(m => ({ '@type': 'Question', 'name': JSON.parse(`"${m[1]}"`), 'acceptedAnswer': { '@type': 'Answer', 'text': JSON.parse(`"${m[2]}"`) } }))
      : [];
    const graph = vids.map(v => ({
      '@type': 'VideoObject',
      'name': v[2],
      'embedUrl': `https://www.youtube.com/embed/${v[1]}`,
      'url': `https://www.youtube.com/watch?v=${v[1]}`,
      'thumbnailUrl': `https://img.youtube.com/vi/${v[1]}/maxresdefault.jpg`,
      'uploadDate': v[3],
      'description': 'Expert video on dormant uterine infections in mares, problem mare fertility, and the bActivate protocol. Hosted by Prof. Anders Miki Bojesen (University of Copenhagen) and Dr. Morten Rønn Petersen (DVM, PhD, Dipl. ACT).',
      'publisher': { '@type': 'Organization', 'name': 'bActivate, Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
      ...(transcript && v[1] === transcribedId ? { 'transcript': transcript } : {}),
    }));
    if (faqItems.length) graph.push({ '@type': 'FAQPage', 'mainEntity': faqItems });
    return { '@context': 'https://schema.org', '@graph': graph };
  } catch {
    return null;
  }
}

const podcastSchema = getPodcastSchema();
if (podcastSchema) ROUTE_SCHEMAS['/podcast'] = podcastSchema;

ROUTE_SCHEMAS['/'] = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': getFaqItems('homeFaqItems'),
};

ROUTE_SCHEMAS['/shop'] = [
  ROUTE_SCHEMAS['/shop'],
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': getFaqItems('shopFaqItems'),
  },
];

const PAGE_META = {
  '/': {
    title: 'bActivate｜不受胎牝馬の隠れた感染を診断',
    description: 'bActivateは、不受胎牝馬の隠れた子宮内感染を検出します。Hagyard（米国ケンタッキー州）で使用され、受胎率83%。活性化サイクルごとに1バイアル。',
  },
  '/about-us': {
    title: '私たちについて｜Bojesen & Petersen Biotech ApS',
    description: '創業者をご紹介します：bActivateを発見・開発した獣医学者、Morten Rønn Petersen博士（DVM, PhD, Dipl. ACT）と Anders Miki Bojesen教授。',
  },
  '/what-is-bactivate': {
    title: 'bActivateとは？｜不受胎牝馬・空胎牝馬の隠れた感染を診断',
    description: 'bActivateは、空胎牝馬・不受胎牝馬の子宮内で休眠した Streptococcus zooepidemicus を診断します。これは通常のスワブ培養が、罹患牝馬の約60%で見逃す隠れた感染です。',
  },
  '/when-to-use': {
    title: '不受胎牝馬に bActivate を使うタイミング｜隠れた感染のサイン',
    description: 'スワブは陰性なのに牝馬が受胎しませんか？ 休眠子宮内感染のサインと、bActivate が適応となるタイミングを解説します。',
  },
  '/how-to-use': {
    title: 'bActivateの使い方｜獣医向けプロトコル',
    description: 'ステップ・バイ・ステップの獣医向けプロトコル：発情初期に bActivate 10 ml を注入し、48時間後に培養、標的抗菌薬で治療。獣医師のための完全な手順。',
  },
  '/our-distributors': {
    title: 'bActivate 販売店一覧｜世界各国の獣医用販売店',
    description: 'bActivateは、米国（Hagyard、Midwest Veterinary Supply）、英国、オランダ、デンマーク、オーストラリアなど、世界各国の認定販売店を通じてご購入いただけます。',
  },
  '/studies-effect': {
    title: 'bActivate 臨床エビデンス｜不受胎牝馬・空胎牝馬で受胎率83%',
    description: '臨床エビデンス：Hagyardで受胎率83%（64頭）、Kildangan（Godolphin）で89%。不受胎牝馬・空胎牝馬・不妊牝馬の隠れた子宮内感染に関する研究。',
  },
  '/podcast': {
    title: 'bActivateポッドキャスト｜Bojesen & Petersen と学ぶ馬の繁殖の健康',
    description: 'Morten Rønn Petersen博士（DVM, PhD）と Anders Miki Bojesen教授による、休眠 Streptococcus zooepidemicus と不受胎牝馬に関するポッドキャスト・動画。',
  },
  '/blog': {
    title: 'bActivateブログ｜馬の子宮内膜炎と牝馬の受胎性',
    description: '無症候性子宮内膜炎、休眠細菌、bActivateに関する研究・臨床知見・ニュース。獣医師および馬の繁殖専門家の方へ。',
  },
  '/shop': {
    title: 'bActivateのご注文｜不受胎牝馬のための獣医用診断',
    description: '不受胎牝馬に用いる bActivate をご注文いただけます。世界各国の獣医用販売店を通じてもご購入いただけます。1バイアルで1活性化サイクル分。',
  },
  '/terms-and-conditions': {
    title: '利用規約｜bActivate, Bojesen & Petersen Biotech',
    description: 'bActivate ご購入に関する利用規約。獣医師による使用条件、責任の範囲、返品特約、キャンセル、準拠法および管轄について。',
  },
  '/privacy-policy': {
    title: 'プライバシーポリシー（個人情報保護方針）｜bActivate',
    description: 'bactivate.jp のプライバシーポリシー。個人情報保護法に基づく利用目的、第三者提供、外国にある第三者への提供、外部送信、開示等の請求手続について。',
  },
  '/contact': {
    title: 'bActivateへのお問い合わせ｜Bojesen & Petersen Biotech、コペンハーゲン',
    description: 'bActivateチームへのお問い合わせ：contact@bactivate.eu、+45 60 71 21 69、WhatsApp、またはお問い合わせフォーム。Bojesen & Petersen Biotech ApS、デンマーク・コペンハーゲン。',
  },
  '/swab-culture-vs-bactivate': {
    title: 'スワブ培養 vs 生検 vs bActivate｜牝馬の子宮内感染を診断する',
    description: '通常の子宮スワブが見つけられる感染牝馬は約34%、生検は約82%、そのいずれも休眠細菌を見つけられません。不受胎牝馬の診断法を比較します。',
  },
  '/glossary': {
    title: '馬の繁殖用語集｜bActivate',
    description: '馬の繁殖医療の主要用語を平易な言葉で解説：休眠パーシスター細胞、Streptococcus zooepidemicus、バイオフィルム、無症候性子宮内膜炎、不受胎牝馬、高リスク牝馬、再活性化。',
  },
  '/affiliate-program': {
    title: 'アフィリエイトプログラム｜bActivateで収入を得る',
    description: '不受胎牝馬の83%が反応する獣医療用製品をおすすめし、1販売あたり15%のコミッション（1注文あたり最低$80）を得ましょう。60日間クッキー、参加無料。',
  },
  '/tokushoho': {
    title: '特定商取引法に基づく表記｜bActivate',
    description: 'bActivate（Bojesen and Petersen Biotech ApS）の特定商取引法に基づく表記。販売業者、価格、支払い方法、引渡し時期、返品特約について。',
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
  '/contact',
  '/swab-culture-vs-bactivate',
  '/glossary',
  '/affiliate-program',
  '/tokushoho',
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
    m[1].replace(/&amp;/g, '&').replace(/, /g, '-').replace(/, /g, ', ').replace(/&nbsp;/g, ' ')
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
        .replace(/, /g, '-')
        .replace(/, /g, ', ')
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

// Routes whose page component injects its own FAQPage at runtime (inside an
// @graph). The global FAQPage must go for these too, or the rendered DOM ends
// up with two.
const ROUTES_WITH_CLIENT_FAQ = new Set(['/podcast']);

// True if a route schema carries a FAQPage, whether it is a single object,
// an array of schemas, or an @graph.
function schemaHasFaqPage(schema) {
  if (Array.isArray(schema)) return schema.some(schemaHasFaqPage);
  if (!schema || typeof schema !== 'object') return false;
  if (schema['@graph']) return schemaHasFaqPage(schema['@graph']);
  return schema['@type'] === 'FAQPage';
}

// index.html carries a site-wide FAQPage. Google expects one FAQPage per URL,
// so on routes that supply their own, more specific FAQ we drop the global one.
// Each ld+json block is parsed rather than regex-matched, so only a block that
// really is a FAQPage is removed.
function stripGlobalFaqPage(html) {
  const blockRe = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  return html.replace(blockRe, (match, body) => {
    try {
      const parsed = JSON.parse(body.trim());
      const nodes = Array.isArray(parsed) ? parsed : [parsed];
      if (nodes.length && nodes.every((n) => n && n['@type'] === 'FAQPage')) return '';
    } catch {
      // Not parseable, leave the block untouched.
    }
    return match;
  });
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

  // Parse sitemap lastmod dates so every page can carry an honest dateModified freshness signal
  const sitemapDates = {};
  try {
    const sitemapXml = readFileSync(path.resolve(ROOT, 'public/sitemap.xml'), 'utf8');
    const urlBlocks = sitemapXml.match(/<url>[\s\S]*?<\/url>/g) || [];
    for (const block of urlBlocks) {
      const loc = block.match(/<loc>([^<]+)<\/loc>/);
      const mod = block.match(/<lastmod>([^<]+)<\/lastmod>/);
      if (loc && mod) {
        const routePath = loc[1].replace(BASE_URL, '').replace(/\/$/, '') || '/';
        sitemapDates[routePath] = mod[1];
      }
    }
  } catch (e) {
    console.warn(`  ! could not parse sitemap dates: ${e.message}`);
  }
  const buildDate = new Date().toISOString().slice(0, 10);

  let success = 0, fail = 0;

  for (const route of allRoutes) {
    try {
      const appHtml = render(route);
      const routeSuffix = route === '/' ? '/' : route;
      const pageUrl = `${BASE_URL}${routeSuffix}`;
      let meta = PAGE_META[route];
      // Blog posts have no PAGE_META entries; derive the title from the
      // (Japanese) post title so prerendered blog pages are not stuck with
      // the homepage title.
      if (!meta && route.startsWith('/blog/')) {
        const post = blogPostData[route.replace('/blog/', '')];
        if (post && post.title) {
          const plain = post.title.replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
          meta = { title: `${plain}｜bActivate`, description: '' };
        }
      }

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

      // Inject per-page hreflang: ja (self), en-GB/en-US (brand peers), x-default (EU)
      html = html.replace(
        /(<link rel="alternate" hreflang="ja" href=")[^"]*(")/,
        `$1${BASE_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="en-GB" href=")[^"]*(")/,
        `$1${EU_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="en-US" href=")[^"]*(")/,
        `$1${US_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
        `$1${EU_URL}${routeSuffix}$2`
      );

      // Inject page-specific title and description if defined
      if (meta) {
        html = html.replace(
          /(<title>)[^<]*(< \/title>|<\/title>)/,
          `$1${meta.title}</title>`
        );
        if (meta.description) {
          html = html.replace(
            /(<meta name="description" content=")[^"]*(")/,
            `$1${meta.description}$2`
          );
        }
        html = html.replace(
          /(<meta property="og:title" content=")[^"]*(")/,
          `$1${meta.title}$2`
        );
        if (meta.description) {
          html = html.replace(
            /(<meta property="og:description" content=")[^"]*(")/,
            `$1${meta.description}$2`
          );
        }
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
          const pageMeta = PAGE_META[route];
          const articleBody = appHtml
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
            .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, ' ')
            .replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, ' ')
            .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, ' ')
            .replace(/<[^>]+>/g, ' ')
            .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/^(?:←\s*)?Back to blog\s*/i, '')
            .slice(0, 9000);
          const articleSchema = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': post.title,
            'description': pageMeta ? pageMeta.description : post.title,
            'articleBody': articleBody,
            'datePublished': post.date,
            'dateModified': post.date,
            'image': post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/og-image.jpg`,
            'url': `${BASE_URL}${route}`,
            'mainEntityOfPage': { '@type': 'WebPage', '@id': `${BASE_URL}${route}` },
            'inLanguage': 'en',
            'articleSection': 'Equine Reproductive Health',
            'keywords': ['problem mare', 'barren mare', 'non-pregnant mare', 'Streptococcus zooepidemicus', 'subclinical endometritis', 'mare fertility', 'bActivate'],
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
      if (ROUTES_WITH_CLIENT_FAQ.has(route) || schemaHasFaqPage(routeSchema)) {
        html = stripGlobalFaqPage(html);
      }
      if (routeSchema) {
        html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(routeSchema)}</script>\n</head>`);
      }

      // Inject MedicalWebPage schema for clinical guidance pages
      const MEDICAL_PAGE_SCHEMAS = {};
      const medicalPageSchema = MEDICAL_PAGE_SCHEMAS[route];
      if (medicalPageSchema) {
        html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(medicalPageSchema)}</script>\n</head>`);
      }

      // Inject WebPage freshness signal (dateModified) for non-blog routes.
      // Individual blog posts already carry dateModified via their BlogPosting schema.
      const isBlogPost = route.startsWith('/blog/');
      if (!isBlogPost) {
        const modifiedDate = sitemapDates[route] || buildDate;
        const webPageSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'url': pageUrl,
          'name': meta ? meta.title : undefined,
          'description': meta ? meta.description : undefined,
          'inLanguage': 'en',
          'datePublished': modifiedDate,
          'dateModified': modifiedDate,
          'isPartOf': { '@type': 'WebSite', '@id': `${BASE_URL}/#website` },
          'publisher': { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, 'name': 'bActivate', 'url': BASE_URL },
        };
        html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(webPageSchema)}</script>\n</head>`);
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
