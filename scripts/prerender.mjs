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

const BASE_URL = 'https://bactivate.eu';
const PEER_URL = 'https://bactivate.us';

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
  '/contact': 'Contact',
  '/swab-culture-vs-bactivate': 'Swab Culture vs bActivate',
};

// Per-route schema injections (for schemas that can't run during SSR via useEffect)
const ROUTE_SCHEMAS = {
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact bActivate',
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
  '/blog/streptococcus-zooepidemicus-in-horses': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is Streptococcus zooepidemicus the same as strangles?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Strangles is caused by Streptococcus equi subspecies equi. Streptococcus equi subspecies zooepidemicus (Strep zoo) is a different, opportunistic subspecies that causes secondary respiratory, wound and uterine infections, and it is much less contagious than strangles.' },
      },
      {
        '@type': 'Question',
        'name': 'What antibiotic treats Streptococcus zooepidemicus in horses?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Penicillin is usually the first choice, ideally guided by culture and sensitivity testing. In a German study of 28,887 endometrial samples, 99.5% of beta-haemolytic streptococci were penicillin-sensitive. Penicillin works on active infections but not on dormant uterine bacteria that are not actively growing.' },
      },
      {
        '@type': 'Question',
        'name': 'Why does my mare have a clean swab but still will not get in foal?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Dormant Streptococcus zooepidemicus deep in the uterine lining does not grow on a standard culture, so the swab reads negative even though the infection is present and preventing conception. Reactivating the dormant bacteria before culture, for example with bActivate, makes the hidden infection detectable and treatable.' },
      },
      {
        '@type': 'Question',
        'name': 'Can Streptococcus zooepidemicus infect people?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Rarely. Human infections are uncommon and usually linked to unpasteurised dairy products or close contact with infected animals. Basic hygiene around sick horses is a sensible precaution.' },
      },
    ],
  },
  '/shop': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'bActivate',
    'description': 'Veterinary diagnostic growth medium for problem mares. Reveals dormant Streptococcus equi subsp. zooepidemicus infections so the veterinarian can diagnose accurately and treat with targeted antibiotics. 83% pregnancy rate in a clinical study at Hagyard Equine Medical Institute.',
    'url': `${BASE_URL}/shop`,
    'image': `${BASE_URL}/images/hero.gif`,
    'brand': { '@type': 'Brand', 'name': 'Bojesen & Petersen Biotech ApS' },
    'manufacturer': { '@type': 'Organization', 'name': 'Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
    'audience': { '@type': 'Audience', 'audienceType': 'Veterinarians, Equine reproduction specialists' },
    'offers': {
      '@type': 'Offer',
      'url': `${BASE_URL}/shop`,
      'price': 229,
      'priceCurrency': 'EUR',
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
  '/how-to-use': {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Use bActivate, Veterinary Protocol for Problem Mares',
    'description': 'Step-by-step protocol for uterine instillation of bActivate, post-activation culture, and antibiotic treatment of subclinical endometritis in problem mares.',
    'totalTime': 'PT48H',
    'tool': [
      { '@type': 'HowToTool', 'name': 'bActivate vial (10 ml)' },
      { '@type': 'HowToTool', 'name': 'Insemination pipette' },
      { '@type': 'HowToTool', 'name': '0.9% NaCl saline (10 ml)' },
    ],
    'step': [
      { '@type': 'HowToStep', 'position': 1, 'name': 'Obtain pre-activation culture', 'text': 'Obtain a pre-activation uterine culture sample using a biopsy or low volume lavage to improve diagnostic sensitivity and specificity. Perform when the mare is in early oestrus (largest follicle 25-30 mm).' },
      { '@type': 'HowToStep', 'position': 2, 'name': 'Prepare the bActivate vial', 'text': 'Thaw and shake the vial. For freeze-dried formulation: add 10 ml of NaCl (0.9%) and shake until a homogeneous solution is established.' },
      { '@type': 'HowToStep', 'position': 3, 'name': 'Instil bActivate into the uterus', 'text': 'Instil bActivate (10 ml) into the uterus of the mare using an insemination pipette and standard insemination technique.' },
      { '@type': 'HowToStep', 'position': 4, 'name': 'Obtain post-activation culture after 48 hours', 'text': 'Obtain a post-activation uterine culture sample 48 hours after instillation. Dormant Streptococcus zooepidemicus will now be reactivated and detectable by standard culture.' },
      { '@type': 'HowToStep', 'position': 5, 'name': 'Begin targeted antibiotic therapy', 'text': 'Begin appropriate antimicrobial therapy (uterine and systemic antibiotics) based on the results of the post-activation culture. Do not breed in the same oestrus cycle, breed in the following cycle.' },
    ],
  },
  '/studies-effect': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What pregnancy rate has bActivate achieved in clinical studies?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'In the largest clinical evaluation, at Hagyard Equine Medical Institute in Lexington, Kentucky, Dr. Kristina Lu\'s team activated and treated 64 problem Thoroughbred mares (barren for 3 or more consecutive seasons). 83% became pregnant (53 of 64 mares). A separate field study at Kildangan Stud, operated by Godolphin, reported an 89% pregnancy rate among bred problem mares (16 of 18). The studies were carried out at independent clinics and studs; the founders of bActivate co-authored the reporting of the results.' },
      },
      {
        '@type': 'Question',
        'name': 'Why do problem mares test negative on routine uterine swabs even when infected?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Standard uterine swab culture relies on active bacterial growth. In problem mares and non-pregnant mares, Streptococcus equi subspecies zooepidemicus often enters a dormant, biofilm-protected state deep inside the uterine endometrium. Dormant bacteria have a very low metabolic rate and do not grow on standard culture media, producing a false-negative result even when the infection is present and actively preventing conception. bActivate reactivates these dormant bacteria so they become detectable by standard culture within 48 hours.' },
      },
      {
        '@type': 'Question',
        'name': 'How many mares have been studied with bActivate?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'The Hagyard clinical study included 64 barren Thoroughbred mares, all of whom had failed to conceive for 3 or more consecutive breeding seasons. The Kildangan/Godolphin study included 19 problem mares. A peer-reviewed laboratory study (Petersen et al., Veterinary Microbiology, 2015) included 37 mares and confirmed bActivate activated dormant bacteria in 64% of treated mares versus 8% in untreated controls.' },
      },
      {
        '@type': 'Question',
        'name': 'What was the live foal rate in the bActivate Hagyard study?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Of the 64 problem mares treated at Hagyard, 53 (83%) became pregnant. Of the 46 mares with confirmed foaling outcomes, 32 (70%) delivered live foals. These were mares with a history of 3 or more failed breeding seasons before receiving bActivate.' },
      },
      {
        '@type': 'Question',
        'name': 'Is bActivate supported by peer-reviewed research?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. The core laboratory science is published in Veterinary Microbiology (Petersen et al., 2015, DOI 10.1016/j.vetmic.2015.06.006), a placebo-controlled study confirming bActivate reactivates dormant Streptococcus zooepidemicus in mares. The Hagyard clinical data was presented at the Society for Theriogenology Annual Conference (Petersen and Bojesen, Clinical Theriogenology, 2014), and the Kildangan field study was published as a congress abstract in the Journal of Equine Veterinary Science (2018, DOI 10.1016/j.jevs.2018.05.162). The founders of bActivate are authors on these publications.' },
      },
      {
        '@type': 'Question',
        'name': 'What percentage of non-pregnant mares have a hidden uterine infection?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Studies show that 70 to 80% of mares that remain non-pregnant (open) at the end of the breeding season carry a hidden subclinical uterine infection caused by dormant Streptococcus equi subspecies zooepidemicus. These infections are missed by standard swab culture in more than 60% of affected mares, because the bacteria exist in a dormant state and do not grow on standard culture media.' },
      },
      {
        '@type': 'Question',
        'name': 'Where has bActivate been evaluated clinically?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'The Hagyard study was led by Dr. Kristina Lu at one of the world\'s largest equine hospitals, in Lexington, Kentucky. The Kildangan/Godolphin field study was run with Meta Osborne MVB at one of the world\'s premier Thoroughbred breeding operations, in Ireland. The clinics and studs are independent of the manufacturer; the founders of bActivate introduced the activation protocol and co-authored the reporting, which was presented at scientific conferences and published as a congress abstract in the Journal of Equine Veterinary Science (2018).' },
      },
    ],
  },
  '/what-is-bactivate': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is bActivate?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'bActivate is a veterinary bacterial growth medium used to detect dormant Streptococcus equi subspecies zooepidemicus infections in the equine uterus. A veterinarian instils it into the uterus of problem mares (non-pregnant mares that fail to conceive despite normal cycles and clean swabs). By providing nutrients that reactivate dormant bacteria, bActivate makes a previously undetectable uterine infection visible to standard swab culture within 48 hours.' },
      },
      {
        '@type': 'Question',
        'name': 'Is bActivate a treatment or a diagnostic tool?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'bActivate is a diagnostic tool, not a treatment. It does not treat the infection itself. It reactivates dormant bacteria hiding in a biofilm state inside the uterine endometrium, making them detectable by standard swab culture. Once the bacteria are identified, the veterinarian can prescribe targeted antibiotic therapy to clear the infection.' },
      },
      {
        '@type': 'Question',
        'name': 'Why do problem mares test negative on uterine swabs despite having an infection?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Streptococcus equi subspecies zooepidemicus can enter a dormant, biofilm-protected state inside the uterine endometrium. In this dormant state the bacteria lower their metabolic rate and do not grow on standard culture media. This produces false-negative swab results in more than 60% of affected mares. The mare appears clear on testing, but the infection is still present and continues to prevent conception, causing repeated breeding failures in otherwise healthy non-pregnant mares.' },
      },
      {
        '@type': 'Question',
        'name': 'How common is hidden uterine infection in non-pregnant mares?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Research indicates that 70 to 80% of mares that remain non-pregnant (open) at the end of the breeding season have a hidden subclinical uterine infection caused by dormant Streptococcus zooepidemicus. Up to 15% of all mares at any given breeding season may be affected. These are mares that appear healthy with normal cycles but carry a bacterial infection that standard culture tests cannot detect.' },
      },
      {
        '@type': 'Question',
        'name': 'Who developed bActivate?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'bActivate was developed by Prof. Anders Miki Bojesen DVM PhD, Professor of Veterinary Microbiology at the University of Copenhagen, and Dr. Morten Ronn Petersen DVM PhD Dipl. ACT, a veterinarian and researcher at Rigshospitalet Fertility Clinic in Copenhagen. Both researchers have extensive publication records in equine reproductive microbiology and Streptococcus zooepidemicus.' },
      },
      {
        '@type': 'Question',
        'name': 'What is subclinical endometritis in mares?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Subclinical endometritis is a persistent low-grade uterine infection in mares that shows no obvious clinical signs such as discharge or fever. It is caused by dormant Streptococcus equi subspecies zooepidemicus living in a biofilm state deep in the uterine endometrium. The condition causes recurring fertility failure, early embryo loss, and accumulation of uterine fluid after breeding. Standard uterine swabs miss this infection in the majority of affected mares because the bacteria are not actively growing.' },
      },
      {
        '@type': 'Question',
        'name': 'How does bActivate work?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'A veterinarian instils 10 ml of bActivate into the uterus of the problem mare during early oestrus. The growth medium provides nutrients that signal dormant Streptococcus zooepidemicus to reactivate and resume normal growth. After 48 hours, a standard uterine swab culture is taken. Bacteria that were previously invisible are now detectable, enabling accurate diagnosis and targeted antibiotic treatment.' },
      },
      {
        '@type': 'Question',
        'name': 'What makes a mare a problem mare or barren mare?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'A problem mare (also called a barren mare or non-pregnant mare) is a mare that repeatedly fails to conceive despite normal ovarian cycles, breeding to a fertile stallion, and passing routine reproductive examinations including clean uterine cultures. The classic presentation of dormant subclinical endometritis is a mare that tests negative on swabs but cannot sustain pregnancy. These mares often have a history of uterine fluid accumulation, early embryo loss, or multiple open seasons.' },
      },
    ],
  },
  '/when-to-use': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'When should bActivate be used on a problem mare?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'bActivate is indicated for mares that have failed to conceive for two or more consecutive breeding cycles despite normal ovarian cycles, breeding to a fertile stallion, and negative routine uterine culture. It is also indicated when a mare shows signs consistent with uterine infection (uterine fluid on ultrasound, early embryo loss, irregular cycles) but standard swabs return negative results. Some practices use it as a screening tool for all open mares at the start of the off-season.' },
      },
      {
        '@type': 'Question',
        'name': 'What are the signs that a mare has a hidden uterine infection?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'The main signs are: failure to conceive despite multiple breedings to a fertile stallion, a negative routine uterine swab that does not explain the fertility failure, accumulation of uterine fluid visible on ultrasound around oestrus, early embryo loss (days 14 to 25 after ovulation), and a history of two or more open seasons. These signs combined with a negative swab are the classic presentation of dormant subclinical endometritis caused by Streptococcus zooepidemicus in non-pregnant mares.' },
      },
      {
        '@type': 'Question',
        'name': 'How many failed breeding attempts before trying bActivate on a non-pregnant mare?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Most veterinarians consider bActivate after two failed consecutive breeding cycles in a mare with no other identifiable cause. The Hagyard clinical study included mares barren for 3 or more consecutive seasons. In high-value mares or mares approaching the end of their breeding career, earlier investigation may be warranted. Some practices use bActivate as a routine diagnostic on all non-pregnant mares at the end of each breeding season.' },
      },
      {
        '@type': 'Question',
        'name': 'Can bActivate be used on any non-pregnant mare or barren mare?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'bActivate is intended for non-pregnant mares (also called barren mares or problem mares) suspected of having dormant subclinical uterine infections caused by Streptococcus equi subspecies zooepidemicus. It is administered by a veterinarian and is most appropriate for mares with unexplained fertility failure and negative routine cultures. It is not a first-line tool for mares with acute visible signs of infection such as purulent discharge or positive routine culture results.' },
      },
      {
        '@type': 'Question',
        'name': 'Should bActivate be used before or after antibiotics?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'bActivate should be used before antibiotics when the goal is accurate diagnosis. Administering antibiotics before bActivate may suppress bacterial reactivation and produce a false-negative post-activation culture. The correct protocol is: instil bActivate, obtain a post-activation culture 48 hours later, then begin targeted antibiotic therapy based on the culture result. The mare is not bred in the same oestrus cycle but in the following one.' },
      },
      {
        '@type': 'Question',
        'name': 'Is bActivate used instead of a standard uterine swab?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'No. bActivate is used in addition to standard diagnostic procedures, not instead of them. The recommended protocol includes a pre-activation culture before bActivate instillation and a post-activation culture 48 hours later. Comparing the two cultures confirms whether dormant bacteria were present. bActivate does not replace routine culture but extends diagnostic accuracy to mares with dormant infections that standard culture would otherwise miss.' },
      },
      {
        '@type': 'Question',
        'name': 'Can bActivate be used during the breeding season?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. bActivate is designed for use during the active breeding season. It is administered during early oestrus when the largest follicle is 25 to 30 mm. The mare is not bred in that same oestrus cycle. After a positive post-activation culture and appropriate antibiotic treatment, the mare is bred in the following cycle. In clinical studies this approach achieved an 83% pregnancy rate in problem mares that had previously failed to conceive.' },
      },
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
    title: 'bActivate | Diagnose Hidden Infections in Problem Mares',
    description: 'A standard uterine swab finds only 34% of infected mares. bActivate reactivates dormant bacteria so the infection can be found and treated. 83% pregnancy rate at Hagyard.',
  },
  '/what-is-bactivate': {
    title: 'What is bActivate? | Diagnosing Infections in Problem Mares',
    description: 'bActivate diagnoses dormant Streptococcus zooepidemicus in problem and non-pregnant mares, a hidden infection that standard swab culture misses in roughly 60% of affected mares.',
  },
  '/when-to-use': {
    title: 'When to Use bActivate | Signs of Hidden Infection in Mares',
    description: 'Is your mare failing to conceive despite clean swabs? Learn the signs of dormant uterine infection and when bActivate is indicated.',
  },
  '/how-to-use': {
    title: 'How to Use bActivate | Veterinary Protocol',
    description: 'Step-by-step veterinary protocol: instil 10 ml bActivate in early oestrus, culture after 48 hours, then treat with targeted antibiotics.',
  },
  '/studies-effect': {
    title: 'bActivate Clinical Evidence | 83% Pregnancy in Problem Mares',
    description: 'Clinical evidence: 83% pregnancy rate at Hagyard (64 mares), 89% at Kildangan (Godolphin). Studies on hidden uterine infections in problem mares.',
  },
  '/shop': {
    title: 'Order bActivate | Veterinary Diagnostic for Problem Mares',
    description: 'Order bActivate for use in problem mares. Available through veterinary suppliers across Europe and Australia. One vial per activation cycle.',
  },
  '/our-distributors': {
    title: 'bActivate Distributors | Europe, UK & Australia',
    description: 'Find your local bActivate distributor. Available through veterinary suppliers across the UK, Netherlands, Denmark, Australia and more.',
  },
  '/about-us': {
    title: 'About Us | Prof. Bojesen & Dr. Petersen, bActivate Founders',
    description: 'bActivate was developed by Prof. Anders Miki Bojesen DVM PhD and Dr. Morten Rønn Petersen DVM PhD, leading experts in equine reproductive microbiology.',
  },
  '/podcast': {
    title: 'bActivate Podcast | Equine Reproduction & Mare Fertility',
    description: 'Listen to the bActivate podcast on equine reproduction, subclinical endometritis, and fertility in problem mares. For veterinarians and horse breeders.',
  },
  '/blog': {
    title: 'bActivate Blog | Equine Endometritis & Mare Fertility',
    description: 'Research, clinical insights and news on subclinical endometritis, dormant bacteria, and bActivate. For vets and equine reproduction specialists.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | bActivate',
    description: 'Terms and conditions for the use of bActivate. Read before administering bActivate to mares.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | bActivate',
    description: 'Privacy policy for bactivate.eu, how Bojesen & Petersen Biotech ApS collects, stores and uses personal data in accordance with GDPR.',
  },
  '/swab-culture-vs-bactivate': {
    title: 'Swab Culture vs Biopsy vs bActivate | Mare Uterine Infection',
    description: 'A standard uterine swab finds about 34% of infected mares, biopsy about 82%, and neither finds dormant bacteria. Compare the diagnostic options for problem mares.',
  },
  '/contact': {
    title: 'Contact bActivate | Bojesen & Petersen Biotech, Copenhagen',
    description: 'Contact the bActivate team: contact@bactivate.eu, +45 60 71 21 69, WhatsApp, or the contact form. Bojesen & Petersen Biotech ApS, Copenhagen, Denmark.',
  },
  '/blog/streptococcus-zooepidemicus-in-horses': {
    title: 'Streptococcus zooepidemicus in Horses: Symptoms & Treatment',
    description: 'Streptococcus zooepidemicus is the most common opportunistic bacterium in horses, behind respiratory and uterine infections. Symptoms, spread and treatment.',
  },
  '/blog/bactivate-antibiotics-a-smarter-approach-to-treating-endometritis-in-mares': {
    title: 'Dormant Bacteria & Antibiotics: The Activate-First Protocol',
    description: 'Dormant Streptococcus zooepidemicus evades swabs and resists antibiotics. See why activating it before antibiotic treatment clears chronic endometritis.',
  },
  '/blog/how-bactivate-tackles-dormant-bacteria-in-mares': {
    title: 'How bActivate Tackles Dormant Bacteria in Mares',
    description: 'bActivate wakes dormant streptococcal bacteria in mares, making them detectable. 89% of barren mares at Godolphin/Kildangan conceived after activation and targeted antibiotics.',
  },
  '/blog/enhancing-mare-fertility-bactivate-revolutionary-approach': {
    title: 'Enhancing Mare Fertility with bActivate',
    description: 'Dormant streptococcal infections hide deep in the uterine wall, invisible to standard swabs. bActivate reactivates them for accurate diagnosis and treatment.',
  },
  '/blog/addressing-challenges-of-problem-mares': {
    title: 'Addressing the Challenges of Problem Mares',
    description: '25.9% of mares carry uterine bacteria, 79.8% Streptococcus. Prof. Bojesen and Dr. Petersen on detecting dormant infections in problem mares with bActivate.',
  },
  '/blog/taming-the-troublemaker-a-guide-to-handling-endometritis-in-mares': {
    title: 'A Guide to Handling Endometritis in Mares',
    description: 'Endometritis in mares is often caused by dormant Streptococcus missed by swabs. Signs, options, and why bActivate finds what antibiotics alone cannot.',
  },
  '/blog/saving-time-and-money-with-bactivate-a-smarter-approach-to-endometritis-in-mares': {
    title: 'Save Time and Money on Endometritis Treatment',
    description: 'Repeated breeding failures from hidden endometritis are costly. bActivate activates dormant uterine bacteria so targeted antibiotics clear the root cause.',
  },
  '/blog/insights-from-a-landmark-german-study-the-bacterial-spectrum-in-mare-uterine-health': {
    title: 'German Study: Bacterial Spectrum in Mare Uterine Health',
    description: '28,887 endometrial swabs: 25.9% showed pathogenic bacteria, 79.7% β-hemolytic Streptococci. What this landmark German study means for mare fertility.',
  },
  '/blog/bactivate-demonstrates-remarkable-improvement-in-fertility-rates-for-thoroughbred-mares': {
    title: '89% Pregnancy Rate in Thoroughbred Mares at Godolphin',
    description: 'Kildangan/Godolphin stud study: 89% of bred thoroughbred mares (16/18) conceived after bActivate activation and targeted antibiotics prescribed by the stud vet.',
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

      // Inject per-page hreflang: en-GB (self), en-US (peer), x-default (self)
      html = html.replace(
        /(<link rel="alternate" hreflang="en-GB" href=")[^"]*(")/,
        `$1${BASE_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="en-US" href=")[^"]*(")/,
        `$1${PEER_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
        `$1${BASE_URL}${routeSuffix}$2`
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
      const MEDICAL_PAGE_SCHEMAS = {
        '/when-to-use': {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'When to Use bActivate for Problem Mares | Clinical Indications',
          'description': 'Clinical indicators for bActivate use: mares with repeated failure to conceive, culture-negative swabs combined with unexplained infertility, recurring uterine fluid, early embryo loss, or chronic subclinical endometritis.',
          'url': `${BASE_URL}/when-to-use`,
          'inLanguage': 'en',
          'about': { '@type': 'MedicalCondition', 'name': 'Subclinical Endometritis in Mares', '@id': `${BASE_URL}/#subclinical-endometritis` },
          'audience': { '@type': 'MedicalAudience', 'audienceType': 'Veterinarian' },
          'lastReviewed': '2026-06-12',
          'reviewedBy': [
            { '@type': 'Person', 'name': 'Anders Miki Bojesen', 'honorificPrefix': 'Prof.', 'honorificSuffix': 'DVM PhD' },
            { '@type': 'Person', 'name': 'Morten Rønn Petersen', 'honorificPrefix': 'Dr.', 'honorificSuffix': 'DVM PhD Dipl. ACT' },
          ],
          'publisher': { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, 'name': 'bActivate', 'url': BASE_URL },
          'isPartOf': { '@type': 'WebSite', '@id': `${BASE_URL}/#website` },
        },
        '/how-to-use': {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'How to Use bActivate, Veterinary Protocol for Problem Mares',
          'description': 'Step-by-step veterinary protocol: pre-activation uterine culture, bActivate instillation during early oestrus, post-activation culture at 48 hours, and targeted antibiotic therapy based on culture results.',
          'url': `${BASE_URL}/how-to-use`,
          'inLanguage': 'en',
          'about': {
            '@type': 'MedicalProcedure',
            'name': 'bActivate Bacterial Activation Protocol',
            'procedureType': 'https://schema.org/DiagnosticProcedure',
            'description': 'Uterine instillation of bActivate to reactivate dormant Streptococcus zooepidemicus, enabling accurate diagnosis and targeted antibiotic therapy in problem mares.',
          },
          'audience': { '@type': 'MedicalAudience', 'audienceType': 'Veterinarian' },
          'lastReviewed': '2026-06-12',
          'reviewedBy': [
            { '@type': 'Person', 'name': 'Anders Miki Bojesen', 'honorificPrefix': 'Prof.', 'honorificSuffix': 'DVM PhD' },
            { '@type': 'Person', 'name': 'Morten Rønn Petersen', 'honorificPrefix': 'Dr.', 'honorificSuffix': 'DVM PhD Dipl. ACT' },
          ],
          'publisher': { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, 'name': 'bActivate', 'url': BASE_URL },
          'isPartOf': { '@type': 'WebSite', '@id': `${BASE_URL}/#website` },
        },
      };
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
