import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { person } from "@/lib/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/teaching", label: "Teaching" },
  { to: "/projects", label: "Projects" },
  { to: "/cv", label: "CV" },
] as const;

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !section || !ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    type Dot = { x: number; y: number; vx: number; vy: number };
    let dots: Dot[] = [];
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const nodeColor = getComputedStyle(section).getPropertyValue("--network-node");
      const lineColor = getComputedStyle(section).getPropertyValue("--network-line");
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (!a) continue;
        ctx.fillStyle = nodeColor;
        ctx.beginPath(); ctx.arc(a.x, a.y, 2, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          if (!b || Math.hypot(a.x - b.x, a.y - b.y) > 145) continue;
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = .7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        if (!reduceMotion) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
        }
      }
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = section.clientWidth; height = section.clientHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = Array.from({ length: Math.min(55, Math.max(18, Math.round(width * height / 16000))) }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      }));
      cancelAnimationFrame(frame); draw();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(section);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <canvas ref={canvasRef} className="network-layer" aria-hidden="true" />;
}

export function SiteShell({ children, network = false }: { children: React.ReactNode; network?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setMenuOpen(false), [pathname]);
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link to="/" className="site-brand">{person.name}</Link>
          <Button variant="ghost" size="icon" className="hidden max-[740px]:inline-flex max-[740px]:text-primary" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          <div className="site-links" data-open={menuOpen}>
            {links.map(({ to, label }) => <Link key={to} to={to} aria-current={pathname === to ? "page" : undefined}>{label}</Link>)}
          </div>
        </nav>
      </header>
      <main className="site-main site-container">
        <section className="page-section">
          {network && <NetworkBackground />}
          <div className="page-content">{children}</div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="social-links">
            <a href={`mailto:${person.email}`} aria-label="Email" title="Email"><Mail size={18} /></a>
            <a href={`tel:${person.phone.replaceAll(" ", "")}`} aria-label="Phone" title="Phone"><Phone size={18} /></a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={18} /></a>
            <a href={person.researchGate} target="_blank" rel="noopener noreferrer" aria-label="ResearchGate" title="ResearchGate"><BookOpen size={18} /></a>
          </div>
          <div className="copyright">© 2026 {person.name}. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
