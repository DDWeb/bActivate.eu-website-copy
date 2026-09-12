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
  '/contact': 'Contact',
  '/swab-culture-vs-bactivate': 'Swab Culture vs bActivate',
  '/equine-endometritis': 'Equine Endometritis',
  '/endangered-equine-program': 'Endangered Equine Program',
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
        'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Strangles is caused by Streptococcus equi subspecies equi. Strep zoo is a different, opportunistic subspecies that causes secondary infections and is much less contagious.' },
      },
      {
        '@type': 'Question',
        'name': 'What antibiotic treats Strep zoo in horses?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Penicillin is usually the first choice, ideally guided by culture and sensitivity. It works well on active infections, but not on dormant uterine bacteria that are not growing.' },
      },
      {
        '@type': 'Question',
        'name': 'Why does my mare have a clean swab but still won\'t get in foal?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Because dormant Strep zoo deep in the uterine lining does not grow on a standard culture, so the swab reads negative while the infection is still present. Reactivating the bacteria before culture reveals it.' },
      },
      {
        '@type': 'Question',
        'name': 'Can Streptococcus zooepidemicus infect people?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Rarely. Human cases are uncommon and usually linked to unpasteurised dairy or close contact with infected animals.' },
      },
    ],
  },
  '/blog/biofilm-in-the-mares-uterus-why-breaking-it-up-is-not-enough': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a biofilm in a mare's uterus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A community of bacteria, most often Streptococcus equi subspecies zooepidemicus, that settles on the surface of the uterine lining and builds a protective slime layer around itself. The layer shields the bacteria from the immune system and from antibiotics, which is why biofilm infections persist across seasons."
        }
      },
      {
        "@type": "Question",
        "name": "Does acetylcysteine cure a biofilm infection in the uterus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It breaks up biofilm on the surface of the lining, and that is all it does. It does not reach bacteria inside the tissue and it does not wake dormant bacteria. This is why a mare can improve after a biofilm treatment, get in foal, and then fail again the following season."
        }
      },
      {
        "@type": "Question",
        "name": "Is a biofilm the same as a dormant infection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The biofilm sits on the surface. The dormant infection sits in the tissue itself, where imaging research has located the bacteria 300 to 500 micrometres beneath the surface (Clinical Theriogenology, 2009). The two can coexist, and clearing the surface leaves the reservoir in the tissue untouched."
        }
      },
      {
        "@type": "Question",
        "name": "Why do antibiotics fail against biofilm and dormant bacteria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most antibiotics only kill bacteria that are actively dividing. Bacteria in a biofilm divide slowly, and dormant bacteria hardly at all, so both tolerate even high antibiotic concentrations (Equine Reproductive Procedures, 2nd edition, 2021). Treatment works once the bacteria are back in active growth and identified by culture."
        }
      },
      {
        "@type": "Question",
        "name": "What actually clears the infection a biofilm hides?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The dormant reservoir has to be made detectable first. In a placebo-controlled study, activation with bActivate made the bacteria culturable in 64% of treated mares against 8% of saline controls (Veterinary Microbiology, 2015). The veterinarian can then treat the now-active infection with targeted antibiotics."
        }
      }
    ]
  },
  '/blog/why-a-clean-swab-does-not-rule-out-infection-in-a-problem-mare': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a mare have a uterine infection even if her swab is clean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A standard swab culture detects only about 34% of infected mares, against 82% for a biopsy culture (Nielsen, Theriogenology 2005). The bacteria most often responsible sit deep in the uterine lining and can be dormant, so they never reach the swab and do not grow on the plate."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is a uterine swab culture in mares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It finds roughly one infected mare in three. The swab samples a small patch of the surface, while the infection often sits deeper in the tissue. A clean swab narrows the search but does not end it."
        }
      },
      {
        "@type": "Question",
        "name": "Which test finds the infections a swab misses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A biopsy or a low-volume lavage samples far more of the uterus than a swab. For dormant bacteria, no culture method is enough on its own, because culture depends on growth. Activation before culture revealed the bacteria in 64% of treated mares versus 8% of controls (Veterinary Microbiology, 2015)."
        }
      },
      {
        "@type": "Question",
        "name": "My mare's swab is clean but she is still not in foal. What now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask your veterinarian about a biopsy or lavage instead of another surface swab, and about activation before the next culture. In clinical series, 47 to 87% of problem mares carried a hidden infection that standard culture had missed (Hagyard 2014, Kildangan 2018, Copenhagen 2025)."
        }
      }
    ]
  },
  '/blog/bactivate-antibiotics-a-smarter-approach-to-treating-endometritis-in-mares': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why did antibiotics not cure my mare's uterine infection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most likely because the bacteria were dormant. Antibiotics kill bacteria that are actively growing, and dormant streptococci tolerate even very high concentrations (Equine Reproductive Procedures, 2nd edition, 2021). The mare improves for a while, then relapses when the survivors repopulate."
        }
      },
      {
        "@type": "Question",
        "name": "Should antibiotics be given before or after activation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After. Antibiotics given first can suppress the reactivation and produce a false-negative culture. The documented protocol is: culture, instil bActivate, culture again after 48 hours, then targeted antibiotics based on the result, completed no later than three days after ovulation."
        }
      },
      {
        "@type": "Question",
        "name": "Which antibiotic works against Streptococcus zooepidemicus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Penicillin, guided by culture and sensitivity. In a German study of 28,887 endometrial samples, 99.5% of beta-haemolytic streptococci were penicillin-sensitive and only 3.1% showed multidrug resistance (Journal of Equine Veterinary Science, 2024). When treatment fails, the usual reason is dormancy, not resistance."
        }
      },
      {
        "@type": "Question",
        "name": "Is bActivate an antibiotic or a probiotic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neither. It is a sterile bacterial growth medium used as a diagnostic aid. It wakes dormant bacteria so a standard culture can find them, and the treatment that follows is an ordinary veterinary antibiotic prescribed from the culture result."
        }
      }
    ]
  },
  '/blog/saving-time-and-money-with-bactivate-a-smarter-approach-to-endometritis-in-mares': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does bActivate cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EUR 229 per vial, with one vial used per activation cycle, plus your veterinarian's normal fees for the instillation and the two cultures. Set against one covering fee or one lost season, the diagnostic step is the smallest number in the calculation."
        }
      },
      {
        "@type": "Question",
        "name": "Is it worth testing a problem mare before another breeding season?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In clinical series, 47 to 87% of problem mares carried a hidden uterine infection that standard culture had missed (Hagyard 2014, Kildangan 2018, Copenhagen 2025). Testing first replaces a repeat of last season with a diagnosis, and the whole protocol fits inside one estrus cycle."
        }
      },
      {
        "@type": "Question",
        "name": "How much time does the bActivate protocol take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One cycle. Activation and the second culture take 48 hours, treatment follows the culture result and is completed no later than three days after ovulation, and the mare is bred on the following cycle."
        }
      },
      {
        "@type": "Question",
        "name": "Can I skip the diagnostics and just treat with antibiotics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That is the expensive route. Blind antibiotic courses fail on dormant bacteria, clear the surface signs, and hand you the same problem next season. Identifying the bacteria first is what makes the treatment targeted and final."
        }
      }
    ]
  },
  '/blog/insights-from-a-landmark-german-study-the-bacterial-spectrum-in-mare-uterine-health': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What bacteria most often cause uterine infection in mares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beta-haemolytic streptococci, primarily Streptococcus equi subspecies zooepidemicus. They accounted for 79.7% of positive cultures across 28,887 endometrial samples in the largest study to date (Journal of Equine Veterinary Science, 2024)."
        }
      },
      {
        "@type": "Question",
        "name": "How common is uterine infection in broodmares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the same study, 25.9% of samples grew potentially pathogenic bacteria, roughly one mare in four at the time of sampling. Dormant bacteria do not grow in standard culture, so the true figure is likely higher."
        }
      },
      {
        "@type": "Question",
        "name": "Is antibiotic resistance a big problem in mare endometritis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smaller than often assumed. 99.5% of the beta-haemolytic streptococci were penicillin-sensitive, and multidrug resistance stood at 3.1%. When treatment fails in these mares, the usual explanation is dormancy, not resistance."
        }
      },
      {
        "@type": "Question",
        "name": "Was this study connected to bActivate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It was conducted in Germany, independently of bActivate's developers. That is exactly why it matters as context: the pathogen bActivate targets is confirmed as the dominant cause of uterine infection in the largest dataset that exists."
        }
      }
    ]
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
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'itemCondition': 'https://schema.org/NewCondition',
      'validFrom': '2026-08-27',
      'priceValidUntil': '2026-12-31',
      'seller': { '@type': 'Organization', 'name': 'Bojesen & Petersen Biotech ApS', 'url': BASE_URL },
    },
    'sku': 'bactivate-1-vial',
    '@id': `${BASE_URL}/shop#product`,
  },
  '/blog/addressing-challenges-of-problem-mares': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'Is bActivate a treatment?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. It reveals a dormant infection so it can be cultured, identified and treated by your veterinarian. bActivate contains no antibiotics, no hormones and no live bacteria.' } },
      { '@type': 'Question', 'name': 'Can a mare with a positive activation culture still be bred that season?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Activation and treatment take one cycle; breeding is planned for the following cycle. At Kildangan the bred mares needed 1.1 covers on average.' } },
      { '@type': 'Question', 'name': 'What if the post-activation culture is negative too?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Then a dormant streptococcal infection is unlikely to be the cause, and your veterinarian can look elsewhere with that possibility ruled out rather than assumed.' } },
    ],
  },
  '/blog/saving-time-and-money-with-bactivate-a-smarter-approach-to-endometritis-in-mares': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'Is bActivate expensive?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'One vial is 229 USD from the manufacturer\'s online shop, or through Hagyard Pharmacy and Midwest Veterinary Supply (September 2026), plus your veterinarian\'s fees. Compare that with your own figure for one more cycle of stud fee, semen and veterinary work.' } },
      { '@type': 'Question', 'name': 'Do I have to buy bActivate myself?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Your veterinarian orders it through the veterinary trade and instills it. What the vet needs is on the how to use page.' } },
      { '@type': 'Question', 'name': 'What if the activation culture is negative?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Then a bacterial uterine infection is unlikely, and the veterinarian looks elsewhere: cycle, semen, anatomy, hormones. The money has ruled out one cause before the next cycle was paid for.' } },
      { '@type': 'Question', 'name': 'Does the work-up guarantee a foal?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. The Kentucky figures come from a field study without a placebo group. They show what happened to 64 problem mares after diagnosis and targeted treatment, not what will happen to your mare.' } },
    ],
  },
  '/blog/uterine-lavage-mare-when-and-why': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'How often can a mare be flushed?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The veterinarian decides per mare and per cycle. After covering, flushing is often done on one or two consecutive days. If a mare needs flushing again in every cycle, that is a reason to look for the cause, not to keep flushing.' } },
      { '@type': 'Question', 'name': 'Can I flush the uterus myself?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. A uterine lavage is a sterile procedure with a catheter through the cervix and belongs in the veterinarian\'s hands.' } },
      { '@type': 'Question', 'name': 'Do antibiotics belong in the flushing fluid?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Only with a positive culture and an antibiogram, and then the drug that follows from it. Not as a precaution.' } },
      { '@type': 'Question', 'name': 'Is bActivate a lavage?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. bActivate is a growth medium that stays in the uterus so that dormant bacteria grow and can be detected 48 hours later in a normal culture. It is a diagnostic step, not a treatment.' } },
    ],
  },
  '/blog/ultrasound-empty-mare-what-the-vet-sees': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'From when does the ultrasound confirm pregnancy?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The embryonic vesicle is visible about two weeks after ovulation. The veterinarian re-checks afterwards to confirm the pregnancy continues and to rule out twins.' } },
      { '@type': 'Question', 'name': 'Does fluid on the scan always mean infection?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Just after covering, a little fluid is a normal reaction. Fluid that persists, or fluid without any covering, signals a problem that needs an explanation.' } },
      { '@type': 'Question', 'name': 'Does a normal scan rule out a uterine infection?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. The scan shows fluid and the wall, not bacteria. A chronic infection in the tissue can give a uterus that looks normal.' } },
      { '@type': 'Question', 'name': 'Can bActivate be seen on the scan?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No, and that is not its role. bActivate is a culture medium the veterinarian instills so that dormant bacteria grow, then cultures 48 hours later. It is a diagnostic step, not a treatment.' } },
    ],
  },
  '/blog/positive-activation-culture-what-happens-next': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'Is a positive activation culture bad news?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'It is an explanation. A mare that has been empty for seasons now has a named cause, an antibiogram, and a plan for the next cycle.' } },
      { '@type': 'Question', 'name': 'Can she be bred in the same cycle?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Activation, culture and treatment take one cycle; breeding is planned for the following one. At Kildangan the bred mares needed 1.1 covers on average.' } },
      { '@type': 'Question', 'name': 'What if the second culture is negative?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Then a dormant streptococcal infection is unlikely to be the cause, and the veterinarian can look elsewhere with that possibility ruled out rather than assumed.' } },
      { '@type': 'Question', 'name': 'Does bActivate treat the infection?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. It makes the dormant bacteria grow so a normal culture can find them. The treatment is the veterinarian\'s, chosen from the antibiogram.' } },
    ],
  },
  '/blog/mare-not-getting-in-foal-what-to-do': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'How many times may a mare stay empty before looking deeper?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'After two failed cycles with good timing and good semen. With any sign of hidden endometritis (fluid on the scan, previous inflammation, repeated resorption, 10 years or older), at once.' } },
      { '@type': 'Question', 'name': 'Is a clean swab enough to rule out endometritis?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. In the comparison study, swab culture found 34 % of infections and biopsy culture 82 % (Nielsen 2005). Dormant streptococci deep in the lining do not grow in the standard culture.' } },
      { '@type': 'Question', 'name': 'Can an older mare still get in foal?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Often yes. Age is a risk factor, not a verdict. What matters is the state of the uterine lining, which a biopsy shows, and whether a hidden infection is found and treated.' } },
      { '@type': 'Question', 'name': 'Is bActivate a treatment?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. bActivate is a diagnostic culture medium. It wakes dormant bacteria so they grow in a normal culture. Treatment follows with antibiotics chosen from the sensitivity test.' } },
      { '@type': 'Question', 'name': 'What does the work-up cost?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'That depends on the vet and the route. For an activation, count on two visits 48 hours apart plus laboratory costs for two cultures. The price of bActivate itself is on the shop page; your vet orders it through the veterinary wholesaler.' } },
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
      { '@type': 'HowToStep', 'position': 1, 'name': 'Obtain pre-activation culture', 'text': 'Obtain a pre-activation uterine culture sample using a biopsy or low volume lavage to improve diagnostic sensitivity and specificity. Perform when the mare is in early estrus (largest follicle 25-30 mm).' },
      { '@type': 'HowToStep', 'position': 2, 'name': 'Prepare the bActivate vial', 'text': 'Thaw and shake the vial. For freeze-dried formulation: add 10 ml of NaCl (0.9%) and shake until a homogeneous solution is established.' },
      { '@type': 'HowToStep', 'position': 3, 'name': 'Instill bActivate into the uterus', 'text': 'Instill bActivate (10 ml) into the uterus of the mare using an insemination pipette and standard insemination technique.' },
      { '@type': 'HowToStep', 'position': 4, 'name': 'Obtain post-activation culture after 48 hours', 'text': 'Obtain a post-activation uterine culture sample 48 hours after instillation. Dormant Streptococcus zooepidemicus will now be reactivated and detectable by standard culture.' },
      { '@type': 'HowToStep', 'position': 5, 'name': 'Begin targeted antibiotic therapy', 'text': 'Begin appropriate antimicrobial therapy (uterine and systemic antibiotics) based on the results of the post-activation culture. Do not breed in the same estrus cycle, breed in the following cycle.' },
    ],
  },
};

