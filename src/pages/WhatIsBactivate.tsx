
import { useEffect } from 'react';
import styles from './WhatIsBactivate.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import InternalLinks from '@/components/InternalLinks';

export default function WhatIsBactivate() {
    useEffect(() => {
        document.title = 'What is bActivate? | Diagnosing Hidden Infections in Problem & Non-Pregnant Mares';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bActivate diagnoses dormant Streptococcus zooepidemicus in non-pregnant mares and barren mares, a hidden infection causing 70–80% of recurring fertility failure in problem mares.');

        let schema = document.getElementById('medcond-schema') as HTMLScriptElement | null;
        if (!schema) {
            schema = document.createElement('script');
            schema.id = 'medcond-schema';
            schema.setAttribute('type', 'application/ld+json');
            document.head.appendChild(schema);
        }
        schema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalCondition',
            'name': 'Subclinical Endometritis in Mares',
            'alternateName': ['Equine subclinical endometritis', 'Dormant uterine infection in mares', 'Chronic subclinical endometritis', 'Culture-negative endometritis'],
            'description': 'Subclinical endometritis is a persistent low-grade uterine infection in broodmares caused by dormant Streptococcus equi subspecies zooepidemicus in a biofilm state. Standard uterine swab cultures yield false-negative results in over 60% of affected mares because the bacteria have lowered their metabolic rate and resist detection. The condition causes recurring fertility failure, accumulation of uterine fluid, and early embryo loss. It is estimated to affect 70–80% of mares that remain open at the end of the breeding season. Diagnosis requires reactivation of the dormant bacteria — achieved by uterine instillation of bActivate — followed by a post-activation culture 48 hours later.',
            'associatedAnatomy': { '@type': 'AnatomicalStructure', 'name': 'Equine uterus (endometrium)' },
            'signOrSymptom': [
                { '@type': 'MedicalSymptom', 'name': 'Failure to conceive despite breeding to fertile stallion' },
                { '@type': 'MedicalSymptom', 'name': 'Recurring accumulation of uterine fluid' },
                { '@type': 'MedicalSymptom', 'name': 'Early embryo loss' },
                { '@type': 'MedicalSymptom', 'name': 'Negative routine uterine culture despite clinical signs' }
            ],
            'possibleTreatment': {
                '@type': 'MedicalTherapy',
                'name': 'bActivate followed by targeted antibiotic therapy',
                'description': 'Uterine instillation of bActivate reactivates dormant bacteria within 48 hours. A post-activation culture identifies the pathogen, enabling targeted systemic and local antibiotic treatment. 83% pregnancy rate achieved in 64 problem mares at Hagyard Equine Medical Institute.'
            },
            'recognizingAuthority': { '@type': 'Organization', 'name': 'American College of Theriogenologists' }
        });

        return () => { document.getElementById('medcond-schema')?.remove(); };
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className="relative">
                            <div className={styles.eyebrow}>About bActivate</div>
                            <h1 className={styles.title}>What is bActivate? Diagnosing dormant Streptococcus in problem mares</h1>
                            <div className={styles.leadText}>
                                <p>bActivate is a veterinary bacterial growth medium that reactivates dormant <em>Streptococcus equi</em> subspecies <em>zooepidemicus</em> in the equine uterus. Developed by Prof. Anders Miki Bojesen DVM PhD and Dr. Morten Rønn Petersen DVM PhD Dipl. ACT (Bojesen &amp; Petersen Biotech ApS, Copenhagen), it is instilled by a veterinarian into the uterus of problem mares that fail to conceive despite normal cycles and negative routine cultures. Dormant bacteria reactivate within 48 hours, becoming detectable by standard swab culture. Targeted antibiotic treatment then clears the infection. In clinical studies: <strong>83% pregnancy rate</strong> (Hagyard Equine Medical Institute, 64 mares, Dr. Kristina Lu); <strong>89% pregnancy rate</strong> (Kildangan Stud / Godolphin, 19 mares). Peer-reviewed: Petersen &amp; Bojesen, <em>Theriogenology</em>, 2015. DOI: <a href="https://doi.org/10.1016/j.theriogenology.2015.04.009" target="_blank" rel="noopener noreferrer">10.1016/j.theriogenology.2015.04.009</a>.</p>
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

                            <h2 className={styles.sideTitle}>Why non-pregnant mares harbour hidden uterine infections</h2>
                            <div className="text-gray-600 space-y-4">
                                <p>Up to 15% of all mares — often called non-pregnant mares, problem mares, or barren mares — struggle to get in foal. Recent investigations have demonstrated that dormant bacterial infections in the uterus are a major cause. Dormant bacteria are difficult to diagnose by standard techniques and highly tolerant to antibiotics. Efficient handling requires re-activation of the bacteria, achieved by instillation of bActivate, a bacterial growth medium, into the uterus.</p>
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
                            <h2 className="text-2xl font-bold mb-4">Why problem mares test negative but stay non-pregnant</h2>
                            <p className="mb-4">Bacterial infections in the uterus can cause reduced fertility in the mare. Bacteria gain access to the uterus through the cervix, due to poor conformation or during breeding or foaling. Healthy young mares clear bacteria rapidly. In mares with compromised uterine defense mechanisms bacteria can establish an infection in the uterus. If the infection is unnoticed or left untreated, the infection may become chronic.</p>
                            <p>The most commonly isolated bacteria from such conditions are Streptococcus equi subspecies zooepidemicus (Strep. zoo). In the chronically infected mare Strep. zoo can establish an infection deep within the uterine lining (endometrium). Strep zoo appear to lower its metabolic rate during chronic infection, thus complicating diagnostics and antimicrobial treatment dependent of active bacterial growth.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">How bActivate detects hidden infections in non-pregnant mares</h2>
                            <p className="mb-4">bActivate is a growth medium enabling detection of chronic subclinical uterine infections associated with Strep. zoo in mares. If a chronic infection with Strep. zoo is present in the endometrium it will be activated when bActivate is instilled in the uterus. Activated Strep. zoo will thus become available for standard microbial diagnostic procedures.</p>

                            <div className={styles.videoContainer}>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-label="bActivate product overview video"
                                >
                                    <source src="/images/hero.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/when-to-use', label: 'When to Use bActivate', description: 'Signs your mare may have a hidden infection' },
                { to: '/studies-effect', label: 'Clinical Results', description: '83% pregnancy rate at Hagyard — see the evidence' },
                { to: '/how-to-use', label: 'Veterinary Protocol', description: 'Step-by-step instructions for veterinarians' },
                { to: '/shop', label: 'Order bActivate', description: '€229 per vial — order directly from Europe' },
            ]} />
            <ReviewsSection />
        </main>
    );
}
