
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import styles from './page.module.css';
import ReviewsSection from '@/components/ReviewsSection';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main>
            <section className={styles.hero}>
                <Image
                    src="/images/foal-bg.jpg" // Fallback or use post.image if mapped correctly
                    alt="Hero Background"
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                </div>
            </section>

            <article className={styles.articleContainer}>
                <div className={styles.date}>{post.date}</div>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <ReviewsSection />
        </main>
    );
}
