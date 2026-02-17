import styles from './Podcast.module.css';
import ReviewsSection from '@/components/ReviewsSection';

export default function Podcast() {
    const danishVideos = [
        "Dr2ridUGLus",
        "mIar9PYcUIA",
        "EZ-9VSvlbQk",
        "iyVQPjPY6Vg",
        "CLzK8RTfUG8"
    ];

    const englishVideos = [
        "5t0VvgoV_ls",
        "LemEnrcgVVY"
    ];

    return (
        <main>
            <section className={styles.sectionMuted}>
                <div className={styles.introGrid}>
                    <div>
                        <h1 className={styles.title}>Podcast</h1>
                        <div className={styles.leadText}>
                            <p className="mb-4">If you’re a <strong>breeder, veterinarian, or equine professional</strong>, this podcast is a must-listen! Don’t miss out on expert insights that could change the way we approach equine reproduction.</p>
                            <p className="mb-4">We bring together two of the industry’s top experts to unravel the mystery of the problem mare.</p>
                            <p>Why do some mares fail to conceive despite multiple attempts? Could the answer lie in <strong>dormant Streptococcus zooepidemicus</strong>, a hidden bacterial infection that evades both diagnosis and treatment?</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.title}>Speakers</h2>
                        <div className={styles.leadText}>
                            <p className="mb-6"><strong>Dr. Morten Rønn Petersen DVM, PhD, Dipl, ACT</strong> – Equine Reproduction Specialist & Veterinarian<br /><br /><strong>Prof. Anders Miki Bojesen</strong> – Veterinary Microbiologist & Infectious Disease Expert</p>
                        </div>
                        <a href="https://open.spotify.com/show/3EhdFDhwXe6rWMOPDlculd" target="_blank" className={styles.primaryButton}>
                            Lyt med på Spotify her
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.videoSection}>
                <h2 className={styles.sectionHeading}>Danish</h2>
                <div className={styles.videoGrid}>
                    {danishVideos.map((id) => (
                        <div key={id} className={styles.youtubeEmbed}>
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    ))}
                </div>

                <h2 className={styles.sectionHeading}>English</h2>
                <div className={styles.videoGrid}>
                    {englishVideos.map((id) => (
                        <div key={id} className={styles.youtubeEmbed}>
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.sponsorSection}>
                <div className={styles.sponsorContent}>
                    <h2 className={styles.sponsorTitle}>Find us on Youtube</h2>
                    <hr className="border-white/30 w-24 mx-auto mb-8" />
                    <p className={styles.sponsorText}>
                        Want to learn more about <strong>problem mares and how to prevent fertility issues?</strong> Our YouTube channel is packed with <strong>webinars, expert insights, and in-depth videos</strong> covering the latest research and treatments, including the role of <strong>dormant Streptococcus zooepidemicus</strong> in reproductive challenges.
                    </p>
                    <a href="https://www.youtube.com/@bActivate-Endometritis/videos" target="_blank" className={styles.button}>
                        Go to youtube
                    </a>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
