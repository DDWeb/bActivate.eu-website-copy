import { useState } from 'react';
import styles from './ReviewsSection.module.css';

const testimonials = [
    {
        quote: "We incorporated bActivate into our standard reproductive work-up for problem mares at Hagyard. Out of 64 mares that had failed to conceive for at least 3 cycles, 83% became pregnant following bActivate activation and targeted antibiotic treatment.",
        name: "Dr. Kristina Lu, DVM",
        title: "Hagyard Equine Medical Institute, Lexington, Kentucky",
        initials: "KL",
        tag: "Clinical Study"
    },
    {
        quote: "We used bActivate on 19 of our most persistent problem mares, horses that had been barren for over a year despite every conventional treatment we tried. 89% of them got in foal. What really opened our eyes was how many had a hidden infection.",
        name: "Meta Osborne MVB CertESM MRCVS",
        title: "Kildangan Stud, Godolphin",
        initials: "MO",
        tag: "Clinical Study"
    },
    {
        quote: "We have been using bActivate on several mares, all got pregnant and most of them in first try with frozen semen!",
        name: "Jeanette Marina Hansen",
        title: "Mare Owner & Breeder",
        initials: "JH",
        tag: "Breeder"
    },
    {
        quote: "bActivate is an excellent tool that allows us as reproductive vets to do our job effectively. It is both a smart and cost-effective solution in the long run.",
        name: "Lotte Bøgedal",
        title: "Reproductive Veterinarian",
        initials: "LB",
        tag: "Veterinarian"
    },
    {
        quote: "I used bActivate and after just one covering got a colt foal, after 3 years of hardship where the mare went in foal but never managed to produce a live foal. I cannot recommend bActivate enough.",
        name: "Mary Davison",
        title: "Cathrinestown Stud Farm, Leixlip, Ireland",
        initials: "MD",
        tag: "Breeder"
    },
    {
        quote: "Our 18-year-old mare had failed for five consecutive seasons. After bActivate she was confirmed strongly positive for Streptococcus, an infection standard testing had completely missed. She was treated, covered in September, and for the first time in five seasons there was no fluid present at ovulation. She is now 34 days in foal. This is the first time a pregnancy has not involved invasive flushing, excessive drugs and a battle to hold it.",
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
    },
    {
        quote: "This mare lost her foal during delivery and developed a uterine infection resistant to conventional treatment. bActivate confirmed what we suspected, bacteria lying dormant deep in the endometrium, completely invisible to standard diagnostics. With the infection now identified and treated, she is being prepared for the 2026 breeding season.",
        name: "Charlotte Meldgaard, DVM",
        title: "Equine Veterinarian, Denmark",
        initials: "CM",
        tag: "Veterinarian"
    },
    {
        quote: "bActivate reactivates deep-seated beta-haemolytic streptococcal infections that standard swabs, biopsies and flush samples simply cannot detect. Used on the right mares, those with a history of uterine fluid, repeated infections, resorptions, or mares that just will not get in foal, it can be the deciding factor between keeping a mare in breeding or not.",
        name: "Skodborg Heste-Praksis",
        title: "Equine Veterinary Practice, Denmark",
        initials: "SH",
        tag: "Veterinarian"
    },
    {
        quote: "My biggest problem mare would never get in foal until we used bActivate. Last time we started with this and she was in foal on the very first insemination, instead of the usual 5 or 6 attempts. It may cost more upfront but it is far cheaper than trying over and over.",
        name: "Maria Børre Nielsen",
        title: "Breeder",
        initials: "MN",
        tag: "Breeder"
    }
];

const VISIBLE_DEFAULT = 6;

export default function ReviewsSection() {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? testimonials : testimonials.slice(0, VISIBLE_DEFAULT);
    const hidden = testimonials.length - VISIBLE_DEFAULT;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Trusted by breeders &amp; vets worldwide</span>
                    <h2 className={styles.title}>What our clients say</h2>
                    <p className={styles.subtitle}>Real results from veterinarians and breeders who have used bActivate on their most challenging problem mares.</p>
                </div>
                <div className={styles.grid}>
                    {visible.map((t, i) => (
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
                <div className={styles.toggleWrap}>
                    <button
                        className={styles.toggleBtn}
                        onClick={() => setExpanded(e => !e)}
                        aria-expanded={expanded}
                    >
                        {expanded
                            ? 'Show fewer reviews ▲'
                            : `See all ${testimonials.length} reviews (+${hidden} more) ▼`}
                    </button>
                </div>
            </div>
        </section>
    );
}
