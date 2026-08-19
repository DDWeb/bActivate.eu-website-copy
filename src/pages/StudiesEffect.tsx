import { useEffect } from 'react';
import styles from './StudiesEffect.module.css';
import InternalLinks from '@/components/InternalLinks';

export default function StudiesEffect() {
    useEffect(() => {
        document.title = 'bActivate 臨床エビデンス｜不受胎牝馬・空胎牝馬で受胎率83%';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '臨床エビデンス：Hagyardで受胎率83%（64頭）、Kildangan（Godolphin）で89%。不受胎牝馬・空胎牝馬・不妊牝馬の隠れた子宮内感染に関する研究。');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>臨床エビデンス：不受胎牝馬・空胎牝馬における bActivate</h1>

                    <div className="bg-white border border-gray-200 rounded p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed">bActivateが何を明らかにし、担当獣医師が明らかになった感染を治療したときに何が起こるかは、3つの臨床評価によって裏付けられています。<strong>Hagyard Equine Medical Institute</strong>（米国ケンタッキー州レキシントン）では、Dr. Kristina Lu のチームが64頭の不受胎サラブレッド牝馬（3サイクル以上不妊）を活性化・治療し、<strong>83%（53/64）が受胎</strong>、<strong>70%（結果が判明した46頭中32頭）が生存産駒</strong>を得ました（<a href="https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen &amp; Bojesen, Clinical Theriogenology 2014</a>）。Godolphin が運営するアイルランドの <strong>Kildangan Stud</strong> では、<strong>交配した不受胎牝馬の89%（16/18）が受胎</strong>し、<strong>87%（結果が判明した15頭中13頭）が生存産駒を出産</strong>しました（<a href="https://doi.org/10.1016/j.jevs.2018.05.162" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen, Rosenbrock, Osborne &amp; Bojesen, J Equine Vet Sci 2018</a>）。査読付きの実験研究（<a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen et al., Vet Microbiol 2015</a>）では、bActivateが休眠細菌を活性化した割合が、PBS対照群の8%に対し<strong>投与群で64%</strong>であることが確認されました（n=37）。これらの研究は、独立した診療所・生産牧場で実施されました。bActivateの創業者は結果報告の共著者であり、2件のフィールド研究にプラセボ群は含まれていません。</p>
                    </div>

                    <div className={styles.textGrid}>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">隠れた感染。続く不妊。逃してきた機会。あまりに長い間、不受胎牝馬——スワブが陰性で、発情周期も正常、種牡馬の繁殖能力も確認されているのに受胎しない空胎牝馬——は、目に見えない繁殖の壁に直面してきました。<br />研究によれば、こうした不妊牝馬の80%が、従来の検査では検出できない隠れた子宮内感染を抱えており、それが受胎を険しい闘いにしています。</p>
                            <p>この一連の資料は、ひとつの突破口を紹介します——<b>bActivate</b>です。空胎牝馬の慢性子宮内感染の最も一般的な原因である休眠状態の <b>Streptococcus equi subsp. zooepidemicus</b> を再活性化することで、bActivateはかつて見えなかったものを明らかにし、こうしたとらえどころのない感染を初めて正確に診断できるようにします。</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <p className="mb-4">当社の研究と実地のエビデンスに支えられ、この一連の成果は、不受胎牝馬の受胎性を回復させる bActivate の確かな成功を繰り返し示しています。実証された結果、実用的な解決策、そして新たな希望——これは馬の繁殖の健康を変えていくための道しるべです。</p>
                            <p>どの感染も隠れたままにならず、どの牝馬も置き去りにされない未来へ、踏み出しましょう。</p>
                        </div>
                    </div>

                    <hr className="mb-12 border-gray-200" />

                    {/* Benchmark: how hard is this group */}
                    <div style={{ margin: "3rem 0", padding: "2.5rem", background: "#fff", border: "1px solid #e5e7eb", borderLeft: "4px solid #901820" }}>
                        <h2 style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "2px", color: "#901820", marginBottom: "0.5rem", fontWeight: 600 }}>この牝馬グループはどれほど難しいのか</h2>
                        <p style={{ color: "#333", lineHeight: 1.7, marginBottom: "1rem" }}>これらの研究の牝馬は、繁殖牝馬診療の中でも最も難しいグループです。Kildangan のコホートでは、対象牝馬は平均<strong>12.7歳</strong>で、活性化前に平均<strong>6.3サイクル</strong>にわたり不妊でした。アイルランドの大規模な商業サラブレッド生産牧場を対象とした研究（2,385頭、3,743発情周期）は、まさにこのプロフィール——高齢で、空胎・流産・休養状態にある牝馬——を、受胎率の低下と妊娠喪失の増加につながる重大なリスク因子として特定しています（<a href="https://pubmed.ncbi.nlm.nih.gov/26815482/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Lane et al., Reproduction in Domestic Animals 2016</a>）。</p>
                        <p style={{ color: "#333", lineHeight: 1.7, marginBottom: "1rem" }}>言い換えれば、bActivateが使われるのは、公表された文献が最も成績が悪いと予測する牝馬たちです。活性化が隠れた感染を明らかにし、牧場獣医師がそれを治療した結果、<strong>交配した Kildangan の牝馬の89%が受胎</strong>し、その平均はわずか<strong>1頭あたり1.1回の交配</strong>でした。</p>
                        <p style={{ color: "#666", fontSize: "0.875rem", fontStyle: "italic", lineHeight: 1.6, marginBottom: 0 }}>読み方について：これらは別々のデータセットであり、対照比較ではありません。フィールド研究にプラセボ群は含まれていません。Lane et al. は牝馬グループの難しさを示すために引用したもので、bActivateのためではなく、Kildangan の研究チームと著者を共有しています。本ページのすべての数値は、それを報告した出典に帰属します。</p>
                    </div>

                    {/* As Cited By, External Validation */}
                    <div style={{ margin: "3rem 0", padding: "2.5rem", background: "#f8f8f8", borderLeft: "4px solid #901820" }}>
                        <h2 style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "2px", color: "#901820", marginBottom: "0.5rem", fontWeight: 600 }}>馬の分野の第一人者による引用</h2>
                        <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.95rem" }}>bActivateは、世界で最も信頼される馬獣医の専門誌や研究機関によって、独立して引用されています。</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                            <a href="https://thehorse.com/183678/whats-plaguing-your-problem-mare/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>The Horse Magazine</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>「…bActivate という（培養培地）製品は、子宮内膜の中に潜む休眠レンサ球菌を活性化し、代謝的に活発な状態にして、治療できるようにします。」</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Dr. Karen Wolfsdorf, DVM Dipl. ACT<br />Rood &amp; Riddle Equine Hospital、米国ケンタッキー州</div>
                            </a>
                            <a href="https://fvma.org/challenges-of-chronic-endometritis-novel-tools/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>FVMA, The Practitioner, 2024</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>「牝馬が発情期にあるときに Bactivate を注入すると、休眠していた B. strep が活性化して複製・増殖が進み、24時間で同定できるようになります。」</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Dr. Karen Wolfsdorf, DVM Dipl. ACT<br />Florida Veterinary Medical Association</div>
                            </a>
                            <a href="https://ker.com/equinews/therapy-offers-hope-infertile-mares/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Kentucky Equine Research</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>「大半の牝馬（83%）が6週間以内に受胎し、そのうちの多くが生存産駒を出産しました。」bActivateで治療された64頭の繁殖牝馬の研究より。</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Kentucky Equine Research, ker.com</div>
                            </a>
                            <a href="https://breedersclub.nu/wp-content/uploads/2022/07/41-Forskning-i-fertilitet.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Breeders Club, Veterinary Journal</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>「不受胎牝馬の72%が、活性化の翌年に生存産駒を得ました。参加した牝馬の84%が、潜在性のレンサ球菌感染を抱えていました。」</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Rebecca Bøk Larsen DVM ＋ Anna Skriver DVM<br />コペンハーゲン大学、2022年</div>
                            </a>
                            <a href="https://equsana.dk/sovende-bakterier-goer-hopper-ufrugtbare/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>Equsana.dk, 2015</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>「牝馬の約10%は、獣医の助けを受けても決して妊娠しません。bActivateは休眠細菌を目覚めさせ、抗生物質で効果的に診断・治療できるようにします。」</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Charlotte Nørgaard, Equsana.dk, 2015</div>
                            </a>
                            <a href="https://equimanagement.com/research-medical/biofilms-and-the-equine-uterus/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", background: "white", padding: "1.5rem", borderBottom: "3px solid #901820" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#901820", marginBottom: "0.75rem" }}>EquiManagement, 2023</div>
                                <blockquote style={{ fontStyle: "italic", color: "#333", lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.9rem" }}>「休眠したレンサ球菌の子宮内感染を再活性化するために特別に配合された培養培地 bActivate は、有効性を示しました。bActivate投与群では64%の細菌活性化が見られたのに対し、PBS対照群ではわずか8%でした。」</blockquote>
                                <div style={{ fontSize: "0.8rem", color: "#666" }}>Nancy S. Loving, DVM<br />EquiManagement, June 2023<br /><span style={{ fontSize: "0.75rem", fontStyle: "italic" }}>出典: <a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer" style={{ color: "#901820" }}>Petersen et al., Vet Microbiol 2015</a>, PMID 26123371, n=37 (25 bActivate / 12 PBS)</span></div>
                            </a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>コペンハーゲン大学（2025年）：細菌は子宮内膜のどこにいるのか</h2>
                        <div className={styles.studyText}>
                            <p><strong>コペンハーゲン大学</strong>における<strong>Emilie Kähler Hjenner</strong>氏および<strong>Kathrine Kjeldsen Ravn</strong>氏の獣医学位論文プロジェクトです。指導教員は<strong>Anders Miki Bojesen教授</strong>、副指導教員はHenrik Elvang Jensen教授（病理学）およびMette Christoffersen氏（馬繁殖学）。2025年12月提出。</p>
                            <p style={{ marginTop: '1rem' }}>対象となった牝馬は、通常の培養検査ではいずれも陰性でした。それにもかかわらず、1〜3年にわたり不受胎が続いていました。したがって本研究の問いは「感染がどれくらい多いか」ではなく、より限定的なものでした。培養が陰性であっても感染が疑われる場合、その菌が組織内に実際に存在することを示せるか、という問いです。保存されていた子宮内膜生検16検体を蛍光in situハイブリダイゼーション（FISH）で再検討しました。<strong>16検体すべてで Streptococcus spp. が検出されました。</strong></p>
                            <details style={{ marginTop: '1.25rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#901820' }}>詳細な結果を読む</summary>
                                <div style={{ marginTop: '1rem' }}>
                                    <p>FISHは固定組織中の細菌リボソームRNAに直接結合します。このため、菌が培地上で増殖するか否かにかかわらずその存在を示し、さらに子宮内膜のどの部位に存在するかを明らかにします。</p>
                                    <p style={{ marginTop: '1rem' }}><strong>得られた所見</strong></p>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyleType: 'disc', lineHeight: 1.8 }}>
                                        <li>16検体すべてで Streptococcus spp. を検出</li>
                                        <li>管腔上皮および緻密層（stratum compactum）に加え、海綿層（stratum spongiosum）の深部、管腔表面から<strong>50〜500µm超</strong>の深さにも存在</li>
                                        <li><strong>腺上皮細胞内の細胞内寄生を確認</strong></li>
                                        <li>活動性感染を有する1頭と慢性感染の牝馬との間で、菌の局在および菌数に明らかな差は認められませんでした</li>
                                        <li>2頭はFISH陽性でありながらbActivateで活性化しませんでした。<strong>この2頭は不受胎のままでした。</strong>活性化され治療を受けた牝馬は受胎能を回復しています</li>
                                        <li>治療後の生存産駒率は<strong>Kenney–Doigの予測値を上回りました</strong></li>
                                    </ul>
                                    <p style={{ marginTop: '1rem' }}><strong>確認できたこと</strong><br />疑いは正しかったということです。培養では陰性となる組織に菌は存在しており、しかもガード付きスワブが到達できる深さより深部に位置していました。スワブが見逃す理由は検査感度ではなく、到達する深さの問題です。</p>
                                    <p style={{ marginTop: '1rem' }}>手順の順序についても裏づけが得られました。FISHは菌を可視化できますが、治療はできません。休眠状態の菌は、何らかの刺激で目覚めるまで抗菌薬に耐性を示し続けます。活性化できなかった2頭がそれを示しています。FISHでは感染が見えていたにもかかわらず、治療可能な状態にはならず、不受胎のままでした。</p>
                                    <p style={{ marginTop: '1rem' }}><strong>確認できなかったこと</strong><br />著者らは、菌が慢性退行性変化の部位に一致して存在するかどうかも検証しました。しかし該当したのは13例中2例のみで、慢性感染が子宮内膜症（endometrosis）を引き起こすかどうかについては結論できないと明記しています。子宮内膜症は別個の不可逆的な問題として現れ、Kenneyスコアが高いほど、感染を除去した後でも成績は不良でした。</p>
                                    <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666', fontStyle: 'italic' }}>【開示事項】本研究は未発表の学位論文プロジェクトであり、査読を経た論文ではありません。また指導教員はbActivateの開発者の一人です。16検体はいずれも不受胎と判断された牝馬に由来し、健常な対照牝馬は検査されていません。したがって本結果は不受胎牝馬に何が存在するかを示すものであり、一般集団における頻度を示すものではありません。著者らは、FISHを日常的な診断に用いるには、過剰診断を避けるため、まず正常な子宮内細菌叢についての知見が必要であると述べています。</p>
                                </div>
                            </details>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="/images/specialerapport-kathrine-emilie-ku-2025.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">資料を見る</a>
                            <a href="https://open.spotify.com/episode/1JP9FDxlJh55AKnMAGvaoG" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">要約を聴く</a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>Hagyard, Davidson &amp; McGee, project led by Dr. Kristina Lu</h2>
                        <div className={styles.studyText}>
                            <p><strong>Hagyard Equine Medical Institute</strong>（米国ケンタッキー州レキシントン）で <strong>Dr. Kristina Lu</strong> が主導した臨床研究で、<strong>Petersen &amp; Bojesen</strong> が Society for Theriogenology 年次大会2014で報告しました（<em>Clinical Theriogenology</em> 6(3):313-314）。<strong>64頭のサラブレッド不受胎牝馬</strong>（3サイクル以上連続して不妊）を対象に含め、その後交配しました。</p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', listStyleType: 'disc', lineHeight: 1.8 }}>
                                <li><strong>受胎率83%</strong>、64頭中53頭が受胎</li>
                                <li><strong>生存産駒率70%</strong>、結果が判明した46頭から32頭の生存産駒</li>
                                <li><strong>活性化陽性47%</strong>、64頭中30頭が bActivate 後に休眠 <em>S. zooepidemicus</em> 陽性</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666', fontStyle: 'italic' }}>開示事項：本臨床研究にはプラセボ群が含まれていないため、活性化と治療の後に受胎性が有意に高まったのが bActivate のみによるものかどうかは判断できません。著者は、この限界を予稿で開示しています。</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="https://cdn.ymaws.com/www.therio.org/resource/collection/DB0508BA-DE64-46F0-BE6B-2CE2A338D52C/2014_v3_027.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">予稿を見る（Therio 2014）</a>
                            <a href="/images/hagyarddavidsonandmcgeeinaprojectledbydr.kristinalu.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">臨床資料を見る</a>
                            <a href="https://open.spotify.com/episode/5CqtUbpJe9YO9j96a5Zx4R" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">要約を聴く</a>
                        </div>
                    </div>

                    <div className={styles.studyCard}>
                        <h2 className={styles.studyTitle}>Kildangan Stud, Godolphin, project involving Meta Osborne MVB CertESM MRCVS</h2>
                        <div className={styles.studyText}>
                            <p>このフィールド研究は、<strong>Streptococcus equi subsp. zooepidemicus</strong> による潜在感染が牝馬の受胎性に及ぼす影響を調査しています。休眠細菌が子宮内の細胞内に持続的に潜み、従来の方法では検出を逃れることが示されています。こうした感染は妊娠の成立と維持を妨げるため、通常の培養で見つける前に活性化のステップが必要です。<strong>bActivate</strong>が休眠感染を明らかにすることで、牧場獣医師が標的抗菌薬で治療できるようになります。</p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', listStyleType: 'disc', lineHeight: 1.8 }}>
                                <li><strong>19頭の不受胎牝馬</strong>、平均年齢12.7歳、平均6.3サイクル不妊</li>
                                <li><strong>活性化陽性84%（16/19）</strong>：通常の培養では見逃されていた休眠感染</li>
                                <li>交配した牝馬の<strong>受胎率89%</strong>（16/18）、平均1頭あたり1.1回の交配</li>
                                <li><strong>生存産駒87%</strong>（結果が判明した15頭中13頭）</li>
                            </ul>
                            <p className="mt-4"><strong>結論</strong><br />潜在感染は牝馬の受胎性を著しく低下させ、休眠細菌が妊娠の転帰に悪影響を及ぼします。活性化は診断精度を劇的に高め、獣医師による標的治療が繁殖成績を回復させます。学会抄録として発表：<a href="https://doi.org/10.1016/j.jevs.2018.05.162" target="_blank" rel="noopener noreferrer" className="text-primary underline">Petersen MR, Rosenbrock A, Osborne M, Bojesen AM, J Equine Vet Sci 2018;66:117</a>。創業者による生産者向けの解説記事も公開されています：<a href="https://portal.selectbreeders.com/articles/high-prevalence-of-latent-endometritis-in-problem-mares-effect-of-activation-and-treatment-on-fertility" target="_blank" rel="noopener noreferrer" className="text-primary underline">SelectBreeders Services (2019)</a>。</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <a href="/images/latentendomtrititsanddormantstreptococci-effectonfertility.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">資料を見る</a>
                            <a href="https://open.spotify.com/episode/2eCFocRnJEJh8IJOdTu3pP" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition">要約を聴く</a>
                        </div>
                    </div>

                    <div className={styles.articleGrid}>
                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>Frontiers ― Streptococcus equi、査読研究</h3>
                            <div className={styles.articleContent}>
                                <p>本研究は、<strong>Streptococcus equi subsp. zooepidemicus</strong> がどのように上皮細胞に侵入し、その内部で生存して牝馬の潜在性子宮内膜炎の一因となるかを探究しています。<strong>Bolette Skive准教授</strong>と <strong>Manfred Rohde教授</strong>が主導したこの研究は、3つの異なる細菌侵入メカニズムを明らかにしています。</p>
                            </div>
                            <div className="mt-4">
                                <a href="/images/strepzoo_frontcellinfectmicrobioloriginalresearch.pdf" target="_blank" className="text-primary font-bold hover:underline">資料を見る</a>
                            </div>
                        </article>

                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>細菌の薬剤寛容</h3>
                            <div className={styles.articleContent}>
                                <p>本研究は、不受胎牝馬から分離されたβ溶血性レンサ球菌（BHS）の薬剤寛容を検討し、通常のMICの1万倍のペニシリンにも耐える<strong>パーシスター細胞</strong>に注目しています。<strong>bActivate</strong>を用いて、休眠していたBHSを再活性化し、治療に成功しました。</p>
                            </div>
                            <div className={styles.meta}>主要貢献者 • Professor Ralph Bertram</div>
                            <div className="mt-4">
                                <a href="/images/bacterialtolerancetoantimicrobials-factorsaffectingtreatmentsuccessrossdalenon-pregnantmarecoursejan2025-3.pdf" target="_blank" className="text-primary font-bold hover:underline">資料を見る</a>
                            </div>
                        </article>

                        <article className={styles.articleCard}>
                            <h3 className={styles.articleTitle}>科学的・実務的エビデンス</h3>
                            <div className={styles.articleContent}>
                                <p>本資料は、不受胎牝馬の潜在性子宮内膜炎の診断・治療における <strong>bActivate</strong> の使用を裏付ける科学的・実務的エビデンスを提供します。休眠した <strong>Streptococcus equi subsp. zooepidemicus</strong> 感染の再活性化に焦点を当てています。</p>
                            </div>
                            <div className={styles.meta}>主要貢献者 • Professor Anders Miki Bojesen</div>
                            <div className="mt-4">
                                <a href="/images/scientificandpracticalevidencesupportingbactivateforproblemmares.pdf" target="_blank" className="text-primary font-bold hover:underline">資料を見る</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、日本へ発送' },
                { to: '/how-to-use', label: '使い方', description: '診断と治療の完全な獣医向けプロトコル' },
                { to: '/our-distributors', label: '販売店を探す', description: '世界各国の獣医用販売店' },
                { to: '/about-us', label: '創業者について', description: 'Bojesen教授 & Petersen博士、20年以上の研究' },
            ]} />

        </main>
    );
}
