import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { leadership, leadershipEvents, leadershipStatement, sports, volunteering } from "@/lib/profile";

export const Route = createFileRoute("/leadership")({
  head: () => ({ meta: [
    { title: "Leadership Experience | Md. Robiul Hossain" }, { name: "description", content: "Leadership experience of Md. Robiul Hossain: student societies, event coordination, volunteering and sports at the University of Chittagong." },
    { property: "og:title", content: "Leadership Experience | Md. Robiul Hossain" }, { property: "og:description", content: "Student societies, event coordination, volunteering and community engagement of Md. Robiul Hossain." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Leadership,
});

function OrgLink({ url, label }: { url: string; label: string }) {
  return <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">{label} <ArrowUpRight size={14} /></a>;
}

function Leadership() {
  return <SiteShell>
    <h1 className="page-title">Leadership Experience</h1>
    <div className="content-section">
      {leadership.map((org) => (
        <article className="entry" key={org.name}>
          <span className="entry-title">{org.name}</span>
          <p className="entry-meta">{[org.period, ...org.roles].filter(Boolean).join(" · ")}</p>
          {org.description && <p>{org.description}</p>}
          {org.contributions && (
            <>
              <p className="entry-meta"><strong>Key Contributions</strong></p>
              <ul className="plain-list">{org.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
            </>
          )}
          {org.highlights && <p><strong>Role Highlights:</strong> {org.highlights}</p>}
          {org.url && org.linkLabel && <OrgLink url={org.url} label={org.linkLabel} />}
        </article>
      ))}
    </div>
    <div className="content-section">
      <h2>Selected Events &amp; Coordination</h2>
      {leadershipEvents.map((e) => (
        <article className="entry dated-entry" key={e.name}>
          <span className="entry-date">{e.year}</span>
          <div>
            <span className="entry-title">{e.role} — {e.name}</span>
            <p>{e.detail}</p>
            {e.url && e.linkLabel && <OrgLink url={e.url} label={e.linkLabel} />}
          </div>
        </article>
      ))}
    </div>
    <div className="content-section">
      <h2>Volunteering &amp; Community Engagement</h2>
      {volunteering.map((v) => (
        <article className="entry dated-entry" key={v.name}>
          <span className="entry-date">{v.year}</span>
          <div>
            <span className="entry-title">{v.name}</span>
            <p className="entry-meta">{v.role}</p>
            <p>{v.detail}</p>
          </div>
        </article>
      ))}
    </div>
    <div className="content-section">
      <h2>Sports</h2>
      <article className="entry">
        <span className="entry-title">{sports.name}</span>
        <p className="entry-meta">{sports.team}</p>
        <p><strong>{sports.achievement}</strong></p>
        <p>{sports.detail}</p>
      </article>
    </div>
    <div className="content-section">
      <h2>What Leadership Means to Me</h2>
      {leadershipStatement.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
    </div>
  </SiteShell>;
}
