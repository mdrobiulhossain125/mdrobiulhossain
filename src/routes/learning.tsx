import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { learningDevelopment } from "@/lib/profile";

export const Route = createFileRoute("/learning")({
  head: () => ({ meta: [
    { title: "Learning & Professional Development | Md. Robiul Hossain" },
    { name: "description", content: "Professional development and training completed by Md. Robiul Hossain, including agentic AI coding for research workflows." },
    { property: "og:title", content: "Learning & Professional Development | Md. Robiul Hossain" },
    { property: "og:description", content: "Professional development sessions, tutorials and training undertaken by Md. Robiul Hossain." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Learning,
});

function Learning() {
  return <SiteShell>
    <h1 className="page-title">Learning &amp; Professional Development</h1>
    <div className="content-section card-list">
      {learningDevelopment.map((item) => (
        <article className="entry" key={item.title}>
          <span className="status-pill">{item.type}</span>
          <h3 className="card-title">{item.title}</h3>
          <p className="entry-meta">{item.speaker} · {item.organization}</p>
          <p className="entry-meta">{item.date}</p>
          <p>{item.overview}</p>
          <p><strong>Key Learning Areas</strong></p>
          <div className="chip-row">
            {item.areas.map((area) => <span className="chip" key={area}>{area}</span>)}
          </div>
          {item.recording && (
            <a className="project-link" href={item.recording} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} /> Session recording
            </a>
          )}
        </article>
      ))}
    </div>
  </SiteShell>;
}
