
import { useEffect } from 'react';
import styles from './HowToUse.module.css';
import InternalLinks from '@/components/InternalLinks';

export default function HowToUse() {
    useEffect(() => {
        document.title = 'bActivateの使い方｜獣医向けプロトコル';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'ステップ・バイ・ステップの獣医向けプロトコル：発情初期に bActivate 10 ml を注入し、48時間後に培養、標的抗菌薬で治療。獣医師のための完全な手順。');

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
            'name': 'How to Use bActivate, Veterinary Protocol for Problem Mares',
            'description': 'Step-by-step protocol for uterine instillation of bActivate, post-activation culture, and antibiotic treatment of subclinical endometritis in problem mares.',
            'totalTime': 'PT48H',
            'tool': [{ '@type': 'HowToTool', 'name': 'bActivate vial (10 ml)' }, { '@type': 'HowToTool', 'name': 'Insemination pipette' }, { '@type': 'HowToTool', 'name': '0.9% NaCl saline (10 ml)' }],
            'step': [
                { '@type': 'HowToStep', 'position': 1, 'name': 'Obtain pre-activation culture', 'text': 'Obtain a pre-activation uterine culture sample using a biopsy or low volume lavage to improve diagnostic sensitivity and specificity. Perform when the mare is in early estrus (largest follicle 25-30 mm).' },
                { '@type': 'HowToStep', 'position': 2, 'name': 'Prepare the bActivate vial', 'text': 'Thaw and shake the vial. For freeze-dried formulation: add 10 ml of NaCl (0.9%) and shake until a homogeneous solution is established.' },
                { '@type': 'HowToStep', 'position': 3, 'name': 'Instill bActivate into the uterus', 'text': 'Instill bActivate (10 ml) into the uterus of the mare using an insemination pipette and standard insemination technique.' },
                { '@type': 'HowToStep', 'position': 4, 'name': 'Obtain post-activation culture after 48 hours', 'text': 'Obtain a post-activation uterine culture sample 48 hours after instillation. Dormant Streptococcus zooepidemicus will now be reactivated and detectable by standard culture.' },
                { '@type': 'HowToStep', 'position': 5, 'name': 'Begin targeted antibiotic therapy', 'text': 'Begin appropriate antimicrobial therapy (uterine and systemic antibiotics) based on the results of the post-activation culture. Do not breed in the same estrus cycle, breed in the following cycle.' }
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
                            <div className={styles.eyebrow}>bActivateについて</div>
                            <h1 className={styles.title}>bActivateの使い方 ― 獣医向けプロトコル</h1>

                            <h2 className={styles.subtitle}>使用目的</h2>
                            <div className={styles.textBlock}>
                                <p>bActivateは、子宮の防御機構が低下した牝馬、および慢性・無症候性（subclinical）の感染が疑われる牝馬に使用します。この繁殖牝馬グループは、過去の子宮内感染、子宮内液の貯留、受胎性の低下を特徴とします。これ以外の繁殖牝馬グループでは、bActivateの効果は得られにくいと考えられます。</p>
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
                    <h2 className={styles.storageTitle}>保管方法</h2>
                    <div className="text-xl">
                        <p className="mb-2">凍結乾燥製剤は5°Cで保管してください。</p>
                        <p>凍結乾燥粉末を付属の生理食塩水（0.9% NaCl）で再懸濁し、均一な溶液になるまで振り混ぜてください。</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title}>使用方法</h2>
                    <div className={styles.textBlock}>
                        <p className="mb-4">細菌培養・活性化・標準的な子宮内膜炎治療は、牝馬が発情期にあるときに行います。活性化は発情初期（中等度の子宮浮腫、最大卵胞25〜30mm）に実施するのが理想で、発情期中にできるだけ多くの治療を行えるようにします。</p>
                        <p className="mb-4">このプロトコルは、獣医学の標準的な文献に掲載されています。John Dascanio教授（Texas Tech University）と Patrick McCue教授（Colorado State University）が編集した参考書 <em>Equine Reproductive Procedures</em>（第2版、Wiley-Blackwell、2021年）第38章「Latent Uterine Bacterial Infections（潜在性子宮内細菌感染）」に記載されています。完全な書誌情報は下記の「参考文献」をご覧ください。</p>

                        <h3 className="text-xl font-bold mb-4">以下の手順を含めてください</h3>
                        <ol className={styles.instructionList}>
                            <li>活性化前の子宮培養サンプルを採取します。診断の感度と特異度を高めるため、生検（biopsy）または少量子宮洗浄（low-volume lavage）による採取を推奨します。</li>
                            <li>使用前にバイアルを解凍し、振って活性化成分を混合します。凍結乾燥製剤の場合は、生理食塩水（0.9% NaCl）10 ml を加え、均一な溶液になるまでバイアルを振ってください。</li>
                            <li>授精用ピペットを用い、標準的な授精手技で bActivate（10 ml）を牝馬の子宮内に注入します。</li>
                            <li>bActivate注入から48時間後に、活性化後の子宮培養サンプルを採取します。</li>
                            <li>活性化後培養の結果に基づき、適切な抗菌薬治療（子宮内および全身投与）を開始します。</li>
                        </ol>

                        <div className={styles.timeImageContainer}>
                            <img
                                src="/images/how-to-use-time.jpg"
                                alt="タイムライン"
                                width={773}
                                height={239}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>

                        <p className="mb-4 mt-8">Strep. zoo が活性化後にのみ分離される場合、または活性化後に細菌数が増加する場合、その牝馬は慢性感染の状態にあり、局所および全身の抗菌薬治療を開始すべきです。子宮内に液体や分泌物が認められる場合は、子宮を清浄化するために、粘液溶解剤（mucolytic）を加える／加えない子宮洗浄を、子宮収縮薬（ecbolic）による治療と併せて行うことも適応となります。</p>
                        <p className="mb-4">細菌培養を活性化の前後で行うのは、牝馬によっては活性化前に大腸菌（E. coli）が陽性となり、活性化後にのみ Strep. zoo が陽性となる場合があるためです。活性化後のサンプルしか採取しないと、治療に関わる重要な情報を見逃すおそれがあります。<br />なお、慢性感染した牝馬に bActivate を子宮内注入して行う活性化そのものは、牝馬の慢性子宮内膜炎に対する治療ではなく、診断の補助である点にご注意ください。</p>

                        <h3 className="text-xl font-bold mb-2 mt-8">注意事項</h3>
                        <p className="mb-4">活性化を行ったのと同じ発情周期での交配は推奨されません。子宮内に自己以外の物質が存在すると、炎症が起こります。bActivateを子宮内に注入した場合も同様です。子宮の炎症は受胎性に悪影響を及ぼすため、交配は次のサイクルに延期してください。</p>
                        <p className="mb-4">Strep. zoo に慢性感染した牝馬の子宮に bActivate を注入すると、無症候性で不活性だった感染が活性化されますが、発熱・食欲不振・不快感といった全身への影響は生じません。ただし感染が重度の場合は、子宮内膜炎の明らかな臨床徴候（子宮からの分泌物、子宮内の液体／滲出液の貯留）が現れます。<br />bActivateは、子宮復古が完全に終わった不妊牝馬で試験されています。分娩後の牝馬については、子宮復古（uterine involution）が完全に終わるまでは bActivate の使用を推奨しません（詳細は利用規約をご参照ください）。</p>

                        <h3 className="text-xl font-bold mb-2 mt-8">参考文献</h3>
                        <p className="mb-4"><a href="https://doi.org/10.1002/9781119556015.ch38" target="_blank" rel="noopener noreferrer">Petersen, M. R. and Bojesen, A. M. (2021). Latent Uterine Bacterial Infections. In: Dascanio, J. J. and McCue, P. M. (eds.), Equine Reproductive Procedures, 2nd edition, Wiley-Blackwell, chapter 38, pp. 141-142.</a> The authors of this chapter developed bActivate and disclose that commercial interest in the publication.<br /><a href="https://clinicaltheriogenology.net/index.php/CT/article/view/12588" target="_blank" rel="noopener noreferrer">Petersen, M. R., Nielsen, J. M., Lehn-Jensen, H. and Bojesen, A. M. (2009). Streptococcus equi subspecies zooepidemicus resides deep in the chronically infected endometrium of mares, Clinical Theriogenology 1, 393-409.</a><br /><a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer">Petersen, M. R., Skive, B., Christoffersen, M., Lu, K., Nielsen, J. M., Troedsson, M. H. T. and Bojesen, A. M. (2015). Activation of persistent Streptococcus equi subspecies zooepidemicus in mares with subclinical endometritis, Veterinary Microbiology 179(1-2), 119-125.</a><br />Petersen, M. R., Lu, K., Christoffersen, M., Nielsen, J. M., Troedsson, M. H. T. and Bojesen, A. M. (2013). Impact of activation and subsequent antimicrobial treatment of dormant endometrial streptococci in the Thoroughbred problem mare, a descriptive field study, abstract, Clinical Theriogenology 5, 408 (Society for Theriogenology Annual Meeting, Louisville, Kentucky).</p>

                        <h3 className="text-xl font-bold mb-2 mt-8">会社情報</h3>
                        <p>Bojesen and Petersen Biotech ApS, c/o Anders Miki Bojesen, Strandboulevarden 23, 2100 Copenhagen, Denmark</p>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/studies-effect', label: '臨床研究', description: '受胎率83%、Hagyard・Godolphin ほか' },
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、日本へ発送' },
                { to: '/our-distributors', label: '販売店一覧', description: '世界各国の獣医用販売店' },
                { to: '/about-us', label: '創業者について', description: 'Bojesen教授 & Petersen博士、科学者チーム' },
            ]} />
        </main>
    );
}
