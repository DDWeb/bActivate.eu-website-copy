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
                            <a href="#" className={styles.flagLink}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="English" className={styles.flagIcon} />
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
