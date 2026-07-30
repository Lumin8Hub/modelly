import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../primitives/Button";

// 64px, sticky, transparent over the hero then paper with a bottom rule once
// scrolled past 80px, hides on scroll down and reveals on scroll up.
// Four links plus one button. No "Home" — the wordmark handles it. No
// "Contact" — the diagnostic is the contact. See 04 §6.1, 02 §1.2.

const LINKS = [
  { label: "What we do", to: "/services" },
  { label: "How we work", to: "/approach" },
  { label: "Results", to: "/results" },
  { label: "Team", to: "/team" },
];

const SCROLL_THRESHOLD = 80;

export function Nav() {
  // Initialised from the current scroll position so a restored or deep-linked
  // scroll offset renders correctly on the first paint, without an effect
  // pushing state synchronously.
  const [scrolled, setScrolled] = useState(() => window.scrollY > SCROLL_THRESHOLD);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(window.scrollY);
  const { pathname } = useLocation();

  // The overlay records the route it was opened on, so any navigation — link,
  // back button, or otherwise — closes it by derivation rather than through an
  // effect watching the pathname.
  const [openedAt, setOpenedAt] = useState(null);
  const menuOpen = openedAt === pathname;

  // Only the homepage has a dark hero for the nav to sit over.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > SCROLL_THRESHOLD);
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the overlay while it is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const shellClass = overHero
    ? "on-ink bg-transparent text-text-inv"
    : "bg-paper text-text border-b border-rule";

  return (
    <>
      <header
        className={
          `fixed inset-x-0 top-0 z-50 h-16 transition-[transform,background-color,color] ` +
          `duration-[180ms] ${shellClass} ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`
        }
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-full max-w-container items-center justify-between px-6 md:px-12"
        >
          <Link to="/" className="font-display text-xl font-medium tracking-[-0.02em]">
            modelly
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-sans text-body-sm transition-colors duration-[180ms] ` +
                  (isActive
                    ? `border-b border-signal pb-0.5 ${overHero ? "text-text-inv" : "text-text"}`
                    : overHero
                      ? "text-text-inv-mut hover:text-text-inv"
                      : "text-text-muted hover:text-text")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              to="/diagnostic"
              variant={overHero ? "primary-inverse" : "primary"}
              arrow={false}
              className="px-5 py-2.5"
            >
              Start a diagnostic
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setOpenedAt(menuOpen ? null : pathname)}
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </nav>
      </header>

      {/* Full-screen paper overlay, links at display-3. Not a hamburger
          dropdown. See 04 §5. */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-24 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="font-display text-display-3 text-text"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/diagnostic">Start a diagnostic</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
