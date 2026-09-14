import { Link } from 'react-router-dom';

// Key takeaways under the home hero, approved 2026-09-14 (drafts/2026-09-14-key-takeaways-home.md).
// Every sentence is taken from approved copy elsewhere on the site; figures are canon.
const cite = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
);

export default function KeyTakeaways() {
    return (
        <section style={{ background: '#fff', padding: '2rem 1rem 0' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.5rem' }}>Key takeaways</p>
                <ul className="tldr" style={{ listStyle: 'none', padding: '1rem 1.25rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.75rem' }}><strong>What it does.</strong> bActivate is a sterile growth medium that re-activates dormant <em>Streptococcus zooepidemicus</em>, so a standard uterine culture taken 48 hours later finds the infection a swab missed. It is a diagnostic aid, not a treatment; the treatment is your veterinarian's, chosen from the antibiogram.</li>
                    <li style={{ marginBottom: '0.75rem' }}><strong>Who it is for.</strong> Problem mares: empty despite normal cycles, a fertile stallion and a clean swab, with two or more failed cycles, uterine fluid on ultrasound, early embryo loss, a previous endometritis, or age 10 and above. Seven questions: <a href="/is-my-mare-a-candidate">Is my mare a candidate?</a></li>
                    <li style={{ marginBottom: '0.75rem' }}><strong>Evidence.</strong> 64% activation-positive versus 8% with saline in the placebo-controlled study ({cite('https://doi.org/10.1016/j.vetmic.2015.06.006', 'Petersen et al., Veterinary Microbiology 2015')}). In the field series, 83% of 64 problem mares became pregnant at {cite('https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf', 'Hagyard 2014')} and 89% of bred mares at {cite('https://doi.org/10.1016/j.jevs.2018.05.162', 'Kildangan 2018')}; neither had a placebo group. <Link to="/studies-effect">All results</Link>.</li>
                    <li><strong>How it is used.</strong> 10 ml instilled by your veterinarian in early <a href="/glossary#estrus">estrus</a> (the first days of heat, before ovulation), culture after 48 hours, treatment on the antibiogram, breeding in the following cycle. Prescription veterinary product, 229 EUR per vial (about 265 USD, charged in EUR), minimum online order 2 vials. <Link to="/how-to-use">The protocol</Link>.</li>
                </ul>
            </div>
        </section>
    );
}
