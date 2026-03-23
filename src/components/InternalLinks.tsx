import { Link } from 'react-router-dom';

interface LinkItem {
    to: string;
    label: string;
    description: string;
}

interface InternalLinksProps {
    links: LinkItem[];
}

export default function InternalLinks({ links }: InternalLinksProps) {
    return (
        <section style={{ background: '#f8f8f8', borderTop: '1px solid #e5e7eb', padding: '3rem 1rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '1.5rem' }}>Continue reading</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            to={link.to}
                            style={{ textDecoration: 'none', display: 'block', background: 'white', padding: '1.25rem 1.5rem', borderLeft: '3px solid #901820', color: 'inherit' }}
                        >
                            <div style={{ fontWeight: 700, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{link.label}</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{link.description}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
