import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Blog | Md. Robiul Hossain" }, { name: "description", content: "Blog posts by Md. Robiul Hossain on economics, development and Bangladesh." },
    { property: "og:title", content: "Blog | Md. Robiul Hossain" }, { property: "og:description", content: "Writing on economics, development and Bangladesh's economy." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Blog,
});

function Blog() {
  return <SiteShell><h1 className="page-title">Blog</h1><div className="content-section card-list"><h2>Latest posts</h2>
    {blogPosts.map((post) => <article className="entry" key={post.slug}>
      <span className="status-pill">{post.date}</span>
      <h3 className="card-title"><Link to="/blog/$slug" params={{ slug: post.slug }}>{post.title}</Link></h3>
      <p className="entry-meta">By {post.author}</p>
      <p>{post.excerpt}</p>
      <Link className="project-link" to="/blog/$slug" params={{ slug: post.slug }}>Read full post<ArrowUpRight size={16} aria-hidden="true" /></Link>
    </article>)}
  </div></SiteShell>;
}
