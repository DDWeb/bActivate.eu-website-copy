
import { useEffect } from 'react';
import styles from './AboutUs.module.css';
import InternalLinks from '@/components/InternalLinks';

export default function AboutUs() {
    useEffect(() => {
        document.title = '私たちについて｜Bojesen & Petersen Biotech ApS';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '創業者をご紹介します：bActivateを発見・開発した獣医学者、Morten Rønn Petersen博士（DVM, PhD, Dipl. ACT）と Anders Miki Bojesen教授。');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className={styles.eyebrow}>bActivateについて</div>
                            <h1 className={styles.title}>bActivateを生み出した人々</h1>
                            <div className={styles.lead}>
                                <p>bActivateの基盤となる概念（細菌の活性化を促す仕組み）は、Morten Rønn Petersen博士（DVM, PhD）と Anders Miki Bojesen教授（DVM, PhD）によって発見されました。両氏は牝馬の細菌性子宮内膜炎に関する豊富な経験を持ち、本テーマについて複数の科学論文を発表しています。</p>
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
                                <div className={styles.profileRole}>DVM PhD. Dipl, ACT</div>
                                <div className={styles.contactInfo}>
                                    <div><strong>E:</strong> <a href="mailto:petersen@bactivate.eu">petersen@bactivate.eu</a></div>
                                    <div><strong>T:</strong> <a href="tel:+4560712169">+45 60 71 21 69</a></div>
                                    <div className="mt-2"><a href="https://www.linkedin.com/in/mortenrpetersen" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                                </div>
                            </div>
                            <div className={styles.bio}>
                                <p>繁殖への関心は、私の職業人生を通じての一貫したテーマでした。私は大動物診療の獣医師として職業人生を始め、繁殖シーズンの大半をスタンダードブレッドの牧場で過ごしました。繁殖、とりわけ馬の繁殖への関心から、私はカリフォルニアへ渡り、Barry Ball教授と Irwin Liu教授の指導のもとで馬繁殖のレジデント（resident）を務めました。</p>
                                <p>レジデンシーの後、デンマークのコペンハーゲン大学 獣医繁殖・産科学部門で博士号を取得しました。このときは、卵母細胞および初期胚の評価と発生に焦点を当てました。</p>
                                <p>その後、同じ部門で助教の職に就きました。研究の焦点は牝馬の子宮内膜炎、とりわけ子宮内膜炎の最も一般的な原因である Streptococcus equi subspecies zooepidemicus（S. zoo）へと移りました。</p>
                                <p>慢性的に感染した牝馬の子宮内膜深部に S. zoo が局在することを示したことで、この分野の研究をさらに進めました。最も重要な発見は、慢性感染した牝馬の S. zoo が子宮内膜の中で不活性・休眠状態に入り得ること、そして特殊な細菌培養培地を子宮内に注入することで、それまで休眠した細菌のリザーバーに潜んでいた S. zoo の活発な増殖を誘導できることを示した点です。この発見により、これまで無症候性だった感染の診断が可能になりました。</p>
                                <p>不受胎牝馬を診断する際に bActivate を用いた実地研究のデータは、診断の向上が治療効果と牝馬の受胎性を高めたことを示しています。私と共同研究者は、これらの発見が馬とヒトの双方の利益のために牝馬の繁殖効率を高めることを願っています。Petersen博士は、2025年の <em>Nature Medicine</em> 誌掲載論文を含め、21本以上の査読付き論文を執筆しています。</p>
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
                                <div className={styles.profileRole}>獣医微生物学教授</div>
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
                                <p>私は、獣医学の学生時代に感染微生物学の講義を受けて以来、細菌と宿主の相互作用に関心を抱いてきました。2000年に獣医師（DVM）となり、すぐに博士研究を開始しました。その研究もまた生殖器の感染を扱うものでしたが、対象はニワトリでした。2003年に博士号を取得して教員職に就き、2012年に予防獣医微生物学の教授職に至りました。</p>
                                <p>2007年から、Morten Rønn Petersen博士と協力し、牝馬の子宮内膜炎の原因としての Streptococcus equi subspecies zooepidemicus（S. zoo）の研究を始めました。</p>
                                <p>あらゆるタイプの牝馬の5〜10%が、S. zoo による無症候性の子宮内膜感染を抱えている可能性があると発見したことは、素晴らしい経験でした。その後、特に Hagyard Equine Medical Institute の Kristina Lu の協力を得て、こうした無症候性感染の悪影響を示すとともに、bActivateによる除去が生存産駒率をほぼ正常な水準（75〜80%）まで回復させ、繁殖をあきらめられていた牝馬をよみがえらせることを実証しました。</p>
                                <p>S. zoo に関する現在の研究では、この菌が、無症候性感染の牝馬で見られる休眠状態と活発な分裂状態とを、どのように行き来するのかに焦点を当てています。これらの過程における基盤的な制御機構を理解することが、S. zoo と子宮内膜組織がどのように相互作用するかについての知見を深める鍵となります。Bojesen教授は157本以上の査読付き論文を執筆しており、カタール・アルシャカブで開催された International Workshop on Equine Endometritis（2016年）に招待講演者として登壇しました。</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <InternalLinks links={[
                { to: '/studies-effect', label: '臨床研究', description: '受胎率83%、査読付きエビデンス' },
                { to: '/what-is-bactivate', label: 'bActivateとは？', description: '休眠細菌の活性化の背後にある科学' },
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、オンラインで直接注文' },
            ]} />
        </main>
    );
}
