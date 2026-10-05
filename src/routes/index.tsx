import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { person } from "@/lib/profile";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Md. Robiul Hossain | Economics Researcher" },
    { name: "description", content: "Academic website of Md. Robiul Hossain, an economics researcher working on development, education and environmental economics in Bangladesh." },
    { property: "og:title", content: "Md. Robiul Hossain | Economics Researcher" },
    { property: "og:description", content: "Research, education and academic work of Md. Robiul Hossain." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Home,
});

function Home() {
  return <SiteShell network>
    <div className="quote-box">Researching the questions that shape lives, learning and livelihoods.</div>
    <div className="profile-header">
      <div className="profile-avatar" role="img" aria-label="Initials MRH, portrait not provided">MRH</div>
      <div className="profile-copy">
        <h1>Hello! I am {person.shortName}.</h1>
        <p>I am an <strong>economics researcher</strong> with experience in development research, education, child development, migration and environmental and resource economics.</p>
        <p>I have worked as a <strong>Research Assistant</strong> on studies of Rohingya refugee and host-community populations under the supervision of Md. Johirul Islam, formerly at the <a href="https://bigd.bracu.ac.bd/" target="_blank" rel="noopener noreferrer">BRAC Institute of Governance and Development (BIGD)</a>, BRAC University. My work has included field surveys, data management, statistical analysis and manuscript preparation.</p>
        <p>I studied <strong>Economics at the University of Chittagong</strong>, Bangladesh, in the Bachelor of Social Sciences (Honours) programme. I have also contributed to research on graduate labour markets and fisheries management in the Bay of Bengal region.</p>
        <p>My research manuscripts explore child development, educational inequality, labour market uncertainty and household decision-making. See my <Link className="text-link" to="/research">research</Link> and <Link className="text-link" to="/teaching">teaching</Link> for details.</p>
        <p>To know more details, you can see my <Link className="text-link" to="/cv">CV here</Link>.</p>
      </div>
    </div>
    <hr className="section-rule" />
    <div className="interest-copy">
      <h2 className="section-heading">Research Interests</h2>
      <p>My research interests lie in <strong>development and behavioural economics</strong> and <strong>environmental and resource economics</strong>. I am particularly interested in:</p>
      <ul><li>Child development, education and household decision-making</li><li>Labour market outcomes and entrepreneurship</li><li>Fisheries and climate-resilient livelihoods</li></ul>
      <p><strong>Focus Areas:</strong> Educational inequality, Rohingya refugee communities, child marriage, discipline, migration, economic shocks and the blue economy.</p>
    </div>
  </SiteShell>;
}
