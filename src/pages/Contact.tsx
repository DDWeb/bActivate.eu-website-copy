import { useEffect } from 'react';
import InternalLinks from '@/components/InternalLinks';

export default function Contact() {
    useEffect(() => {
        document.title = 'bActivateへのお問い合わせ｜Bojesen & Petersen Biotech、コペンハーゲン';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bActivateチームへのお問い合わせ：contact@bactivate.eu、+45 60 71 21 69、WhatsApp、またはお問い合わせフォーム。Bojesen & Petersen Biotech ApS、デンマーク・コペンハーゲン。');
    }, []);
    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-2">bActivateへのお問い合わせ</h1>
                    <p className="text-gray-600 mb-10">ご注文、獣医向けプロトコル、販売店へのご参加についてのご質問はありますか？ 通常、1営業日以内に返信いたします。</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">メール・電話</h2>
                            <p className="mb-2">メール: <a href="mailto:contact@bactivate.eu" className="text-primary underline">contact@bactivate.eu</a></p>
                            <p className="mb-2">電話: <a href="tel:+4560712169" className="text-primary underline">+45 60 71 21 69</a>（中央ヨーロッパ時間、平日）</p>
                            <p className="mb-2">WhatsApp: <a href="https://wa.me/4523991004" target="_blank" rel="noopener noreferrer" className="text-primary underline">チャットでお問い合わせ</a>。通常、数時間以内に返信します。</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">無料相談のご予約</h2>
                            <p className="mb-4 text-gray-600">特定の牝馬のことや、生産事業について当社チームと相談したいですか？ 無料相談をご予約ください。</p>
                            <a href="https://share-eu1.hsforms.com/1r_ir4DV2RSukWkIyzs8bzw2daoxk" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition inline-block">相談を申し込む</a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border border-gray-200 p-6 rounded">
                            <h2 className="text-base font-bold mb-2">ご注文と配送</h2>
                            <p className="text-gray-600 text-sm">bActivateは1バイアル ¥41,999 です。デンマーク・米国・オーストラリアの各拠点のうち、お届け先に最も適した拠点から日本国内へ発送します。<a href="/shop" className="text-primary underline">ショップ</a>、またはお近くの<a href="/our-distributors" className="text-primary underline">販売店</a>からご注文ください。</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded">
                            <h2 className="text-base font-bold mb-2">獣医師の方へ</h2>
                            <p className="text-gray-600 text-sm">活性化プロトコル、サンプリング、活性化後培養の解釈についてご質問がありますか？ <a href="/how-to-use" className="text-primary underline">獣医向けプロトコル</a>をご覧いただくか、直接お問い合わせください。</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded">
                            <h2 className="text-base font-bold mb-2">販売店・報道関係の方へ</h2>
                            <p className="text-gray-600 text-sm">ご自身の市場でbActivateの販売にご関心がある方、または科学的背景について取材をご希望の方は、<a href="mailto:contact@bactivate.eu" className="text-primary underline">contact@bactivate.eu</a> までメールをお送りください。オンライン面談を設定いたします。</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded mb-4">
                        <h2 className="text-lg font-bold mb-3">会社情報</h2>
                        <p className="text-gray-700 leading-relaxed">Bojesen &amp; Petersen Biotech ApS<br />Strandboulevarden 23<br />2100 コペンハーゲン、デンマーク<br />CVR（VAT）: DK34690324</p>
                    </div>
                    <p className="text-gray-500 text-sm">bActivateは、Anders Miki Bojesen教授と Morten R&oslash;nn Petersen博士によって開発されました。<a href="/about-us" className="text-primary underline">創業者について</a>。</p>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/shop', label: 'bActivateを注文する', description: '1バイアル ¥41,999、日本へ発送' },
                { to: '/our-distributors', label: '販売店を探す', description: '世界各国の獣医用販売店' },
                { to: '/when-to-use', label: '使用時期', description: 'あなたの牝馬は対象？ サインとリスク因子' },
                { to: '/studies-effect', label: '臨床エビデンス', description: 'Hagyard、Kildangan、査読付き研究' },
            ]} />
        </main>
    );
}
