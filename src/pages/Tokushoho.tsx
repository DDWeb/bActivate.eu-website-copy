import { useEffect } from 'react';

const dtStyle: React.CSSProperties = { fontWeight: 700, color: '#111', marginTop: '1.5rem', marginBottom: '0.35rem' };
const ddStyle: React.CSSProperties = { color: '#333', lineHeight: 1.75, margin: 0 };

export default function Tokushoho() {
    useEffect(() => {
        document.title = '特定商取引法に基づく表記｜bActivate';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bActivate（Bojesen and Petersen Biotech ApS）の特定商取引法に基づく表記。販売業者、価格、支払い方法、引渡し時期、返品特約について。');
    }, []);

    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem', lineHeight: 1.8, color: '#333' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>特定商取引法に基づく表記</h1>

            <dl>
                <dt style={dtStyle}>販売業者（事業者名）</dt>
                <dd style={ddStyle}>Bojesen and Petersen Biotech ApS</dd>

                <dt style={dtStyle}>運営統括責任者</dt>
                <dd style={ddStyle}>Anders Miki Bojesen 教授</dd>

                <dt style={dtStyle}>所在地</dt>
                <dd style={ddStyle}>Strandboulevarden 23, DK-2100 Copenhagen, Denmark（デンマーク）</dd>

                <dt style={dtStyle}>電話番号</dt>
                <dd style={ddStyle}><a href="tel:+4560712169" style={{ color: '#901820' }}>+45 60 71 21 69</a></dd>

                <dt style={dtStyle}>メールアドレス</dt>
                <dd style={ddStyle}><a href="mailto:contact@bactivate.eu" style={{ color: '#901820' }}>contact@bactivate.eu</a></dd>

                <dt style={dtStyle}>販売URL</dt>
                <dd style={ddStyle}><a href="/shop" style={{ color: '#901820' }}>https://bactivate.jp/shop</a></dd>

                <dt style={dtStyle}>販売価格</dt>
                <dd style={ddStyle}>各商品ページに表示します（bActivate：1バイアル 41,999円・税別）。<br />海外からの発送のため、当社では日本の消費税を課税・徴収いたしません。</dd>

                <dt style={dtStyle}>商品代金以外に必要な料金</dt>
                <dd style={ddStyle}>送料、決済手数料（該当する場合）、および輸入時に日本の税関で課される消費税・関税等（発生する場合、お客様のご負担となります）。<br />送料は、お届け先および発送拠点（デンマーク・米国・オーストラリアのうち最適な拠点）により異なり、ご注文時にご確認いただけます。</dd>

                <dt style={dtStyle}>お支払い方法</dt>
                <dd style={ddStyle}>主要なクレジットカード／デビットカード。</dd>

                <dt style={dtStyle}>お支払い時期</dt>
                <dd style={ddStyle}>ご注文時にお支払いが確定します。</dd>

                <dt style={dtStyle}>商品の引渡し時期</dt>
                <dd style={ddStyle}>ご注文（およびご入金）確認後、2〜3営業日以内に発送します。</dd>

                <dt style={dtStyle}>返品・交換について（返品特約）</dt>
                <dd style={ddStyle}>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                        <li>商品の性質上、発送後のお客様都合による返品・交換はお受けできません。</li>
                        <li>不良品または輸送中の破損等があった場合は、商品到着後5日以内に、メール（contact@bactivate.eu）にてご連絡ください。個別に対応いたします。</li>
                        <li>発送前のキャンセルをご希望の場合は、上記メールまでご連絡ください。</li>
                    </ul>
                </dd>

                <dt style={dtStyle}>商品について</dt>
                <dd style={ddStyle}>bActivateは、獣医師の指示・処方に基づいて使用する製品です。</dd>
            </dl>

            <p style={{ color: '#666', fontSize: '0.875rem', marginTop: '2.5rem' }}>（本ページは特定商取引法第11条に基づく通信販売の表示です。）</p>
        </main>
    );
}
