import { useState } from 'react';
import styles from './WebinarSignup.module.css';
import LiteYouTube from './LiteYouTube';

export default function WebinarSignup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.webinarSection}>
            <div className={styles.container}>
                <button
                    className={`${styles.toggleButton} ${isOpen ? styles.active : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={styles.buttonContent}>
                        <span className={styles.eyebrow}>Free Expert Webinar</span>
                        <h2 className={styles.title}>Watch our webinar</h2>
                        <p className={styles.description}>
                            Watch our webinar on diagnosis and treatment of problem mares, now available as a recording.
                        </p>
                        <p className={styles.speakers}>
                            <strong>Morten Rønn Petersen</strong>, DVM, PhD, Dipl. ACT &amp; <strong>Anders Miki Bojesen</strong>, Professor of Veterinary Microbiology
                        </p>
                        <p className={styles.subtitle}>
                            {isOpen ? 'Close' : 'Click here to watch'}
                        </p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <svg
                            className={styles.chevron}
                            width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </button>

                <div className={`${styles.contentWrapper} ${isOpen ? styles.opened : ''}`}>
                    <div className={styles.formInner}>
                        <div className={styles.videoWrapper} style={{ aspectRatio: '16 / 9' }}>
                            <LiteYouTube id="LemEnrcgVVY" title="bActivate Webinar, Diagnosis and Treatment of Problem Mares" poster="/images/webinar-cover-640.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
