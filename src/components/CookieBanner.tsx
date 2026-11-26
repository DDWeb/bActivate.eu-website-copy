import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

// "accepted" loads tracking (Google Analytics + Ads + Affiliatly, via window.loadTracking in index.html);
// "declined" loads none of it. The Google store-rating badge is not gated: it is a trust widget, not tracking.
const CONSENT_KEY = 'cookie_consent';

declare global {
  interface Window {
    loadTracking?: () => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* private mode: show the banner */
    }
    if (choice === 'accepted') {
      window.loadTracking?.();
    } else if (!choice) {
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (accepted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'declined');
    } catch {
      /* ignore */
    }
    if (accepted) window.loadTracking?.();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Cookie consent">
      <div className={styles.banner}>
        <div className={styles.text}>
          <strong className={styles.title}>We use cookies</strong>
          <p>
            We measure how the site is used. Nothing is loaded until you choose. You can change your
            choice any time. <Link to="/privacy-policy" className={styles.link}>Privacy policy</Link>.
          </p>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.decline} onClick={() => choose(false)}>
            Decline
          </button>
          <button type="button" className={styles.accept} onClick={() => choose(true)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
