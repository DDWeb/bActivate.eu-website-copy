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
                        <span className={styles.eyebrow}>無料の専門家ウェビナー</span>
                        <h2 className={styles.title}>ウェビナーを見る</h2>
                        <p className={styles.description}>
                            不受胎牝馬の診断と治療に関する当社のウェビナーが、録画でご覧いただけます。
                        </p>
                        <p className={styles.speakers}>
                            <strong>Morten Rønn Petersen</strong>（DVM, PhD, Dipl. ACT）＆ <strong>Anders Miki Bojesen</strong>（獣医微生物学教授）
                        </p>
                        <p className={styles.subtitle}>
                            {isOpen ? '閉じる' : 'こちらをクリックして視聴'}
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
                                title="bActivate Webinar, Diagnosis and Treatment of Problem Mares"
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
