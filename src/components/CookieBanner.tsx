import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

// The Google tag loads for everyone with all storage denied (Consent Mode v2, set in index.html).
// "accepted" grants analytics and advertising storage and loads Affiliatly. "declined" leaves every
// storage denied, which still lets GA4 model the visit from cookieless pings. The Google store-rating
// badge is not gated: it is a trust widget, not tracking.
const CONSENT_KEY = 'cookie_consent';

declare global {
  interface Window {
    loadTracking?: () => void;
    setConsent?: (accepted: boolean) => void;
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
    // A stored choice was already applied to Consent Mode by index.html before React ran.
    if (!choice) {
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
    window.setConsent?.(accepted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Cookieの同意">
      <div className={styles.banner}>
        <div className={styles.text}>
          <strong className={styles.title}>Cookieの使用について</strong>
          <p>
            当サイトの利用状況を測定します。同意いただくと、Google と Meta が他のウェブサイトで bActivate の情報を表示できるようになります。選択するまで、お客様の端末には何も保存されません。
            <Link to="/privacy-policy" className={styles.link}>プライバシーポリシー</Link>。
          </p>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.decline} onClick={() => choose(false)}>
            拒否
          </button>
          <button type="button" className={styles.accept} onClick={() => choose(true)}>
            同意する
          </button>
        </div>
      </div>
    </div>
  );
}
