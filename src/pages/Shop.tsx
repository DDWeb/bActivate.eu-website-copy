

import { useEffect } from 'react';
import ReviewsSection from '@/components/ReviewsSection';

export default function Shop() {
    useEffect(() => {
        // Only load script if not already loaded
        if (document.getElementById('ecwid-script')) return;

        const script = document.createElement('script');
        script.id = 'ecwid-script';
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src = 'https://app.business.shop/script.js?130367502&data_platform=code&data_date=2024-04-09';

        script.onload = () => {
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

        document.getElementById('my-store-130367502')?.appendChild(script);

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
                    <div id="my-store-130367502" className="min-h-[500px]"></div>
                </div>
            </section>
            <ReviewsSection />

        </main>
    );
}
