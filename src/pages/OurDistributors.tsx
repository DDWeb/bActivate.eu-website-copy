import { useEffect } from 'react';
import styles from './OurDistributors.module.css';

export default function OurDistributors() {
    useEffect(() => {
        document.title = 'bActivate 販売店一覧｜世界各国の獣医用販売店';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'bActivateは、米国（Hagyard、Midwest Veterinary Supply）、英国、オランダ、デンマーク、オーストラリアなど、世界各国の認定販売店を通じてご購入いただけます。');
    }, []);
    const distributors = [
        {
            region: '英国（UK）',
            name: 'Nupsala LTD',
            address: ['37 Pate Road, Leicester Road Industrial Estate', 'Melton Mowbray, Leicestershire, LE13 0RG, UK'],
            phone: '+44 (0) 1865 922 227',
            email: 'info@nupsala.com',
            website: 'https://www.nupsala.com/'
        },
        {
            region: 'ヨーロッパ',
            name: 'Bojesen & Petersen Biotech',
            address: ['Strandboulevarden 23,', 'DK-2100, Copenhagen, Denmark'],
            phone: '+45 60 71 21 69',
            email: 'contact@bactivate.eu',
            website: 'https://bactivate.eu/'
        },
        {
            region: 'オランダ',
            name: 'Grovet',
            address: ['Centurionbaan 140', '3769 AV Soesterberg'],
            phone: '+44 142 248 1900',
            email: 'info@grovet.com',
            website: 'https://www.grovet.com/en/'
        },
        {
            region: 'デンマーク',
            name: 'proVET Nordic ApS',
            address: ['Industrivej 5,', '6640 Lunderskov, Danmark'],
            phone: '+45 53 28 29 29',
            email: 'mail@provet.dk',
            website: 'https://provet.dk/'
        },
        {
            region: '米国（USA）',
            name: 'Midwest Veterinary Supply',
            address: ['21467 Holyoke Avenue', 'Lakeville, MN 55044'],
            phone: '1-800-643-9378',
            email: 'customer.accounts@midwestvet.net',
            website: 'www.midwestvetsupply.com'
        },
        {
            region: '米国（USA）',
            name: 'Hagyard Pharmacy',
            address: ['4250 Iron Works Pike,', 'Lexington, KY 40511-8412'],
            phone: '001 859 281 9511',
            email: 'info@hagyardpharmacy.com',
            website: 'www.hagyardpharmacy.com'
        },
        {
            region: '米国（USA）',
            name: 'Bojesen & Petersen Biotech',
            address: ['961 Cayots Corner Rd', 'Chesapeake City, MD 21915 USA'],
            phone: '+45 23844188',
            email: 'contact@bactivate.eu',
            website: 'www.bactivate.eu'
        },
        {
            region: 'オーストラリア',
            name: 'Scone Equine Hospital and Referral Centre',
            address: ['406 Bunnan Road', 'Scone NSW 2337', 'PO Box 280 Scone NSW 2337'],
            phone: '+61 2 6545 1333',
            email: 'info@sconeequine.com.au',
            website: 'www.sconeequinehospital.com.au/'
        },
        {
            region: 'その他の地域',
            name: 'Bojesen & Petersen Biotech',
            address: ['Strandboulevarden 23,', 'DK-2100, Copenhagen, Denmark'],
            phone: '+45 23844188',
            email: 'contact@bactivate.eu',
            website: 'www.bactivate.eu'
        }
    ];

    return (
        <main>
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.eyebrow}>世界のbActivate</div>
                    <h1 className={styles.title}>販売店一覧</h1>
                    <div className={styles.introText}>
                        <p>bActivateの販売店は、市場への深い理解と卓越性への取り組みをもって、ブランドの普及に重要な役割を果たしています。販売店は当社とお客様をつなぐ架け橋として、bActivateの革新的な製品を幅広いお客様のもとへお届けしています。</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className={styles.distributorGrid}>
                        {distributors.map((dist, index) => (
                            <div key={index} className={styles.distributorCard}>
                                <h3 className={styles.regionTitle}>{dist.region}</h3>
                                <div className={styles.distributorInfo}>
                                    <strong>{dist.name}</strong>
                                    {dist.address.map((line, i) => <div key={i}>{line}</div>)}
                                    <div className="mt-4">
                                        <div>電話: <a href={`tel:${dist.phone}`} className={styles.link}>{dist.phone}</a></div>
                                        <div>メール: <a href={`mailto:${dist.email}`} className={styles.link}>{dist.email}</a></div>
                                        <div>ウェブサイト: <a href={dist.website.startsWith('http') ? dist.website : `https://${dist.website}`} target="_blank" rel="noopener noreferrer" className={styles.link}>{dist.website}</a></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