// Per-page metadata for canonical, title and meta description injection
// FAQPage schema is generated from the SAME arrays that render the visible
// accordion (src/components/FAQSection.tsx), so markup and visible content
// cannot drift apart. Home shows the general set, /shop the purchase set.
function getFaqItems(exportName, sourceFile = 'src/components/FAQSection.tsx') {
  const content = readFileSync(path.resolve(ROOT, sourceFile), 'utf8');
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

// Route FAQs: visible accordion (FAQSection with items) and schema share one source.
for (const [route, exportName] of [
  ['/what-is-bactivate', 'whatIsFaqItems'],
  ['/when-to-use', 'whenToUseFaqItems'],
  ['/studies-effect', 'studiesFaqItems'],
  ['/equine-endometritis', 'endometritisFaqItems'],
]) {
  ROUTE_SCHEMAS[route] = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': getFaqItems(exportName, 'src/lib/routeFaqs.ts'),
  };
}

ROUTE_SCHEMAS['/endangered-equine-program'] = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Does it cost anything?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The bActivate itself is donated. If your mare qualifies, your veterinarian receives a coupon and places the order in the bactivate.us shop, and only the shipping is paid. Your own veterinarian\'s normal fees still apply.' } },
    { '@type': 'Question', 'name': 'Does bActivate treat the mare?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. It reveals a hidden infection so your veterinarian can treat it with targeted antibiotics. bActivate is a diagnostic aid, not a medicine.' } },
    { '@type': 'Question', 'name': 'Which breeds qualify?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Breeds on a recognized conservation watchlist, such as the RBST watchlist, the Livestock Conservancy priority list, or FAO DAD-IS. Ask us if you are unsure.' } },
    { '@type': 'Question', 'name': 'Who handles the mare?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Your own veterinarian, from the first culture to the treatment that follows. The veterinarian also places the order with the coupon, since bActivate is used through a vet.' } },
    { '@type': 'Question', 'name': 'What do you want in return?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Only that the outcome is recorded and that we may share a success story, with a foal photo and your name, with credit.' } },
  ],
};

