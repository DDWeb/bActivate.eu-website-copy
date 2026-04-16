import styles from './ReviewsSection.module.css';

const testimonials = [
  {
    quote: "We incorporated bActivate into our standard reproductive work-up for problem mares at Hagyard. Out of 64 mares that had failed to conceive for at least 3 cycles, 83% became pregnant following bActivate activation and targeted antibiotic treatment. Nearly half had a dormant Streptococcus infection that standard culture had completely missed. It changed the way we approach the problem mare.",
    name: "Dr. Kristina Lu, DVM",
    title: "Hagyard Equine Medical Institute, Lexington, Kentucky",
    initials: "KL",
    tag: "Clinical Study"
  },
  {
    quote: "We used bActivate on 19 of our most persistent problem mares — horses that had been barren for over a year despite every conventional treatment we tried. 89% of them got in foal. What really opened our eyes was how many had a hidden infection that standard swabs had never detected. It is now a routine part of our protocol at Kildangan.",
    name: "Meta Osborn",
    title: "Kildangan Stud, Godolphin",
    initials: "MO",
    tag: "Clinical Study"
  },
  {
    quote: "We have been using bActivate on several mares — all got pregnant and most of them in first try with frozen semen!",
    name: "Jeanette Marina Hansen",
    title: "Mare Owner & Breeder",
    initials: "JH",
    tag: "Breeder"
  },
  {
    quote: "bActivate is an excellent tool that allows us as reproductive vets to do our job as effectively as possible. When you compare the cost to the expense of a mare that fails to conceive — or worse, never produces a foal — bActivate is both a smart and cost-effective solution in the long run.",
    name: "Lotte Bøgedal",
    title: "Reproductive Veterinarian",
    initials: "LB",
    tag: "Veterinarian"
  },
  {
    quote: "I used bActivate and after just one covering got a colt foal — after 3 years of hardship where the mare went in foal but never managed to produce a live foal. I cannot recommend bActivate enough.",
    name: "Mary Davison",
    title: "Cathrinestown Stud Farm, Leixlip, Ireland",
    initials: "MD",
    tag: "Breeder"
  }
];

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Trusted by breeders &amp; vets worldwide</span>
          <h2 className={styles.title}>What our clients say</h2>
          <p className={styles.subtitle}>Real results from veterinarians and breeders who have made bActivate part of their reproductive protocol.</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.tag}>{t.tag}</span>
                <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
