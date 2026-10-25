import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { awards } from "@/lib/profile";

export const Route = createFileRoute("/awards")({
  head: () => ({ meta: [
    { title: "Awards & Recognition | Md. Robiul Hossain" }, { name: "description", content: "Awards and recognition of Md. Robiul Hossain, including the Youth4Climate 2026 award for Harvesting Resilience." },
    { property: "og:title", content: "Awards & Recognition | Md. Robiul Hossain" }, { property: "og:description", content: "Youth4Climate 2026 Awardee — International Youth Climate Innovation Award for Harvesting Resilience." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Awards,
});

function Awards() {
  return <SiteShell>
    <h1 className="page-title">Awards &amp; Recognition</h1>
    {awards.map((award) => (
      <div className="content-section card-list" key={award.title}>
        <article className="entry award-entry">
          <span className="status-pill">Awardee · {award.year}</span>
          <h3 className="card-title award-title"><Trophy size={20} aria-hidden="true" /> {award.title}</h3>
          <p className="entry-meta"><strong>{award.recognition}</strong></p>
          <p><strong>Project:</strong> {award.project}</p>
          <p><strong>Category:</strong> {award.category}</p>
          <p><strong>Awarding Organization:</strong> {award.organization}</p>
          <p><strong>Year:</strong> {award.year}</p>
          <p>{award.detail}</p>
        </article>
      </div>
    ))}
  </SiteShell>;
}
