import { Link } from "react-router-dom";
import { LINKEDIN } from "../../lib/site";

// Copy in 03-copy-deck.md §8.2. No newsletter signup, no social icon row, no
// back-to-top button, and no email address until the mailbox exists (07 B2).
// See 04-design-system.md §6.8.

const SITE_LINKS = [
  { label: "What we do", to: "/services" },
  { label: "How we work", to: "/approach" },
  { label: "Results", to: "/results" },
  { label: "Team", to: "/team" },
  { label: "Start a diagnostic", to: "/diagnostic" },
];

const ELSEWHERE = [
  { label: "Modelly on LinkedIn", href: LINKEDIN.company },
  { label: "Fabio Ciampa", href: LINKEDIN.fabio },
  { label: "Jennifer Hui", href: LINKEDIN.jennifer },
  { label: "Elaine Toribio", href: LINKEDIN.elaine },
];

const LINK_CLASS =
  "font-sans text-body-sm text-text-inv-mut transition-colors duration-[180ms] hover:text-text-inv";

export function Footer() {
  return (
    <footer className="on-ink bg-ink-2 py-16 text-text-inv md:py-20">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-xl font-medium tracking-[-0.02em]">
              modelly
            </Link>
            <p className="mt-4 max-w-[34ch] font-sans text-body-sm text-text-inv-mut">
              Planning, forecasting and reporting systems built in the tools you already
              have.
            </p>
          </div>

          <nav aria-labelledby="footer-site">
            <h2 id="footer-site" className="font-sans text-label uppercase text-text-inv">
              Site
            </h2>
            <ul className="mt-5 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-elsewhere">
            <h2 id="footer-elsewhere" className="font-sans text-label uppercase text-text-inv">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-3">
              {ELSEWHERE.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer" className={LINK_CLASS}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-3 pt-8 font-mono text-mono-sm text-text-inv-mut md:flex-row md:items-center md:justify-between">
          <p>© 2026 Modelly. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Link to="/privacy" className="transition-colors duration-[180ms] hover:text-text-inv">
              Privacy policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms" className="transition-colors duration-[180ms] hover:text-text-inv">
              Terms of use
            </Link>
          </p>
          <p>Our frameworks, methods and templates are the property of Modelly.</p>
        </div>
      </div>
    </footer>
  );
}
