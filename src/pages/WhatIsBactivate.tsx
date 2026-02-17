
import styles from './WhatIsBactivate.module.css';
import ReviewsSection from '@/components/ReviewsSection';

export default function WhatIsBactivate() {
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className="relative">
                            <div className={styles.eyebrow}>Om bActivate</div>
                            <h1 className={styles.title}>What is bActivate?</h1>
                            <div className={styles.leadText}>
                                <p>bActivate is a diagnostic aid for the detection and clearance of dormant uterine infections in mares. Dormant infections have a significant negative effect on fertility.</p>
                            </div>

                            <div className="relative mt-8">
                                <img
                                    src="/images/what-is-1.jpeg"
                                    alt="bActivate Scientific"
                                    width={760}
                                    height={507}
                                    className="w-full h-auto rounded"
                                />
                                {/* Decorative element mimicking the parallax horse if possible, or just placed */}
                                <div className="hidden md:block absolute -bottom-12 -left-8 z-10 w-48">
                                    <img
                                        src="/images/favicon.gif" // Using favicon/hero gif as placeholder for the small red horse
                                        alt="Red Horse"
                                        width={200}
                                        height={187}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative mb-8">
                                <img
                                    src="/images/what-is-2.jpeg"
                                    alt="Mare and Foal"
                                    width={610}
                                    height={610}
                                    className="w-full h-auto rounded"
                                />
                            </div>

                            <h2 className={styles.sideTitle}>Facilitate mare pregnancy</h2>
                            <div className="text-gray-600 space-y-4">
                                <p>Up to 15% of all mares struggle to get in foal. Recent investigations have demonstrated that dormant bacterial infections in the uterus are a major cause. Dormant bacteria are difficult to diagnose by standard techniques and highly tolerant to antibiotic. Efficient handling thus requires re-activation of the bacteria. This can be achieved by instillation of bActivate, a bacterial growth medium, into the uterus.</p>
                                <p>bActivate has been tested by the therio group at <strong>Hagyard Equine Medical Institute</strong>, the world’s largest equine hospital in Kentucky who basically normalized mare fertility by including bActivate into the standard repro work-up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Concept Section */}
            <section className="relative py-24 bg-gray-100 flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 z-0">
                    {/* If we had the prefooter image, we'd use it here. Using a placeholder for now */}
                    <div className="w-full h-full bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/reviews-bg.jpg')" }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <hr className="border-gray-400 mb-8 w-24 mx-auto" />
                    <p className="text-xl text-gray-800 font-light italic">
                        The concept behind bActivate (promoting bacterial-activation) was discovered by Morten Rønn Petersen, DVM, PhD and Professor Anders Miki Bojesen, DVM, PhD. They both have extensive experience with bacterial endometritis in mares and have published several scientific papers on the subject.
                    </p>
                </div>
            </section>

            {/* Background Info - Multi Column */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.infoGrid}>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Background information</h2>
                            <p className="mb-4">Bacterial infections in the uterus can cause reduced fertility in the mare. Bacteria gain access to the uterus through the cervix, due to poor conformation or during breeding or foaling. Healthy young mares clear bacteria rapidly. In mares with compromised uterine defense mechanisms bacteria can establish an infection in the uterus. If the infection is unnoticed or left untreated, the infection may become chronic.</p>
                            <p>The most commonly isolated bacteria from such conditions are Streptococcus equi subspecies zooepidemicus (Strep. zoo). In the chronically infected mare Strep. zoo can establish an infection deep within the uterine lining (endometrium). Strep zoo appear to lower its metabolic rate during chronic infection, thus complicating diagnostics and antimicrobial treatment dependent of active bacterial growth.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Product description</h2>
                            <p className="mb-4">bActivate is a growth medium enabling detection of chronic subclinical uterine infections associated with Strep. zoo in mares. If a chronic infection with Strep. zoo is present in the endometrium it will be activated when bActivate is instilled in the uterus. Activated Strep. zoo will thus become available for standard microbial diagnostic procedures.</p>

                            <div className={styles.videoContainer}>
                                {/* Placeholder for local video or embed */}
                                <div className="absolute inset-0 bg-black flex items-center justify-center text-white">
                                    Video Placeholder (hero.mp4)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
