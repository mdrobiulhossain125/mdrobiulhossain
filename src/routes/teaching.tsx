import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/teaching")({
  head: () => ({ meta: [
    { title: "Teaching | Md. Robiul Hossain" }, { name: "description", content: "Economics and statistics tutoring, training and community teaching by Md. Robiul Hossain." },
    { property: "og:title", content: "Teaching | Md. Robiul Hossain" }, { property: "og:description", content: "Economics tutoring, software training and community teaching experience." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Teaching,
});
function Teaching() {
  return <SiteShell><h1 className="page-title">Teaching</h1>
    <div className="content-section"><h2>Economics &amp; statistics tutoring</h2><p>Mentored B.S.S. students in microeconomics, macroeconomics and statistics, and tutored SSC and HSC students in economics and statistics.</p></div>
    <div className="content-section"><h2>Training instruction</h2><p>Taught Stata, Excel, PowerPoint and graphic design. Delivered leadership and teamwork workshops for members of the Chittagong University Research and Higher Study Society and Young Economists’ Society.</p></div>
    <div className="content-section"><h2>Community teaching</h2><p>Taught underprivileged children through Nogorful from February 2021 to May 2025.</p></div>
  </SiteShell>;
}
