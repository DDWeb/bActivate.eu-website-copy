import { Link } from 'react-router-dom';

// Product facts, approved 2026-09-14 (drafts/2026-09-14-product-facts-block.md, without the safety
// line). Intended-use sentence is the manufacturer's product information wording. Figures are canon.
const cite = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
);

export default function ProductFacts({ short }: { short?: boolean }) {
    if (short) {
        return (
            <section style={{ background: '#f8f8f8', borderTop: '1px solid #e5e7eb', padding: '2.5rem 1rem' }}>
                <div className="tldr" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <p><strong>Product facts.</strong> bActivate is a sterile growth medium able to re-activate dormant bacteria, used as a diagnostic aid for the detection of latent endometritis in mares. One 10 ml vial, instilled by a veterinarian, with no antibiotics, hormones or live bacteria. It is a diagnostic aid, not a treatment; in the EU and UK it is not registered as a veterinary medicine, in the US it is a registered veterinary product. Evidence: {cite('https://doi.org/10.1016/j.vetmic.2015.06.006', 'Petersen et al., Veterinary Microbiology 2015')} (placebo-controlled, 64% versus 8%); {cite('https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf', 'Hagyard 2014')} (64 mares) and {cite('https://doi.org/10.1016/j.jevs.2018.05.162', 'Kildangan 2018')} (19 mares) field series, no placebo groups. Full facts and price on the <Link to="/what-is-bactivate">what is bActivate</Link> page.</p>
                </div>
            </section>
        );
    }
    return (
        <section style={{ background: '#f8f8f8', borderTop: '1px solid #e5e7eb', padding: '3rem 1rem' }}>
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.5rem' }}>Product facts</p>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', marginBottom: '1.25rem' }}>bActivate at a glance</h2>
                <ul className="tldr" style={{ listStyle: 'none', padding: '1rem 1.25rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.9rem' }}><strong>What it is.</strong> bActivate is a sterile growth medium able to re-activate dormant bacteria. It is to be used as a diagnostic aid for the detection of latent endometritis in mares (manufacturer's product information). One vial of 10 ml, instilled into the uterus by a veterinarian. It contains no antibiotics, no hormones and no live bacteria. The formulation is proprietary; the method is covered by US Patent 8,633,007 ("Diagnosis of endometritis", Petersen and Bojesen, granted 2014, assigned to the University of Copenhagen).</li>
                    <li style={{ marginBottom: '0.9rem' }}><strong>What it does.</strong> In the chronically infected mare, <em>Streptococcus equi</em> subspecies <em>zooepidemicus</em> sits deep in the endometrium with a lowered metabolic rate, so the infection is latent: periods without clinical signs alternate with bursts of clinical endometritis, and neither standard culture nor antibiotics that depend on active growth reach it. bActivate brings the dormant bacteria back into a growing state so a standard uterine culture taken 48 hours later can find it; the sample can be a swab, a low-volume lavage or a biopsy. It is a diagnostic aid, not a treatment: the treatment is the veterinarian's, chosen from the antibiogram. The mare is bred in the following cycle.</li>
                    <li style={{ marginBottom: '0.9rem' }}><strong>Regulatory status.</strong> In the United States bActivate is a registered veterinary product. In the European Union and the United Kingdom it is not registered as a veterinary medicinal product and is positioned as a diagnostic tool. Veterinarians who need to confirm how the product is classified in their own country should consult their national veterinary medicines authority.</li>
                    <li style={{ marginBottom: '0.9rem' }}><strong>Who it is for.</strong> Problem mares: mares that stay empty despite normal cycles, a fertile stallion and a clean swab, with two or more failed cycles, uterine fluid on ultrasound, early embryo loss, a previous endometritis, or age 10 and above. It is not a first-line tool for mares with acute signs of infection such as purulent discharge or a positive routine culture; those are treated on the culture result directly. See <Link to="/when-to-use">when to use bActivate</Link>.</li>
                    <li style={{ marginBottom: '0.9rem' }}><strong>Availability and price.</strong> Prescription veterinary product. 264.90 USD per vial from the manufacturer's online shop, or through Hagyard Pharmacy and Midwest Veterinary Supply. Order on the <Link to="/shop">shop</Link> page or through <Link to="/our-distributors">our distributors</Link>.</li>
                    <li><strong>Evidence.</strong> Placebo-controlled activation study: Petersen MR, Skive B, Christoffersen M, Lu K, Nielsen JM, Troedsson MHT, Bojesen AM. {cite('https://doi.org/10.1016/j.vetmic.2015.06.006', 'Veterinary Microbiology 2015;179:119-125')} (64% activation-positive versus 8% with saline). Field series: Petersen MR, Bojesen AM. {cite('https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf', 'Clinical Theriogenology 2014;6(3):313-314')} (Hagyard, 64 mares, 47% activation-positive, 83% pregnant, 70% foaled, no placebo group); Petersen MR, Rosenbrock A, Osborne M, Bojesen AM. {cite('https://doi.org/10.1016/j.jevs.2018.05.162', 'J Equine Vet Sci 2018;66:117')} (Kildangan, 19 mares, 84% activation-positive, 89% of bred mares pregnant). Localisation of the dormant bacteria: Petersen MR et al. {cite('https://clinicaltheriogenology.net/index.php/CT/article/view/12588', 'Clinical Theriogenology 2009;1:393-409')}. Swab sensitivity: Nielsen JM. {cite('https://pubmed.ncbi.nlm.nih.gov/15978661/', 'Theriogenology 2005;64:510-518')}. The founders co-authored the activation studies and disclose their commercial interest. All results on the <Link to="/studies-effect">clinical evidence</Link> page.</li>
                </ul>
            </div>
        </section>
    );
}
