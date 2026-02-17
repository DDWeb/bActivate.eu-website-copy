import { Link } from 'react-router-dom';
import styles from './StudiesEffect.module.css';
import ReviewsSection from '@/components/ReviewsSection';

export default function StudiesEffect() {
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Studies & effect</h1>

                    <div className={styles.textGrid}>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">Hidden infections. Persistent infertility. Missed opportunities. For too long, problem mares—those with recurring fertility issues—have faced unseen barriers to reproduction.<br />Below studies show that 80% of these mare’s harbor hidden uterine infections that traditional tests fail to detect, making pregnancy an uphill battle.</p>
                            <p>This collection introduces a breakthrough: <b>bActivate</b>. By reactivating dormant <b>Streptococcus equi subsp. zooepidemicus</b>, the most common cause of chronic uterine infections, bActivate uncovers what was once invisible. For the first time, veterinarians can accurately diagnose and effectively treat these elusive infections.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">Supported by our studies and real-world evidence, this body of work repeatedly demonstrates the profound success of bActivate in restoring fertility in problem mares. With proven results, practical solutions, and renewed hope, this is a roadmap for transforming equine reproductive health.</p>
                            <p>Step into a future where no infection stays hidden, and no mare is left behind.</p>
                        </div>
                    </div>

                    <hr className="mb-12 border-gray-200" />

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

            <ReviewsSection />
        </main>
    );
}
