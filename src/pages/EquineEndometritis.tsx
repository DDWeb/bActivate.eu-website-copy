import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InternalLinks from '@/components/InternalLinks';
import FAQSection from '@/components/FAQSection';
import { endometritisFaqItems } from '@/lib/routeFaqs';

const th = { background: '#901820', color: 'white' } as const;
const P = ({ children }: { children: React.ReactNode }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>;
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold mb-3 mt-10">{children}</h2>;
const More = ({ children }: { children: React.ReactNode }) => <p className="text-sm text-gray-600 mb-8">Read more: {children}</p>;

export default function EquineEndometritis() {
    useEffect(() => {
        document.title = 'Equine Endometritis: Causes, Diagnosis and What Vets Do';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Endometritis in mares: clinical and subclinical forms, why a swab finds only 34 %, how activation culture and biopsy compare, and what the vet does next.');
    }, []);
    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-4">Equine endometritis: causes, diagnosis and what the vet does next</h1>
                    <P>Endometritis is inflammation of the lining of the mare's uterus, and it is the most common reason a mare fails to conceive or loses an early pregnancy. It comes in two forms: the clinical form with fluid and discharge, and the subclinical form with no outward sign at all. The subclinical form is the one that costs breeders seasons, because the standard swab culture finds only about 34 % of infected mares (Nielsen 2005). This page collects what is known, with sources, and links to the detailed pages on each part.</P>

                    <H2>What is equine endometritis?</H2>
                    <P>Endometritis is the uterus reacting to something it should clear: bacteria or fungi after mating or foaling, semen and debris after insemination, or urine and air in a mare with poor conformation. A healthy mare clears this within a day or two. A susceptible mare does not, and the inflammation persists, damages the lining and prevents an embryo from surviving.</P>
                    <p className="text-gray-700 leading-relaxed mb-3">Veterinarians distinguish four overlapping situations:</p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse text-sm">
                            <thead><tr style={th}><th className="text-left p-3">Form</th><th className="text-left p-3">What it means</th><th className="text-left p-3">What the owner sees</th></tr></thead>
                            <tbody>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold">Persistent mating-induced endometritis</td><td className="p-3">The normal reaction to semen does not resolve within 48 hours</td><td className="p-3">Fluid on the ultrasound after covering</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Clinical endometritis</td><td className="p-3">Active infection with inflammation</td><td className="p-3">Discharge, fluid, sometimes a short cycle</td></tr>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold">Subclinical endometritis</td><td className="p-3">Infection or inflammation without visible signs</td><td className="p-3">Nothing, except a mare that does not get in foal</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Chronic degenerative endometritis (endometrosis)</td><td className="p-3">Scarring of the lining after repeated inflammation</td><td className="p-3">Repeated early pregnancy loss, poor biopsy grade</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <P>The dormant form of subclinical endometritis is the one bActivate was developed for: bacteria that have stopped growing, sit 300 to 500 micrometers deep in the lining (Petersen 2009) and do not show on a swab.</P>

                    <H2>How common is it?</H2>
                    <P>A German analysis of 28,887 uterine samples found potentially pathogenic bacteria or fungi in 25.9 % of them; among the positive cultures, 79.7 % were beta-hemolytic streptococci, above all <em>Streptococcus equi</em> subspecies <em>zooepidemicus</em> (Köhne 2024). Among problem mares, mares that stay empty after several cycles, the published activation series found a hidden infection in 47 to 87 %: 47 % (30 of 64) at Hagyard Equine Medical Institute, 84 % (16 of 19) at Kildangan Stud, 87 % in the Copenhagen study of 2025.</P>
                    <More><Link to="/blog/insights-from-a-landmark-german-study-the-bacterial-spectrum-in-mare-uterine-health">Bacteria in the mare's uterus: the German study</Link> and <Link to="/blog/streptococcus-zooepidemicus-in-horses">Streptococcus zooepidemicus in horses</Link>.</More>

                    <H2>What causes it?</H2>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                        <li><strong>Streptococcus equi subsp. zooepidemicus</strong> is the dominant organism. It can switch into a dormant persister state inside the endometrium, where it neither grows on a culture plate nor responds to antibiotics (Petersen 2015).</li>
                        <li><strong>E. coli, Klebsiella, Pseudomonas and Staphylococcus aureus</strong> make up most of the rest of the bacterial findings; <strong>Candida</strong> and other yeasts are rarer and often follow repeated antibiotic treatment (Köhne 2024).</li>
                        <li><strong>Susceptibility</strong> matters as much as the organism: age, parity, poor perineal conformation, delayed uterine clearance and previous infections all make a mare less able to clear what a healthy mare clears on her own.</li>
                    </ul>
                    <More><Link to="/blog/biofilm-in-the-mares-uterus-why-breaking-it-up-is-not-enough">Biofilm in the mare's uterus: why breaking it up is not enough</Link>.</More>

                    <H2>What are the signs?</H2>
                    <P>In the clinical form: vaginal discharge, fluid in the uterus on ultrasound, a short interval between heats, sometimes a mare that "does not look right" after covering. In the subclinical form there is often nothing to see. The signs are then in the breeding record: two or more well-timed covers with proven semen without a pregnancy, an early loss before day 40, fluid after covering, or a clean swab in a mare that still stays empty.</P>
                    <More><Link to="/blog/ultrasound-empty-mare-what-the-vet-sees">Ultrasound of the empty mare: what the vet sees</Link> and <a href="/is-my-mare-a-candidate">Is my mare a candidate?</a></More>

                    <H2>How is it diagnosed?</H2>
                    <p className="text-gray-700 leading-relaxed mb-3">No single test finds everything. The vet usually combines them.</p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse text-sm">
                            <thead><tr style={th}><th className="text-left p-3">Method</th><th className="text-left p-3">What it finds</th><th className="text-left p-3">Limit</th></tr></thead>
                            <tbody>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold">Ultrasound</td><td className="p-3">Fluid, edema, cysts</td><td className="p-3">Does not identify the organism</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Swab culture</td><td className="p-3">Bacteria on the surface of the lining</td><td className="p-3">Found 34 % of infected mares in a direct comparison</td></tr>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold">Cytology</td><td className="p-3">Inflammatory cells</td><td className="p-3">Inflammation without the organism</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Biopsy culture</td><td className="p-3">Bacteria deeper in the lining</td><td className="p-3">Found 82 % in the same comparison; invasive</td></tr>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold">Activation culture (bActivate)</td><td className="p-3">Dormant bacteria that start growing again</td><td className="p-3">Diagnostic only; a positive result still needs an antibiogram</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <P>In the peer-reviewed activation study, <em>Streptococcus zooepidemicus</em> grew in 64 % of mares (16 of 25) after activation and in 8 % (1 of 12) after a control flush with saline (Petersen 2015). bActivate is a culture medium, not a treatment: it makes dormant bacteria visible to the standard culture so the vet can choose an antibiotic from the antibiogram.</P>
                    <More><Link to="/swab-culture-vs-bactivate">Swab culture vs bActivate</Link>, <Link to="/blog/why-a-clean-swab-does-not-rule-out-infection-in-a-problem-mare">Why a clean swab does not rule out infection</Link> and <Link to="/what-is-bactivate">What is bActivate?</Link></More>

                    <H2>How is it treated?</H2>
                    <P>Treatment is the veterinarian's decision, after culture and antibiogram. For streptococci, penicillin remained effective in 99.5 % of isolates in the German analysis; multidrug resistance was found in 3.1 % of isolates (Köhne 2024). Uterine lavage removes fluid and debris and supports the mare's own clearance, and is often combined with drugs that help the uterus contract. Antibiotics given without a culture are the one thing every source advises against: they select resistant organisms and, in the dormant form, do not reach the bacteria at all.</P>
                    <More><Link to="/blog/uterine-lavage-mare-when-and-why">Uterine lavage in the mare: when and why</Link>, <Link to="/blog/positive-activation-culture-what-happens-next">Positive activation culture: what happens next</Link> and <Link to="/how-to-use">How to use bActivate</Link>.</More>

                    <H2>What does it cost to leave it?</H2>
                    <P>A mare that stays empty costs a year of keep without a foal, plus stud fee, semen and vet work for every further cycle. In the Hagyard series of 64 problem mares, 83 % (53 of 64) were pregnant after targeted treatment and 70 % of those with a known outcome (32 of 46) foaled; the study had no placebo group, so the figures describe the whole pathway of diagnosis and treatment, not one product. Historically, problem mares foaled at 15 to 50 % against 80 to 85 % in the general population (Bosh 2009).</P>
                    <More><Link to="/blog/saving-time-and-money-with-bactivate-a-smarter-approach-to-endometritis-in-mares">Saving time and money: the economics of a hidden infection</Link> and <Link to="/studies-effect">Studies and effect</Link>.</More>

                    <H2>Sources</H2>
                    <ul className="list-disc pl-6 text-gray-600 text-sm leading-relaxed mb-4">
                        <li>Nielsen JM. Endometritis in the mare: A diagnostic study comparing cultures from swab and biopsy. Theriogenology 2005;64(3):510-518. <a href="https://doi.org/10.1016/j.theriogenology.2005.05.034" target="_blank" rel="noopener noreferrer">doi.org/10.1016/j.theriogenology.2005.05.034</a></li>
                        <li>Petersen MR, Nielsen JM, Lehn-Jensen H, Bojesen AM. Streptococcus equi subspecies zooepidemicus resides deep in the chronically infected endometrium of mares. Clinical Theriogenology 2009;1(1):393-409. <a href="https://clinicaltheriogenology.net/index.php/CT/article/view/12588" target="_blank" rel="noopener noreferrer">clinicaltheriogenology.net</a></li>
                        <li>Petersen MR, Skive B, Christoffersen M, Lu K, Nielsen JM, Troedsson MHT, Bojesen AM. Activation of persistent Streptococcus equi subspecies zooepidemicus in mares with subclinical endometritis. Veterinary Microbiology 2015;179(1-2):119-125. PMID 26123371. <a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer">doi.org/10.1016/j.vetmic.2015.06.006</a>, <a href="https://www.researchgate.net/publication/279630136_Activation_of_persistent_Streptococcus_equi_subspecies_zooepidemicus_in_mares_with_subclinical_endometritis" target="_blank" rel="noopener noreferrer">full text on ResearchGate</a></li>
                        <li>Petersen MR, Bojesen AM. Field study at Hagyard Equine Medical Institute: 64 problem mares. Clinical Theriogenology 2014;6(3):313-314 (congress abstract, no placebo group). <a href="https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf" target="_blank" rel="noopener noreferrer">therio.org (PDF)</a></li>
                        <li>Kildangan Stud series: 19 mares, 84 % activation-positive, 89 % pregnancy of bred mares. J Equine Vet Sci 2018;66:117 (congress abstract). <a href="https://doi.org/10.1016/j.jevs.2018.05.162" target="_blank" rel="noopener noreferrer">doi.org/10.1016/j.jevs.2018.05.162</a></li>
                        <li>Köhne M et al. Frequency of potentially pathogenic bacterial and fungal isolates among 28,887 endometrial samples from mares. J Equine Vet Sci 2024;133:105008. <a href="https://doi.org/10.1016/j.jevs.2024.105008" target="_blank" rel="noopener noreferrer">doi.org/10.1016/j.jevs.2024.105008</a></li>
                        <li>Bosh KA, Powell D, Shelton B, Zent WW. Reproductive performance measures among Thoroughbred mares in central Kentucky. Equine Veterinary Journal 2009;41(9):883-888. <a href="https://doi.org/10.2746/042516409X456068" target="_blank" rel="noopener noreferrer">doi.org/10.2746/042516409X456068</a></li>
                    </ul>
                </div>
            </section>

            <FAQSection items={endometritisFaqItems} heading="Frequently asked questions about equine endometritis" subtitle="Short answers; the sources are on this page." />

            <InternalLinks links={[
                { to: '/blog/mare-not-getting-in-foal-what-to-do', label: 'Mare not getting in foal?', description: 'The five causes a vet rules out, in order, and what you can do' },
                { to: '/swab-culture-vs-bactivate', label: 'Swab vs biopsy vs bActivate', description: 'Detection rates of the sampling options, side by side' },
                { to: '/when-to-use', label: 'When to Use bActivate', description: 'Signs your mare may have a hidden infection' },
                { to: '/how-to-use', label: 'Veterinary Protocol', description: 'Step-by-step instructions for veterinarians' },
                { to: '/studies-effect', label: 'Clinical Results', description: '83% pregnancy at Hagyard, 89% at Kildangan' },
            ]} />
        </main>
    );
}
