import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Column 1: Logo and Company Info */}
                <div className={styles.column}>
                    <img src="/images/bActivate-hest-roed.gif" alt="bActivate Red Horse" className={styles.footerLogo} />
                    <h2 className={styles.companyName}>bActivate is sold and produced by Bojesen and Petersen Biotech ApS</h2>

                    <div className={styles.legalLinks}>
                        <p>Terms and conditions apply.</p>
                        <p>VAT-Number: 34690324</p>
                    </div>

                    <div className={styles.copyright}>
                        <p>&copy; 2021 Bojesen and Petersen Biotech ApS. All rights reserved.</p>
                        <p>Created and hosted by Group Online</p>
                    </div>
                </div>

                {/* Column 2: Contact */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Contact</h3>
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

                    <h3 className={styles.heading} style={{ marginTop: '2rem' }}>Address</h3>
                    <address className={styles.address}>
                        Strandboulevarden 23,<br />
                        2100 Copenhagen<br />
                        Denmark
                    </address>
                </div>

                {/* Column 3: Quick Links */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Quick links</h3>
                    <ul className={styles.linkList}>
                        <li><Link to="/terms-and-conditions" className={styles.link}>Terms and Conditions</Link></li>
                        <li><Link to="/what-is-bactivate" className={styles.link}>What is bActivate?</Link></li>
                        <li><Link to="/when-to-use" className={styles.link}>When to use?</Link></li>
                        <li><Link to="/how-to-use" className={styles.link}>How to use?</Link></li>
                        <li><Link to="/about-us" className={styles.link}>About us</Link></li>
                        <li><Link to="/shop" className={styles.link}>Shop</Link></li>
                        <li><Link to="/our-distributors" className={styles.link}>Our distributors</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
