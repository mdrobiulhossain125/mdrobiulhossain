import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { awards } from "@/lib/profile";
import awardImage from "@/assets/youth4climate-awardees.jpg.asset.json";

export const Route = createFileRoute("/awards")({
  head: () => ({ meta: [
    { title: "Awards & Recognition | Md. Robiul Hossain" }, { name: "description", content: "Awards and recognition of Md. Robiul Hossain, including the Youth4Climate 2026 award for Harvesting Resilience." },
    { property: "og:title", content: "Awards & Recognition | Md. Robiul Hossain" }, { property: "og:description", content: "Youth4Climate Awardee 2026 — Harvesting Resilience, Food and Agriculture theme." },
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
          <img className="award-image" src={awardImage.url} alt="Youth4Climate 2026 awardee projects in Uganda, Bangladesh and Kenya, including Eco Sentinels Bangladesh's Harvesting Resilience" loading="lazy" />
          <p className="entry-meta"><strong>{award.recognition}</strong></p>
          <dl className="award-facts">
            <div><dt>Project</dt><dd>{award.project}</dd></div>
            <div><dt>Category</dt><dd>{award.category}</dd></div>
            <div><dt>Awarding Organization</dt><dd>{award.organization}</dd></div>
            <div><dt>Country</dt><dd>{award.country}</dd></div>
            <div><dt>Award Event</dt><dd>{award.event}</dd></div>
            <div><dt>Event Dates</dt><dd>{award.eventDates}</dd></div>
            <div><dt>Award Year</dt><dd>{award.year}</dd></div>
          </dl>
          <p>{award.detail}</p>
        </article>
      </div>
    ))}
  </SiteShell>;
}
