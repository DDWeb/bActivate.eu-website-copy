import { Link } from 'react-router-dom';
import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
    return (
        <section className={styles.reviewsSection}>
            <div className={styles.container}>
                <div className={styles.reviewsContent}>
                    <div className={styles.textSide}>
                        <div className={styles.eyebrow}>Reviews</div>
                        <h2 className={styles.title}>Our clients experience</h2>
                        <h3 className={styles.subtitle}>Success! After 3 years of hardship</h3>
                        <p className={styles.description}>
                            bActivate has been tested by the therio group at <strong>Hagyard Equine Medical Institute</strong>, the world's largest equine hospital in Kentucky who basically normalized mare fertility by including bActivate into the standard repro work-up.
                        </p>
                        <div className={styles.moreLink}>
                            <p>Want to know more about our product?</p>
                            <Link to="/about-us" className={styles.underlineLink}>More about bActivate</Link>
                        </div>
                    </div>

                    <div className={styles.testimonialSide}>
                        <div className={styles.testimonialBox}>
                            <div className={styles.quoteMark}>❝</div>
                            <p className={styles.quoteText}>I used bActivate in 2016 and after one covering got a COLT foal in 2017 (after 3 years of hardship ie mare went in foal but never managed to produce a live foal).</p>
                            <p className={styles.quoteAuthor}>Breeder Mary Davison,</p>
                            <p className={styles.quoteLocation}>Cathrinestown Stud Farm, Leixlip, Ireland</p>
                        </div>
                        <div className={styles.dots}>
                            <span className={styles.dotActive}></span>
                            <span className={styles.dot}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
