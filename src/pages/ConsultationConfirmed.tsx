import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ConsultationConfirmed() {
    useEffect(() => {
        document.title = '相談のご予約完了｜bActivate';
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://bactivate.jp/consultation-confirmed';
    }, []);

    return (
        <main style={{ background: '#f9f9f9', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
            <div style={{ maxWidth: '600px', width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', padding: '3rem 2.5rem', textAlign: 'center' }}>

                {/* Checkmark */}
                <div style={{ width: '72px', height: '72px', background: '#e8f5e9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2d7a3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                {/* Heading */}
                <h1 style={{ fontFamily: "'Fira Sans Condensed', sans-serif", fontSize: '1.9rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    bActivateの相談のご予約が完了しました。
                </h1>

                {/* Info box */}
                <div style={{ background: '#f4f4f4', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
                    <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                        📱 通話前に<strong>ショートメッセージ</strong>をお送りします。<br />
                        📞 <strong>+45 30 14 27 52</strong> からお電話します。<br />
                        🔄 電話に出られなかった場合は、<strong>もう一度フォームにご記入</strong>ください。
                    </p>
                </div>

                {/* Go to home page button */}
                <Link
                    to="/"
                    style={{ display: 'inline-block', background: '#901820', color: '#fff', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '0.85rem 2.5rem', textDecoration: 'none', borderRadius: '0', marginBottom: '2.5rem', transition: 'background 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.background = '#721319')}
                    onMouseOut={e => (e.currentTarget.style.background = '#901820')}
                >
                    ホームページへ
                </Link>

                {/* Divider */}
                <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0 0 2rem' }} />

                {/* Exclusive content */}
                <p style={{ color: '#555', fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                    お待ちの間に、bActivateの科学的背景をご覧ください：
                </p>
                <Link
                    to="/studies-effect"
                    style={{ display: 'inline-block', color: '#901820', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'underline', marginBottom: '1.5rem' }}
                >
                    研究と効果 →
                </Link>

                <p style={{ color: '#555', fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                    または YouTube で動画をご覧ください：
                </p>
                <a
                    href="https://www.youtube.com/@bActivate-Endometritis"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#cc0000', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', marginBottom: '2rem' }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#cc0000"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                    @bActivate-Endometritis
                </a>

                {/* Social links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <a href="https://www.facebook.com/Bojesen.and.Petersen.Biotech/" target="_blank" rel="noopener noreferrer"
                        style={{ color: '#1877f2', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                        Facebook
                    </a>
                    <span style={{ color: '#ddd' }}>|</span>
                    <a href="https://www.linkedin.com/company/bojesenandpetersenbiotech/" target="_blank" rel="noopener noreferrer"
                        style={{ color: '#0a66c2', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                        LinkedIn
                    </a>
                    <span style={{ color: '#ddd' }}>|</span>
                    <a href="https://www.tiktok.com/@bactivate.eu" target="_blank" rel="noopener noreferrer"
                        style={{ color: '#000', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                        TikTok
                    </a>
                </div>

            </div>
        </main>
    );
}
