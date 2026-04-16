import styles from './ReviewsSection.module.css';

const testimonials = [
    {
        quote: "We incorporated bActivate into our standard reproductive work-up for problem mares. The results have been remarkable — mares that had failed for multiple cycles were getting in foal after treatment.",
        name: "Dr. Kristina Lu, DVM",
        title: "Hagyard Equine Medical Institute, Lexington, Kentucky",
        initials: "KL",
        tag: "Clinical Study"
    },
    {
        quote: "We used bActivate on 19 of our most persistent problem mares at Kildangan Stud. The majority got in foal that same season. It has become an essential part of our reproductive programme.",
        name: "Meta Osborn",
        title: "Kildangan Stud, Godolphin",
        initials: "MO",
        tag: "Clinical Study"
    },
    {
        quote: "We have been using bActivate on several mares — all got pregnant within the same season. It is a product we now reach for early when a mare is not responding as expected.",
        name: "Jeanette Marina Hansen",
        title: "Mare Owner & Breeder",
        initials: "JH",
        tag: "Breeder"
    },
    {
        quote: "bActivate is an excellent tool that allows us as reproductive vets to identify hidden uterine infections and treat them effectively. It has genuinely changed outcomes for our most difficult cases.",
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
    },
    {
        quote: "Our 18-year-old mare had failed for five consecutive seasons. After bActivate she was confirmed strongly positive for Streptococcus — an infection standard testing had completely missed. She was treated, covered in September, and for the first time in five seasons there was no fluid present at ovulation. She is now 34 days in foal. This is the first time a pregnancy has not involved invasive flushing, excessive drugs and a battle to hold it.",
        name: "Holly Graham-Jones",
        title: "Mare Owner, Ireland",
        initials: "HG",
        tag: "Breeder"
    },
    {
        quote: "bActivate enabled us to identify chronically infected mares which were found to be clean on culture and cytology using routine diagnostics. We will use it for our problem mares in the coming season.",
        name: "Drs. Anja Rosenbrock & Meta Osborne",
        title: "Tinnakill House, Ireland",
        initials: "TR",
        tag: "Veterinarian"
    }
];

export default function ReviewsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Trusted by breeders &amp; vets worldwide</span>
                    <h2 className={styles.title}>What our clients say</h2>
                    <p className={styles.subtitle}>Real results from veterinarians and breeders who have used bActivate on their most challenging problem mares.</p>
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
