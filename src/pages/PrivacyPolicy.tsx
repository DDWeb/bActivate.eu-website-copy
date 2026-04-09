import { useEffect } from 'react';

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'Privacy Policy | bActivate';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Privacy policy for bactivate.eu — how Bojesen & Petersen Biotech ApS collects, stores and uses personal data in accordance with GDPR.');
    }, []);

    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem', lineHeight: 1.8, color: '#333' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Privacy Policy</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Last updated: 9 April 2026</p>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>1. Data Controller</h2>
                <p>Bojesen &amp; Petersen Biotech ApS<br />
                Strandboulevarden 23, 2100 Copenhagen, Denmark<br />
                VAT: 34690324<br />
                Email: <a href="mailto:contact@bactivate.eu">contact@bactivate.eu</a><br />
                Phone: <a href="tel:+4560712169">+45 60 71 21 69</a></p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>2. What Data We Collect</h2>
                <p>We may collect the following personal data:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>Email address</strong> — when you sign up for our webinar or newsletter via the contact form on this site.</li>
                    <li><strong>Name and contact details</strong> — if you contact us directly by email or phone.</li>
                    <li><strong>Usage data</strong> — anonymised analytics data collected via Google Analytics (page views, session duration, geographic region). No personally identifiable information is stored by Google Analytics without your consent.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>3. Purpose and Legal Basis</h2>
                <p>We process your personal data for the following purposes:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>Webinar registration / newsletter</strong> — to send you information about bActivate products and upcoming events. Legal basis: consent (GDPR Art. 6(1)(a)).</li>
                    <li><strong>Customer enquiries</strong> — to respond to your questions and provide product support. Legal basis: legitimate interest (GDPR Art. 6(1)(f)).</li>
                    <li><strong>Analytics</strong> — to improve the website and understand visitor behaviour. Legal basis: legitimate interest / consent.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>4. Data Retention</h2>
                <p>We retain email addresses collected via the webinar sign-up for as long as you remain subscribed. You may unsubscribe at any time by emailing <a href="mailto:contact@bactivate.eu">contact@bactivate.eu</a>. Customer enquiry data is retained for up to 3 years.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>5. Third Parties</h2>
                <p>We share data with the following third-party services where necessary:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>HubSpot</strong> — webinar sign-up and email marketing platform.</li>
                    <li><strong>Google Analytics</strong> — anonymised website analytics.</li>
                    <li><strong>Google Tag Manager</strong> — tag management.</li>
                    <li><strong>Affiliatly</strong> — affiliate programme tracking.</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>We do not sell your personal data to third parties.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>6. Your Rights</h2>
                <p>Under GDPR you have the right to:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Object to processing based on legitimate interest</li>
                    <li>Lodge a complaint with the Danish Data Protection Agency (<a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">datatilsynet.dk</a>)</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>To exercise any of these rights, contact us at <a href="mailto:contact@bactivate.eu">contact@bactivate.eu</a>.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>7. Cookies</h2>
                <p>This site uses cookies for analytics (Google Analytics) and affiliate tracking (Affiliatly). By continuing to use this site you consent to the use of these cookies. You may disable cookies in your browser settings at any time.</p>
            </section>

            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>8. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. The date at the top of this page shows when it was last revised. Continued use of the site after any changes constitutes acceptance of the updated policy.</p>
            </section>
        </main>
    );
}
