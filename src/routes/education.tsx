import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { coursework, education } from "@/lib/profile";

export const Route = createFileRoute("/education")({
  head: () => ({ meta: [
    { title: "Education | Md. Robiul Hossain" },
    { name: "description", content: "Education of Md. Robiul Hossain: BSS (Honours) in Economics at the University of Chittagong with full academic coursework, plus HSC and SSC." },
    { property: "og:title", content: "Education | Md. Robiul Hossain" },
    { property: "og:description", content: "BSS (Honours) in Economics at the University of Chittagong — academic coursework, HSC and SSC." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Education,
});

function Education() {
  const [bss, hsc, ssc] = education;
  return <SiteShell>
    <h1 className="page-title">Education</h1>
    <div className="content-section card-list">
      <article className="entry">
        <span className="entry-title">{bss.title}</span>
        <p className="entry-meta">{bss.institution} · {bss.location}</p>
        <p><strong>{bss.year}</strong> · {bss.detail}</p>
        <h3 className="course-heading">Academic Coursework</h3>
        <div className="course-grid">
          {coursework.map(({ year, courses }) => (
            <div className="course-year" key={year}>
              <h3>{year}</h3>
              <div className="chip-row">
                {courses.map((course) => <span className="chip chip-sm" key={course}>{course}</span>)}
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="entry">
        <span className="entry-title">{hsc.title}</span>
        <p className="entry-meta">{hsc.institution} · {hsc.location}</p>
        <p><strong>{hsc.year}</strong></p>
      </article>
      <article className="entry">
        <span className="entry-title">{ssc.title}</span>
        <p className="entry-meta">{ssc.institution} · {ssc.location}</p>
        <p><strong>{ssc.year}</strong></p>
      </article>
    </div>
  </SiteShell>;
}
