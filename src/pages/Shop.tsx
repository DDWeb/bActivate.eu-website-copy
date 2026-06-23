

import { useEffect } from 'react';
import ReviewsSection from '@/components/ReviewsSection';

export default function Shop() {
    useEffect(() => {
        document.title = 'Buy bActivate | Equine Uterine Treatment — €229 per Dose';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Order bActivate online — €229 per vial. Available for delivery across Europe. One vial per treatment cycle for problem mares with hidden uterine infections.');

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
                "description": "Veterinary uterine treatment for problem mares. Reactivates dormant Streptococcus equi subspecies zooepidemicus infections enabling accurate diagnosis and targeted antibiotic treatment. 83% pregnancy rate in clinical trials at Hagyard Equine Medical Institute.",
                "url": "https://bactivate.eu/shop",
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
                    "url": "https://bactivate.eu/shop",
                    "price": "229",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition",
                    "seller": {
                        "@type": "Organization",
                        "name": "Bojesen & Petersen Biotech ApS",
                        "url": "https://bactivate.eu"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "12"
                }
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
            // Script already loaded — just reinitialise the widget in the new div
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

        // Append to body — not to the store div (which React recreates on navigation)
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
                    <h1 className="text-3xl font-bold mb-2">Buy bActivate for Problem Mares</h1>
                    <p className="text-gray-600 mb-8">Order bActivate online, €229 per vial. A veterinary diagnostic aid for detecting dormant <em>Streptococcus zooepidemicus</em> infections in problem mares and non-pregnant mares. Shipped across Europe from Denmark.</p>
                    <div id="my-store-130367502" className="min-h-[500px]"></div>
                </div>
            </section>

            {/* WhatsApp CTA — shop page only */}
            <section style={{ background: '#f0fdf4', borderTop: '1px solid #bbf7d0', borderBottom: '1px solid #bbf7d0', padding: '2rem 1rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a1a', marginBottom: '0.4rem' }}>
                        Have questions before ordering?
                    </p>
                    <p style={{ color: '#555', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                        Chat with us directly on WhatsApp — we typically reply within a few hours.
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
                        Chat on WhatsApp
                    </a>
                </div>
            </section>

            <ReviewsSection />

        </main>
    );
}
