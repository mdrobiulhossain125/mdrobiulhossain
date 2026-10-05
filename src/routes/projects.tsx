import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects | Md. Robiul Hossain" }, { name: "description", content: "Development and sustainability projects by Md. Robiul Hossain." },
    { property: "og:title", content: "Projects | Md. Robiul Hossain" }, { property: "og:description", content: "Selected development and sustainability projects." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Projects,
});
function Projects() {
  return <SiteShell><h1 className="page-title">Projects</h1><div className="content-section"><h2>Development &amp; sustainability</h2>
    {projects.map((item) => <article className="entry dated-entry" key={item.name}><span className="entry-date">{item.year}</span><div><span className="entry-title">{item.name}</span><p>{item.detail}</p></div></article>)}
  </div></SiteShell>;
}
