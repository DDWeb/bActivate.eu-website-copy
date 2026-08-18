import { useEffect } from 'react';
import styles from './Podcast.module.css';
import LiteYouTube from '@/components/LiteYouTube';
import { podcastTranscriptHtml } from '@/lib/podcastTranscript';

const TRANSCRIBED_EPISODE_ID = '5t0VvgoV_ls';

// Danish-language series "Vejen til Føl" removed from the JA site (Martin, 2026-08-18).

const englishVideos = [
    { id: "5t0VvgoV_ls", title: "Breeding Breakthrough: Diagnosing and Treating Latent Infections in Problem Mares", date: "2024-06-01" },
    { id: "LemEnrcgVVY", title: "Non Pregnant Mare Webinar, Biofilm and Dormant Uterine Infections in Mares", date: "2025-06-10" },
];

export default function Podcast() {
    useEffect(() => {
        document.title = 'bActivateポッドキャスト｜Bojesen & Petersen と学ぶ馬の繁殖の健康';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Morten Rønn Petersen博士（DVM, PhD）と Anders Miki Bojesen教授による、休眠 Streptococcus zooepidemicus と不受胎牝馬に関するポッドキャスト・動画。');

    }, []);

    return (
        <main>
            <section className={styles.sectionMuted}>
                <div className={styles.introGrid}>
                    <div>
                        <h1 className={styles.title}>ポッドキャスト</h1>
                        <div className={styles.leadText}>
                            <p className="mb-4">生産者・獣医師・馬の専門家の方にとって、このポッドキャストは必聴です。<strong>Anders Miki Bojesen教授</strong>と <strong>Morten Rønn Petersen博士</strong>が、馬の繁殖における最も手強い課題のひとつ——不受胎牝馬——について専門的な知見を語ります。</p>
                            <p className="mb-4">何度交配しても、発情周期が正常で、スワブ検査も陰性なのに受胎しない牝馬がいるのはなぜでしょうか。その答えはしばしば、<strong>休眠状態の <em>Streptococcus zooepidemicus</em></strong> にあります。これは通常の診断をすり抜け、従来の抗菌薬治療にも抵抗する、隠れた細菌感染です。</p>
                            <p>本ポッドキャストおよび動画シリーズでは、休眠感染の生物学、診断のベストプラクティス、bActivateの「まず活性化する」プロトコル、そして Godolphin や Hagyard Equine Medical Institute をはじめとする一流の生産現場での実例を取り上げます。</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.title}>出演者</h2>
                        <div className={styles.leadText}>
                            <p className="mb-6">
                                <strong>Morten Rønn Petersen博士（DVM, PhD, Dipl. ACT）</strong><br />
                                馬繁殖の専門医。<em>Nature Medicine</em>（2025年）を含む21本以上の査読付き論文。<br /><br />
                                <strong>Anders Miki Bojesen教授（DVM, PhD）</strong><br />
                                コペンハーゲン大学 獣医微生物学教授。222本以上の論文。馬子宮における休眠レンサ球菌パーシスター細胞の主任研究者。
                            </p>
                        </div>
                        <a href="https://open.spotify.com/show/3EhdFDhwXe6rWMOPDlculd" target="_blank" className={styles.primaryButton}>
                            Spotifyで聴く
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.videoSection}>
                <h2 className={styles.sectionHeading}>英語コンテンツ</h2>
                <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem', color: '#555' }}>
                    バイオフィルム、休眠子宮内感染、bActivateの臨床エビデンスを扱う英語のウェビナー・専門家プレゼンテーションです。世界中の生産者・獣医師がご覧いただけます。
                </p>
                <div className={styles.videoGrid}>
                    {englishVideos.map((v) => (
                        <div key={v.id} className={styles.youtubeEmbed}>
                            <LiteYouTube id={v.id} title={v.title} />
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.videoSection}>
                <h2 className={styles.sectionHeading}>トランスクリプト：From Headache to Hope</h2>
                <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem', color: '#555' }}>
                    エピソード「From Headache to Hope: If Only Breeders Knew」の全編集済みトランスクリプトです。ホストの Martin Hinz が、Anders Miki Bojesen教授と Morten Rønn Petersen博士に、休眠状態の <em>Streptococcus zooepidemicus</em>、なぜ通常のスワブでは見逃されるのか、そして活性化と治療の臨床結果について聞きます。
                </p>
                <div
                    style={{ maxWidth: '820px', margin: '0 auto', lineHeight: 1.7, color: '#333' }}
                    dangerouslySetInnerHTML={{ __html: podcastTranscriptHtml }}
                />
            </section>

            <section className={styles.sponsorSection}>
                <div className={styles.sponsorContent}>
                    <h2 className={styles.sponsorTitle}>YouTubeでもご覧いただけます</h2>
                    <hr className="border-white/30 w-24 mx-auto mb-8" />
                    <p className={styles.sponsorText}>
                        <strong>不受胎牝馬について、また受胎の問題をどう防ぐか</strong>についてもっと知りたい方へ。当社のYouTubeチャンネルには、最新の研究や治療——繁殖の課題における<strong>休眠状態の <em>Streptococcus zooepidemicus</em></strong> の役割を含む——を扱う<strong>ウェビナー、専門家の知見、詳しい動画</strong>が満載です。
                    </p>
                    <a href="https://www.youtube.com/@bActivate-Endometritis/videos" target="_blank" className={styles.button}>
                        YouTubeへ
                    </a>
                </div>
            </section>

        </main>
    );
}
