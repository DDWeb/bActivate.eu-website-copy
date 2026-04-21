import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import ReviewsSection from "@/components/ReviewsSection";
import { supabase } from "@/lib/supabase";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string | null;
  published_at: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Blog | bActivate';
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://bactivate.us/blog';
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("slug, title, excerpt, published_at")
        .eq("language", "en")
        .eq("published", true)
        .order("published_at", { ascending: false });
      if (!error && data) setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <section className={styles.hero}>
        <img
          src="/images/foal-bg.jpg"
          alt="Foal in field"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Blog</h1>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {loading ? (
            <p style={{ textAlign: "center", padding: "4rem", color: "#666" }}>Loading...</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <article key={post.slug} className={styles.card}>
                  <h3 className={styles.postTitle} dangerouslySetInnerHTML={{ __html: post.title }} />
                  <div className={styles.date}>{formatDate(post.published_at)}</div>
                  {post.excerpt && (
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                      {post.excerpt}
                    </p>
                  )}
                  <Link to={"/blog/" + post.slug} className={styles.readMore}>
                    Read more <span className={styles.arrow}>&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <ReviewsSection />
    </main>
  );
}
