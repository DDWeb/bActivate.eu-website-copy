import { useState } from 'react';

// Click-to-load YouTube facade: shows the video thumbnail until the user
// clicks play, then swaps in the real iframe. Saves ~860 KB of player JS
// per embed on initial page load.
export default function LiteYouTube({ id, title, className }: { id: string; title: string; className?: string }) {
    const [active, setActive] = useState(false);

    if (active) {
        return (
            <iframe
                className={className}
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className={className}
            style={{ position: 'relative', display: 'block', width: '100%', height: '100%', padding: 0, border: 'none', cursor: 'pointer', background: '#000', overflow: 'hidden' }}
        >
            <img
                src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                alt={title}
                loading="lazy"
                // maxresdefault is 1280x720 and natively 16:9. Not every video has
                // one, so fall back to the 480x360 hqdefault when it is missing.
                onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                        img.dataset.fallback = '1';
                        img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                    }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 68, height: 48, background: 'rgba(144, 24, 32, 0.92)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid #fff', display: 'block', marginLeft: 4 }} />
            </span>
        </button>
    );
}
