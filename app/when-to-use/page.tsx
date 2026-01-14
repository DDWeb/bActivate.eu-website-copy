import Image from 'next/image';
import styles from './page.module.css';
import ReviewsSection from '@/components/ReviewsSection';

export default function WhenToUse() {
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div>
                            <div>
                                <div className={styles.eyebrow}>Om bActivate</div>
                                <h1 className={styles.title}>When to use?</h1>

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
                                        <Image
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
                                <Image
                                    src="/images/when-to-use-1.jpeg"
                                    alt="Horses in field"
                                    fill
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

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <hr className="border-gray-300 mb-8" />
                    <p className="text-xl italic text-gray-700">
                        The concept behind bActivate (promoting bacterial-activation) was discovered by Morten Rønn Petersen, DVM, PhD and Professor Anders Miki Bojesen, DVM, PhD. They both have extensive experience with bacterial endometritis in mares and have published several scientific papers on the subject.
                    </p>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
