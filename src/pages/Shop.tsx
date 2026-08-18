

import { useEffect } from 'react';
import ReviewsSection from '@/components/ReviewsSection';

export default function Shop() {
    useEffect(() => {
        document.title = 'bActivateのご注文｜不受胎牝馬のための獣医用診断';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '不受胎牝馬に用いる bActivate をご注文いただけます。世界各国の獣医用販売店を通じてもご購入いただけます。1バイアルで1活性化サイクル分。');

        // Product schema
        const existing = document.getElementById('product-schema');
        if (!existing) {
            const script = document.createElement('script');
            script.id = 'product-schema';
            script.type = 'application/ld+json';
            script.text = JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "bActivate",
                "description": "Veterinary diagnostic growth medium for problem mares. Reveals dormant Streptococcus equi subspecies zooepidemicus infections so the veterinarian can diagnose accurately and treat with targeted antibiotics. 83% pregnancy rate in a clinical study at Hagyard Equine Medical Institute.",
                "url": "https://bactivate.jp/shop",
                "image": "https://bactivate.eu/images/hero.gif",
                "brand": {
                    "@type": "Brand",
                    "name": "Bojesen & Petersen Biotech ApS"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "Bojesen & Petersen Biotech ApS",
                    "url": "https://bactivate.eu"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://bactivate.jp/shop",
                    "price": "41999",
                    "priceCurrency": "JPY",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition",
                    "priceValidUntil": "2026-12-31",
                    "seller": {
                        "@type": "Organization",
                        "name": "Bojesen & Petersen Biotech ApS",
                        "url": "https://bactivate.eu"
                    }
                },
                "sku": "bactivate-1-vial"
            });
            document.head.appendChild(script);
        }
        return () => {
            document.getElementById('product-schema')?.remove();
        };
    }, []);

    useEffect(() => {
        const initEcwid = () => {
            // @ts-ignore
            if (window.xProductBrowser) {
                // @ts-ignore
                window.xProductBrowser(
                    "categoriesPerRow=3",
                    "views=grid(20,3) list(60) table(60)",
                    "categoryView=grid",
                    "searchView=list",
                    "defaultProductId=815977402",
                    "defaultSlug=bactivate-1-vial",
                    "id=my-store-130367502"
                );
            }
        };

        if (document.getElementById('ecwid-script')) {
            // Script already loaded, just reinitialise the widget in the new div
            initEcwid();
            return;
        }

        const script = document.createElement('script');
        script.id = 'ecwid-script';
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src = 'https://app.business.shop/script.js?130367502&data_platform=code&data_date=2024-04-09';
        script.onload = initEcwid;

        // Append to body, not to the store div (which React recreates on navigation)
        document.body.appendChild(script);

        // Google Customer Reviews - survey opt-in after order placement
        // @ts-ignore
        window.renderOptIn = function () {
            // @ts-ignore
            if (window.Ecwid) {
                // @ts-ignore
                window.Ecwid.OnOrderPlaced.add(function (order: any) {
                    const deliveryDate = new Date();
                    deliveryDate.setDate(deliveryDate.getDate() + 7);
                    const estimatedDelivery = deliveryDate.toISOString().split('T')[0];

                    // @ts-ignore
                    window.gapi.load('surveyoptin', function () {
                        // @ts-ignore
                        window.gapi.surveyoptin.render({
                            "merchant_id": 5744487013,
                            "order_id": String(order.orderNumber),
                            "email": order.email,
                            "delivery_country": order.shippingPerson.countryCode,
                            "estimated_delivery_date": estimatedDelivery
                        });
                    });
                });
            }
        };

        if (!document.getElementById('google-customer-reviews-script')) {
            const googleScript = document.createElement('script');
            googleScript.id = 'google-customer-reviews-script';
            googleScript.src = 'https://apis.google.com/js/platform.js?onload=renderOptIn';
            googleScript.async = true;
            googleScript.defer = true;
            document.head.appendChild(googleScript);
        }
    }, []);

    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-2">不受胎牝馬のための bActivate ご購入</h1>
                    <p className="text-gray-600 mb-8">bActivateをオンラインでご注文いただけます。1バイアル ¥41,999（税別）。不受胎牝馬・空胎牝馬における休眠状態の <em>Streptococcus zooepidemicus</em> 感染を検出するための、獣医療用の診断補助です。日本国内へお届けします。デンマーク・米国・オーストラリアの各拠点のうち、お届け先に最も適した拠点から発送します。</p>
                    <div id="my-store-130367502" className="min-h-[500px]"></div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12 mb-4">
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">製品内容</h2>
                            <p className="text-gray-600 text-sm">bActivateの活性化培養培地 10 ml バイアル 1本です。1バイアルで、1頭の牝馬に対する1回の活性化サイクルに相当します。獣医師が発情初期に子宮内へ注入し、48時間後に通常の培養でそれまで隠れていた細菌が明らかになり、獣医師が標的抗菌薬で治療できます。</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">ご注文の流れ</h2>
                            <p className="text-gray-600 text-sm">上記からオンラインでご注文ください。当社の各拠点（デンマーク・米国・オーストラリア）のうち、お届け先に最も近い拠点から日本全国へ発送します。bActivateは処方箋が必要な獣医療用製品です。活性化サイクルは、担当の獣医師と相談のうえ、交配を予定するサイクルの1サイクル前に行うのが理想です。ご不明な点は、まず<a href="/contact" className="text-primary underline">お問い合わせ</a>ください。</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">お近くの供給元をご希望ですか？</h2>
                            <p className="text-gray-600 text-sm">bActivateは、世界各国の獣医用販売店を通じてもご購入いただけます。<a href="/our-distributors" className="text-primary underline">お近くの販売店を探す</a>。診療所や牧場で大量にご注文の場合は、<a href="/contact" className="text-primary underline">直接お問い合わせ</a>ください。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA, shop page only */}
            <section style={{ background: '#f0fdf4', borderTop: '1px solid #bbf7d0', borderBottom: '1px solid #bbf7d0', padding: '2rem 1rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a1a', marginBottom: '0.4rem' }}>
                        ご注文前にご質問はありますか？
                    </p>
                    <p style={{ color: '#555', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                        WhatsAppで直接チャットできます。通常は数時間以内に返信いたします。
                    </p>
                    <a
                        href="https://wa.me/4523991004?text=Hi!%20I%20have%20a%20question%20about%20bActivate%20before%20ordering..."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: 'white', fontWeight: 700, fontSize: '0.95rem', padding: '0.75rem 1.75rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 2px 12px rgba(37,211,102,0.35)' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsAppでチャット
                    </a>
                </div>
            </section>

            <ReviewsSection />

        </main>
    );
}