const PAGE_META = {
  '/': {
    title: 'bActivate Finds the Infection Swabs Miss | Problem Mares',
    description: 'A standard uterine swab finds only 34% of infected mares. bActivate reactivates dormant bacteria so the infection can be found and treated by the vet.',
  },
  '/what-is-bactivate': {
    title: 'What is bActivate? | Finds the Infection Swabs Miss',
    description: 'A diagnostic culture medium that reactivates dormant Streptococcus zooepidemicus in problem mares, the hidden uterine infection a standard swab often misses.',
  },
  '/when-to-use': {
    title: 'When to Use bActivate | Signs of Hidden Infection in Mares',
    description: 'Barren mare despite clean swabs? The signs of a latent uterine infection, which mares are at risk (age, parity, history), and when bActivate is indicated.',
  },
  '/how-to-use': {
    title: 'How to Use bActivate | Veterinary Protocol',
    description: 'Step-by-step veterinary protocol: instill 10 ml bActivate in early estrus, culture after 48 hours, then treat with targeted antibiotics.',
  },
  '/studies-effect': {
    title: 'bActivate Clinical Evidence | 83% Pregnancy in Problem Mares',
    description: 'Clinical evidence: 83% pregnancy rate at Hagyard (64 mares), 89% at Kildangan (Godolphin). Studies on hidden uterine infections in problem mares.',
  },
  '/shop': {
    title: 'Order bActivate | Veterinary Diagnostic for Problem Mares',
    description: 'Order bActivate for use in problem mares. Available through Hagyard Pharmacy and Midwest Veterinary Supply in the US. One vial per activation cycle.',
  },
  '/our-distributors': {
    title: 'bActivate Distributors | US, Europe & Australia',
    description: 'Find your local bActivate distributor: Hagyard Pharmacy and Midwest Veterinary Supply in the US, plus veterinary suppliers across Europe and Australia.',
  },
  '/about-us': {
    title: 'About bActivate | Founded by Reproductive Veterinarians',
    description: 'bActivate was developed by Prof. Anders Miki Bojesen DVM PhD and Dr. Morten Rønn Petersen DVM PhD, leading experts in equine reproductive microbiology.',
  },
  '/podcast': {
    title: 'bActivate Podcast | Equine Reproduction & Mare Fertility',
    description: 'Listen to the bActivate podcast on equine reproduction, subclinical endometritis, and fertility in problem mares. For veterinarians and horse breeders.',
  },
  '/blog': {
    title: 'bActivate Blog | Equine Fertility & Problem Mares',
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
    description: 'A standard uterine swab finds about 34% of infected mares, biopsy about 82%, and neither finds dormant bacteria. The diagnostic options for problem mares.',
  },
  '/equine-endometritis': {
    title: 'Equine Endometritis: Causes, Diagnosis and What Vets Do',
    description: 'Endometritis in mares: clinical and subclinical forms, why a swab finds only 34 %, how activation culture and biopsy compare, and what the vet does next.',
  },
  '/blog/mare-not-getting-in-foal-what-to-do': {
    title: 'Mare Not Getting in Foal: What to Do, and in What Order',
    description: 'Scan shows nothing again? The five causes a vet rules out, in order, what you can do at each step, and why a clean swab is not the end of the search.',
  },
  '/endangered-equine-program': {
    title: 'Endangered Equine Program | Free bActivate for Rare Breeds',
    description: 'For breeds on a conservation watchlist we donate bActivate for problem mares that will not get in foal, so your vet can find the infection a swab misses.',
  },
  '/contact': {
    title: 'Contact bActivate | Bojesen & Petersen Biotech, Copenhagen',
    description: 'Contact the bActivate team: contact@bactivate.eu, +45 60 71 21 69, WhatsApp, or the contact form. Bojesen & Petersen Biotech ApS, Copenhagen, Denmark.',
  },
  '/blog/uterine-lavage-mare-when-and-why': {
    title: 'Uterine Lavage in the Mare: When and Why',
    description: 'Uterine lavage in the mare: when the vet flushes, which fluid is used, what a flush solves and what it does not, and what to do if the mare stays empty.',
  },
  '/blog/ultrasound-empty-mare-what-the-vet-sees': {
    title: 'Ultrasound of the Empty Mare: What the Vet Sees',
    description: 'Ultrasound of an empty mare: what the veterinarian sees in the uterus and ovaries, what fluid means, what the scan cannot show, and the next step.',
  },
  '/blog/positive-activation-culture-what-happens-next': {
    title: 'Your Mare Is Activation-Positive: What Happens Next',
    description: 'What a positive post-activation culture means, what the veterinarian does with the antibiogram, when the mare is bred again, and what the field data say.',
  },
  '/blog/streptococcus-zooepidemicus-in-horses': {
    title: 'Streptococcus zooepidemicus in Horses: Symptoms & Treatment',
    description: 'Streptococcus zooepidemicus is the most common opportunistic bacterium in horses, behind respiratory and uterine infections. Symptoms, spread and treatment.',
  },
  '/blog/bactivate-antibiotics-a-smarter-approach-to-treating-endometritis-in-mares': {
    title: 'Dormant Bacteria & Antibiotics: The Activate-First Protocol',
    description: 'Dormant Streptococcus zooepidemicus evades swabs and resists antibiotics. See why activating it before antibiotic treatment clears chronic endometritis.',
  },
  '/blog/biofilm-in-the-mares-uterus-why-breaking-it-up-is-not-enough': {
    title: 'Biofilm in the Mare\'s Uterus: Why Breaking It Up Is Not Enough',
    description: 'Breaking up biofilm does not remove the dormant streptococci beneath it. Why a swab misses them, and why activation and culture come before treatment.',
  },
  '/blog/why-a-clean-swab-does-not-rule-out-infection-in-a-problem-mare': {
    title: 'A Clean Swab Does Not Rule Out Infection in a Problem Mare',
    description: 'A swab culture finds only 34% of infected mares, a biopsy culture 82% (Nielsen 2005). Why a clean swab does not clear a problem mare, and what to do next.',
  },
  '/blog/addressing-challenges-of-problem-mares': {
    title: 'The Problem Mare: Why She Stays Empty and What to Check First',
    description: 'Why a mare with clean swabs and normal cycles stays empty, which signs point to a dormant uterine infection, and what activation before culture changes.',
  },
  '/blog/taming-the-troublemaker-a-guide-to-handling-endometritis-in-mares': {
    title: 'A Guide to Handling Endometritis in Mares',
    description: 'Endometritis in mares is often caused by dormant Streptococcus missed by swabs. Signs, options, and why bActivate finds what antibiotics alone cannot.',
  },
  '/blog/saving-time-and-money-with-bactivate-a-smarter-approach-to-endometritis-in-mares': {
    title: 'What an Empty Season Costs: The Breeder\'s Calculation',
    description: 'What a lost season really costs, what it costs to find the cause, and what the figures from 64 problem mares say. No promises, with sources.',
  },
  '/blog/insights-from-a-landmark-german-study-the-bacterial-spectrum-in-mare-uterine-health': {
    title: 'German Study: Bacterial Spectrum in Mare Uterine Health',
    description: '28,887 endometrial swabs: 25.9% showed pathogenic bacteria, 79.7% β-hemolytic Streptococci. What this landmark German study means for mare fertility.',
  },
  '/blog/bactivate-demonstrates-remarkable-improvement-in-fertility-rates-for-thoroughbred-mares': {
    title: '89% Pregnancy Rate in Thoroughbred Mares at Godolphin',
    description: 'Kildangan/Godolphin stud study: 89% of bred thoroughbred mares (16/18) conceived after bActivate activation and targeted antibiotics from the stud vet.',
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
  '/equine-endometritis',
  '/endangered-equine-program',
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
  const result = {};
  for (const block of content.split(/\n\s*slug:\s*/).slice(1)) {
    const slug = (block.match(/^["']([^"']+)["']/) || [])[1];
    if (!slug) continue;
    const get = (key) => (block.match(new RegExp('\\n\\s*' + key + ':\\s*"([^"]+)"')) || [])[1];
    const title = (get('title') || slug).replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
    const updated = get('updated');
    result[slug] = { title, date: parseBlogDate(get('date') || ''), updated: updated ? parseBlogDate(updated) : null, image: get('image') || '' };
  }
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

// Routes with no Japanese edition: emit no hreflang="ja" for them, a link to a
// 404 invalidates the whole cluster for that URL.
const MISSING_ON_JP = new Set(['/blog/mare-not-getting-in-foal-what-to-do', '/blog/positive-activation-culture-what-happens-next', '/blog/ultrasound-empty-mare-what-the-vet-sees', '/blog/uterine-lavage-mare-when-and-why', '/endangered-equine-program', '/equine-endometritis']);

// Schemas that describe content on ONE page only. They used to sit in
// index.html and were therefore claimed by every prerendered page; now the
// videos are declared on the pages that embed them and the 2015 paper on
// the clinical evidence page.
const EXTRA_SCHEMAS = {
  '/': {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoObject",
      "name": "bActivate, Facilitate Mare Pregnancy",
      "description": "bActivate activates dormant Streptococcus zooepidemicus in problem mares, enabling accurate diagnosis and targeted treatment of subclinical endometritis. 83% pregnancy rate at Hagyard Equine Medical Institute.",
      "thumbnailUrl": "https://img.youtube.com/vi/_1QPkyXkFgs/maxresdefault.jpg",
      "uploadDate": "2023-04-01",
      "publisher": {
        "@type": "Organization",
        "name": "bActivate",
        "url": "https://bactivate.us"
      },
      "embedUrl": "https://www.youtube.com/embed/_1QPkyXkFgs",
      "url": "https://www.youtube.com/watch?v=_1QPkyXkFgs"
    },
    {
      "@type": "VideoObject",
      "name": "How bActivate Works, The Science Behind Dormant Bacteria",
      "description": "Explains how dormant bacteria in the mare's uterus evade standard culture tests and how bActivate reactivates them within 48 hours for accurate diagnosis and treatment.",
      "thumbnailUrl": "https://img.youtube.com/vi/acpF8se6Co8/maxresdefault.jpg",
      "uploadDate": "2023-06-01",
      "publisher": {
        "@type": "Organization",
        "name": "bActivate",
        "url": "https://bactivate.us"
      },
      "embedUrl": "https://www.youtube.com/embed/acpF8se6Co8",
      "url": "https://www.youtube.com/watch?v=acpF8se6Co8"
    }
  ]
},
  '/when-to-use': {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoObject",
      "name": "When to Use bActivate, Indications for Problem Mares",
      "description": "Covers the clinical indications for bActivate: mares that fail to conceive despite breeding to fertile stallions, mares with recurring uterine fluid, and mares with previous uterine infections.",
      "thumbnailUrl": "https://img.youtube.com/vi/sVS0kj84lMA/maxresdefault.jpg",
      "uploadDate": "2023-08-01",
      "publisher": {
        "@type": "Organization",
        "name": "bActivate",
        "url": "https://bactivate.us"
      },
      "embedUrl": "https://www.youtube.com/embed/sVS0kj84lMA",
      "url": "https://www.youtube.com/watch?v=sVS0kj84lMA"
    }
  ]
},
  '/studies-effect': {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ScholarlyArticle",
      "@id": "https://doi.org/10.1016/j.vetmic.2015.06.006",
      "name": "Activation of persistent Streptococcus equi subspecies zooepidemicus in mares with subclinical endometritis",
      "headline": "Activation of persistent Streptococcus equi subspecies zooepidemicus in mares with subclinical endometritis",
      "author": [
        {
          "@type": "Person",
          "@id": "https://bactivate.us/#morten-petersen",
          "name": "Morten Rønn Petersen"
        },
        {
          "@type": "Person",
          "name": "Bolette Skive"
        },
        {
          "@type": "Person",
          "name": "Mette Christoffersen"
        },
        {
          "@type": "Person",
          "name": "Kristina Lu",
          "affiliation": {
            "@type": "Organization",
            "name": "Hagyard Equine Medical Institute"
          }
        },
        {
          "@type": "Person",
          "name": "Jesper M. Nielsen"
        },
        {
          "@type": "Person",
          "name": "Mats H. T. Troedsson",
          "affiliation": {
            "@type": "EducationalOrganization",
            "name": "Maxwell H. Gluck Equine Research Center, University of Kentucky"
          }
        },
        {
          "@type": "Person",
          "@id": "https://bactivate.us/#anders-bojesen",
          "name": "Anders Miki Bojesen"
        }
      ],
      "datePublished": "2015-08",
      "pagination": "119-125",
      "identifier": [
        {
          "@type": "PropertyValue",
          "propertyID": "DOI",
          "value": "10.1016/j.vetmic.2015.06.006"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "PMID",
          "value": "26123371"
        }
      ],
      "sameAs": ["https://doi.org/10.1016/j.vetmic.2015.06.006", "https://www.researchgate.net/publication/279630136_Activation_of_persistent_Streptococcus_equi_subspecies_zooepidemicus_in_mares_with_subclinical_endometritis"],
      "url": "https://doi.org/10.1016/j.vetmic.2015.06.006",
      "publisher": {
        "@type": "Organization",
        "name": "Elsevier"
      },
      "isPartOf": {
        "@type": "PublicationIssue",
        "issueNumber": "1-2",
        "isPartOf": {
          "@type": "PublicationVolume",
          "volumeNumber": "179",
          "isPartOf": {
            "@type": "Periodical",
            "name": "Veterinary Microbiology",
            "issn": "0378-1135"
          }
        }
      },
      "keywords": [
        "Streptococcus zooepidemicus",
        "subclinical endometritis",
        "mares",
        "bActivate",
        "equine reproduction"
      ]
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://clinicaltheriogenology.net/index.php/CT/article/view/12588",
      "name": "Streptococcus equi subspecies zooepidemicus resides deep in the chronically infected endometrium of mares",
      "headline": "Streptococcus equi subspecies zooepidemicus resides deep in the chronically infected endometrium of mares",
      "author": [
        {
          "@type": "Person",
          "@id": "https://bactivate.us/#morten-petersen",
          "name": "Morten Rønn Petersen"
        },
        {
          "@type": "Person",
          "name": "Jesper M. Nielsen"
        },
        {
          "@type": "Person",
          "name": "H. Lehn-Jensen"
        },
        {
          "@type": "Person",
          "@id": "https://bactivate.us/#anders-bojesen",
          "name": "Anders Miki Bojesen"
        }
      ],
      "datePublished": "2009-08-03",
      "sameAs": ["https://clinicaltheriogenology.net/index.php/CT/article/view/12588"],
      "pagination": "393-409",
      "url": "https://clinicaltheriogenology.net/index.php/CT/article/view/12588",
      "publisher": {
        "@type": "Organization",
        "name": "Society for Theriogenology"
      },
      "isPartOf": {
        "@type": "PublicationVolume",
        "volumeNumber": "1",
        "isPartOf": {
          "@type": "Periodical",
          "name": "Clinical Theriogenology",
          "issn": "2154-3968",
          "url": "https://clinicaltheriogenology.net/index.php/CT"
        }
      },
      "keywords": [
        "Endometritis",
        "Streptococcus equi subspecies zooepidemicus",
        "localization",
        "chronic infections",
        "equine",
        "fluorescence in situ hybridization"
      ]
    },
    {
      "@type": "Chapter",
      "@id": "https://doi.org/10.1002/9781119556015.ch38",
      "name": "Latent Uterine Bacterial Infections",
      "headline": "Latent Uterine Bacterial Infections",
      "author": [
        {
          "@type": "Person",
          "@id": "https://bactivate.us/#morten-petersen",
          "name": "Morten Rønn Petersen"
        },
        {
          "@type": "Person",
          "@id": "https://bactivate.us/#anders-bojesen",
          "name": "Anders Miki Bojesen"
        }
      ],
      "datePublished": "2021-02-19",
      "pagination": "141-142",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "DOI",
        "value": "10.1002/9781119556015.ch38"
      },
      "sameAs": "https://doi.org/10.1002/9781119556015.ch38",
      "url": "https://doi.org/10.1002/9781119556015.ch38",
      "isPartOf": {
        "@type": "Book",
        "name": "Equine Reproductive Procedures",
        "bookEdition": "2nd",
        "isbn": "9781119555988",
        "datePublished": "2021-02-19",
        "publisher": {
          "@type": "Organization",
          "name": "Wiley-Blackwell"
        },
        "editor": [
          {
            "@type": "Person",
            "name": "John J. Dascanio",
            "affiliation": {
              "@type": "EducationalOrganization",
              "name": "Texas Tech University"
            }
          },
          {
            "@type": "Person",
            "name": "Patrick M. McCue",
            "affiliation": {
              "@type": "EducationalOrganization",
              "name": "Colorado State University"
            }
          }
        ]
      },
      "keywords": [
        "latent endometritis",
        "dormant bacteria",
        "Streptococcus zooepidemicus",
        "equine reproduction",
        "bActivate"
      ]
    }
  ]
},
};

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
        `$1${PEER_URL}${routeSuffix}$2`
      );
      html = html.replace(
        /(<link rel="alternate" hreflang="en-US" href=")[^"]*(")/,
        `$1${BASE_URL}${routeSuffix}$2`
      );
      if (MISSING_ON_JP.has(route)) {
        html = html.replace(/[ \t]*<link rel="alternate" hreflang="ja" href="[^"]*"\s*\/?>\n?/, '');
      } else {
        html = html.replace(
          /(<link rel="alternate" hreflang="ja" href=")[^"]*(")/,
          `$1https://bactivate.jp${routeSuffix}$2`
        );
      }
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
            'dateModified': post.updated || post.date,
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
      const extraSchema = EXTRA_SCHEMAS[route];
      if (extraSchema) {
        html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(extraSchema)}</script>\n</head>`);
      }

      // Inject MedicalWebPage schema for clinical guidance pages
      const MEDICAL_PAGE_SCHEMAS = {
        '/equine-endometritis': {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Equine Endometritis: Causes, Diagnosis and What Vets Do',
          'description': 'Endometritis in mares: clinical and subclinical forms, why a swab finds only 34 %, how activation culture and biopsy compare, and what the vet does next.',
          'url': `${BASE_URL}/equine-endometritis`,
          'inLanguage': 'en',
          'about': { '@type': 'MedicalCondition', 'name': 'Subclinical Endometritis in Mares', '@id': `${BASE_URL}/#subclinical-endometritis` },
          'audience': { '@type': 'MedicalAudience', 'audienceType': 'Veterinarian' },
          'publisher': { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, 'name': 'bActivate', 'url': BASE_URL },
          'isPartOf': { '@type': 'WebSite', '@id': `${BASE_URL}/#website` },
        },
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
          'description': 'Step-by-step veterinary protocol: pre-activation uterine culture, bActivate instillation during early estrus, post-activation culture at 48 hours, and targeted antibiotic therapy based on culture results.',
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

  syncStaticPages();
  writeLlmsFull();

  rmSync(ssrOutDir, { recursive: true, force: true });

  console.log(`\nPrerender complete: ${success} succeeded, ${fail} failed.\n`);
  if (fail > 0) process.exit(1);
}

