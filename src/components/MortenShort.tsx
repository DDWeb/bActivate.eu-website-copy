import LiteYouTube from '@/components/LiteYouTube';
import shorts from '@/lib/mortenShorts.json';

// "Problem Mares" shorts with Dr. Morten Rønn Petersen. Each short sits on the page that answers the
// same question, with the transcript as visible text so search engines and AI can read what he says.
// The VideoObject schema is prerendered from the same JSON file (scripts/prerender.mjs).
type Short = { id: string; page: string; title: string; description: string; seconds: number; uploadDate: string; transcript: string };

export const mortenShorts = shorts as Short[];
export const shortForPage = (path: string) => mortenShorts.find((s) => s.page === path);

function Player({ s }: { s: Short }) {
    return (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '9 / 16', borderRadius: 12, overflow: 'hidden', background: '#000' }}>
            <LiteYouTube
                id={s.id}
                title={s.title}
                className="w-full h-full"
                poster={`/images/yt/${s.id}-short-360.webp`}
                posterSrcSet={`/images/yt/${s.id}-short-360.webp 360w, /images/yt/${s.id}-short-540.webp 540w`}
                posterSizes="(max-width: 640px) 70vw, 260px"
            />
        </div>
    );
}

export default function MortenShort({ path }: { path: string }) {
    const s = shortForPage(path);
    if (!s) return null;
    return (
        <section className="py-12" style={{ background: '#faf9f7' }} aria-labelledby={`video-${s.id}`}>
            <div className="container mx-auto px-4" style={{ maxWidth: 960 }}>
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-start">
                    <div style={{ maxWidth: 260, width: '100%', margin: '0 auto' }}>
                        <Player s={s} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#901820', marginBottom: '0.5rem' }}>Video, {s.seconds} seconds</p>
                        <h2 id={`video-${s.id}`} className="text-2xl font-bold mb-3">{s.title}</h2>
                        <p className="text-gray-700 mb-4">Dr. Morten Rønn Petersen, DVM, PhD, Dipl. ACT, co-developer of bActivate, answers the question in under a minute and a half.</p>
                        <h3 className="text-lg font-bold mb-2">Transcript</h3>
                        <blockquote style={{ borderLeft: '3px solid #901820', paddingLeft: '1rem', color: '#333', lineHeight: 1.7, margin: '0 0 1rem' }}>{s.transcript}</blockquote>
                        <a href={`https://www.youtube.com/shorts/${s.id}`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Watch on YouTube</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function MortenShortsGrid() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
            {mortenShorts.map((s) => (
                <div key={s.id}>
                    <div style={{ maxWidth: 260, margin: '0 auto' }}>
                        <Player s={s} />
                    </div>
                    <p style={{ fontWeight: 700, marginTop: '0.75rem', lineHeight: 1.4, textAlign: 'center' }}>
                        <a href={s.page} className="text-primary hover:underline">{s.title}</a>
                    </p>
                </div>
            ))}
        </div>
    );
}
