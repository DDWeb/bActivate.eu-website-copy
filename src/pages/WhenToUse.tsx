
import { useEffect } from 'react';
import styles from './WhenToUse.module.css';
import InternalLinks from '@/components/InternalLinks';
import InShort from '@/components/InShort';
import FAQSection from '@/components/FAQSection';
import NextStep from '@/components/NextStep';
import { whenToUseFaqItems } from '@/lib/routeFaqs';
import ReviewedBy from '@/components/ReviewedBy';
import LiteYouTube from '@/components/LiteYouTube';

export default function WhenToUse() {
    useEffect(() => {
        document.title = 'What Is a Barren Mare? Signs, Causes and When to Test';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'A barren mare was covered and is not in foal. The signs of a hidden uterine infection, which mares are at risk, and when bActivate is indicated.');
    }, []);
    return (
        <main>
            <ReviewedBy lastReviewed="June 2026" />
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div>
                            <div>
                                <div className={styles.eyebrow}>About bActivate</div>
                                <h1 className={styles.title}>When to Use bActivate for Problem Mares</h1>

                                <InShort>bActivate is for the mare that stays empty despite normal cycles, a fertile stallion and a clean swab. The strongest signs are two or more failed cycles, uterine fluid on ultrasound, early embryo loss, a previous endometritis, three or more foals, and age 12 or older. In the field series, 83 % of 64 problem mares at Hagyard and 16 of the 18 covered mares at Kildangan became pregnant after activation and treatment; neither series had a placebo group. The whole activation protocol fits inside one estrus cycle, so the earlier in the season, the better.</InShort>

                                <div className={styles.introBlock}>
                                    <h2 className={styles.subtitle}>bActivate, a diagnostic aid for the problem mare</h2>
                                    <div className={styles.textBlock}>
                                        <p className="mb-4">bActivate can help establish a correct diagnosis in the chronically infected mare. bActivate initiates growth of resident dormant streptococci, which can then be diagnosed and treated by standard techniques.</p>
                                        <p className="mb-4">Veterinarians call this condition subclinical endometritis, latent uterine infection or dormant endometritis. To the breeder it is the barren mare or the empty mare: covered on time, with good semen, and still not in foal.</p>
                                        <p className="mb-4">The record reads the same in every breeding forum: an older mare or an older maiden mare, bred three or four cycles, often with frozen semen, fluid after breeding, flushed with saline and oxytocin, a course of Regumate (altrenogest), culture and cytology came back clean, and she still did not take. Nothing in that record rules out a dormant infection. In a direct comparison, swab culture found 34 % of infected mares and biopsy culture 82 % (Nielsen 2005). Ask your vet, or a repro vet, for an activation culture before the next cover.</p>
                                        <p className="mb-4"><strong>Chronic infections</strong> prevent establishment of a pregnancy, and might also increase the risk of early fetal loss and abortion in the mare. In our field series, 47% (Hagyard, 30 of 64) to 84% (Kildangan, 16 of 19) of mares still not pregnant at the end of the season, despite fertile stallions and veterinary supervision, were activation-positive for a dormant infection.</p>
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
                                    <LiteYouTube id="sVS0kj84lMA" title="When to use bActivate" className={styles.videoFill} poster="/images/yt/sVS0kj84lMA-640.webp" />
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
                                <p className="mb-4"><strong>Repeated uterine infections</strong> indicate compromised uterine defense mechanisms predisposing for establishment of infections, acute as well as chronic. As chronic infections can be hard to identify bActivate should be considered for this group of problem mares.</p>
                                <p><strong>Endometrial fibrosis</strong> is induced by ongoing endometrial inflammation. Presence of beta-hemolytic streptococci within the endometrium is expected to induce endometrial inflammation, hereby increasing uterine fibrosis, and consequently decreasing fertility. If endometrial fibrosis can be minimized the number of foals each mare can produce in a lifetime is expected to increase.</p>
                                <p className="mt-4"><strong>Biofilm and dormant reservoirs</strong>: <em>Streptococcus zooepidemicus</em> can shelter in a biofilm on the surface of the endometrium and slip into a dormant state deeper in the tissue. Breaking up the biofilm treats the surface but leaves the dormant reservoir untouched, which is why a mare can improve after biofilm treatment and then fail again the following season. Read more about <a href="/blog/biofilm-in-the-mares-uterus-why-breaking-it-up-is-not-enough" className="text-primary underline">why breaking up the biofilm is not enough</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk checklist */}
            <section className="py-16" id="risk-checklist">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">Is my mare at risk of a dormant infection? The checklist</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">Activation culture with bActivate is for the problem mare: normal cycles, good timing, good semen, a clean culture and cytology, and still empty. Within that group, some mares are much more likely to carry a dormant infection than others. These are the signs, why each one counts, and what to ask the vet.</p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse text-sm">
                            <thead><tr style={{ background: '#901820', color: 'white' }}><th className="text-left p-3">Sign</th><th className="text-left p-3">Why it counts</th><th className="text-left p-3">What to ask the vet</th></tr></thead>
                            <tbody>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold align-top">12 years or older</td><td className="p-3 align-top">The lining clears bacteria less well with age. The mares in the Kildangan series averaged 12.7 years.</td><td className="p-3 align-top">An activation culture with bActivate before the next cover, even if the swab is clean.</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold align-top">Three or more foals</td><td className="p-3 align-top">Each pregnancy stretches the uterus. In older, multiparous mares it sinks below the pelvic brim, so fluid and bacteria drain less well.</td><td className="p-3 align-top">A scan for fluid after covering, and an activation culture with bActivate if she stays empty.</td></tr>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold align-top">A previous endometritis</td><td className="p-3 align-top">A mare that has been infected once has shown she clears poorly. <em>Streptococcus zooepidemicus</em> can stay behind in a dormant state that a swab does not find (Petersen 2015).</td><td className="p-3 align-top">An activation culture with bActivate before she is treated again on a clean swab.</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold align-top">Fluid in the uterus after covering</td><td className="p-3 align-top">Fluid that is still there two or three days after covering is the classic sign of delayed clearance, and the most common finding in a mare that comes back empty.</td><td className="p-3 align-top">A culture and cytology, and an activation culture with bActivate if they are clean.</td></tr>
                                <tr className="border-b border-gray-200"><td className="p-3 font-bold align-top">Early pregnancy loss</td><td className="p-3 align-top">An inflamed lining cannot hold an embryo, and a dormant infection keeps the lining inflamed without showing on the swab.</td><td className="p-3 align-top">A check of the uterus that reaches deeper than the swab before she is covered again: a biopsy or an activation culture with bActivate.</td></tr>
                                <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold align-top">Two or more failed cycles</td><td className="p-3 align-top">With good timing and proven semen. When the breeding has been right twice, the cause is with the mare. The mares in the published series had been empty for three or more cycles.</td><td className="p-3 align-top">An activation culture with bActivate in the next early estrus.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4"><strong>Any one is enough to ask.</strong> Prof. Anders Miki Bojesen, who developed bActivate with Dr. Morten Rønn Petersen, names three that each put a mare in the high-probability group on their own: age 12 or older, three or more foals, and a previous endometritis or abortion.</p>
                    <p className="text-gray-700 leading-relaxed mb-4"><strong>If she has one or more of the signs and the swab is clean:</strong> ask for an activation culture with bActivate in her next early estrus. The vet instills 10 ml, takes a normal swab 48 hours later, and treats according to the sensitivity test if anything grows. She is covered in the following cycle.</p>
                    <p className="text-gray-700 leading-relaxed mb-4"><strong>If she has none and has failed one cycle:</strong> check the timing and the semen first. Most of these mares get in foal on the next cycle.</p>
                    <p className="text-gray-700 leading-relaxed mb-4"><strong>What to say to the vet:</strong> "My mare is [age], has had [number] foals, her culture and cytology are clean, and she is still empty. Can we do an activation culture with bActivate in her next early estrus?"</p>
                    <p className="text-gray-600 text-sm">Prefer to answer the questions one at a time? <a href="/is-my-mare-a-candidate" className="underline">Take the 2-minute assessment</a>. bActivate is a prescription veterinary product; your veterinarian assesses suitability from the reproductive history, the examination and the scan.</p>
                </div>
            </section>

            <NextStep />

            {/* Mare Types */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">Which Mares Benefit Most?</h2>
                    <p className="text-gray-600 mb-8">Dormant streptococcal infections can affect mares across all breeds and ages, but certain groups are disproportionately represented in clinical case populations.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">Older Broodmares</h3>
                            <p className="text-gray-600 text-sm">Uterine defence mechanisms decline with age and parity. Mares aged 12 or older, or with three or more foals, have reduced mucociliary clearance and lymphatic drainage, making them more susceptible to persistent infection. Clinical studies include a significant proportion of older mares with long histories of infertility.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">Thoroughbred &amp; Sport Horses</h3>
                            <p className="text-gray-600 text-sm">High-value thoroughbred and warmblood mares where the economic cost of a missed season is significant. The Kildangan/Godolphin study demonstrated an <strong>89% pregnancy rate</strong> (16 of 18 covered mares, no placebo group) in barren thoroughbred problem mares after a single bActivate activation cycle followed by targeted antibiotics from the stud vet.</p>
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
                    <p className="text-gray-600 mb-8">The bActivate protocol is designed to fit within a normal breeding cycle. Activation and the follow-up veterinary treatment take place approximately <strong>one cycle before</strong> the intended breeding cycle.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                        {[
                            { step: '1', title: 'Estrus, Day 0', desc: 'Obtain pre-activation culture. Instil 10 ml bActivate in early estrus (follicle over 20 mm).' },
                            { step: '2', title: '48 Hours Later', desc: 'Obtain post-activation culture. Dormant Strep zoo now active. Begin targeted antibiotic treatment.' },
                            { step: '3', title: 'Recovery Cycle', desc: 'Complete antibiotic course. Uterus clears activation inflammation. Do not breed in this cycle.' },
                            { step: '4', title: 'Next Estrus', desc: 'Mare ready for breeding. In the field series, 83 % (Hagyard) and 16 of 18 (Kildangan) became pregnant. Neither had a placebo group.' },
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
                    <p className="mt-6 text-gray-600">Total time from bActivate administration to breeding-ready: <strong>3-4 weeks</strong>. This fits within a standard 21-day estrous cycle, meaning a single activation cycle before the target breeding cycle.</p>
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
                    <p className="mt-6 text-gray-600">A dormant infection found in the off-season can be treated before the first cover of the next season, which is what off-season screening with bActivate is for.</p>
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

            <FAQSection items={whenToUseFaqItems} />

            <InternalLinks links={[
                { to: '/activation-culture', label: 'Activation culture explained', description: 'What it is, which mares it is for, and the steps' },
                { to: '/blog/mare-not-getting-in-foal-what-to-do', label: 'Mare not getting in foal?', description: 'The five causes a vet rules out, in order, and what you can do' },
                { to: '/blog/older-mare-not-getting-in-foal', label: 'Is my mare too old to breed?', description: 'What age does to the uterus, and the work-up every older mare deserves' },
                { to: '/blog/fluid-in-mares-uterus-after-breeding', label: 'Fluid after breeding', description: 'When it is normal, when it is a problem, what the vet does' },
                { to: '/blog/problem-mare-options', label: 'The options for a problem mare', description: 'Every step a vet works through, in order, and where activation fits' },
                { to: '/equine-endometritis', label: 'Equine endometritis explained', description: 'Forms, causes, diagnosis and treatment, with sources' },
                { to: '/swab-culture-vs-bactivate', label: 'Swab vs biopsy vs bActivate', description: 'Detection rates of the three sampling options, side by side' },
                { to: '/blog/why-a-clean-swab-does-not-rule-out-infection-in-a-problem-mare', label: 'A clean swab is not a clean mare', description: 'Why a negative culture does not clear a problem mare' },
                { to: '/how-to-use', label: 'How to Use bActivate', description: 'Full veterinary protocol, instillation and follow-up' },
                { to: '/studies-effect', label: 'Clinical Evidence', description: '83% pregnancy rate in 64 problem mares at Hagyard' },
                { to: '/our-distributors', label: 'Find a Distributor', description: 'Hagyard, Midwest Vet Supply and more' },
                { to: '/shop', label: 'Order bActivate', description: 'Order directly online' },
            ]} />
        </main>
    );
}
