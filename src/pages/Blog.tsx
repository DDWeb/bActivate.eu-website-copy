import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Blog.module.css';
import { blogPosts } from '@/lib/blogData';

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
}

function getExcerpt(content: string, maxLength = 140): string {
    const text = stripHtml(content);
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

export default function Blog() {
    useEffect(() => {
        document.title = 'bActivate Blog | Mare Fertility & Equine Reproductive Health';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Expert articles on hidden uterine infections, mare fertility, and the science behind bActivate from Bojesen & Petersen Biotech ApS.');
    }, []);
    return (
        <main>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <p className={styles.eyebrow}>Knowledge & Science</p>
                    <h1 className={styles.title}>Blog</h1>
                    <p className={styles.subtitle}>Articles and news on equine reproductive health</p>
                </div>
            </section>

            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {blogPosts.map((post, index) => (
                            <article key={index} className={styles.card}>
                                <Link to={`/blog/${post.slug}`} className={styles.cardLink}>
                                    <h2 className={styles.postTitle}>{post.title.replace(/&[a-z]+;/gi, ' ').replace(/&#\d+;/gi, ' ')}</h2>
                                    <p className={styles.excerpt}>{getExcerpt(post.content)}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.date}>{post.date}</span>
                                        <span className={styles.readMore}>
                                            Read more <span className={styles.arrow}>→</span>
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
