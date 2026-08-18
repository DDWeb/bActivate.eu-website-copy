import { useEffect } from 'react';

const AFFILIATLY_URL = 'https://www.affiliatly.com/af-1074392/affiliate.panel?mode=register';

const h2Style: React.CSSProperties = { fontSize: '1.6rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' };
const eyebrowStyle: React.CSSProperties = { fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.5rem' };
const cardStyle: React.CSSProperties = { background: 'white', padding: '1.5rem', borderLeft: '3px solid #901820' };
const btnStyle: React.CSSProperties = { display: 'inline-block', background: '#901820', color: '#fff', fontWeight: 600, padding: '0.85rem 2rem', textDecoration: 'none' };

export default function AffiliateProgram() {
    useEffect(() => {
        document.title = 'アフィリエイトプログラム｜bActivateで収入を得る';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '不受胎牝馬の83%が反応する獣医療用製品をおすすめし、1販売あたり15%のコミッション（1注文あたり最低$80）を得ましょう。60日間クッキー、参加無料。');
    }, []);

    return (
        <main>
            {/* Hero */}
            <section style={{ padding: '4rem 1rem 3rem', background: '#faf9f7' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={eyebrowStyle}>アフィリエイトプログラム</div>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#111', marginBottom: '1rem', lineHeight: 1.25 }}>牝馬の受胎を助けて収入を得る</h1>
                    <p style={{ color: '#555', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7, marginBottom: '1.5rem' }}>不受胎牝馬の83%が反応する獣医療用製品をおすすめし、誰かが注文するたびに意味のあるコミッションを得ましょう。</p>
                    <ul style={{ color: '#333', lineHeight: 2, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
                        <li>1販売あたり<strong>15%のコミッション</strong></li>
                        <li>1注文あたり<strong>最低 $80〜</strong></li>
                        <li><strong>60日間</strong>のクッキー</li>
                        <li>製品価格 <strong>¥41,999</strong>／バイアル</li>
                        <li>発送：デンマーク・米国・オーストラリアの各拠点から</li>
                    </ul>
                    <a href={AFFILIATLY_URL} target="_blank" rel="noopener noreferrer" style={btnStyle}>無料でプログラムに参加</a>
                </div>
            </section>

            {/* Who it's for */}
            <section style={{ padding: '3.5rem 1rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={eyebrowStyle}>どんな人に向いているか</div>
                    <h2 style={h2Style}>馬の世界の内側にいる人のために</h2>
                    <p style={{ color: '#555', marginBottom: '2rem', maxWidth: '640px' }}>マーケティングの経験は必要ありません。馬を繁殖する人々を知っているか、あなた自身がその一人であればよいのです。</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                        <div style={{ background: '#f8f8f8', padding: '1.5rem' }}>
                            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🩺 馬の獣医</h3>
                            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7 }}>すでにクライアントに bActivate をおすすめしているなら、そのクライアントがオンラインで注文したときに収入を得られます。リンクをクリックした瞬間から60日間のウィンドウがあります。</p>
                            <p style={{ color: '#888', fontSize: '0.82rem', marginTop: '0.5rem' }}>繁殖獣医・繁殖学専門医</p>
                        </div>
                        <div style={{ background: '#f8f8f8', padding: '1.5rem' }}>
                            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🐎 種馬牧場の管理者・生産者</h3>
                            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7 }}>繁殖事業を運営、または他者に助言しているなら、あなたのネットワークの不受胎牝馬が助けを必要とするとき、紹介リンクが——注文されたバイアルごとに——あなたに報酬をもたらします。</p>
                            <p style={{ color: '#888', fontSize: '0.82rem', marginTop: '0.5rem' }}>種馬牧場・個人生産者・厩舎管理者</p>
                        </div>
                        <div style={{ background: '#f8f8f8', padding: '1.5rem' }}>
                            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>📱 馬のコンテンツクリエイター</h3>
                            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7 }}>馬の繁殖や健康について書いたり、投稿したり、ポッドキャストで発信したりしているなら、bActivate はあなたの読者・視聴者が実際に必要とする製品です。現実の、いらだたしい問題を解決するからこそ、成約につながります。</p>
                            <p style={{ color: '#888', fontSize: '0.82rem', marginTop: '0.5rem' }}>ブロガー・インフルエンサー・YouTube・ポッドキャスター</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why it converts */}
            <section style={{ padding: '3.5rem 1rem', background: '#f8f8f8' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={eyebrowStyle}>なぜ成約するのか</div>
                    <h2 style={h2Style}>数字がすべてを物語る</h2>
                    <p style={{ color: '#555', marginBottom: '2rem', maxWidth: '680px' }}>bActivate は、何十年も生産者を悩ませてきた問題——陰性のスワブと正常な発情周期にもかかわらず受胎しない牝馬——を解決します。これが存在すると知ったとき、人々は注文します。</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={cardStyle}><div style={{ fontSize: '2rem', fontWeight: 700, color: '#901820' }}>83%</div><div style={{ color: '#555', fontSize: '0.9rem' }}>受胎率（Hagyard、64頭）</div></div>
                        <div style={cardStyle}><div style={{ fontSize: '2rem', fontWeight: 700, color: '#901820' }}>89%</div><div style={{ color: '#555', fontSize: '0.9rem' }}>受胎率（Kildangan／Godolphin、19頭）</div></div>
                        <div style={cardStyle}><div style={{ fontSize: '2rem', fontWeight: 700, color: '#901820' }}>15%</div><div style={{ color: '#555', fontSize: '0.9rem' }}>全牝馬の最大15%がこの問題を抱える</div></div>
                        <div style={cardStyle}><div style={{ fontSize: '2rem', fontWeight: 700, color: '#901820' }}>¥41,999</div><div style={{ color: '#555', fontSize: '0.9rem' }}>1バイアルあたり</div></div>
                    </div>
                    <ul style={{ color: '#333', lineHeight: 2, paddingLeft: '1.25rem' }}>
                        <li>通常のスワブ培養は、休眠感染の約67%を見逃す</li>
                        <li>査読付きで発表された科学的裏付け（Petersen et al., <em>Veterinary Microbiology</em> 2015, DOI: 10.1016/j.vetmic.2015.06.006）</li>
                        <li>60日間のクッキーウィンドウ——繁殖の意思決定には時間がかかる</li>
                    </ul>
                </div>
            </section>

            {/* How it works */}
            <section style={{ padding: '3.5rem 1rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={eyebrowStyle}>仕組み</div>
                    <h2 style={h2Style}>3ステップ。初期費用なし。</h2>
                    <p style={{ color: '#555', marginBottom: '2rem' }}>参加し、共有し、稼ぐ。開始まで全体で5分です。</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#901820', marginBottom: '0.5rem' }}>1. 無料で登録</div>
                            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7 }}>Affiliatly であなたのアフィリエイトアカウントを作成します。個人用トラッキングリンクとダッシュボードにすぐアクセスできます。</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#901820', marginBottom: '0.5rem' }}>2. リンクを共有</div>
                            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7 }}>クライアント、ウェブサイト、ソーシャルメディア、ニュースレターで共有します。クリックした人は60日間トラッキングされます。</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#901820', marginBottom: '0.5rem' }}>3. コミッションを得る</div>
                            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7 }}>あなたのリンク経由の注文ごとに15%、1注文あたり最低 $80 を得られます。PayPal または Visa に支払われます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commission details */}
            <section style={{ padding: '3.5rem 1rem', background: '#f8f8f8' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={eyebrowStyle}>コミッションの詳細</div>
                    <h2 style={h2Style}>明快で透明。</h2>
                    <p style={{ color: '#555', marginBottom: '2rem' }}>複雑な階層なし。想定外の控除なし。</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                        <div style={cardStyle}><div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>15% コミッション率</div><div style={{ color: '#555', fontSize: '0.88rem' }}>あなたのリンク経由の注文ごとに、1注文あたり最低 $80 を保証</div></div>
                        <div style={cardStyle}><div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>$80 1注文あたり最低</div><div style={{ color: '#555', fontSize: '0.88rem' }}>対象注文ごとに保証される最低コミッション。大口注文はさらに多く</div></div>
                        <div style={cardStyle}><div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>60日 クッキーウィンドウ</div><div style={{ color: '#555', fontSize: '0.88rem' }}>訪問者がリンクをクリックし、60日以内に注文すれば、すぐに注文しなくても報酬を得られます</div></div>
                        <div style={cardStyle}><div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>$80 最低支払額</div><div style={{ color: '#555', fontSize: '0.88rem' }}>収益は $80 に達すると支払われます。PayPal または Visa で、銀行振込の煩雑さなし</div></div>
                    </div>
                </div>
            </section>

            {/* Materials + what you get */}
            <section style={{ padding: '3.5rem 1rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={eyebrowStyle}>マーケティング素材付き</div>
                    <h2 style={h2Style}>すぐに共有できるコンテンツ</h2>
                    <p style={{ color: '#555', marginBottom: '1.5rem', maxWidth: '680px' }}>Facebook、Instagram その他のプラットフォーム向けに、bActivate の臨床的な裏付けを軸にした既製の広告画像を提供します。あなたは共有するだけ。クリエイティブは私たちが担当します。</p>
                    <ul style={{ color: '#333', lineHeight: 2, paddingLeft: '1.25rem', marginBottom: '2.5rem' }}>
                        <li>Facebook・Instagram 用広告画像</li>
                        <li>臨床結果を前面に出したコピー</li>
                        <li>生産者と獣医に語りかけるコンテンツ</li>
                        <li>ご要望に応じてさらに多くの素材をご用意</li>
                    </ul>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        <div>🔗 <strong>あなた専用のトラッキングリンク</strong> — 登録時に即座に生成。あらゆるプラットフォームで機能します。</div>
                        <div>📊 <strong>リアルタイムのダッシュボード</strong> — Affiliatly のダッシュボードで、クリック・注文・収益を追跡。</div>
                        <div>📄 <strong>科学的な裏付け</strong> — おすすめを裏付ける査読付き論文、臨床研究結果、製品資料。</div>
                        <div>✉️ <strong>直接のサポート</strong> — 製品やアカウントについてのご質問は <a href="mailto:hinz@bactivate.eu" style={{ color: '#901820' }}>hinz@bactivate.eu</a> まで。</div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '3.5rem 1rem', background: '#f8f8f8' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <h2 style={h2Style}>よくある質問</h2>
                    <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                        <div><strong>現実的にいくら稼げますか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>¥41,999 のバイアルに対する15%のコミッションで、1バイアルの注文あたり約 $37〜$40 を得られます。多くの生産者や種馬牧場は一度に複数のバイアルを注文するため、コミッションもそれに応じて増えます。保証される最低額は、対象注文あたり $80 です。1シーズンに数人のクライアントを紹介する獣医や繁殖管理者でも、意味のある収入を生み出せます。</p></div>
                        <div><strong>参加にウェブサイトは必要ですか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>いいえ。アフィリエイトリンクはどこでも機能します。メール、WhatsApp、ソーシャルメディア、ニュースレターで、クライアントに直接共有してください。</p></div>
                        <div><strong>60日間のクッキーはどう機能しますか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>誰かがあなたのリンクをクリックすると、トラッキングクッキーがそのブラウザに置かれます。その後60日以内のいつでも戻って注文すれば、初回訪問時に注文しなくても、あなたがコミッションを受け取ります。</p></div>
                        <div><strong>いつ、どのように支払われますか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>アカウント残高が $80 に達すると、PayPal または Visa で支払いが処理されます。支払い設定は Affiliatly のダッシュボードで管理します。</p></div>
                        <div><strong>参加に費用はかかりますか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>いいえ。アフィリエイトプログラムの参加は完全に無料です。初期費用、月額費用、最低販売要件はありません。</p></div>
                        <div><strong>獣医でも bActivate を宣伝できますか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>はい。当社のアフィリエイトの多くは馬の獣医です。オンラインで独自に購入するクライアントにリンクを共有できます。もちろん、おすすめは常にあなたの臨床判断と各患畜の個別のニーズに基づくべきです。</p></div>
                        <div><strong>どの国に向けて宣伝できますか？</strong><p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.35rem' }}>bActivate は3つの地域——ヨーロッパ、米国、オーストラリア——から製造・発送されるため、紹介先は最も近い販売元から注文できます。読者・視聴者がどこにいても、近くに発送の選択肢があります。</p></div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                    <h2 style={h2Style}>稼ぎ始める準備はできましたか？</h2>
                    <p style={{ color: '#555', marginBottom: '1.5rem' }}>5分以内に無料で参加。契約の縛りも、最低販売もありません。共有して稼ぐだけです。</p>
                    <a href={AFFILIATLY_URL} target="_blank" rel="noopener noreferrer" style={btnStyle}>アフィリエイトプログラムに参加</a>
                    <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '1rem' }}>参加無料 · 60日間クッキー · 15%コミッション · PayPal または Visa で支払い</p>
                </div>
            </section>
        </main>
    );
}
