
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import { blogPosts } from '@/lib/blogData';

export default function Blog() {
    return (
        <main>
            <section className={styles.hero}>
                <img
                    src="/images/foal-bg.jpg"
                    alt="Foal Background"
                    className={styles.backgroundImage}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Blog</h1>
                </div>
            </section>

            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {blogPosts.map((post, index) => (
                            <article key={index} className={styles.card}>
                                <h3 className={styles.postTitle} dangerouslySetInnerHTML={{ __html: post.title }}></h3>
                                <div className={styles.date}>{post.date}</div>
                                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                                    Read more <span className={styles.arrow}>&rarr;</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
