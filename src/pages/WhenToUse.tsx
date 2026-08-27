
import { useEffect } from 'react';
import styles from './WhenToUse.module.css';
import InternalLinks from '@/components/InternalLinks';
import LiteYouTube from '@/components/LiteYouTube';

export default function WhenToUse() {
    useEffect(() => {
        document.title = '不受胎牝馬に bActivate を使うタイミング｜隠れた感染のサイン';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'スワブは陰性なのに牝馬が受胎しませんか？ 休眠子宮内感染のサインと、bActivate が適応となるタイミングを解説します。');
    }, []);
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div>
                            <div>
                                <div className={styles.eyebrow}>bActivateについて</div>
                                <h1 className={styles.title}>不受胎牝馬に bActivate を使うタイミング</h1>

                                <div className={styles.introBlock}>
                                    <h2 className={styles.subtitle}>bActivate ― 不受胎牝馬のための診断補助</h2>
                                    <div className={styles.textBlock}>
                                        <p className="mb-4">bActivateは、慢性的に感染した牝馬において、正しい診断を下す助けとなります。bActivateは、子宮内に潜む休眠状態のレンサ球菌の増殖を促し、それによって通常の手法で診断・治療できるようにします。</p>
                                        <p className="mb-4"><strong>慢性感染</strong>は妊娠の成立を妨げるだけでなく、早期胎子喪失（early fetal loss）や流産のリスクを高める可能性もあります。当社の研究では、繁殖能力のある種牡馬と交配し、経験豊富な獣医師の管理下にあったにもかかわらず、繁殖シーズンの終わりまでに受胎しなかった不受胎牝馬の70〜80%が、慢性感染を抱えていることが示されています。</p>
                                        <p>一部の牧場では、bActivateを<strong>スクリーニングツール</strong>として活用し、オフシーズン中にすべての空胎牝馬に対して子宮内膜炎の診断と治療を行っています。これにより妊娠成立の可能性を高め、<strong>受胎までの期間（time to pregnancy）</strong>を短縮しています。</p>
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
                                    <LiteYouTube id="sVS0kj84lMA" title="When to use bActivate" className={styles.videoFill} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.sideImageContainer}>
                                <img
                                    src="/images/when-to-use-1.jpeg"
                                    alt="放牧地の馬たち"

                                    className="object-cover"
                                />
                            </div>

                            <div className={styles.sideText}>
                                <p className="mb-4"><strong>子宮内感染の繰り返し</strong>は、子宮の防御機構が低下していることを示し、急性・慢性いずれの感染も成立しやすい状態にあることを意味します。慢性感染は見つけにくいため、このような不受胎牝馬にはbActivateの使用を検討すべきです。</p>
                                <p><strong>子宮内膜線維症（endometrial fibrosis）</strong>は、子宮内膜の炎症が続くことによって引き起こされます。子宮内膜にβ溶血性レンサ球菌が存在すると、子宮内膜の炎症が誘発され、子宮の線維化が進み、その結果として受胎性が低下すると考えられています。子宮内膜線維症を最小限に抑えられれば、1頭の牝馬が生涯に産める産駒の数を増やせると期待されます。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Indicators */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">うちの牝馬は bActivate の対象になる？</h2>
                    <p className="text-gray-600 mb-8">bActivateは、子宮の防御機構が低下し、慢性・無症候性（subclinical）の感染が疑われる牝馬に適応します。獣医師と相談する際の出発点として、以下のチェックリストをご活用ください。</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                            <h3 className="text-xl font-bold mb-4 text-red-700">強く推奨されるケース</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span>繁殖能力が確認された種牡馬と交配したにもかかわらず、<strong>2シーズン以上続けて</strong>受胎していない</span></li>
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span><strong>スワブ培養が陰性</strong>でありながら、原因不明の不妊、または超音波検査で子宮内液の貯留が繰り返し認められる</span></li>
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span>過去の抗菌薬治療で<strong>一時的に子宮内液は消失した</strong>ものの、受胎性は改善しなかった</span></li>
                                <li className="flex gap-2"><span className="text-red-600 font-bold mt-0.5">✓</span><span>複数のシーズンで<strong>早期胚死滅（15日目以前）</strong>の既往がある</span></li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                            <h3 className="text-xl font-bold mb-4 text-orange-700">bActivate を検討すべきケース</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>牝馬が<strong>10歳以上</strong>で、子宮内感染や子宮内液貯留の既往がある</span></li>
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>複数シーズンにわたり<strong>細菌が繰り返し分離</strong>されている（Strep. zoo、大腸菌〈E. coli〉）</span></li>
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span>シーズン終了時に受胎しておらず、<strong>空胎のまま</strong>オフシーズンに入る</span></li>
                                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">✓</span><span><strong>子宮内膜線維症（カテゴリー IIB または III）</strong>が確認され、子宮のクリアランス機能が低下している</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-6 text-gray-600 text-sm">bActivateは処方箋が必要な獣医療用製品です。担当の獣医師が、繁殖歴・臨床検査・超音波所見に基づいて適応を判断します。</p>
                </div>
            </section>

            {/* Mare Types */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">最も効果が期待できるのはどの牝馬か</h2>
                    <p className="text-gray-600 mb-8">休眠レンサ球菌感染は、あらゆる品種・年齢の牝馬に起こり得ますが、臨床症例では特定のグループが特に多く見られます。</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">高齢の繁殖牝馬</h3>
                            <p className="text-gray-600 text-sm">子宮の防御機構は、加齢と経産回数とともに低下します。10歳以上で分娩を複数回経験した牝馬は、粘液線毛クリアランス（mucociliary clearance）やリンパ排液（lymphatic drainage）が低下し、持続感染を起こしやすくなります。臨床研究には、長期にわたり不妊が続く高齢牝馬が相当数含まれています。</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">サラブレッドおよびスポーツホース</h3>
                            <p className="text-gray-600 text-sm">1シーズンを失う経済的損失が大きい、高価値のサラブレッドやウォームブラッドの牝馬です。Kildangan／Godolphin の研究では、bActivateによる1回の活性化サイクルと、それに続く牧場獣医師による標的抗菌薬治療の後、不妊のサラブレッド不受胎牝馬において<strong>受胎率89%</strong>が示されました。</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h3 className="text-lg font-bold mb-3">リピートブリーダー</h3>
                            <p className="text-gray-600 text-sm">正常に発情を繰り返し、交配も受け入れ、胚は得られるものの、着床に一貫して失敗する牝馬です。休眠状態の <em>Strep. zoo</em> がつくり出す炎症環境は、胚そのものが生存可能であっても、子宮が着床の準備を整えるのを妨げます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Timing */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">繁殖シーズンのいつ使うか</h2>
                    <p className="text-gray-600 mb-8">bActivateのプロトコルは、通常の繁殖サイクルの中に収まるように設計されています。活性化とその後の獣医治療は、交配を予定するサイクルのおよそ<strong>1サイクル前</strong>に行います。</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                        {[
                            { step: '1', title: '発情・0日目', desc: '活性化前培養を採取します。発情初期（卵胞25〜30mm）に bActivate 10 ml を注入します。' },
                            { step: '2', title: '48時間後', desc: '活性化後培養を採取します。休眠していた Strep. zoo が活性化した状態です。標的抗菌薬治療を開始します。' },
                            { step: '3', title: '回復サイクル', desc: '抗菌薬の投与を完了します。子宮は活性化による炎症から回復します。このサイクルでは交配しません。' },
                            { step: '4', title: '次の発情', desc: '牝馬は交配可能な状態です。臨床研究での期待受胎率は83〜89%です。' },
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
                    <p className="mt-6 text-gray-600">bActivateの投与から交配可能となるまでの期間は、合計<strong>3〜4週間</strong>です。これは標準的な21日の発情周期の中に収まり、目標とする交配サイクルの前に活性化サイクルを1回行うだけで済みます。</p>
                </div>
            </section>

            {/* Off-Season Screening */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-2">オフシーズンのスクリーニング</h2>
                    <p className="text-gray-600 mb-6">一部の生産牧場では、シーズン終了時や冬のオフシーズンに、すべての空胎牝馬に対する<strong>予防的なスクリーニングツール</strong>としてbActivateを使用しています。この方法には、いくつかの利点があります。</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-3">
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>次の繁殖シーズンが始まる<strong>前に</strong>慢性感染を特定できる</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>時間に追われることなく、治療と回復のサイクルを十分に確保できる</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>次のシーズン開始時の<strong>受胎までの期間</strong>を短縮できる</span></li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>未治療の感染による無駄な交配サイクルを最小限に抑えられる</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>シーズン早期の受胎が経済的に重要な<strong>高価値の牝馬</strong>に特に有効</span></li>
                            <li className="flex gap-2"><span className="text-red-600 font-bold">✓</span><span>牧場が<strong>交配スケジュール</strong>をより確実に計画できる</span></li>
                        </ul>
                    </div>
                    <p className="mt-6 text-gray-600">研究では、不受胎牝馬の70〜80%が、通常の培養検査では見逃される隠れた子宮内感染を抱えていることが示されています。bActivateによるオフシーズンのスクリーニングは、この問題に直接対処します。</p>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <hr className="border-gray-300 mb-8" />
                    <p className="text-xl italic text-gray-700">
                        bActivateの基盤となる概念（細菌の活性化を促す仕組み）は、Morten Rønn Petersen博士（DVM, PhD）と Anders Miki Bojesen教授（DVM, PhD）によって発見されました。両氏は牝馬の細菌性子宮内膜炎に関する豊富な経験を持ち、本テーマについて複数の科学論文を発表しています。
                    </p>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/how-to-use', label: 'bActivateの使い方', description: '診断と治療の完全な獣医向けプロトコル' },
                { to: '/studies-effect', label: '臨床エビデンス', description: 'Hagyardの不受胎牝馬64頭で受胎率83%' },
                { to: '/our-distributors', label: '販売店を探す', description: '世界各国の獣医用販売店' },
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、オンラインで直接注文' },
            ]} />
        </main>
    );
}
