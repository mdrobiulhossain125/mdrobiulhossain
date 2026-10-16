import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.post.title} | Md. Robiul Hossain` : "Post unavailable | Md. Robiul Hossain";
    const desc = loaderData?.post.subtitle ?? "Blog post by Md. Robiul Hossain.";
    return { meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" },
    ] };
  },
  notFoundComponent: () => <SiteShell><h1 className="page-title">Post not found</h1><p><Link className="text-link" to="/blog">Back to blog</Link></p></SiteShell>,
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return <SiteShell>
    <Link className="project-link blog-back" to="/blog"><ArrowLeft size={16} aria-hidden="true" />All posts</Link>
    <article className="blog-article">
      <header className="blog-header">
        <span className="status-pill">{post.date}</span>
        <h1>{post.title}</h1>
        <p className="lead-copy">{post.subtitle}</p>
        <p className="entry-meta">By {post.author}</p>
      </header>
      <div className="blog-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: ({ node: _n, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}>{post.body}</ReactMarkdown>
      </div>
    </article>
  </SiteShell>;
}
