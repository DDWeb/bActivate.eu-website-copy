import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blogData';
import { relatedPosts } from '@/lib/blogRelated';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) return;

        // Decode HTML entities in title for use in meta
        const tempEl = document.createElement('textarea');
        tempEl.innerHTML = post.title.replace(/<[^>]*>/g, '');
        const cleanTitle = tempEl.value;

        // Strip HTML from content for description
        const cleanDesc = post.content
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 155);

        document.title = `${cleanTitle} | bActivate`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', cleanDesc);

        // Set canonical to this post's URL (overrides homepage canonical in index.html)
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://bactivate.eu/blog/${slug}`);

        // Article schema
        let schemaScript = document.getElementById('article-schema') as HTMLScriptElement | null;
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = 'article-schema';
            schemaScript.setAttribute('type', 'application/ld+json');
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': cleanTitle,
            'datePublished': post.date,
            'dateModified': (post as { updated?: string }).updated || post.date,
            'author': {
                '@type': 'Organization',
                'name': 'Bojesen & Petersen Biotech ApS',
                'url': 'https://bactivate.eu'
            },
            'publisher': {
                '@type': 'Organization',
                'name': 'bActivate',
                'url': 'https://bactivate.eu'
            },
            'url': `https://bactivate.eu/blog/${slug}`
        });

        return () => {
            // Restore homepage canonical on unmount
            document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://bactivate.eu/');
            document.getElementById('article-schema')?.remove();
        };
    }, [post, slug]);

    if (!post) {
        return (
            <main>
                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
                        <Link to="/blog" className="text-primary hover:underline">← Back to blog</Link>
                    </div>
                </section>
            </main>
        );
    }

    const updated = (post as { updated?: string }).updated;
    const related = (relatedPosts[post.slug] || []).flatMap(s => {
        const p = blogPosts.find(x => x.slug === s);
        return p ? [p] : [];
    });

    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link to="/blog" className="text-primary hover:underline text-sm mb-8 block">← Back to blog</Link>
                    <h1 className="text-3xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div className="text-gray-500 text-sm mb-8">{`Published ${post.date}${updated ? `, updated ${updated}` : ''}`}</div>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                    {related.length > 0 && (
                        <section aria-label="Related reading" style={{ marginTop: '3rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.75rem' }}>Related reading</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {related.map(r => (
                                    <li key={r.slug} style={{ marginBottom: '0.5rem' }}>
                                        <Link to={`/blog/${r.slug}`} className="text-primary hover:underline" dangerouslySetInnerHTML={{ __html: r.title }} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </section>
        </main>
    );
}
