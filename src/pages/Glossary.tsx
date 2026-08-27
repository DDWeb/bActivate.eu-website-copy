import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const tagStyle: React.CSSProperties = { fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#901820', background: '#fef2f2', padding: '0.2rem 0.6rem', borderRadius: '3px' };
const entryStyle: React.CSSProperties = { borderTop: '2px solid #e5e7eb', padding: '2rem 0' };
const headRowStyle: React.CSSProperties = { display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' };
const termStyle: React.CSSProperties = { fontSize: '1.3rem', fontWeight: 700, color: '#111', margin: 0 };
const bodyStyle: React.CSSProperties = { color: '#333', lineHeight: 1.75, fontSize: '0.97rem', maxWidth: '720px' };
const relLinkStyle: React.CSSProperties = { color: '#901820', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 };

export default function Glossary() {
    useEffect(() => {
        document.title = '馬の繁殖用語集｜bActivate';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '馬の繁殖医療の主要用語を平易な言葉で解説：休眠パーシスター細胞、Streptococcus zooepidemicus、バイオフィルム、無症候性子宮内膜炎、不受胎牝馬、高リスク牝馬、再活性化。');
    }, []);
    return (
        <main>
            <section style={{ padding: '3rem 1rem 2rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.75rem' }}>リファレンス</div>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem', lineHeight: 1.2 }}>馬の繁殖用語集</h1>
                    <p style={{ color: '#555', fontSize: '1rem', maxWidth: '640px', lineHeight: 1.6 }}>馬の繁殖医療および bActivate の資料で用いられる主要な用語を、平易な言葉で解説します。各定義は、それ単独で理解でき、臨床的に正確であるように記載しています。</p>
                </div>
            </section>

            <section style={{ padding: '0.5rem 1rem 4rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>

                    <div id="dormant-persister-cell" style={entryStyle}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}>休眠パーシスター細胞（dormant persister cell）</h2>
                            <span style={tagStyle}>微生物学</span>
                        </div>
                        <p style={bodyStyle}>代謝的に不活性な生存状態にある細菌細胞で、増殖せず、活発な増殖を標的とする抗菌薬にも反応せず、通常の培養検査でも検出できません。牝馬では、<em>Streptococcus equi</em> subsp. <em>zooepidemicus</em> がこの状態で数か月から数年にわたり潜み続け、スワブ陰性や抗菌薬投与にもかかわらず慢性的な不妊を引き起こすことがあります。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/what-is-bactivate" style={relLinkStyle}>→ bActivateがパーシスター細胞を再活性化する仕組み</Link></p>
                    </div>

                    <div id="streptococcus-zooepidemicus" style={entryStyle}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}><em>Streptococcus equi</em> subsp. <em>zooepidemicus</em></h2>
                            <span style={tagStyle}>細菌学</span>
                        </div>
                        <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>別名：Strep zoo、S. zooepidemicus</p>
                        <p style={bodyStyle}>β溶血性のグラム陽性菌で、繁殖牝馬における子宮内感染の最も一般的な原因であり、陽性の子宮内膜培養における細菌分離株の約80%を占めます。慢性不妊の症例では、子宮内膜のより深部の腺の中で休眠パーシスター状態に入り、通常のスワブ培養では到達できなくなることがあります。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/blog/insights-from-a-landmark-german-study-the-bacterial-spectrum-in-mare-uterine-health" style={relLinkStyle}>→ ドイツの研究：牝馬の子宮の健康における細菌スペクトル</Link></p>
                    </div>

                    <div id="biofilm" style={entryStyle}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}>バイオフィルム（biofilm）</h2>
                            <span style={tagStyle}>微生物学</span>
                        </div>
                        <p style={bodyStyle}>細菌が自ら産生するタンパク質と多糖の基質に包まれた、構造化した集団です。馬の子宮では、<em>Streptococcus zooepidemicus</em> のバイオフィルムが子宮内膜表面に付着し、細菌を宿主の免疫防御や抗菌薬治療に抵抗させます。こうした感染は、抗菌薬を繰り返しても反応しない不受胎牝馬において、慢性・再発性の子宮内膜炎の主要な原因となります。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/blog/how-bactivate-tackles-dormant-bacteria-in-mares" style={relLinkStyle}>→ bActivateがバイオフィルムと休眠細菌に対処する仕組み</Link></p>
                    </div>

                    <div id="subclinical-endometritis" style={entryStyle}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}>無症候性子宮内膜炎（subclinical endometritis）</h2>
                            <span style={tagStyle}>繁殖医療</span>
                        </div>
                        <p style={bodyStyle}>分泌物、発熱、発情周期の乱れといった臨床徴候を伴わない子宮の炎症です。牝馬は繁殖上は正常に見えますが、微視的な炎症や軽度の感染が胚の着床を妨げます。通常のスワブ培養で検出できるのは約34%の症例にすぎず、原因不明の不妊のよくある原因となっています。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/blog/taming-the-troublemaker-a-guide-to-handling-endometritis-in-mares" style={relLinkStyle}>→ 牝馬の子宮内膜炎への対処ガイド</Link></p>
                    </div>

                    <div id="problem-mare" style={entryStyle}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}>不受胎牝馬（problem mare）</h2>
                            <span style={tagStyle}>臨床的定義</span>
                        </div>
                        <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>別名：不妊牝馬（barren mare）、リピートブリーダー</p>
                        <p style={bodyStyle}>繁殖能力が確認された種牡馬と、3回以上連続した発情周期で交配しても受胎しない牝馬です。シーズン終了時に空胎の牝馬の約70〜80%が、通常のスワブ培養では検出できない休眠状態の <em>Streptococcus zooepidemicus</em> 感染を抱えています。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/blog/addressing-challenges-of-problem-mares" style={relLinkStyle}>→ 不受胎牝馬の課題に取り組む</Link></p>
                    </div>

                    <div id="high-risk-mare" style={entryStyle}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}>高リスク牝馬（high-risk mare）</h2>
                            <span style={tagStyle}>臨床的定義</span>
                        </div>
                        <p style={bodyStyle}>12歳以上、3回以上の分娩歴、妊娠喪失や流産の既往、または子宮内膜炎の既往が記録されている牝馬です。約75%が、通常の子宮内膜スワブ培養では特定できない休眠状態の <em>Streptococcus zooepidemicus</em> 感染を抱えています。これらの牝馬は、bActivateによるスクリーニングの主要な適応対象です。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/when-to-use" style={relLinkStyle}>→ bActivateの使用時期 ― リスク指標</Link></p>
                    </div>

                    <div id="reactivation" style={{ ...entryStyle, paddingBottom: '3rem' }}>
                        <div style={headRowStyle}>
                            <h2 style={termStyle}>再活性化（reactivation）</h2>
                            <span style={tagStyle}>bActivateの機序</span>
                        </div>
                        <p style={bodyStyle}>休眠パーシスター状態の細菌を刺激して、活発な代謝と増殖を再開させる過程です。bActivateは、発情初期に細菌培養培地を子宮内へ直接注入することでこれを実現します。48時間以内に、それまで検出できなかった <em>Streptococcus zooepidemicus</em> が培養陽性となり、標的を絞った抗菌薬治療が可能になります。</p>
                        <p style={{ marginTop: '0.75rem' }}><Link to="/how-to-use" style={relLinkStyle}>→ bActivateの完全なプロトコル（5ステップ）</Link></p>
                    </div>

                </div>
            </section>

            <section style={{ background: '#f8f8f8', borderTop: '1px solid #e5e7eb', padding: '3rem 1rem' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '1.5rem' }}>あわせて読む</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                        <Link style={{ textDecoration: 'none', display: 'block', background: 'white', padding: '1.25rem 1.5rem', borderLeft: '3px solid #901820', color: 'inherit' }} to="/what-is-bactivate">
                            <div style={{ fontWeight: 700, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>bActivateとは？</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>作用機序と臨床的背景</div>
                        </Link>
                        <Link style={{ textDecoration: 'none', display: 'block', background: 'white', padding: '1.25rem 1.5rem', borderLeft: '3px solid #901820', color: 'inherit' }} to="/when-to-use">
                            <div style={{ fontWeight: 700, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>bActivateの使用時期</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>リスク指標と臨床適応</div>
                        </Link>
                        <Link style={{ textDecoration: 'none', display: 'block', background: 'white', padding: '1.25rem 1.5rem', borderLeft: '3px solid #901820', color: 'inherit' }} to="/studies-effect">
                            <div style={{ fontWeight: 700, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>臨床エビデンス</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Hagyardの不受胎牝馬64頭で受胎率83%</div>
                        </Link>
                        <Link style={{ textDecoration: 'none', display: 'block', background: 'white', padding: '1.25rem 1.5rem', borderLeft: '3px solid #901820', color: 'inherit' }} to="/about-us">
                            <div style={{ fontWeight: 700, color: '#111', marginBottom: '0.25rem', fontSize: '0.95rem' }}>研究者について</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Bojesen教授 & Petersen博士、コペンハーゲン大学</div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
