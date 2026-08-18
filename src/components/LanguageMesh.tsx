/**
 * LanguageMesh, reciprocal language link mesh.
 *
 * The 12 localised sister sites already link here as their "English" edition.
 * This component provides the return links, which hreflang requires in order
 * to be honoured by Google. One primary domain per language.
 */

const LANGUAGES = [
    { code: 'en', label: 'English', site: 'bActivate', href: 'https://bactivate.eu/', flag: 'gb' },
    { code: 'de', label: 'Deutsch', site: 'Problem-Stute', href: 'https://problem-stute.de/', flag: 'de' },
    { code: 'fr', label: 'Français', site: 'Jument Non-Gestante', href: 'https://jument-non-gestante.fr/', flag: 'fr' },
    { code: 'nl', label: 'Nederlands', site: 'Probleem Merrie', href: 'https://probleem-merrie.nl/', flag: 'nl' },
    { code: 'es', label: 'Español', site: 'Yegua No-Gestante', href: 'https://yegua-no-gestante.es/', flag: 'es' },
];

export default function LanguageMesh() {
    return (
        <nav
            aria-label="他の言語"
            style={{
                maxWidth: '1200px',
                margin: '3rem auto 0',
                padding: '2rem 2rem 0',
                borderTop: '1px solid #333',
            }}
        >
            <h3
                style={{
                    color: '#9ca3af',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '1.25rem',
                    fontFamily: 'inherit',
                }}
            >
                他の言語での情報
            </h3>
            <ul
                style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem 2rem',
                }}
            >
                {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                        <a
                            href={lang.href}
                            hrefLang={lang.code}
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                            }}
                        >
                            <img
                                src={`https://flagcdn.com/24x18/${lang.flag}.png`}
                                alt=""
                                width={20}
                                height={15}
                                loading="lazy"
                                style={{ borderRadius: '2px', objectFit: 'cover' }}
                            />
                            {lang.label}
                            <span style={{ color: '#9ca3af', fontWeight: 400 }}>({lang.site})</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
