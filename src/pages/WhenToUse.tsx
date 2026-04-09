
import { useEffect } from 'react';
import styles from './WhenToUse.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import InternalLinks from '@/components/InternalLinks';

export default function WhenToUse() {
    useEffect(() => {
        document.title = 'When to Use bActivate | Signs Your Mare Has a Hidden Infection';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Use bActivate when your mare fails to conceive despite fertile breeding, has recurring uterine fluid, or previous infections. 50–75% of open mares are chronically infected.');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div>
                            <div>
                                <div className={styles.eyebrow}>About bActivate</div>
                                <h1 className={styles.title}>When to Use bActivate for Problem Mares</h1>

                                <div className={styles.introBlock}>
                                    <h2 className={styles.subtitle}>bActivate – a diagnostic aid for the problem mare</h2>
                                    <div className={styles.textBlock}>
                                        <p className="mb-4">bActivate can help establish a correct diagnosis in the chronically infected mare. bActivate initiates growth of resident dormant streptococci, which can then be diagnosed and treated by standard techniques.</p>
                                        <p className="mb-4"><strong>Chronic infections</strong> prevent establishment of a pregnancy, and might also increase the risk of early fetal loss and abortion in the mare. Our studies indicate that 50-75% of problem mares not pregnant by the end of the breeding season, despite breeding to fertile stallions and supervised by experienced veterinarians, are chronically infected.</p>
                                        <p>Some farms use bActivate as a <strong>screening tool</strong> to improve diagnosis of endometritis and treatment on all open mares during the off-season, hereby optimizing chances to establish a pregnancy and reduce <strong>time to pregnancy</strong>.</p>
                                    </div>
                                </div>

                                {/* Decorative element for parallax horse */}
                                <div className="relative">
                                    <div className="hidden md:block absolute -left-12 top-0 z-10 w-48 opacity-90">
                                        <img
                                            src="/images/favicon.gif"
                                            alt="Red Horse"
                                            width={150}
                                            height={140}
                                        />
                                    </div>
                                </div>

                                <div className={styles.videoContainer}>
                                    <iframe
                                        src="https://www.youtube.com/embed/sVS0kj84lMA"
                                        title="When to use bActivate"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.sideImageContainer}>
                                <img
                                    src="/images/when-to-use-1.jpeg"
                                    alt="Horses in field"
                                   
                                    className="object-cover"
                                />
                            </div>

                            <div className={styles.sideText}>
                                <p className="mb-4"><strong>Repeated uterine infections</strong> indicate compromised uterine defense mechanisms predisposing for establishment of infections – acute as well as chronic. As chronic infections can be hard to identify bActivate should be considered for this group of problem mares.</p>
                                <p><strong>Endometrial fibrosis</strong> is induced by ongoing endometrial inflammation. Presence of beta-hemolytic streptococci within the endometrium is expected to induce endometrial inflammation, hereby increasing uterine fibrosis, and consequently decreasing fertility. If endometrial fibrosis can be minimized the number of foals each mare can produce in a lifetime is expected to increase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Indicators */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">Is My Mare a Candidate for bActivate?</h2>
                    <p className="text-gray-600 mb-8">bActivate is indicated for mares with reduced uterine defence mechanisms and suspected chronic subclinical infection. Use the checklist below as a starting point when discussing with your veterinarian.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                            <h3 className="text-xl font-bold mb-4 text-red-700">Strong indications</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span>Mare has failed to conceive for <strong>two or more consecutive seasons</strong> despite breeding to a proven fertile stallion</span></li>
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span><strong>Culture-negative swabs</strong> combined with unexplained infertility or recurrent uterine fluid on ultrasound</span></li>
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span>Previous antibiotic treatment <strong>resolved fluid temporarily</strong> but fertility did not improve</span></li>
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span>History of <strong>early embryo loss</strong> (before day 15) in multiple seasons</span></li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                            <h3 className="text-xl font-bold mb-4 text-orange-700">Consider bActivate when</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>Mare is <strong>10 years or older</strong> with a history of uterine infections or fluid accumulation</span></li>
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>Mare has had <strong>repeated bacterial isolations</strong> (Strep zoo, E. coli) over multiple seasons</span></li>
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>Mare is an <strong>open mare at end of season</strong> entering the off-season with no pregnancy</span></li>
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>Mare has documented <strong>endometrial fibrosis</strong> (category IIB or III) and compromised uterine clearance</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-6 text-gray-600 text-sm">bActivate is a prescription veterinary product. Your veterinarian will assess suitability based on reproductive history, clinical examination and ultrasound findings.</p>
                </div>
            </section>

            {/* Mare Types */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">Which Mares Benefit Most?</h2>
                    <p className="text-gray-600 mb-8">Dormant streptococcal infections can affect mares across all breeds and ages, but certain groups are disproportionately represented in clinical case populations.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">Older Broodmares</h3>
                            <p className="text-gray-600 text-sm">Uterine defence mechanisms decline with age and parity. Mares aged 10+ with multiple previous foalings have reduced mucociliary clearance and lymphatic drainage, making them more susceptible to persistent infection. Clinical studies include a significant proportion of older mares with long histories of infertility.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">Thoroughbred &amp; Sport Horses</h3>
                            <p className="text-gray-600 text-sm">High-value thoroughbred and warmblood mares where the economic cost of a missed season is significant. The Kildangan/Godolphin study demonstrated an <strong>89% pregnancy rate</strong> in 19 barren thoroughbred problem mares after a single bActivate treatment cycle.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">Repeat Breeders</h3>
                            <p className="text-gray-600 text-sm">Mares that cycle normally, accept covering, and produce embryos that consistently fail to implant. The inflammatory environment created by dormant <em>Strep zoo</em> prevents uterine preparation for implantation even when the embryo itself is viable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Timing */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">When in the Breeding Season to Use bActivate</h2>
                    <p className="text-gray-600 mb-8">The bActivate protocol is designed to fit within a normal breeding cycle. Treatment takes place approximately <strong>one cycle before</strong> the intended breeding cycle.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                        {[
                            { step: '1', title: 'Oestrus — Day 0', desc: 'Obtain pre-activation culture. Instil 10 ml bActivate in early oestrus (follicle 25–30 mm).' },
                            { step: '2', title: '48 Hours Later', desc: 'Obtain post-activation culture. Dormant Strep zoo now active. Begin targeted antibiotic treatment.' },
                            { step: '3', title: 'Recovery Cycle', desc: 'Complete antibiotic course. Uterus clears activation inflammation. Do not breed in this cycle.' },
                            { step: '4', title: 'Next Oestrus', desc: 'Mare ready for breeding. Expected pregnancy rate: 83–89% in clinical studies.' },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="bg-red-600 text-white text-center py-3 px-4">
                                    <div className="text-2xl font-bold">{item.step}</div>
                                    <div className="text-xs font-semibold">{item.title}</div>
                                </div>
                                <div className="border border-gray-200 p-4 text-sm text-gray-600 min-h-[90px]">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-gray-600">Total time from bActivate administration to breeding-ready: <strong>3–4 weeks</strong>. This fits within a standard 21-day oestrous cycle, meaning a single treatment cycle before the target breeding cycle.</p>
                </div>
            </section>

            {/* Off-Season Screening */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">Off-Season Screening</h2>
                    <p className="text-gray-600 mb-6">Some breeding operations use bActivate as a <strong>proactive screening tool</strong> for all open mares at the end of the season or during the winter off-season. This approach offers several advantages:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-3">
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>Identifies chronic infections <strong>before</strong> the next breeding season begins</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>Allows a full treatment and recovery cycle <strong>without time pressure</strong></span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>Reduces <strong>time to pregnancy</strong> at the start of the next season</span></li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>Minimises wasted covering cycles on untreated infections</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>Particularly valuable for <strong>high-value mares</strong> where early-season pregnancy is economically important</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>Helps farms <strong>plan breeding schedules</strong> with greater confidence</span></li>
                        </ul>
                    </div>
                    <p className="mt-6 text-gray-600">Our studies indicate that 50–75% of mares that remain open at the end of the breeding season are chronically infected. Off-season screening with bActivate addresses this directly.</p>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <hr className="border-gray-300 mb-8" />
                    <p className="text-xl italic text-gray-700">
                        The concept behind bActivate (promoting bacterial-activation) was discovered by Morten Rønn Petersen, DVM, PhD and Professor Anders Miki Bojesen, DVM, PhD. They both have extensive experience with bacterial endometritis in mares and have published several scientific papers on the subject.
                    </p>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/how-to-use', label: 'How to Use bActivate', description: 'Full veterinary protocol — instillation and follow-up' },
                { to: '/studies-effect', label: 'Clinical Evidence', description: '83% pregnancy rate in 64 problem mares at Hagyard' },
                { to: '/our-distributors', label: 'Find a Distributor', description: 'Hagyard, Midwest Vet Supply and more' },
                { to: '/shop', label: 'Order bActivate', description: 'Order directly online' },
            ]} />
            <ReviewsSection />
        </main>
    );
}
