import { useState } from 'react';

// Two distinct question sets. The visible accordion must stay in sync with the
// FAQPage structured data injected per route in scripts/prerender.mjs
// ('/' = homeFaqItems, '/shop' = shopFaqItems). Edit both together.
export const homeFaqItems = [
  {
    question: "What is bActivate?",
    answer: "bActivate is a bacterial growth medium used by veterinarians to reactivate dormant Streptococcus equi subsp. zooepidemicus infections in the uterus of problem mares. It reveals subclinical endometritis that standard tests fail to detect, so the veterinarian can diagnose accurately and treat with targeted antibiotics.",
  },
  {
    question: "Why can't my mare get in foal despite clean swabs?",
    answer: "Studies show 70 to 80% of problem mares carry a hidden uterine infection caused by dormant bacteria. These bacteria enter a low-metabolic 'persister' state that evades standard uterine cultures and tolerates antibiotics. Standard swab culture has a detection sensitivity of about 34%, so it misses most of these infections. bActivate reactivates the bacteria so they can be accurately diagnosed and treated by your veterinarian.",
  },
  {
    question: "What is subclinical endometritis and why is it hard to detect?",
    answer: "Subclinical endometritis is a silent uterine inflammation with no visible symptoms: no discharge, no fever, no abnormal cycles. Despite appearing normal, the inflammation prevents embryo implantation. Because the bacteria are in a dormant, low-metabolic state, they are not picked up by routine swabs or culture tests.",
  },
  {
    question: "What is a biofilm infection in a mare's uterus?",
    answer: "Biofilm is a protective layer that bacteria like Streptococcus zooepidemicus build around themselves inside the uterus. This shield makes them tolerant to antibiotics and undetectable by standard swabs. Biofilm infections are a major cause of chronic, treatment-resistant infertility in problem mares.",
  },
  {
    question: "Why do antibiotics sometimes fail to cure uterine infections in mares?",
    answer: "When bacteria form biofilms or enter a dormant persister state, they tolerate antibiotics, even ones they are technically sensitive to, because the drugs target actively dividing cells. bActivate reactivates the bacteria first, making them metabolically active and vulnerable, so the veterinarian's targeted antibiotic treatment can work.",
  },
  {
    question: "What are the signs of a hidden uterine infection in a mare?",
    answer: "Key signs include: repeated failure to conceive despite breeding to a fertile stallion, recurring uterine fluid detected on ultrasound, clean swab results combined with unexplained infertility, early embryo loss, and a history of multiple failed antibiotic treatments. If your mare shows these signs, dormant bacterial infection may be the cause.",
  },
  {
    question: "How does bActivate work?",
    answer: "A veterinarian instills 10 ml of bActivate into the mare's uterus during early estrus. The growth medium reactivates dormant bacteria within 48 hours, making them detectable by standard culture. The veterinarian then prescribes targeted antibiotic treatment based on the culture result. Breeding is recommended in the following cycle.",
  },
  {
    question: "Why does my mare lose her pregnancy so early?",
    answer: "Early embryo loss (before day 35) affects 10 to 15% of pregnancies and up to 30 to 40% in older or problem mares. A frequently overlooked cause is subclinical endometritis from dormant bacteria. The inflammation may not be severe enough to prevent conception, but it creates a hostile environment that ends the pregnancy in the first weeks. If your mare conceives but repeatedly loses her pregnancies, ask your vet about testing for dormant Strep. zooepidemicus with bActivate.",
  },
  {
    question: "Can bActivate be used on older mares?",
    answer: "Yes. Older mares (10+ years) and mares with multiple previous foals are among the most common candidates for bActivate, as uterine defence mechanisms weaken with age. Clinical studies include a significant proportion of older problem mares with long histories of infertility.",
  },
];

export const shopFaqItems = [
  {
    question: "What does bActivate cost?",
    answer: "bActivate costs 229 USD per vial when ordered online. One vial is one activation cycle for one mare. In the US it is also available through Hagyard Pharmacy (Lexington, KY) and Midwest Veterinary Supply.",
  },
  {
    question: "What do I get, and do I need a veterinarian?",
    answer: "You receive a 10 ml vial of the bActivate activation growth medium. bActivate is a prescription veterinary product: it is instilled into the uterus by your veterinarian during early estrus, and the follow-up culture and any antibiotic treatment are handled by the veterinarian as well.",
  },
  {
    question: "When should bActivate be used?",
    answer: "bActivate is indicated for mares that have failed to conceive despite breeding to fertile stallions, mares with recurring uterine fluid, mares with previous uterine infections, older broodmares with reduced uterine defence, and mares where antibiotics have previously failed. It is administered during estrus, one cycle before the intended breeding cycle.",
  },
  {
    question: "What pregnancy rates has bActivate achieved in clinical studies?",
    answer: "In a study at Hagyard Equine Medical Institute led by Dr. Kristina Lu, 83% of 64 problem mares became pregnant after bActivate-guided diagnosis and veterinary treatment, and 70% of those with known outcomes produced a live foal. The study included no placebo group; the historic expected foaling rate for this group of mares is 15 to 50%. At Kildangan Stud (Godolphin), 89% of bred problem mares became pregnant (16/18), published as a congress abstract in the Journal of Equine Veterinary Science (2018).",
  },
  {
    question: "Where can I buy bActivate in the US?",
    answer: "bActivate is available in the United States through Hagyard Pharmacy and Midwest Veterinary Supply, or directly from this shop. Ask your equine veterinarian, or contact us at contact@bactivate.eu with any questions before ordering.",
  },
  {
    question: "How is bActivate shipped?",
    answer: "Online orders ship from Copenhagen, Denmark. In the US, bActivate is also stocked by Hagyard Pharmacy and Midwest Veterinary Supply for faster local supply. For clinic or stud quantities, contact us at contact@bactivate.eu.",
  },
];

type FAQVariant = 'home' | 'shop';

const FAQSection = ({ variant = 'home' }: { variant?: FAQVariant }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = variant === 'shop' ? shopFaqItems : homeFaqItems;
  const subtitle = variant === 'shop'
    ? 'Common questions about ordering, price, shipping and what the studies show.'
    : 'Common questions about problem mares, biofilm infections and bActivate activation.';

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ background: '#f8f8f8', borderTop: '1px solid #e5e7eb', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.5rem' }}>
          FAQ
        </p>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          {subtitle}
        </p>

        <div>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{ borderBottom: '1px solid #e5e7eb' }}
            >
              <button
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '1.1rem 0',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#111',
                  lineHeight: 1.4,
                }}
              >
                <span>{item.question}</span>
                <span style={{
                  flexShrink: 0,
                  fontSize: '1.25rem',
                  color: '#901820',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}>
                  &#8964;
                </span>
              </button>
              {openIndex === index && (
                <div style={{
                  paddingBottom: '1.1rem',
                  color: '#444',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
