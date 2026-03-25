import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

interface Post {
  title: string;
  body: string;
  excerpt: string | null;
  published_at: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("title, body, excerpt, published_at")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      if (!error && data) setPost(data);
      setLoading(false);
    }
    fetchPost();
  }, [slug]);

  if (loading) return (
    <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#666" }}>Loading...</p>
    </main>
  );

  if (!post) return (
    <main style={{ minHeight: "60vh", padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Post not found</h1>
      <Link to="/blog">&larr; Back to Blog</Link>
    </main>
  );

  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <Link to="/blog" style={{ color: "#212F47", fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
        &larr; Back to Blog
      </Link>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#212F47", lineHeight: 1.2, marginBottom: "1rem" }}
        dangerouslySetInnerHTML={{ __html: post.title }} />
      <p style={{ color: "#888", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "3rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
        {formatDate(post.published_at)}
      </p>
      <div
        className="blog-content"
        style={{ lineHeight: 1.8, color: "#333", fontSize: "1.1rem" }}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </main>
  );
}
