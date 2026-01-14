import styles from './page.module.css';
import ReviewsSection from '@/components/ReviewsSection';

export default function OurDistributors() {
    const distributors = [
        {
            region: 'UK',
            name: 'Nupsala LTD',
            address: ['37 Pate Road, Leicester Road Industrial Estate', 'Melton Mowbray, Leicestershire, LE13 0RG, UK'],
            phone: '+44 (0) 1865 922 227',
            email: 'info@nupsala.com',
            website: 'https://www.nupsala.com/'
        },
        {
            region: 'Europe',
            name: 'Bojesen & Petersen Biotech',
            address: ['Strandboulevarden 23,', 'DK-2100, Copenhagen, Denmark'],
            phone: '+45 60 71 21 69',
            email: 'contact@bactivate.eu',
            website: 'http://www.bactivate.eu/'
        },
        {
            region: 'The Netherlands',
            name: 'Grovet',
            address: ['Centurionbaan 140', '3769 AV Soesterberg'],
            phone: '+44 142 248 1900',
            email: 'info@grovet.com',
            website: 'https://www.grovet.com/en/'
        },
        {
            region: 'Denmark',
            name: 'proVET Nordic ApS',
            address: ['Industrivej 5,', '6640 Lunderskov, Danmark'],
            phone: '+45 53 28 29 29',
            email: 'mail@provet.dk',
            website: 'https://provet.dk/'
        },
        {
            region: 'USA',
            name: 'Midwest Veterinary Supply',
            address: ['21467 Holyoke Avenue', 'Lakeville, MN 55044'],
            phone: '1-800-643-9378',
            email: 'customer.accounts@midwestvet.net',
            website: 'www.midwestvetsupply.com'
        },
        {
            region: 'USA',
            name: 'Hagyard Pharmacy',
            address: ['4250 Iron Works Pike,', 'Lexington, KY 40511-8412'],
            phone: '001 859 281 9511',
            email: 'info@hagyardpharmacy.com',
            website: 'www.hagyardpharmacy.com'
        },
        {
            region: 'USA',
            name: 'Bojesen & Petersen Biotech',
            address: ['961 Cayots Corner Rd', 'Chesapeake City, MD 21915 USA'],
            phone: '+45 23844188',
            email: 'contact@bactivate.eu',
            website: 'www.bactivate.eu'
        },
        {
            region: 'Australia',
            name: 'Scone Equine Hospital and Referral Centre',
            address: ['406 Bunnan Road', 'Scone NSW 2337', 'PO Box 280 Scone NSW 2337'],
            phone: '+61 2 6545 1333',
            email: 'info@sconeequine.com.au',
            website: 'www.sconeequinehospital.com.au/'
        },
        {
            region: 'Other places',
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
                    <div className={styles.eyebrow}>bActivate Around The World</div>
                    <h1 className={styles.title}>Our distributors</h1>
                    <div className={styles.introText}>
                        <p>With a deep understanding of the market and a commitment to excellence, bActivate distributors play a crucial role in expanding the brand’s reach. These distributors serve as the bridge between the company and consumers, ensuring that bActivate’s innovative products reach a wide audience.</p>
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
                                        <div>Phone: <a href={`tel:${dist.phone}`} className={styles.link}>{dist.phone}</a></div>
                                        <div>Email: <a href={`mailto:${dist.email}`} className={styles.link}>{dist.email}</a></div>
                                        <div>Website: <a href={dist.website.startsWith('http') ? dist.website : `https://${dist.website}`} target="_blank" rel="noopener noreferrer" className={styles.link}>{dist.website}</a></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
