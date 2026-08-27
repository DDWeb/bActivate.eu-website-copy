import { useEffect } from 'react';
import styles from './StudiesEffect.module.css';
import InternalLinks from '@/components/InternalLinks';

export default function StudiesEffect() {
    useEffect(() => {
        document.title = 'bActivate Clinical Evidence | 83% Pregnancy Rate in Problem & Non-Pregnant Mares';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Clinical evidence: 83% pregnancy rate at Hagyard (64 mares), 89% at Kildangan (Godolphin). Studies on hidden uterine infections in problem mares, non-pregnant mares, and barren mares.');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Does bActivate work? The clinical evidence</h1>

                    <div className="bg-white border border-gray-200 rounded p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed">Three clinical evaluations document what bActivate reveals, and what happens when the attending veterinarian treats the revealed infection. At <strong>Hagyard Equine Medical Institute</strong> (Lexington, KY), Dr. Kristina Lu's team activated and treated 64 problem Thoroughbred mares (barren for 3 or more cycles): <strong>83% became pregnant</strong> (53/64) and <strong>70% achieved live foals</strong> (32/46 with known outcome) (<a href="https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen &amp; Bojesen, Clinical Theriogenology 2014</a>). At <strong>Kildangan Stud</strong> in Ireland, operated by Godolphin, <strong>89% of the bred mares were in foal</strong> (16 of 18; one of the 19 mares was not covered) (<a href="https://doi.org/10.1016/j.jevs.2018.05.162" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen, Rosenbrock, Osborne &amp; Bojesen, J Equine Vet Sci 2018</a>). The peer-reviewed laboratory study (<a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen et al., Vet Microbiol 2015</a>) confirmed bActivate activated dormant bacteria in <strong>64% of treated mares</strong> versus 8% in PBS controls (n=37). The studies were carried out at independent clinics and studs. The founders of bActivate are co-authors on the reporting of the results, and no placebo group was included in the two field studies.</p>
                    </div>

                    <div className={styles.textGrid}>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">Hidden infections. Persistent infertility. Missed opportunities. For too long, problem mares, non-pregnant mares that fail to conceive despite clean swabs, normal cycles, and confirmed stallion fertility, have faced unseen barriers to reproduction.<br />Studies show that 70-80% of these barren mares harbour hidden uterine infections that traditional tests fail to detect, making pregnancy an uphill battle.</p>
                            <p>This collection introduces a breakthrough: <b>bActivate</b>. By reactivating dormant <b>Streptococcus equi subsp. zooepidemicus</b>, the most common cause of chronic uterine infections in non-pregnant mares, bActivate uncovers what was once invisible, enabling accurate diagnosis of these elusive infections for the first time.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">Supported by our studies and real-world evidence, this body of work repeatedly demonstrates the profound success of bActivate in restoring fertility in problem mares. With proven results, practical solutions, and renewed hope, this is a roadmap for transforming equine reproductive health.</p>
                            <p>Step into a future where no infection stays hidden, and no mare is left behind.</p>
                        </div>
                    </div>

                    <hr className="mb-12 border-gray-200" />

                    {/* Benchmark: how hard is this group */}
                    <div style={{ margin: "3rem 0", padding: "2.5rem", background: "#fff", border: "1px solid #e5e7eb", borderLeft: "4px solid #901820" }}>
                        <h2 style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "2px", color: "#901820", marginBottom: "0.5rem", fontWeight: 600 }}>How difficult is this group of mares?</h2>
                        <p style={{ color: "#333", lineHeight: 1.7, marginBottom: "1rem" }}>The mares in these studies are the hardest group in broodmare practice. In the Kildangan cohort the average mare was <strong>12.7 years old</strong> and had been barren for an average of <strong>6.3 cycles</strong> before activation. Published research on a large commercial Irish Thoroughbred stud (2,385 mares, 3,743 estrous cycles) identifies exactly this profile, high mare age and barren, slipped or rested status, as the significant risk factors for lower pregnancy rates and higher pregnancy loss (<a href="https://pubmed.ncbi.nlm.nih.gov/26815482/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Lane et al., Reproduction in Domestic Animals 2016</a>).</p>
                        <p style={{ color: "#333", lineHeight: 1.7, marginBottom: "1rem" }}>In other words: the mares bActivate is used on are the ones the published literature expects to do worst. After activation revealed the hidden infection and the stud veterinarian treated it, <strong>89% of the bred Kildangan mares were in foal</strong>, at an average of only <strong>1.1 covers per mare</strong>.</p>
                        <p style={{ color: "#666", fontSize: "0.875rem", fontStyle: "italic", lineHeight: 1.6, marginBottom: 0 }}>How to read this: these are separate datasets, not a controlled comparison, and the field studies included no placebo group. Lane et al. is cited for the difficulty of the mare group, not for bActivate, and shares an author with the Kildangan study team. Every figure on this page is attributed to the source that reports it.</p>
                    </div>

                    {/* As Cited By, External Validation */}
                    <div style={{ margin: "3rem 0", padding: "2.5rem", background: "#f8f8f8", borderLeft: "4px solid #901820" }}>
                        <h2 style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "2px", color: "#901820", marginBottom: "0.5rem", fontWeight: 600 }}>As cited by leading equine experts</h2>
                        <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.95rem" }}>bActivate is independently referenced by the world's most respected equine veterinary publications and research institutions.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                            <a href="https://thehorse.com/183678/whats-plaguing-your-problem-mare/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>The Horse Magazine</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"...a (growth medium) product called bActivate, which activates dormant Streptococcus that can live within the endometrium, stimulating them to become metabolically active so we can treat them."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>, Dr. Karen Wolfsdorf, DVM Dipl. ACT<br />Rood &amp; Riddle Equine Hospital, Kentucky</div>
                            </a>
                            <a href="https://fvma.org/challenges-of-chronic-endometritis-novel-tools/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>FVMA, The Practitioner, 2024</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"Infusion of Bactivate when the mare is in estrus activates the dormant B.strep, increasing replication and growth, providing identification at 24 hours."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>, Dr. Karen Wolfsdorf, DVM Dipl. ACT<br />Florida Veterinary Medical Association</div>
                            </a>
                            <a href="https://ker.com/equinews/therapy-offers-hope-infertile-mares/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Kentucky Equine Research</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"Most of the mares (83%) became pregnant within 6 weeks, and a majority of those gave birth to live foals.", Study of 64 broodmares treated with bActivate.</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>, Kentucky Equine Research, ker.com</div>
                            </a>
                            <a href="https://breedersclub.nu/wp-content/uploads/2022/07/41-Forskning-i-fertilitet.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Breeders Club, Veterinary Journal</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"72% of problem mares achieved live foals the year after activation. 84% of participating mares had a latent streptococcal infection."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>, Rebecca Bøk Larsen DVM + Anna Skriver DVM<br />University of Copenhagen, 2022</div>
                            </a>
                            <a href="https://equsana.dk/sovende-bakterier-goer-hopper-ufrugtbare/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Equsana.dk, 2015</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"Knap 10% af hopperne bliver aldrig drægtige trods dyrlægehjælp. Bactivate vækker sovende bakterier, så de kan diagnosticeres og behandles effektivt med antibiotika."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>, Charlotte Nørgaard, Equsana.dk, 2015</div>
                            </a>
                            <a href="https://equimanagement.com/research-medical/biofilms-and-the-equine-uterus/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>EquiManagement, 2023</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"bActivate, a growth medium specifically formulated to reactivate dormant Strep uterine infections, demonstrated effectiveness: bActivate-treated mares showed 64% bacterial activation versus only 8% in PBS controls."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>, Nancy S. Loving, DVM<br />EquiManagement, June 2023<br /><span style={{ fontSize: "0.75rem", fontStyle: "italic" }}>Source: <a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer" style={{ color: "#901820" }}>Petersen et al., Vet Microbiol 2015</a>, PMID 26123371, n=37 (25 bActivate / 12 PBS)</span></div>
                            </a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>University of Copenhagen, 2025 — locating the bacteria in the tissue</h2>
                        <div className={styles.studyText}>
                            <p>A veterinary thesis project by <strong>Emilie Kähler Hjenner</strong> and <strong>Kathrine Kjeldsen Ravn</strong> at the <strong>University of Copenhagen</strong>, supervised by <strong>Prof. Anders Miki Bojesen</strong>, with Prof. Henrik Elvang Jensen (pathology) and Mette Christoffersen (equine reproduction) as co-supervisors. Submitted December 2025.</p>
                            <p style={{ marginTop: '1rem' }}>Standard culture had cleared these mares. They had been barren for one to three years regardless. So the question was not how common the infection is, but a narrower one: if the organism is suspected despite a clean culture, can it be shown to be physically present in the tissue? Sixteen archived endometrial biopsies were re-examined by fluorescence in situ hybridization. <strong><em>Streptococcus</em> spp. were found in all 16.</strong></p>
                            <details style={{ marginTop: '1.25rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#901820' }}>Read the full findings</summary>
                                <div style={{ marginTop: '1rem' }}>
                                    <p>FISH binds bacterial ribosomal RNA directly in fixed tissue, so it shows the organism whether or not it will grow on a plate, and it shows where in the endometrium it is sitting.</p>
                                    <p style={{ marginTop: '1rem' }}><strong>What they found</strong></p>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyleType: 'disc', lineHeight: 1.8 }}>
                                        <li><em>Streptococcus</em> spp. in all 16 biopsies</li>
                                        <li>Present in the luminal epithelium and stratum compactum, but also deep in stratum spongiosum, between <strong>50 and over 500 µm</strong> beneath the luminal surface</li>
                                        <li><strong>Intracellular bacteria confirmed</strong> inside glandular epithelial cells</li>
                                        <li>No clear difference in location or bacterial numbers between the one actively infected mare and the chronically infected ones</li>
                                        <li>Two mares were FISH-positive but did not activate with bActivate. <strong>Those two remained subfertile.</strong> The mares that were activated and treated regained fertility</li>
                                        <li>Live-foal rates after treatment were <strong>higher than Kenney-Doig scores predicted</strong></li>
                                    </ul>
                                    <p style={{ marginTop: '1rem' }}><strong>What it confirms</strong><br />The suspicion was correct. The organism is present in tissue that cultures clean, and it sits below the depth a guarded swab reaches. That is why the swab fails. It is a question of geometry, not of test sensitivity.</p>
                                    <p style={{ marginTop: '1rem' }}>It also confirms the sequence. FISH can see the bacteria but cannot treat them: dormant organisms stay antibiotic-tolerant until something wakes them. The two mares that could not be activated make the point. The infection was visible under FISH, it was never made treatable, and they stayed barren.</p>
                                    <p style={{ marginTop: '1rem' }}><strong>What it does not show</strong><br />The authors set out to test whether the bacteria sit in areas of chronic degenerative change. They found this in only 2 of 13, and state plainly that they cannot say whether chronic infection drives endometrosis. Endometrosis behaved as a separate and irreversible problem: the higher the Kenney score, the poorer the outcome even once the infection was cleared.</p>
                                    <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666', fontStyle: 'italic' }}>Disclosure: an unpublished student thesis project, not peer-reviewed, supervised by one of the developers of bActivate. All 16 biopsies came from mares already selected as subfertile, and no healthy control mares were examined, so the work describes what is present in problem mares rather than how common it is generally. The authors note that routine diagnostic use of FISH would first require better knowledge of the normal uterine microbiome, to avoid overdiagnosis.</p>
                                </div>
                            </details>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="/images/specialerapport-kathrine-emilie-ku-2025.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">View document</a>
                            <a href="https://open.spotify.com/episode/1JP9FDxlJh55AKnMAGvaoG" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">Listen to summary</a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>Hagyard, Davidson &amp; McGee, project led by Dr. Kristina Lu</h2>
                        <div className={styles.studyText}>
                            <p>A clinical study at <strong>Hagyard Equine Medical Institute</strong> (Lexington, KY) led by <strong>Dr. Kristina Lu</strong>, reported by <strong>Petersen &amp; Bojesen</strong> at the Society for Theriogenology Annual Conference 2014 (<em>Clinical Theriogenology</em> 6(3):313-314). A total of <strong>64 Thoroughbred problem mares</strong> (barren ≥3 consecutive cycles) were included and subsequently bred.</p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', listStyleType: 'disc', lineHeight: 1.8 }}>
                                <li><strong>83% pregnancy rate</strong>, 53 of 64 mares became pregnant</li>
                                <li><strong>70% live foal rate</strong>, 32 live foals from 46 mares with known outcome</li>
                                <li><strong>47% activation-positive</strong>, 30 of 64 mares tested positive for dormant <em>S. zooepidemicus</em> after bActivate</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666', fontStyle: 'italic' }}>Disclosure: As no placebo group was included in this clinical study, it is not possible to determine whether fertility was significantly increased following activation and treatment solely due to bActivate. The authors disclose this limitation in the proceedings.</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">View proceedings (Therio 2014)</a>
                            <a href="/images/hagyarddavidsonandmcgeeinaprojectledbydr.kristinalu.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">View clinical document</a>
                            <a href="https://open.spotify.com/episode/5CqtUbpJe9YO9j96a5Zx4R" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">Listen to summary</a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>Kildangan Stud, Godolphin, project involving Meta Osborne MVB CertESM MRCVS</h2>
                        <div className={styles.studyText}>
                            <p>This field study investigates the impact of latent infections caused by <strong>Streptococcus equi subsp. zooepidemicus</strong> on fertility in mares. Dormant bacteria are shown to persist intracellularly within the uterus, evading detection by traditional methods. These infections disrupt the establishment and maintenance of pregnancy, which is why an activation step is needed before standard culture can find them. <strong>bActivate</strong> reveals the dormant infection so the stud veterinarian can treat it with targeted antibiotics.</p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', listStyleType: 'disc', lineHeight: 1.8 }}>
                                <li><strong>19 problem mares</strong>, average age 12.7 years, barren for an average of 6.3 cycles</li>
                                <li><strong>84% activation-positive</strong> (16/19): a dormant infection standard culture had missed</li>
                                <li><strong>89% pregnancy</strong> among bred mares (16/18), at an average of 1.1 covers per mare</li>
                            </ul>
                            <p className="mt-4"><strong>Conclusion</strong><br />Latent infections significantly reduce fertility in mares, with dormant bacteria negatively affecting pregnancy outcomes. Activation dramatically improves diagnostic accuracy, and the veterinarian's targeted treatment restores reproductive performance. Published as a congress abstract: <a href="https://doi.org/10.1016/j.jevs.2018.05.162" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen MR, Rosenbrock A, Osborne M, Bojesen AM, J Equine Vet Sci 2018;66:117</a>. Also written up for breeders by the founders at <a href="https://portal.selectbreeders.com/articles/high-prevalence-of-latent-endometritis-in-problem-mares-effect-of-activation-and-treatment-on-fertility" target="_blank" rel="noopener noreferrer" className="text-primary underline">SelectBreeders Services (2019)</a>.</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="/images/latentendomtrititsanddormantstreptococci-effectonfertility.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">View document</a>
                            <a href="https://open.spotify.com/episode/2eCFocRnJEJh8IJOdTu3pP" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">Listen to summary</a>
                        </div>
                    </div>

                    <div className={styles.articleGrid}>
                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>Frontiers: Streptococcus equi (peer-reviewed study)</h3>
                            <div className={styles.articleContent}>
                                <p>This study explores how <strong>Streptococcus equi subsp. zooepidemicus</strong> invades and survives within epithelial cells, contributing to latent endometritis in mares. The research, led by <strong>Associate Professor Bolette Skive</strong> and <strong>Professor Manfred Rohde</strong>, reveals three distinct bacterial invasion mechanisms.</p>
                            </div>
                            <div className="mt-4">
                                <a href="/images/strepzoo_frontcellinfectmicrobioloriginalresearch.pdf" target="_blank" className="text-primary font-bold hover:underline">View Document</a>
                            </div>
                        </article>

                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>Bacterial tolerance.</h3>
                            <div className={styles.articleContent}>
                                <p>This study examines antimicrobial tolerance in beta-hemolytic streptococci (BHS) from problem mares, highlighting <strong>persister cells</strong> that tolerate penicillin at 10,000 times the normal MIC. Using <strong>bActivate</strong>, dormant BHS were reactivated and successfully treated.</p>
                            </div>
                            <div className={styles.meta}>Key Contributor • Professor Ralph Bertram</div>
                            <div className="mt-4">
                                <a href="/images/bacterialtolerancetoantimicrobials-factorsaffectingtreatmentsuccessrossdalenon-pregnantmarecoursejan2025-3.pdf" target="_blank" className="text-primary font-bold hover:underline">View Document</a>
                            </div>
                        </article>

                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>Scientific and Practical Evidence.</h3>
                            <div className={styles.articleContent}>
                                <p>This document provides scientific and practical evidence supporting the use of <strong>bActivate</strong> for diagnosing and treating latent endometritis in problem mares. The study highlights the reactivation of dormant <strong>Streptococcus equi subsp. zooepidemicus</strong> infections.</p>
                            </div>
                            <div className={styles.meta}>Key Contributor • Professor Anders Miki Bojesen</div>
                            <div className="mt-4">
                                <a href="/images/scientificandpracticalevidencesupportingbactivateforproblemmares.pdf" target="_blank" className="text-primary font-bold hover:underline">View Document</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/shop', label: 'Order bActivate', description: 'One vial per treatment cycle, available in the US' },
                { to: '/how-to-use', label: 'How to Use', description: 'Full veterinary protocol for diagnosis and treatment' },
                { to: '/our-distributors', label: 'Find a Distributor', description: 'Hagyard, Midwest Vet Supply and international distributors' },
                { to: '/about-us', label: 'Meet the Founders', description: 'Prof. Bojesen & Dr. Petersen, 20+ years of research' },
            ]} />
        </main>
    );
}
