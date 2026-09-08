import { Link } from "react-router-dom";
import { LINKEDIN } from "../../lib/site";
import { Logo } from "../ui/Logo";

export function Footer() {
  const links = [["Our Pillars", "/#pillars"], ["Fundamentals", "/five-fs"], ["Construct", "/five-cs"], ["Project Management Framework", "/project-management-framework"], ["About Us", "/about"], ["Get Started", "/get-started"]];
  return <footer className="dark-surface bg-ink-soft text-text-inverse">
    <div className="mx-auto max-w-container px-5 py-14 md:px-10">
      <div className="grid gap-10 md:grid-cols-3">
        <div><Logo inverse footer /><p className="mt-5 max-w-xs text-sm leading-6 text-white/65">Planning, forecasting and reporting systems built in the tools you already have.</p></div>
        <div><div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-white/45">Site</div><div className="grid gap-2 text-sm">{links.map(([label, to]) => <Link key={to} to={to} className="text-white/75 hover:text-white">{label}</Link>)}</div></div>
        <div><div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-white/45">Elsewhere</div><div className="grid gap-2 text-sm">{[["Modelly on LinkedIn", LINKEDIN.company], ["Fabio Ciampa", LINKEDIN.fabio], ["Jennifer Hui", LINKEDIN.jennifer], ["Elaine Toribio", LINKEDIN.elaine]].map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer" className="text-white/75 hover:text-white">{label}</a>)}</div></div>
      </div>
      <div className="mt-12 border-t border-white/15 pt-5 text-xs leading-6 text-white/50">© 2026 Modelly. All rights reserved. <span className="mx-2">·</span> <Link to="/privacy">Privacy policy</Link> <span className="mx-2">·</span> <Link to="/terms">Terms of use</Link> <span className="mx-2">·</span> Our frameworks, methods and templates are the property of Modelly.</div>
    </div>
  </footer>;
}
