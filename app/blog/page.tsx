import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import { blogPosts } from '@/lib/blogData';

export default function Blog() {
    return (
        <main>
            <section className={styles.mainSection}>
                <Image
                    src="/images/foal-bg.jpg"
                    alt="Foal Background"
                    fill
                    className={styles.backgroundImage}
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className={styles.overlay}></div>

                <div className={styles.contentWrapper}>
                    <div className={styles.headerContent}>
                        <div className={styles.eyebrow}>bActivate Around The World</div>
                        <h1 className={styles.title}>Blog</h1>
                    </div>

                    <div className={styles.container}>
                        <hr className={styles.divider} />
                        <div className={styles.grid}>
                            {blogPosts.map((post, index) => (
                                <article key={index} className={styles.card}>
                                    <h3 className={styles.postTitle} dangerouslySetInnerHTML={{ __html: post.title }}></h3>
                                    <div className={styles.date}>{post.date}</div>
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read more <span className={styles.arrow}>&rarr;</span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ReviewsSection />
        </main>
    );
}
