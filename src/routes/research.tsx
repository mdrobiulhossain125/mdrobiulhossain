import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { conferenceContributions, inPreparation, underReview } from "@/lib/profile";

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [
    { title: "Research | Md. Robiul Hossain" }, { name: "description", content: "Research manuscripts, conference contributions and projects by Md. Robiul Hossain." },
    { property: "og:title", content: "Research | Md. Robiul Hossain" }, { property: "og:description", content: "Research manuscripts, conference contributions and projects in development economics and education." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Research,
});
function Research() {
  return <SiteShell><h1 className="page-title">Research &amp; Publications</h1>
    <div className="content-section card-list"><h2>Manuscripts under review</h2>{underReview.map((item) => <article className="entry" key={item.title}><span className="status-pill">Under review</span><span className="entry-title">{item.title}</span><p className="entry-meta">{item.authors}</p><p><em>{item.venue}</em></p></article>)}</div>
    <div className="content-section card-list"><h2>Manuscripts in preparation</h2>{inPreparation.map((item) => <article className="entry" key={item.title}><span className="status-pill status-muted">In preparation</span><span className="entry-title">{item.title}</span><p className="entry-meta">{item.authors}</p></article>)}</div>
    <div className="content-section card-list"><h2>Conference contributions</h2>
      <article className="entry"><span className="status-pill">Presented · 2025</span><span className="entry-title">Unintended Spillovers: School Bans, Home Punishment, and Child Emotional Development</span><p>Islam, M. J., Iqra, A. N., &amp; Hossain, M. R. Presented online at the Fifth Annual International Conference: A New Global Order, Yet Again, Karachi, Pakistan, 14 November 2025.</p></article>
      <article className="entry"><span className="status-pill status-muted">Forthcoming · 2026</span><span className="entry-title">Gender Heterogeneity in the Impact of Violent Discipline on Foundational Reading Skills</span><p>Abstract accepted for online presentation at the 4th International C.I.T.E.D Conference, Universitas Brawijaya, Indonesia, 27–28 October 2026. Forthcoming presentation.</p></article>
    </div>
  </SiteShell>;
}
