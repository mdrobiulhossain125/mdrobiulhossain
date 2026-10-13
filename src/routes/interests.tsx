import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { hobbies, hobbiesClosing, hobbiesIntro } from "@/lib/profile";

export const Route = createFileRoute("/interests")({
  head: () => ({ meta: [
    { title: "Hobbies & Interests | Md. Robiul Hossain" }, { name: "description", content: "Hobbies and interests of Md. Robiul Hossain: cycling, cricket, football, hockey, travelling and the Next Stop Robi YouTube channel." },
    { property: "og:title", content: "Hobbies & Interests | Md. Robiul Hossain" }, { property: "og:description", content: "Sports, travelling and the Next Stop Robi travel channel of Md. Robiul Hossain." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Interests,
});

function Interests() {
  return <SiteShell>
    <h1 className="page-title">Hobbies &amp; Interests</h1>
    <div className="content-section lead-copy">{hobbiesIntro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
    {hobbies.map((h) => (
      <div className="content-section interest-card" key={h.name}>
        <h2>{h.name}</h2>
        {h.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        {h.bullets && <ul className="plain-list">{h.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
        {h.tagline && <p className="entry-meta">{h.tagline}</p>}
        {h.closing && <p>{h.closing}</p>}
        {h.url && h.linkLabel && <a className="project-link" href={h.url} target="_blank" rel="noopener noreferrer">{h.linkLabel} <ArrowUpRight size={14} /></a>}
      </div>
    ))}
    <div className="content-section statement-card">
      <h2>A Life Beyond the Classroom</h2>
      {hobbiesClosing.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
    </div>
  </SiteShell>;
}
