import { useState } from 'react';

const faqItems = [
  {
    question: "What is bActivate?",
    answer: "bActivate is a bacterial growth medium used by veterinarians to reactivate dormant Streptococcus equi subsp. zooepidemicus infections in the uterus of problem mares. It enables accurate diagnosis and treatment of subclinical endometritis that standard tests fail to detect.",
  },
  {
    question: "Why can't my mare get in foal despite clean swabs?",
    answer: "70–80% of problem mares carry a hidden uterine infection caused by dormant bacteria. These bacteria enter a low-metabolic 'persister' state that evades standard uterine cultures and resists antibiotics. Standard swabs miss this infection in over 60% of cases. bActivate reactivates the bacteria so they can be accurately diagnosed and treated.",
  },
  {
    question: "What is subclinical endometritis and why is it hard to detect?",
    answer: "Subclinical endometritis is a silent uterine inflammation with no visible symptoms — no discharge, no fever, no abnormal cycles. Despite appearing normal, the inflammation prevents embryo implantation. Because bacteria are in a dormant, low-metabolic state, they are not picked up by routine swabs or culture tests.",
  },
  {
    question: "What is a biofilm infection in a mare's uterus?",
    answer: "Biofilm is a protective layer that bacteria like Streptococcus zooepidemicus build around themselves inside the uterus. This shield makes them resistant to antibiotics and undetectable by standard swabs. Biofilm infections are a major cause of chronic, treatment-resistant infertility in problem mares.",
  },
  {
    question: "Why do antibiotics sometimes fail to cure uterine infections in mares?",
    answer: "When bacteria form biofilms or enter a dormant persister state, they become resistant to antibiotics — even ones they are technically sensitive to. Antibiotics cannot penetrate the biofilm shield effectively. bActivate reactivates the bacteria first, making them metabolically active and vulnerable to targeted antibiotic treatment.",
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
    question: "What pregnancy rates has bActivate achieved in clinical studies?",
    answer: "In a study at Hagyard Equine Medical Institute led by Dr. Kristina Lu, 83% of 64 problem mares became pregnant after bActivate treatment. At Kildangan Stud (Godolphin), 89% pregnancy rate was achieved in 19 problem mares. Copenhagen University data showed a 72% live foal rate.",
  },
  {
    question: "When should bActivate be used?",
    answer: "bActivate is indicated for mares that have failed to conceive despite breeding to fertile stallions, mares with recurring uterine fluid, mares with previous uterine infections, older broodmares with reduced uterine defense, and mares where antibiotics have previously failed. It is administered during estrus, approximately 5 days before intended breeding in the next cycle.",
  },
  {
    question: "Why does my mare lose her pregnancy so early?",
    answer: "Early embryo loss (before day 35) affects 10–15% of pregnancies and up to 30–40% in older or problem mares. A frequently overlooked cause is subclinical endometritis from dormant bacteria. The inflammation may not be severe enough to prevent conception, but it creates a hostile environment that ends the pregnancy in the first weeks. If your mare conceives but repeatedly loses her pregnancies, ask your vet about testing for dormant Strep. zooepidemicus with bActivate.",
  },
  {
    question: "Can bActivate be used on older mares?",
    answer: "Yes. Older mares (10+ years) and mares with multiple previous foals are among the most common candidates for bActivate, as uterine defense mechanisms weaken with age. Clinical studies include a significant proportion of older problem mares with long histories of infertility.",
  },
  {
    question: "Where can I buy bActivate in the US?",
    answer: "bActivate is available in the United States through Hagyard Pharmacy and Midwest Veterinary Supply. Ask your equine veterinarian to order on your behalf, or visit our shop page for full ordering details.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          Common questions about problem mares, biofilm infections and bActivate treatment.
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
