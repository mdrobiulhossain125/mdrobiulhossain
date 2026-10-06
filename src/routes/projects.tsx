import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/profile";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects | Md. Robiul Hossain" }, { name: "description", content: "Development and sustainability projects by Md. Robiul Hossain." },
    { property: "og:title", content: "Projects | Md. Robiul Hossain" }, { property: "og:description", content: "Selected development and sustainability projects." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Projects,
});
function Projects() {
  return <SiteShell><h1 className="page-title">Projects</h1><div className="content-section project-list"><h2>Development &amp; sustainability</h2>
    {projects.map((item) => <article className="project-entry" key={item.name}>
      <div className="project-heading"><h3>{item.name}</h3><span className="entry-date">{item.year}</span></div>
      <img className="project-image" src={item.image} alt={item.imageAlt} width={1024} height={768} loading="lazy" />
      <div className="project-description">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <a className="project-link" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} project (opens in a new tab)`}>Project link<ArrowUpRight size={16} aria-hidden="true" /></a>
    </article>)}
  </div></SiteShell>;
}
