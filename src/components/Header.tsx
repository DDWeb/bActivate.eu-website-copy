import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logoLink}>
                    <img
                        src="/images/logo.png"
                        alt="bActivate"
                        width={200}
                        height={48}
                        className="object-contain"
                    />
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <div className={`${styles.navItem} ${styles.dropdown}`}>
                        <div className={styles.dropdownTrigger}>
                            Problem mare
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={styles.dropdownMenu}>
                            <Link to="/what-is-bactivate" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>What is bActivate?</Link>
                            <Link to="/when-to-use" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>When to use?</Link>
                            <Link to="/how-to-use" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>How to use?</Link>
                        </div>
                    </div>
                    <Link to="/our-distributors" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Our distributors</Link>
                    <Link to="/studies-effect" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Studies & effect</Link>
                    <Link to="/podcast" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Podcast</Link>
                    <Link to="/blog" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    <Link to="/about-us" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>About us</Link>

                    <div className={styles.headerRight}>
                        <div className={styles.flags}>
                            <a href="https://bactivate.eu" className={styles.flagLink} title="Visit bactivate.eu">
                                <span className={styles.flagIcon} role="img" aria-label="EU site">🇪🇺</span>
                            </a>
                        </div>
                        <Link to="/shop" className={styles.shopButton} onClick={() => setIsMenuOpen(false)}>
                            SHOP
                        </Link>
                    </div>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
}
