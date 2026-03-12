import { useEffect } from 'react';

export default function GoogleMerchantBadge() {
    useEffect(() => {
        if (document.getElementById('merchant-widget-script')) {
            // Script already loaded, just start the widget
            // @ts-ignore
            if (window.merchantwidget) {
                // @ts-ignore
                window.merchantwidget.start({
                    merchant_id: 5744487013,
                    // @ts-ignore
                    position: window.merchantwidget.BOTTOM_RIGHT,
                    region: 'DK',
                });
            }
            return;
        }

        const script = document.createElement('script');
        script.id = 'merchant-widget-script';
        script.src = 'https://www.gstatic.com/shopping/merchant/merchantwidget.js';
        script.defer = true;

        script.addEventListener('load', function () {
            // @ts-ignore
            window.merchantwidget.start({
                merchant_id: 5744487013,
                // @ts-ignore
                position: window.merchantwidget.BOTTOM_RIGHT,
                region: 'DK',
            });
        });

        document.head.appendChild(script);
    }, []);

    return null;
}
