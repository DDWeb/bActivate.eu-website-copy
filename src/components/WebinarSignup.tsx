import { useState, useEffect } from 'react';
import styles from './WebinarSignup.module.css';

export default function WebinarSignup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const script = document.createElement('script');
            script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
            script.charset = "utf-8";
            script.type = "text/javascript";

            script.onload = () => {
                if ((window as any).hbspt) {
                    (window as any).hbspt.forms.create({
                        region: "eu1",
                        portalId: "143266232",
                        formId: "f9367a3c-fbeb-4916-8c43-58a89a96c8e8",
                        target: "#hubspotFormContainer"
                    });
                }
            };

            document.head.appendChild(script);

            return () => {
                if (document.head.contains(script)) {
                    document.head.removeChild(script);
                }
            };
        }
    }, [isOpen]);

    return (
        <section className={styles.webinarSection}>
            <div className={styles.container}>
                <button
                    className={`${styles.toggleButton} ${isOpen ? styles.active : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={styles.buttonContent}>
                        <span className={styles.eyebrow}>Exclusive Event</span>
                        <h2 className={styles.title}>WATCH OUR WEBINAR</h2>
                        <div className={styles.eventInfo}>
                            <span className={styles.nextEvent}>NEXT EVENT:</span>
                            <span className={styles.eventDate}>February 12th at 4:00 PM CET</span>
                        </div>
                        <p className={styles.subtitle}>
                            {isOpen ? 'Close' : 'Click here to sign up and watch'}
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
                        <div id="hubspotFormContainer" className={styles.hubspotForm}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
