

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
        script.src = 'https://app.business.shop/script.js?100041286&data_platform=code&data_date=2024-04-09';

        script.onload = () => {
            // @ts-ignore
            if (window.xProductBrowser) {
                // @ts-ignore
                window.xProductBrowser(
                    "categoriesPerRow=3",
                    "views=grid(20,3) list(60) table(60)",
                    "categoryView=grid",
                    "searchView=list",
                    "defaultProductId=634422108",
                    "defaultSlug=bactivate-1-vial",
                    "id=my-store-100041286"
                );
            }
        };

        document.getElementById('my-store-100041286')?.appendChild(script);
    }, []);

    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div id="my-store-100041286" className="min-h-[500px]"></div>
                </div>
            </section>
            <ReviewsSection />
        </main>
    );
}
