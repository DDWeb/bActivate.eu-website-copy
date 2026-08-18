import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import LanguageMesh from './LanguageMesh';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Column 1: Logo and Company Info */}
                <div className={styles.column}>
                    <img src="/images/bActivate-hest-roed.gif" alt="bActivate Red Horse" className={styles.footerLogo} />
                    <h2 className={styles.companyName}>bActivate は Bojesen and Petersen Biotech ApS が販売・製造しています</h2>

                    <div className={styles.legalLinks}>
                        <p>利用規約が適用されます。</p>
                        <p>VAT番号：34690324</p>
                    </div>

                    <div className={styles.copyright}>
                        <p>&copy; 2021-2026 Bojesen and Petersen Biotech ApS. 無断転載を禁じます。</p>
                    </div>
                </div>

                {/* Column 2: Contact */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>お問い合わせ</h3>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📞</span>
                        <a href="tel:+4560712169" className={styles.contactLink}>+45 60 71 21 69</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>✉️</span>
                        <a href="mailto:contact@bactivate.eu" className={styles.contactLink}>contact@bactivate.eu</a>
                    </div>

                    <div className={styles.socialIcons}>
                        <a href="https://www.tiktok.com/@bactivate.eu" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>TikTok</a>
                        <a href="https://www.facebook.com/Bojesen.and.Petersen.Biotech/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>FB</a>
                        <a href="https://www.linkedin.com/company/bojesenandpetersenbiotech/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>IN</a>
                    </div>

                    <h3 className={styles.heading} style={{ marginTop: '2rem' }}>所在地</h3>
                    <address className={styles.address}>
                        Strandboulevarden 23,<br />
                        2100 コペンハーゲン<br />
                        デンマーク
                    </address>
                </div>

                {/* Column 3: Quick Links */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>クイックリンク</h3>
                    <ul className={styles.linkList}>
                        <li><Link to="/terms-and-conditions" className={styles.link}>利用規約</Link></li>
                        <li><Link to="/privacy-policy" className={styles.link}>プライバシーポリシー</Link></li>
                        <li><Link to="/what-is-bactivate" className={styles.link}>bActivateとは？</Link></li>
                        <li><Link to="/when-to-use" className={styles.link}>いつ使うか？</Link></li>
                        <li><Link to="/how-to-use" className={styles.link}>どう使うか？</Link></li>
                        <li><Link to="/about-us" className={styles.link}>私たちについて</Link></li>
                        <li><Link to="/shop" className={styles.link}>ショップ</Link></li>
                        <li><Link to="/our-distributors" className={styles.link}>販売店一覧</Link></li>
                        <li><Link to="/contact" className={styles.link}>お問い合わせ</Link></li>
                        <li><a href="https://www.affiliatly.com/af-1074392/affiliate.panel?mode=register" target="_blank" rel="noopener noreferrer" className={styles.link}>アフィリエイトプログラム</a></li>
                    </ul>
                </div>

            </div>

            <LanguageMesh />
        </footer>
    );
}
