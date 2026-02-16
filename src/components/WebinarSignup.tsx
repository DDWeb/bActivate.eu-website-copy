import { useState } from 'react';
import styles from './WebinarSignup.module.css';

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
                        <h2 className={styles.title}>WATCH OUR WEBINAR</h2>
                        <p className={styles.description}>
                            Watch our webinar on diagnosis and treatment of problem mares — now available as a recording.
                        </p>
                        <p className={styles.speakers}>
                            <strong>Morten R\u00f8nn Petersen</strong>, DVM, PhD, Dipl. ACT &amp; <strong>Anders Miki Bojesen</strong>, Professor of Veterinary Microbiology
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
                        <div className={styles.videoWrapper}>
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/LemEnrcgVVY"
                                title="bActivate Webinar — Diagnosis and Treatment of Problem Mares"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
