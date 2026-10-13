import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { experience } from "@/lib/profile";

export const Route = createFileRoute("/research-experience")({
  head: () => ({ meta: [
    { title: "Research Experience | Md. Robiul Hossain" }, { name: "description", content: "Research assistant positions and fieldwork experience of Md. Robiul Hossain in development economics." },
    { property: "og:title", content: "Research Experience | Md. Robiul Hossain" }, { property: "og:description", content: "Research assistant positions in child development, fisheries, refugee studies and labour economics." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: ResearchExperience,
});
function ResearchExperience() {
  return <SiteShell><h1 className="page-title">Research Experience</h1>
    <div className="content-section card-list timeline">{experience.map((item) => (
      <article className="entry dated-entry" key={item.title}>
        <span className="entry-date">{item.period}</span>
        <div>
          <span className="entry-title">{item.title}</span>
          <p className="entry-meta">{item.affiliation}</p>
          {item.paragraphs
            ? item.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)
            : <p>{item.detail}</p>}
          {item.publication && (
            <div className="publication-block">
              <p><em>{item.publication.citation}</em></p>
              <p>{item.publication.description}</p>
            </div>
          )}
          {item.closing && <p>{item.closing}</p>}
        </div>
      </article>
    ))}</div>
  </SiteShell>;
}
