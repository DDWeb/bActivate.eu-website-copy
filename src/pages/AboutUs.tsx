
import { useEffect } from 'react';
import styles from './AboutUs.module.css';
import InternalLinks from '@/components/InternalLinks';

export default function AboutUs() {
    useEffect(() => {
        document.title = 'About bActivate | Bojesen & Petersen Biotech ApS';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Meet the founders: Morten Rønn Petersen DVM PhD (Dipl. ACT) and Professor Anders Miki Bojesen, the veterinary scientists who discovered and developed bActivate.');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className={styles.eyebrow}>About bActivate</div>
                            <h1 className={styles.title}>The researchers behind bActivate</h1>
                            <div className={styles.lead}>
                                <p>The concept behind bActivate (promoting bacterial-activation) was discovered by Morten Rønn Petersen, DVM, PhD and Professor Anders Miki Bojesen, DVM, PhD. They both have extensive experience with bacterial endometritis in mares and have published several scientific papers on the subject.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.profileSection}>
                        <div className={styles.profileGrid}>
                            <div className={styles.imageContainer}>
                                <img
                                    src="/images/morten.jpg"
                                    alt="Morten Rønn Petersen"
                                    width={1051}
                                    height={697}
                                    className={styles.profileImage}
                                />
                                <h3 className="text-xl font-bold mt-4 mb-1">Morten Rønn Petersen</h3>
                                <div className={styles.profileRole}>DVM PhD, Diplomate ACT</div>
                                <div style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, marginTop: '0.4rem' }}>
                                    Head of Laboratory, The Fertility Clinic, Rigshospitalet<br />
                                    First author of the core bActivate studies<br />
                                    h-index 18 · 1,100+ citations
                                </div>
                                <div className={styles.contactInfo}>
                                    <div><strong>E:</strong> <a href="mailto:petersen@bactivate.eu">petersen@bactivate.eu</a></div>
                                    <div><strong>T:</strong> <a href="tel:+4560712169">+45 60 71 21 69</a></div>
                                    <div className="mt-2">
                                        <a href="https://www.linkedin.com/in/mortenrpetersen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        {' · '}<a href="https://orcid.org/0000-0002-5085-7243" target="_blank" rel="noopener noreferrer">ORCID</a>
                                        {' · '}<a href="https://scholar.google.com/citations?user=ENzUzLUAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bio}>
                                <p>The interest for reproduction has been the overall hall mark of my professional life. I started my professional life as a veterinarian in a large animal practice spending most of the time during the breeding season at a standard bred farm. My interest in reproduction, and in particular in equine reproduction, brought me to California as an equine reproduction resident supervised by professors Barry Ball and Irwin Liu.</p>
                                <p>Following the residency I made a PhD at the section of Veterinary Reproduction and Obstetrics, Copenhagen University, Denmark, this time focusing on oocyte and early embryonic evaluation and development.</p>
                                <p>I then took on a position as an assistant professor at the same section. My research focus was now on endometritis in the mare, in particular the most common cause of endometritis, the bacteria Streptococcus equi subspecies zooepidemicus (S.zoo).</p>
                                <p>Demonstrating localization of S.zoo deep within the endometrium of the chronically infected mare, pursued further investigations in this area. The most significant finding was to demonstrate that S.zoo in the chronically infected mare is able to enter a non-active/dormant state in the endometrium and infusion of a special bacterial growth medium into the uterus can induce active growth of S.zoo, previously residing in dormant bacterial reservoirs. With this finding diagnosis of these previously subclinic infections is now possible. </p>
                                <p>Data from field studies using bActivate when diagnosing problem mares, indicate that improved diagnosis furthered treatment efficacy and mare fertility. My collaborators and I hope that these findings will improve reproductive efficiency in the mare to the benefit of horses and man. Dr. Petersen has authored 21+ peer-reviewed publications, including a paper in <em>Nature Medicine</em> (2025).</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.profileSection}>
                        <div className={styles.profileGrid}>
                            <div className={styles.imageContainer}>
                                <img
                                    src="/images/anders.jpg"
                                    alt="Anders Miki Bojesen"
                                    width={1051}
                                    height={700}
                                    className={styles.profileImage}
                                />
                                <h3 className="text-xl font-bold mt-4 mb-1">Anders Miki Bojesen</h3>
                                <div className={styles.profileRole}>DVM PhD, Diplomate ECPVS · Professor of Veterinary Microbiology, University of Copenhagen</div>
                                <div style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, marginTop: '0.4rem' }}>
                                    h-index 44 · 5,900+ citations · 157+ peer-reviewed publications
                                </div>
                                <div className={styles.contactInfo}>
                                    <div><strong>E:</strong> <a href="mailto:bojesen@bactivate.eu">bojesen@bactivate.eu</a></div>
                                    <div><strong>T:</strong> <a href="tel:+4523844188">+45 23 84 41 88</a></div>
                                    <div className="mt-2">
                                        <a href="https://www.linkedin.com/in/anders-miki-bojesen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        {' · '}<a href="https://orcid.org/0000-0003-4030-0019" target="_blank" rel="noopener noreferrer">ORCID</a>
                                        {' · '}<a href="https://scholar.google.dk/citations?user=qfpCDSgAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                                        {' · '}<a href="https://www.wikidata.org/wiki/Q88257686" target="_blank" rel="noopener noreferrer">Wikidata</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bio}>
                                <p>I have had an interest in bacteria-host interactions since I took the infection microbiology course during my veterinary studies. I became a DVM in 2000 and immediately initiated my PhD-project, which also dealt with reproductive tract infection albeit in chickens! In 2003 I defended my PhD and got a faculty position culminating with a professorship in preventive veterinary microbiology in 2012.</p>
                                <p>I started collaborating with Morten Rønn Petersen investigating Streptococcus equi subspecies zooepidemicus (S. zoo) as a cause of endometritis in mares in 2007.</p>
                                <p>It was a fantastic experience to discover that 5-10% of mares of all sorts may have a subclinical endometrial infection caused by S. zoo. Later, with the help of particularly Kristina Lu at the Hagyard Equine Medical Insitute, we were able to demonstrate the negative impact of such a subclinical infection as clearing enabled by bActivate virtually restored the live-foal rates to normal (75-80%) and thus re-vitalized mares that had been given up for breeding.</p>
                                <p>My current research concerning S. zoo is focused on how this organism can switch back and forth from being actively dividing to the dormant state we see in the subclinically infected mares. Understanding the underlying regulatory events during these processes is key to further knowledge on how S. zoo and the endometrial tissue interact. Professor Bojesen has authored 157+ peer-reviewed publications and was an invited speaker at the International Workshop on Equine Endometritis, Al Shaqab, Qatar (2016).</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1.5rem 2rem', background: '#f8f8f8', borderLeft: '4px solid #901820' }}>
                        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>Authors of the reference literature</h2>
                        <p style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>Both researchers wrote chapter 38, "Latent Uterine Bacterial Infections", in <em>Equine Reproductive Procedures</em>, 2nd edition (<a href="https://doi.org/10.1002/9781119556015.ch38" target="_blank" rel="noopener noreferrer" className="text-primary underline">Wiley-Blackwell, 2021</a>), the veterinary reference manual edited by Prof. John Dascanio (Texas Tech University) and Prof. Patrick McCue (Colorado State University). The chapter describes the activation protocol and discloses their commercial interest. The core science is published in <a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer" className="text-primary underline">Veterinary Microbiology (2015)</a> and <a href="https://clinicaltheriogenology.net/index.php/CT/article/view/12588" target="_blank" rel="noopener noreferrer" className="text-primary underline">Clinical Theriogenology (2009)</a>.</p>
                    </div>

                </div>
            </section>
            <InternalLinks links={[
                { to: '/studies-effect', label: 'Clinical Studies', description: '83% pregnancy rate, graded clinical evidence' },
                { to: '/what-is-bactivate', label: 'What is bActivate?', description: 'The science behind dormant bacterial activation' },
                { to: '/shop', label: 'Order bActivate', description: '€229 per vial, order directly online' },
            ]} />
        </main>
    );
}
