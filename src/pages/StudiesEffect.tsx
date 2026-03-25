import { useEffect } from 'react';
import styles from './StudiesEffect.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import InternalLinks from '@/components/InternalLinks';

export default function StudiesEffect() {
    useEffect(() => {
        document.title = 'bActivate Clinical Results | 83% Pregnancy Rate in Problem Mares';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Clinical evidence: 83% pregnancy rate at Hagyard (64 mares), 89% at Kildangan–Godolphin. Peer-reviewed studies on bActivate and latent endometritis in mares.');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Studies & effect</h1>

                    <div className={styles.textGrid}>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">Hidden infections. Persistent infertility. Missed opportunities. For too long, problem mares—those with recurring fertility issues—have faced unseen barriers to reproduction.<br />Below studies show that 80% of these mares harbor hidden uterine infections that traditional tests fail to detect, making pregnancy an uphill battle.</p>
                            <p>This collection introduces a breakthrough: <b>bActivate</b>. By reactivating dormant <b>Streptococcus equi subsp. zooepidemicus</b>, the most common cause of chronic uterine infections, bActivate uncovers what was once invisible. For the first time, veterinarians can accurately diagnose and effectively treat these elusive infections.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">Supported by our studies and real-world evidence, this body of work repeatedly demonstrates the profound success of bActivate in restoring fertility in problem mares. With proven results, practical solutions, and renewed hope, this is a roadmap for transforming equine reproductive health.</p>
                            <p>Step into a future where no infection stays hidden, and no mare is left behind.</p>
                        </div>
                    </div>

                    <hr className="mb-12 border-gray-200" />

                    {/* As Cited By — External Validation */}
                    <div style={{ margin: "3rem 0", padding: "2.5rem", background: "#f8f8f8", borderLeft: "4px solid #901820" }}>
                        <h2 style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "2px", color: "#901820", marginBottom: "0.5rem", fontWeight: 600 }}>As cited by leading equine experts</h2>
                        <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.95rem" }}>bActivate is independently referenced by the world's most respected equine veterinary publications and research institutions.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                            <a href="https://thehorse.com/183678/whats-plaguing-your-problem-mare/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>The Horse Magazine</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"...a (growth medium) product called bActivate, which activates dormant Streptococcus that can live within the endometrium, stimulating them to become metabolically active so we can treat them."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>— Dr. Karen Wolfsdorf, DVM Dipl. ACT<br />Rood &amp; Riddle Equine Hospital, Kentucky</div>
                            </a>
                            <a href="https://fvma.org/challenges-of-chronic-endometritis-novel-tools/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>FVMA — The Practitioner, 2024</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"Infusion of Bactivate when the mare is in estrus activates the dormant B.strep, increasing replication and growth, providing identification at 24 hours."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>— Dr. Karen Wolfsdorf, DVM Dipl. ACT<br />Florida Veterinary Medical Association</div>
                            </a>
                            <a href="https://ker.com/equinews/therapy-offers-hope-infertile-mares/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Kentucky Equine Research</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"Most of the mares (83%) became pregnant within 6 weeks, and a majority of those gave birth to live foals." — Study of 64 broodmares treated with bActivate.</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>— Kentucky Equine Research, ker.com</div>
                            </a>
                            <a href="https://breedersclub.nu/wp-content/uploads/2022/07/41-Forskning-i-fertilitet.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Breeders Club — Veterinary Journal</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"72% of problem mares achieved live foals the year after activation. 84% of participating mares had a latent streptococcal infection."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>— Rebecca Bøk Larsen DVM + Anna Skriver DVM<br />University of Copenhagen, 2022</div>
                            </a>
                            <a href="https://equsana.dk/sovende-bakterier-goer-hopper-ufrugtbare/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Equsana.dk — 2015</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"Knap 10% af hopperne bliver aldrig drægtige trods dyrlægehjælp. Bactivate vækker sovende bakterier, så de kan diagnosticeres og behandles effektivt med antibiotika."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>— Charlotte Nørgaard, Equsana.dk, 2015</div>
                            </a>
                            <a href="https://equimanagement.com/research-medical/biofilms-and-the-equine-uterus/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>EquiManagement — 2023</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>"bActivate — a growth medium specifically formulated to reactivate dormant Strep uterine infections — demonstrated effectiveness: treated mares showed only 8% bacterial positivity versus 64% in control animals."</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>— Nancy S. Loving, DVM<br />EquiManagement, June 2023</div>
                            </a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>Hagyard, project led by Dr. Kristina Lu.</h2>
                        <div className={styles.studyText}>
                            <p>This document showcases advancements in diagnosing and treating latent endometritis in mares, supported by leading equine specialists such as <strong>Dr. Kristina Lu</strong> and the theriogenology team at <strong>Hagyard Equine Medical Institute</strong>. Their work with innovative tools <strong>bActivate</strong> has transformed the management of dormant infections, enabling precise diagnosis and successful treatment. A total of 64 problem mares were included and subsequently bred. Pregnancy was established in 53 (83%) mares</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="/images/hagyarddavidsonandmcgeeinaprojectledbydr.kristinalu.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">View document</a>
                            <a href="https://open.spotify.com/episode/5CqtUbpJe9YO9j96a5Zx4R" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">Listen to summary</a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>Dormant Strepzoo Studie at Kildangan – Godolphin</h2>
                        <div className={styles.studyText}>
                            <p>This study investigates the impact of latent infections caused by <strong>Streptococcus equi subsp. zooepidemicus</strong> on fertility in mares. Dormant bacteria are shown to persist intracellularly within the uterus, evading detection by traditional methods. These infections disrupt the establishment and maintenance of pregnancy, highlighting the necessity for advanced diagnostic tools like <strong>bActivate</strong>, which enables the detection and effective treatment of dormant infections.</p>
                            <p className="mt-4"><strong>Conclusion</strong><br />Latent infections significantly reduce fertility in mares, with dormant bacteria negatively affecting pregnancy outcomes. The use of bActivate dramatically improves diagnostic accuracy and treatment success, leading to enhanced reproductive performance.</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="/images/latentendomtrititsanddormantstreptococci-effectonfertility.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">View document</a>
                            <a href="https://open.spotify.com/episode/2eCFocRnJEJh8IJOdTu3pP" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">Listen to summary</a>
                        </div>
                    </div>

                    <div className={styles.articleGrid}>
                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>Frontiers -Streptococcus equi – Peer Review Studie</h3>
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
                { to: '/shop', label: 'Order bActivate', description: '€229 per vial — ships from Copenhagen' },
                { to: '/how-to-use', label: 'How to Use', description: 'Full veterinary protocol for diagnosis and treatment' },
                { to: '/our-distributors', label: 'Find a Distributor', description: 'UK, Netherlands, Denmark, Australia and more' },
                { to: '/about-us', label: 'Meet the Founders', description: 'Prof. Bojesen & Dr. Petersen — 20+ years of research' },
            ]} />
            <ReviewsSection />

        </main>
    );
}
