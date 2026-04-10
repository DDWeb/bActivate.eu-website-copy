import { useEffect } from 'react';
import styles from './Podcast.module.css';
import ReviewsSection from '@/components/ReviewsSection';

const danishVideos = [
    { id: "Dr2ridUGLus", title: "Vejen til Føl Episode 1 – Hvad er en problemhoppe?", date: "2024-03-01" },
    { id: "mIar9PYcUIA", title: "Vejen til Føl Episode 2 – Latent Endometritis og dormante infektioner", date: "2024-03-15" },
    { id: "EZ-9VSvlbQk", title: "Vejen til Føl Episode 3 – Diagnostiske metoder for problemhopper", date: "2024-04-01" },
    { id: "iyVQPjPY6Vg", title: "Vejen til Føl Episode 4 – Behandlingsmetoder og effektivitet", date: "2024-04-15" },
    { id: "CLzK8RTfUG8", title: "Vejen til Føl Episode 5 – Case studies og succesfortællinger", date: "2024-05-01" },
];

const englishVideos = [
    { id: "5t0VvgoV_ls", title: "Breeding Breakthrough: Diagnosing and Treating Latent Infections in Problem Mares", date: "2024-06-01" },
    { id: "LemEnrcgVVY", title: "Non Pregnant Mare Webinar – Biofilm and Dormant Uterine Infections in Mares", date: "2025-06-10" },
];

export default function Podcast() {
    useEffect(() => {
        document.title = 'bActivate Podcast | Equine Reproductive Health with Bojesen & Petersen';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Podcast and videos with Dr. Morten Rønn Petersen (DVM, PhD) and Prof. Anders Miki Bojesen on dormant Streptococcus zooepidemicus and the problem mare.');

        // VideoObject schema for all videos
        let schemaScript = document.getElementById('podcast-schema') as HTMLScriptElement | null;
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = 'podcast-schema';
            schemaScript.setAttribute('type', 'application/ld+json');
            document.head.appendChild(schemaScript);
        }
        const allVideos = [...danishVideos, ...englishVideos];
        schemaScript.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': allVideos.map(v => ({
                '@type': 'VideoObject',
                'name': v.title,
                'embedUrl': `https://www.youtube.com/embed/${v.id}`,
                'url': `https://www.youtube.com/watch?v=${v.id}`,
                'thumbnailUrl': `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
                'uploadDate': v.date,
                'description': 'Expert video on dormant uterine infections in mares, problem mare fertility, and the bActivate protocol. Hosted by Prof. Anders Miki Bojesen (University of Copenhagen) and Dr. Morten Rønn Petersen (DVM, PhD, Dipl. ACT).',
                'publisher': {
                    '@type': 'Organization',
                    'name': 'bActivate – Bojesen & Petersen Biotech ApS',
                    'url': 'https://bactivate.eu'
                }
            }))
        });

        return () => { document.getElementById('podcast-schema')?.remove(); };
    }, []);

    return (
        <main>
            <section className={styles.sectionMuted}>
                <div className={styles.introGrid}>
                    <div>
                        <h1 className={styles.title}>Podcast</h1>
                        <div className={styles.leadText}>
                            <p className="mb-4">If you're a <strong>breeder, veterinarian, or equine professional</strong>, this podcast is a must-listen. Professor Anders Miki Bojesen and Dr. Morten Rønn Petersen share expert insights on one of equine reproduction's most stubborn challenges: the problem mare.</p>
                            <p className="mb-4">Why do some mares fail to conceive despite multiple attempts, normal cycles and clean swab results? The answer often lies in <strong>dormant <em>Streptococcus zooepidemicus</em></strong> — a hidden bacterial infection that evades standard diagnosis and resists conventional antibiotic treatment.</p>
                            <p>The podcast and video series cover the biology of dormant infections, diagnostic best practices, the bActivate activate-first protocol, and real-world case studies from leading breeding operations including Godolphin and Hagyard Equine Medical Institute.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.title}>Speakers</h2>
                        <div className={styles.leadText}>
                            <p className="mb-6">
                                <strong>Dr. Morten Rønn Petersen DVM, PhD, Dipl. ACT</strong><br />
                                Equine Reproduction Specialist. 21+ peer-reviewed publications including <em>Nature Medicine</em> (2025).<br /><br />
                                <strong>Prof. Anders Miki Bojesen DVM, PhD</strong><br />
                                Professor of Veterinary Microbiology, University of Copenhagen. 222+ publications. Lead researcher on dormant streptococcal persister cells in the equine uterus.
                            </p>
                        </div>
                        <a href="https://open.spotify.com/show/3EhdFDhwXe6rWMOPDlculd" target="_blank" className={styles.primaryButton}>
                            Listen on Spotify
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.videoSection}>
                <h2 className={styles.sectionHeading}>Danish — Vejen til Føl</h2>
                <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem', color: '#555' }}>
                    A five-part Danish-language series covering the problem mare from first principles: what dormant infections are, how to diagnose them, and how bActivate fits into the treatment protocol.
                </p>
                <div className={styles.videoGrid}>
                    {danishVideos.map((v) => (
                        <div key={v.id} className={styles.youtubeEmbed}>
                            <iframe
                                src={`https://www.youtube.com/embed/${v.id}`}
                                title={v.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy">
                            </iframe>
                        </div>
                    ))}
                </div>

                <h2 className={styles.sectionHeading}>English</h2>
                <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem', color: '#555' }}>
                    English-language webinars and expert presentations on biofilm, dormant uterine infections, and the clinical evidence behind bActivate — accessible to breeders and veterinarians worldwide.
                </p>
                <div className={styles.videoGrid}>
                    {englishVideos.map((v) => (
                        <div key={v.id} className={styles.youtubeEmbed}>
                            <iframe
                                src={`https://www.youtube.com/embed/${v.id}`}
                                title={v.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy">
                            </iframe>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.sponsorSection}>
                <div className={styles.sponsorContent}>
                    <h2 className={styles.sponsorTitle}>Find us on YouTube</h2>
                    <hr className="border-white/30 w-24 mx-auto mb-8" />
                    <p className={styles.sponsorText}>
                        Want to learn more about <strong>problem mares and how to prevent fertility issues?</strong> Our YouTube channel is packed with <strong>webinars, expert insights, and in-depth videos</strong> covering the latest research and treatments, including the role of <strong>dormant <em>Streptococcus zooepidemicus</em></strong> in reproductive challenges.
                    </p>
                    <a href="https://www.youtube.com/@bActivate-Endometritis/videos" target="_blank" className={styles.button}>
                        Go to YouTube
                    </a>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
