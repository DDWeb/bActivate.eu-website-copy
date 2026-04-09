
import { useEffect } from 'react';
import styles from './HowToUse.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import InternalLinks from '@/components/InternalLinks';

export default function HowToUse() {
    useEffect(() => {
        document.title = 'How to Use bActivate | Veterinary Protocol';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Step-by-step veterinary protocol: instill 10 ml bActivate during early estrus, culture after 48 hours, treat with targeted antibiotics. Full instructions for veterinarians.');

        let schema = document.getElementById('howto-schema') as HTMLScriptElement | null;
        if (!schema) {
            schema = document.createElement('script');
            schema.id = 'howto-schema';
            schema.setAttribute('type', 'application/ld+json');
            document.head.appendChild(schema);
        }
        schema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': 'How to Use bActivate — Veterinary Protocol for Problem Mares',
            'description': 'Step-by-step protocol for uterine instillation of bActivate, post-activation culture, and antibiotic treatment of subclinical endometritis in problem mares.',
            'totalTime': 'PT48H',
            'tool': [{ '@type': 'HowToTool', 'name': 'bActivate vial (10 ml)' }, { '@type': 'HowToTool', 'name': 'Insemination pipette' }, { '@type': 'HowToTool', 'name': '0.9% NaCl saline (10 ml)' }],
            'step': [
                { '@type': 'HowToStep', 'position': 1, 'name': 'Obtain pre-activation culture', 'text': 'Obtain a pre-activation uterine culture sample using a biopsy or low volume lavage to improve diagnostic sensitivity and specificity. Perform when the mare is in early estrus (largest follicle 25–30 mm).' },
                { '@type': 'HowToStep', 'position': 2, 'name': 'Prepare the bActivate vial', 'text': 'Thaw and shake the vial. For freeze-dried formulation: add 10 ml of NaCl (0.9%) and shake until a homogeneous solution is established.' },
                { '@type': 'HowToStep', 'position': 3, 'name': 'Instill bActivate into the uterus', 'text': 'Instill bActivate (10 ml) into the uterus of the mare using an insemination pipette and standard insemination technique.' },
                { '@type': 'HowToStep', 'position': 4, 'name': 'Obtain post-activation culture after 48 hours', 'text': 'Obtain a post-activation uterine culture sample 48 hours after instillation. Dormant Streptococcus zooepidemicus will now be reactivated and detectable by standard culture.' },
                { '@type': 'HowToStep', 'position': 5, 'name': 'Begin targeted antibiotic therapy', 'text': 'Begin appropriate antimicrobial therapy (uterine and systemic antibiotics) based on the results of the post-activation culture. Do not breed in the same estrus cycle — breed in the following cycle.' }
            ]
        });

        return () => { document.getElementById('howto-schema')?.remove(); };
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div>
                            <div className={styles.eyebrow}>About bActivate</div>
                            <h1 className={styles.title}>How to Use bActivate — Veterinary Protocol</h1>

                            <h2 className={styles.subtitle}>Intended use</h2>
                            <div className={styles.textBlock}>
                                <p>bActivate is to be used in mares with reduced uterine defense mechanisms and in mares suspected of having a chronic subclinical infection. This subgroup of broodmares is characterized by previous uterine infections, accumulation of uterine fluid and reduced fertility. The use of bActivate in other subgroups of broodmares is less likely to have an effect.</p>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="relative w-full max-w-[400px] mx-auto">
                                <img
                                    src="/images/hero.gif"
                                    alt="bActivate Horse"
                                    width={400}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                   
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.storageSection}>
                <div className={styles.container}>
                    <h2 className={styles.storageTitle}>Storage information</h2>
                    <div className="text-xl">
                        <p className="mb-2">The freeze dried formulation should be stored at 5°C.</p>
                        <p>Resuspend the freeze dried powder with the accompanying saline (0.9% NaCl) and shake until a homogeneous solution is established.</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Instructions for use</h2>
                    <div className={styles.textBlock}>
                        <p className="mb-4">Bacterial culture, activation and standard endometritis treatment should be conducted when the mare is in estrus, activation ideally taking place in early estrus (moderate uterine edema, largest follicle 25-30 mm) to allow as much of the treatment during estrus as possible.</p>

                        <h3 className="text-xl font-bold mb-4">The following steps should be included</h3>
                        <ol className={styles.instructionList}>
                            <li>Obtain a pre-activation uterine culture sample. We recommend that the sample be obtained using either a biopsy or a low volume lavage to improve diagnostic sensitivity and specificity</li>
                            <li>Thaw and shake the vial to mix the activating compound before use. Freeze dried formulation – please add 10 ml. of NaCl (0.9%) and shake the vial until a homogeneous solution is established.</li>
                            <li>Instill bActivate (10 ml) in the uterus of the mare using an insemination pipette and standard insemination technique.</li>
                            <li>Obtain a post-activation uterine culture sample 48 hours after instillation of bActivate.</li>
                            <li>Begin appropriate antimicrobial therapy (uterine and systemic antibiotics) based on the results of the post-activation culture sample.</li>
                        </ol>

                        <div className={styles.timeImageContainer}>
                            <img
                                src="/images/how-to-use-time.jpg"
                                alt="Timeline"
                                width={773}
                                height={239}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>

                        <p className="mb-4 mt-8">When Strep zoo is isolated only after activation, or if bacteria are increased in numbers following activation, the mare is chronically infected and local and systemic antimicrobial therapy should be initiated. If intrauterine fluid and secretions are present uterine lavage, with or without mucolytic additives, in conjunction with ecbolic treatment to help clear/clean the uterus may also be indicated.</p>
                        <p className="mb-4">Bacterial cultures are performed both before and after activation because some mares may be culture positive for E. coli before activation, but only culture positive for Strep. zoo after activation. If only a post activation sample is recovered, important information related to treatment could be missed.<br />Please note that activation by itself, induced by uterine infusion of bActivate in a chronically infected mare, is not a treatment for chronic endometritis in the mare, but a diagnostic aid.</p>

                        <h3 className="text-xl font-bold mb-2 mt-8">Precautions</h3>
                        <p className="mb-4">Breeding in the same estrus cycle as the mare is activated is not recommended. When a non-self compound is present in the uterus, inflammation will be initiated. This is also the case when bActivate is instilled in the uterus. Because uterine inflammation has a negative impact on fertility, breeding should be postponed to the following cycle.</p>
                        <p className="mb-4">If bActivate is instilled in the uterus of a mare chronically infected with Strep zoo, the subclinical inactive infection will be activated without systemic effects on the mare like fever, in appetence or discomfort. If the mare is heavily infected marked clinical signs of endometritis will be present (uterine discharge and accumulation of intrauterine fluid/exudates).<br />bActivate has been tested in barren mares, with a fully involuted uterus. We do not recommend the use of bActivate in mares post foaling until full uterine involution has taken place (see terms and conditions for more detailed information).</p>

                        <h3 className="text-xl font-bold mb-2 mt-8">References</h3>
                        <p className="mb-4"><a href="https://pubmed.ncbi.nlm.nih.gov/?term=Petersen+Streptococcus+equi+zooepidemicus+endometrium+mares+2009" target="_blank" rel="noopener noreferrer">Petersen, M. R., Nielsen, J. M., Lehn-Jensen, H. and Bojesen, A. M. (2009). Streptococcus equi subspecies zooepidemicus resides deep in the chronically infected endometrium of mares, Clinical Theriogenology 1, 393-409.</a><br /><a href="https://doi.org/10.1016/j.vetmic.2015.07.020" target="_blank" rel="noopener noreferrer">Petersen, M. R., Lu, K., Christoffersen, M., Nielsen, J. M., Troedsson, M.H.T. and Bojesen, A. M (2013). Impact of activation and subsequent antimicrobial treatment of dormant endometrial streptococci in the Thoroughbre problem mare – a descriptive field study, Abstract and Poster, Society for Theriogenology Annual Meeting, Louisville, Kentucky</a></p>

                        <h3 className="text-xl font-bold mb-2 mt-8">Company</h3>
                        <p>Bojesen and Petersen Biotech Aps, co/ Anders Miki Bojesen, Strandboulevarden 23, 2100 Copenhagen, Denmark</p>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/studies-effect', label: 'Clinical Studies', description: '83% pregnancy rate — Hagyard, Godolphin, and more' },
                { to: '/shop', label: 'Order bActivate', description: '€229 per vial — ships from Copenhagen' },
                { to: '/our-distributors', label: 'European Distributors', description: 'UK, Netherlands, Denmark, Australia' },
                { to: '/about-us', label: 'About the Founders', description: 'Prof. Bojesen & Dr. Petersen — the science team' },
            ]} />
            <ReviewsSection />
        </main>
    );
}
