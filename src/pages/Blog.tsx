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
        document.title = 'bActivateブログ｜馬の子宮内膜炎と牝馬の受胎性';
        document.querySelector('meta[name="description"]')?.setAttribute('content', '無症候性子宮内膜炎、休眠細菌、bActivateに関する研究・臨床知見・ニュース。獣医師および馬の繁殖専門家の方へ。');
    }, []);
    return (
        <main>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <p className={styles.eyebrow}>知識と科学</p>
                    <h1 className={styles.title}>牝馬の受胎性と子宮内膜炎ブログ</h1>
                    <p className={styles.subtitle}>馬の繁殖の健康に関する記事とニュース</p>
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
                                            もっと読む <span className={styles.arrow}>→</span>
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
