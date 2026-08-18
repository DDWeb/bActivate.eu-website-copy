import { useEffect } from 'react';

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'プライバシーポリシー｜bActivate';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bactivate.jp のプライバシーポリシー。Bojesen & Petersen Biotech ApS が個人データをどのように収集・保管・利用するかについて。');
    }, []);

    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem', lineHeight: 1.8, color: '#333' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>プライバシーポリシー</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>最終更新：2026年4月9日</p>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>1. データ管理者</h2>
                <p>Bojesen &amp; Petersen Biotech ApS<br />
                Strandboulevarden 23, 2100 コペンハーゲン、デンマーク<br />
                VAT：34690324<br />
                メール：<a href="mailto:contact@bactivate.eu">contact@bactivate.eu</a><br />
                電話：<a href="tel:+4560712169">+45 60 71 21 69</a></p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>2. 収集するデータ</h2>
                <p>当社は、以下の個人データを収集する場合があります。</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>メールアドレス</strong>：本サイトのお問い合わせフォームからウェビナーやニュースレターに登録された場合。</li>
                    <li><strong>氏名・連絡先</strong>：メールや電話で直接ご連絡いただいた場合。</li>
                    <li><strong>利用データ</strong>：Google Analytics 経由で収集される匿名化された分析データ（ページビュー、セッション時間、地域）。同意なく個人を特定できる情報が Google Analytics に保存されることはありません。</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>3. 目的と法的根拠</h2>
                <p>当社は、以下の目的で個人データを取り扱います。</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>ウェビナー登録／ニュースレター</strong>：bActivate 製品や今後のイベントの情報をお送りするため。法的根拠：同意（GDPR 第6条1項(a)）。</li>
                    <li><strong>お客様からのお問い合わせ</strong>：ご質問への回答と製品サポートのため。法的根拠：正当な利益（GDPR 第6条1項(f)）。</li>
                    <li><strong>分析</strong>：ウェブサイトの改善と訪問者行動の理解のため。法的根拠：正当な利益／同意。</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>4. データの保持</h2>
                <p>ウェビナー登録で収集したメールアドレスは、購読を継続される限り保持します。配信停止は、<a href="mailto:contact@bactivate.eu">contact@bactivate.eu</a> へメールでお申し出いただければ、いつでも可能です。お問い合わせデータは最大3年間保持します。</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>5. 第三者</h2>
                <p>当社は、必要な場合に、以下の第三者サービスとデータを共有します。</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>HubSpot</strong>：ウェビナー登録・メールマーケティングのプラットフォーム。</li>
                    <li><strong>Google Analytics</strong>：匿名化されたウェブサイト分析。</li>
                    <li><strong>Google Tag Manager</strong>：タグ管理。</li>
                    <li><strong>Affiliatly</strong>：アフィリエイトプログラムのトラッキング。</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>当社は、お客様の個人データを第三者に販売しません。</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>6. お客様の権利</h2>
                <p>GDPR の下で、お客様には以下の権利があります。</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>当社が保有するお客様の個人データへのアクセス</li>
                    <li>データの訂正または削除の請求</li>
                    <li>いつでも同意を撤回すること</li>
                    <li>正当な利益に基づく処理への異議申立て</li>
                    <li>デンマークデータ保護庁（<a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">datatilsynet.dk</a>）への苦情申立て</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>これらの権利を行使される場合は、<a href="mailto:contact@bactivate.eu">contact@bactivate.eu</a> までご連絡ください。</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>7. クッキー</h2>
                <p>本サイトは、分析（Google Analytics）およびアフィリエイトのトラッキング（Affiliatly）にクッキーを使用します。本サイトの利用を継続することで、これらのクッキーの使用に同意したものとみなされます。クッキーは、ブラウザの設定でいつでも無効にできます。</p>
            </section>

            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>8. 本ポリシーの変更</h2>
                <p>当社は、本プライバシーポリシーを随時更新することがあります。本ページ上部の日付は、最後に改訂した時期を示します。変更後も本サイトの利用を継続された場合、更新後のポリシーに同意したものとみなされます。</p>
            </section>
        </main>
    );
}