// Hand-made static pages under public/ carry a copy of the React header/footer and a stylesheet
// link from the build they were made with. Class names and asset hashes change with every build,
// so refresh them from the freshly rendered home page (and never load the app bundle there: the
// router has no route for these paths and would replace the content with the 404 page).
const STATIC_PAGES = ['glossary/index.html', 'is-my-mare-a-candidate/index.html'];
function syncStaticPages() {
  const home = readFileSync(path.resolve(ROOT, 'dist/index.html'), 'utf8');
  const header = (home.match(/<header[\s\S]*?<\/header>/) || [])[0];
  const footer = (home.match(/<footer[\s\S]*?<\/footer>/) || [])[0];
  const css = (home.match(/<link rel="stylesheet"[^>]*>/) || [])[0];
  if (!header || !footer || !css) throw new Error('syncStaticPages: header, footer or stylesheet not found in dist/index.html');
  for (const rel of STATIC_PAGES) {
    const p = path.resolve(ROOT, 'dist', rel);
    let html;
    try { html = readFileSync(p, 'utf8'); } catch { continue; }
    html = html
      .replace(/<header[\s\S]*?<\/header>/, () => header)
      .replace(/<footer[\s\S]*?<\/footer>/, () => footer)
      .replace(/<link rel="stylesheet"[^>]*>/, () => css)
      .replace(/[ \t]*<script type="module"[^>]*><\/script>\n?/, '');
    writeFileSync(p, html, 'utf8');
    console.log(`  \u2713 static ${rel} synced with the current header, footer and stylesheet`);
  }
}

// /llms-full.txt: the whole Open Knowledge Format bundle in one file, in reading
// order, so an AI reader that follows llms.txt can take everything in one fetch.
const OKF_ORDER = ['index', 'bactivate', 'problem-mare', 'dormant-streptococcus', 'clinical-evidence', 'how-to-use', 'founders', 'faq', 'webinar'];
function writeLlmsFull() {
  const parts = [];
  for (const name of OKF_ORDER) {
    let md;
    try { md = readFileSync(path.resolve(ROOT, 'public/okf', name + '.md'), 'utf8'); } catch { continue; }
    parts.push(`<!-- source: ${BASE_URL}/okf/${name}.md -->\n${md.trim()}\n`);
  }
  if (!parts.length) return;
  const head = `# bActivate: full knowledge base\n\n> Concatenation of the Open Knowledge Format files listed in ${BASE_URL}/llms.txt. Each section starts with its source URL. bActivate is a veterinary diagnostic culture medium, not a treatment.\n\n`;
  writeFileSync(path.resolve(ROOT, 'dist/llms-full.txt'), head + parts.join('\n---\n\n'), 'utf8');
  console.log(`  \u2713 llms-full.txt (${parts.length} OKF files)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
