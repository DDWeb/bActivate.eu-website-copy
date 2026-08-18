
import { useEffect } from 'react';
import styles from './WhatIsBactivate.module.css';
import InternalLinks from '@/components/InternalLinks';

export default function WhatIsBactivate() {
    useEffect(() => {
        document.title = 'bActivateとは？｜不受胎牝馬・空胎牝馬の隠れた感染を診断';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bActivateは、空胎牝馬・不受胎牝馬の子宮内で休眠した Streptococcus zooepidemicus を診断します。これは通常のスワブ培養が、罹患牝馬の約60%で見逃す隠れた感染です。');

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
            'description': 'Subclinical endometritis is a persistent low-grade uterine infection in broodmares caused by dormant Streptococcus equi subspecies zooepidemicus in a biofilm state. Standard uterine swab cultures yield false-negative results in over 60% of affected mares because the bacteria have lowered their metabolic rate and resist detection. The condition causes recurring fertility failure, accumulation of uterine fluid, and early embryo loss. Across clinical studies, 47-87% of problem mares tested activation-positive, indicating a latent infection that standard culture had not detected. Diagnosis requires reactivation of the dormant bacteria, achieved by uterine instillation of bActivate, followed by a post-activation culture 48 hours later.',
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
                            <div className={styles.eyebrow}>bActivateについて</div>
                            <h1 className={styles.title}>bActivateとは？ 不受胎牝馬（problem mare）に潜む休眠レンサ球菌を診断する</h1>
                            <div className={styles.leadText}>
                                <p>bActivateは、馬の子宮内で休眠状態にある <em>Streptococcus equi</em> subsp. <em>zooepidemicus</em> を再活性化させる、獣医用の細菌培養培地です。本製品は、Anders Miki Bojesen教授（DVM, PhD）と Morten Rønn Petersen博士（DVM, PhD, Dipl. ACT）（Bojesen &amp; Petersen Biotech ApS、デンマーク・コペンハーゲン）によって開発されました。正常な発情周期を示し、通常の培養検査でも陰性であるにもかかわらず受胎しない不受胎牝馬に対して、獣医師が子宮内へ注入します。休眠状態の細菌は48時間以内に再活性化し、通常のスワブ培養で検出できるようになります。その後、標的を絞った抗菌薬治療によって感染を除去します。臨床試験では、<strong>受胎率83%</strong>（Hagyard Equine Medical Institute、64頭、Dr. Kristina Lu）、<strong>受胎率89%</strong>（Kildangan Stud／Godolphin、19頭）を記録しています。査読付き論文：Petersen &amp; Bojesen, <em>Veterinary Microbiology</em>, 2015. DOI: <a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer">10.1016/j.vetmic.2015.06.006</a>。</p>
                            </div>

                            <div className="relative mt-8">
                                <img
                                    src="/images/what-is-1.jpeg"
                                    alt="bActivateの科学"
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
                                    alt="牝馬と子馬"
                                    width={610}
                                    height={610}
                                    className="w-full h-auto rounded"
                                />
                            </div>

                            <h2 className={styles.sideTitle}>空胎の牝馬（non-pregnant mare）が、なぜ隠れた子宮内感染を抱えているのか</h2>
                            <div className="text-gray-600 space-y-4">
                                <p>全牝馬の最大15%が、空胎牝馬・不受胎牝馬（problem mare）・不妊牝馬（barren mare）などと呼ばれ、受胎に苦労しています。近年の研究により、子宮内の休眠細菌感染がその主要な原因であることが示されています。休眠細菌は通常の手法では診断が難しく、抗菌薬が効きにくい状態（薬剤寛容／tolerance）にあります。効率的に対処するには細菌を再活性化する必要があり、これは細菌培養培地であるbActivateを子宮内に注入することで実現します。</p>
                                <p>bActivateは、ケンタッキー州にある世界最大の馬病院 <strong>Hagyard Equine Medical Institute</strong> の繁殖（therio）チームによって試験されました。同チームは、bActivateを標準的な繁殖検査に組み込むことで、牝馬の受胎性をほぼ正常な水準まで回復させています。</p>
                                <p>このような状況は、世界中の生産牧場で見られます。培養検査は陰性（clean culture）であるのに、それでも受胎しない牝馬です。Hagyard Equine Medical Institute では、3シーズン以上続けて受胎しなかった64頭の不受胎サラブレッド牝馬を、bActivateを用いて調査しました。その結果、<strong>83%（64頭中53頭）が受胎</strong>し、分娩結果が確認された馬のうち <strong>70%が生存産駒を出産</strong>しました。これらの牝馬にとっては、通常の診断では見逃されていた隠れた感染こそが、空胎のシーズンと健康な産駒との唯一の分かれ目だったのです。</p>
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
                        bActivateの基盤となる概念（細菌の活性化を促す仕組み）は、Morten Rønn Petersen博士（DVM, PhD）と Anders Miki Bojesen教授（DVM, PhD）によって発見されました。両氏は牝馬の細菌性子宮内膜炎（bacterial endometritis）に関する豊富な経験を持ち、本テーマについて複数の科学論文を発表しています。
                    </p>
                </div>
            </section>

            {/* Background Info - Multi Column */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.infoGrid}>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">不受胎牝馬が、検査では陰性なのに受胎しない理由</h2>
                            <p className="mb-4">子宮内の細菌感染は、牝馬の受胎性を低下させることがあります。細菌は、体型（コンフォメーション）の問題や、交配・分娩の際に、子宮頸管を通じて子宮内へ侵入します。健康な若い牝馬は細菌を速やかに排除します。一方、子宮の防御機構（uterine defense mechanism）が低下した牝馬では、細菌が子宮内に感染を成立させることがあります。感染が見過ごされたり、治療されないまま放置されたりすると、感染は慢性化することがあります。</p>
                            <p>このような状態から最も多く分離される細菌が、Streptococcus equi subsp. zooepidemicus（以下 Strep. zoo）です。慢性的に感染した牝馬では、Strep. zoo が子宮内膜（endometrium）の深部に感染を成立させることがあります。Strep. zoo は慢性感染の間に代謝速度を低下させると考えられており、活発な細菌増殖を前提とする診断や抗菌薬治療を難しくします。</p>
                            <p className="mt-4">通常の培養検査がこれを見逃してしまう原因は「休眠（dormancy）」です。慢性的に感染した牝馬では、Strep. zoo はタンパク質合成とDNA複製を停止し、代謝的に不活性な状態に入ります。この状態の細菌は、通常のスワブが届く範囲より深い子宮内膜組織の内部でバイオフィルムを形成し、通常の培養培地では増殖しません。牝馬は正常に発情を繰り返し、通常の検査も問題なく通過し、分泌物や発熱も見られません。細菌は存在し続けながらも検出されず、初期胚の発育に不利な環境をつくり出します。細菌を再活性化する方法がなければ、感染は検出されないまま残り、牝馬は明確な原因が分からないまま、シーズンを重ねても空胎のままとなります。</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">bActivateが、空胎牝馬の隠れた感染を検出する仕組み</h2>
                            <p className="mb-4">bActivateは、牝馬における Strep. zoo に関連した慢性・無症候性（subclinical）の子宮内感染を検出できる培養培地です。子宮内膜に Strep. zoo による慢性感染が存在する場合、bActivateを子宮内へ注入すると、その細菌が活性化されます。活性化した Strep. zoo は、通常の微生物学的診断法で検出できるようになります。</p>
                            <p className="mb-4">bActivateは、「蘇生促進因子（resuscitation-promoting factors）」——細菌を不活性に保つ体内の休眠メカニズムを解除する分子——を利用した、世界初の商用獣医製品です。子宮内への注入から24〜48時間以内に、それまで検出できなかった Strep. zoo が再活性化し、通常のスワブ培養で検出できるようになります。</p>
                            <p className="mb-4">このプロトコルは、獣医師が現在用いている手法を置き換えるものではありません。注入前に「活性化前培養（pre-activation culture）」を採取し、その48時間後に「活性化後培養（post-activation culture）」を採取します。両者を比較することで、休眠細菌が存在していたかどうかを確認できます。陽性であれば、標的を絞った抗菌薬治療を開始し、次の発情周期で交配を行います。bActivateには、抗菌薬・ホルモン・生きた細菌はいっさい含まれていません。</p>

                            <div className={styles.videoContainer}>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-label="bActivate 製品紹介動画"
                                >
                                    <source src="/images/hero.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className={`${styles.section} bg-gray-50`}>
                <div className={styles.container}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">馬の繁殖分野をリードする科学者らによって開発</h2>
                        <p className="text-gray-600 mb-4">bActivateは、コペンハーゲン大学（University of Copenhagen）での研究から生まれ、世界有数の馬病院で検証されました。本製品は、コペンハーゲン大学の獣医微生物学教授であり、獣医微生物学および細菌の持続生残（bacterial persistence）に関する220本以上の査読付き論文を持つ Anders Miki Bojesen教授（DVM, PhD）と、米国獣医繁殖学会（American College of Theriogenologists）認定医であり、コペンハーゲンの Rigshospitalet（国立病院）不妊治療クリニックの検査室長を務める Morten Rønn Petersen博士（DVM, PhD, Dipl. ACT）によって考案されました。</p>
                        <p className="text-gray-600 mb-4">Petersen博士の経歴は、馬の繁殖医療の分野では異色です。博士は UC Davis で馬繁殖学のレジデントとして研修を受け、コペンハーゲン大学で獣医繁殖学の博士号を取得し、2012年以降は Rigshospitalet のヒト不妊治療クリニックに勤務しています。馬の繁殖病理学とヒトの生殖医療という二つの専門性が、bActivateの活性化メカニズムの開発に直接生かされました。</p>
                        <p className="text-gray-600">臨床検証は、ケンタッキー州レキシントンの Hagyard Equine Medical Institute の Dr. Kristina Lu と、アイルランドで Godolphin が運営する Kildangan Stud の繁殖チームにより、それぞれ独立して実施されました。その実験的メカニズムは <em>Veterinary Microbiology</em> 誌に発表されています（Petersen et al., 2015, DOI: 10.1016/j.vetmic.2015.06.006）。Bojesen and Petersen Biotech ApS は2013年にコペンハーゲンで設立されました。</p>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/when-to-use', label: 'bActivateの使用時期', description: '牝馬に隠れた感染があるサイン' },
                { to: '/studies-effect', label: '臨床結果', description: 'Hagyardでの受胎率83%、エビデンスを見る' },
                { to: '/how-to-use', label: '獣医向けプロトコル', description: '獣医師のためのステップ・バイ・ステップ手順' },
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、ヨーロッパから直接注文' },
            ]} />
        </main>
    );
}
