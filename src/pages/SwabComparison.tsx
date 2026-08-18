import { useEffect } from 'react';
import InternalLinks from '@/components/InternalLinks';

export default function SwabComparison() {
    useEffect(() => {
        document.title = 'スワブ培養 vs 生検 vs bActivate｜牝馬の子宮内感染を診断する';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '通常の子宮スワブが見つけられる感染牝馬は約34%、生検は約82%、そのいずれも休眠細菌を見つけられません。不受胎牝馬の診断法を比較します。');
    }, []);
    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-4">スワブ培養 vs 生検 vs bActivate：隠れた子宮内感染をどう見つけるか</h1>
                    <p className="text-gray-700 leading-relaxed mb-8">スワブ検査が陰性（clean swab）であるのに牝馬が空胎を繰り返す場合、問題は牝馬ではなく、検査の方にあるのかもしれません。3つの診断法は、検出できるものが大きく異なり、標準的な方法のいずれも休眠状態の細菌を見つけることはできません。以下に、各数値をその出典となる研究とともに示した、公正な比較を掲載します。</p>

                    <div className="overflow-x-auto mb-4">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr style={{ background: '#901820', color: 'white' }}>
                                    <th className="text-left p-3">方法</th>
                                    <th className="text-left p-3">検出対象</th>
                                    <th className="text-left p-3">S. zooepidemicus の検出率</th>
                                    <th className="text-left p-3">休眠細菌を検出できるか</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="p-3 font-bold">通常のスワブ培養</td>
                                    <td className="p-3">子宮表面で活発に増殖している細菌</td>
                                    <td className="p-3">感染牝馬の約34%（Nielsen 2005）</td>
                                    <td className="p-3">いいえ</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-3 font-bold">子宮内膜生検培養</td>
                                    <td className="p-3">組織サンプル内で活発に増殖している細菌</td>
                                    <td className="p-3">感染牝馬の約82%（Nielsen 2005）</td>
                                    <td className="p-3">いいえ</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-3 font-bold">bActivate＋通常の培養</td>
                                    <td className="p-3">休眠細菌を再活性化し、通常の培養で検出可能にする</td>
                                    <td className="p-3">投与群の活性化陽性64% 対 生理食塩水対照群8%（Petersen 2015、プラセボ対照）</td>
                                    <td className="p-3">はい（それが本来の目的です）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-sm mb-10">出典：Nielsen JM, Theriogenology 2005;64:510-518（スワブと生検の感度）。Petersen MR et al., Veterinary Microbiology 2015;179:119-125, DOI 10.1016/j.vetmic.2015.06.006（プラセボ対照の活性化研究）。これらの比較は、それぞれ異なる項目を、異なる研究から測定したものです。直接比較試験ではなく、判断の助けとして併記しています。</p>

                    <h2 className="text-2xl font-bold mb-3">陰性のスワブでも感染を否定できない理由</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">培養に基づく方法はすべて、細菌が増殖することを前提としています。休眠状態の Streptococcus equi subsp. zooepidemicus は、低代謝のパーシスター状態で子宮内膜の深部、スワブが届く表面から300〜500マイクロメートル下の病巣に潜んでいます（Petersen et al., Clinical Theriogenology 2009）。細菌は培地上で増殖しないため、検査室は陰性と報告し、牝馬は誤った「異常なし」の判定のもとで再び交配されてしまいます。</p>

                    <h2 className="text-2xl font-bold mb-3">bActivate の位置づけ</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">bActivateは、通常の診断を置き換えるものではありません。それらの<strong>前段階</strong>に位置します。獣医師が発情初期に10 mlを子宮内へ注入すると、培養培地が休眠細菌に増殖再開を促し、48時間後には通常の培養でそれまで隠れていた細菌が明らかになります。そこから先は、いつもの診療と同じです。獣医師が細菌を特定して標的抗菌薬を処方し、牝馬は次のサイクルで交配されます。</p>

                    <h2 className="text-2xl font-bold mb-3">どの方法を獣医師に相談すべきか</h2>
                    <p className="text-gray-700 leading-relaxed mb-2">獣医師と相談する際の、実践的な目安です。</p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-10">
                        <li><strong>1〜2サイクル受胎しなかった牝馬の初回検査：</strong> まずは通常の診断から始めます。単純なスワブよりも、少量子宮洗浄（low-volume lavage）または生検培養が理想的です。</li>
                        <li><strong>スワブが陰性の不受胎牝馬：</strong> 陰性の繰り返しに加えて受胎しない状態が続くのは、まさに休眠感染が疑われる典型例です（不受胎牝馬の70〜80%が保有）。ここが bActivate による活性化の適応となります。</li>
                        <li><strong>高齢の牝馬、子宮内膜炎の既往、または3回以上の分娩歴：</strong> これらのリスク因子はいずれも、それぞれ単独で休眠感染の可能性が高いことを示します。オフシーズンの検査の一環として活性化を検討してください。</li>
                    </ul>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/when-to-use', label: 'bActivateの使用時期', description: '牝馬に隠れた感染があるサイン' },
                { to: '/how-to-use', label: '獣医向けプロトコル', description: '獣医師のためのステップ・バイ・ステップ手順' },
                { to: '/studies-effect', label: '臨床結果', description: 'Hagyardで受胎率83%、Kildanganで89%' },
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、日本へ発送' },
            ]} />
        </main>
    );
}
