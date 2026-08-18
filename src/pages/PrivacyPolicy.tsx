import { useEffect } from 'react';

const h2: React.CSSProperties = { fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' };
const section: React.CSSProperties = { marginBottom: '2rem' };
const th: React.CSSProperties = { textAlign: 'left', padding: '0.6rem', background: '#901820', color: '#fff', fontSize: '0.85rem', fontWeight: 600 };
const td: React.CSSProperties = { padding: '0.6rem', borderBottom: '1px solid #e5e7eb', fontSize: '0.85rem', verticalAlign: 'top' };

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'プライバシーポリシー（個人情報保護方針）｜bActivate';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bactivate.jp のプライバシーポリシー。個人情報保護法に基づく利用目的、第三者提供、外国にある第三者への提供、外部送信、開示等の請求手続について。');
    }, []);

    return (
        <main style={{ maxWidth: '820px', margin: '0 auto', padding: '3rem 2rem', lineHeight: 1.8, color: '#333' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>プライバシーポリシー（個人情報保護方針）</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>最終更新：2026年8月18日</p>

            <p style={{ marginBottom: '2rem' }}>
                Bojesen and Petersen Biotech ApS（以下「当社」）は、本ウェブサイト（bactivate.jp）を通じて取得する個人情報を、
                日本の<strong>個人情報の保護に関する法律（個人情報保護法）</strong>およびその関連ガイドラインに従って取り扱います。
                当社はデンマークに所在する事業者ですが、日本にお住まいの方に商品・サービスを提供するにあたり、
                同法の適用を受けるものとして本ポリシーを定めています。
            </p>

            <section style={section}>
                <h2 style={h2}>1. 事業者情報</h2>
                <p>
                    名称：Bojesen and Petersen Biotech ApS<br />
                    所在地：Strandboulevarden 23, DK-2100 Copenhagen, Denmark（デンマーク）<br />
                    代表者：Anders Miki Bojesen 教授<br />
                    登録番号（CVR／VAT）：34690324<br />
                    連絡先：<a href="mailto:contact@bactivate.eu" style={{ color: '#901820' }}>contact@bactivate.eu</a>／
                    <a href="tel:+4560712169" style={{ color: '#901820' }}>+45 60 71 21 69</a>
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>2. 取得する個人情報</h2>
                <p>当社は、以下の個人情報を取得することがあります。</p>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li><strong>お名前・ご連絡先</strong>（メールアドレス、電話番号、ご住所）：ご注文、お問い合わせ、ご相談のお申し込みの際。</li>
                    <li><strong>配送・請求に関する情報</strong>：ご注文の履行のために必要な範囲で。</li>
                    <li><strong>お問い合わせ内容</strong>：ご質問への回答および製品サポートのため。</li>
                    <li><strong>ウェブサイトの利用情報</strong>：IPアドレス、ブラウザ・端末に関する情報、閲覧ページ、参照元、クッキー識別子等（第6項をご参照ください）。</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>
                    決済手段の情報（クレジットカード番号等）は決済事業者において処理され、当社が保持することはありません。
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>3. 利用目的</h2>
                <p>取得した個人情報は、以下の目的の範囲内で利用します。</p>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>商品のご注文の受付、代金の決済、発送および関連するご連絡のため</li>
                    <li>お問い合わせ・ご相談への対応および製品に関するサポートのため</li>
                    <li>ウェビナーやニュースレターなど、ご登録いただいた情報の配信のため</li>
                    <li>本ウェブサイトの利用状況の把握、品質および利便性の改善のため</li>
                    <li>法令に基づく義務の履行のため</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>
                    上記の範囲を超えて利用する場合は、あらかじめご本人の同意をいただきます。
                    ニュースレターの配信は、いつでも配信停止のお申し出により停止できます。
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>4. 第三者提供</h2>
                <p>
                    当社は、法令に基づく場合を除き、あらかじめご本人の同意を得ることなく個人データを第三者に提供することはありません。
                    ただし、利用目的の達成に必要な範囲で、配送、決済、システム運用等の業務を外部に委託することがあります。
                    この場合、委託先に対して必要かつ適切な監督を行います。
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>5. 外国にある第三者への提供</h2>
                <p>
                    当社はデンマークに所在しており、また業務委託先の一部は日本国外に所在します。
                    そのため、お客様の個人データは日本国外へ移転されます。主な移転先の国および地域は次のとおりです。
                </p>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>
                        <strong>デンマークその他のEU（欧州連合）加盟国</strong>：当社および欧州の委託先。
                        EU加盟国にはEU一般データ保護規則（GDPR）に基づく包括的な個人情報保護制度があり、
                        日本とEUは相互に十分な水準の保護がある旨を認めています（2019年1月発効）。
                    </li>
                    <li>
                        <strong>米国その他の国</strong>：アクセス解析、タグ管理、ショップ機能、アフィリエイト管理等のサービス提供事業者
                        （第6項の表をご参照ください）。これらの国には、日本と同等の水準にあると認められた包括的な個人情報保護制度が
                        存在しない場合があります。当社は、これらの事業者との契約および各事業者が公表する安全管理措置に基づき、
                        個人情報の保護のために必要な措置を講じています。
                    </li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>
                    移転先の国における個人情報保護制度、および移転先が講じる措置に関するより詳しい情報は、
                    <a href="mailto:contact@bactivate.eu" style={{ color: '#901820' }}>contact@bactivate.eu</a> までご請求ください。
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>6. 利用者情報の外部送信について</h2>
                <p style={{ marginBottom: '1rem' }}>
                    本ウェブサイトでは、以下のとおり、お客様の端末から第三者に対して利用者に関する情報が送信されます
                    （電気通信事業法に基づく公表）。
                </p>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
                        <thead>
                            <tr>
                                <th style={th}>送信先</th>
                                <th style={th}>送信される情報</th>
                                <th style={th}>当社の利用目的</th>
                                <th style={th}>送信先の利用目的</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={td}>Google タグマネージャー<br />（Google LLC）</td>
                                <td style={td}>IPアドレス、閲覧ページのURL、参照元、ブラウザ・端末に関する情報、クッキー識別子</td>
                                <td style={td}>計測タグの管理・配信のため</td>
                                <td style={td}>タグ管理サービスの提供のため</td>
                            </tr>
                            <tr>
                                <td style={td}>Google アナリティクス<br />（Google LLC）</td>
                                <td style={td}>IPアドレス、閲覧ページのURL、滞在時間、参照元、おおよその地域、クッキー識別子</td>
                                <td style={td}>サイトの利用状況の分析および改善のため</td>
                                <td style={td}>アクセス解析サービスの提供および同社サービスの改善のため</td>
                            </tr>
                            <tr>
                                <td style={td}>Google Fonts／Google提供のウィジェット<br />（Google LLC）</td>
                                <td style={td}>IPアドレス、ブラウザ・端末に関する情報</td>
                                <td style={td}>ウェブフォントおよび販売者評価ウィジェットの表示のため</td>
                                <td style={td}>コンテンツ配信および同社サービスの提供のため</td>
                            </tr>
                            <tr>
                                <td style={td}>YouTube<br />（Google LLC）</td>
                                <td style={td}>IPアドレス、ブラウザ・端末に関する情報、視聴した動画に関する情報（動画の再生時）</td>
                                <td style={td}>解説動画・ウェビナーの配信のため</td>
                                <td style={td}>動画配信サービスの提供および同社サービスの改善のため</td>
                            </tr>
                            <tr>
                                <td style={td}>Affiliatly<br />（アフィリエイト管理サービス）</td>
                                <td style={td}>紹介元を識別するためのクッキー識別子、参照元、閲覧ページのURL</td>
                                <td style={td}>アフィリエイト経由のご注文を把握し、紹介者に報酬をお支払いするため</td>
                                <td style={td}>アフィリエイト成果計測サービスの提供のため</td>
                            </tr>
                            <tr>
                                <td style={td}>Ecwid（ショップ機能）<br />（Lightspeed Commerce）</td>
                                <td style={td}>IPアドレス、閲覧・購入した商品に関する情報、ご注文情報、クッキー識別子（ショップページのご利用時）</td>
                                <td style={td}>オンラインショップおよびカート機能の提供のため</td>
                                <td style={td}>Eコマースプラットフォームの提供のため</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
                    これらの送信は、ブラウザの設定でクッキーを無効にすることにより、その全部または一部を停止できます。
                    ただし、クッキーを無効にした場合、ショップ機能など本ウェブサイトの一部がご利用いただけなくなることがあります。
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>7. 安全管理措置</h2>
                <p>当社は、個人データの漏えい、滅失またはき損の防止その他の安全管理のため、次の措置を講じています。</p>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li><strong>組織的措置</strong>：個人データを取り扱う担当者を限定し、取扱状況を確認できる体制を整備しています。</li>
                    <li><strong>人的措置</strong>：従業者に対し、個人情報の取扱いに関する留意事項を周知しています。</li>
                    <li><strong>技術的措置</strong>：本ウェブサイトの通信を暗号化（HTTPS）し、個人データを取り扱う情報システムへのアクセスを制限しています。</li>
                    <li><strong>外的環境の把握</strong>：個人データを取り扱う国（デンマークその他のEU加盟国、米国等）における個人情報の保護に関する制度を把握したうえで、必要な措置を講じています。</li>
                </ul>
            </section>

            <section style={section}>
                <h2 style={h2}>8. 保有個人データの開示等のご請求</h2>
                <p>
                    ご本人（または代理人）は、当社が保有する個人データについて、
                    <strong>利用目的の通知、開示、内容の訂正・追加・削除、利用の停止・消去、第三者への提供の停止</strong>を請求できます。
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                    ご請求は <a href="mailto:contact@bactivate.eu" style={{ color: '#901820' }}>contact@bactivate.eu</a> まで、
                    件名を「個人情報の開示等の請求」としてお送りください。ご本人であることを確認させていただいたうえで、
                    法令に従い、合理的な期間内に回答いたします。<strong>手数料は無料です。</strong>
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>9. 保有期間</h2>
                <p>
                    ニュースレター等にご登録いただいたメールアドレスは、配信停止のお申し出があるまで保管します。
                    お問い合わせに関する情報は最長3年間保管します。ご注文に関する記録は、法令上必要な期間保管します。
                    保管の必要がなくなった個人データは、遅滞なく消去するよう努めます。
                </p>
            </section>

            <section style={section}>
                <h2 style={h2}>10. 苦情・お問い合わせ窓口</h2>
                <p>
                    個人情報の取扱いに関するご質問・苦情は、以下までお寄せください。<br />
                    Bojesen and Petersen Biotech ApS　個人情報お問い合わせ窓口<br />
                    メール：<a href="mailto:contact@bactivate.eu" style={{ color: '#901820' }}>contact@bactivate.eu</a>
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                    なお、個人情報の取扱いに関する監督機関は<strong>個人情報保護委員会</strong>です。
                    同委員会への申出については <a href="https://www.ppc.go.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#901820' }}>www.ppc.go.jp</a> をご参照ください。
                </p>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#555' }}>
                    当社はEU域内に所在するため、EU一般データ保護規則（GDPR）の適用も受けます。
                    EU域内にお住まいの方は、デンマークデータ保護庁（<a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" style={{ color: '#901820' }}>datatilsynet.dk</a>）にも申し立てることができます。
                </p>
            </section>

            <section>
                <h2 style={h2}>11. 本ポリシーの変更</h2>
                <p>
                    当社は、法令の改正やサービス内容の変更に応じて本ポリシーを改定することがあります。
                    重要な変更を行う場合は、本ウェブサイト上でお知らせします。本ページ上部の日付は、最後に改定した日を示します。
                </p>
            </section>
        </main>
    );
}
