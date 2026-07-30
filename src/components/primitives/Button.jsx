import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Square corners throughout. Rounded corners on a finance site read as consumer
// software. See 04-design-system.md §6.6.

const BASE =
  "inline-flex items-center gap-2 font-sans text-body-sm font-medium transition-colors " +
  "duration-[180ms] active:translate-y-px";

const VARIANTS = {
  primary: "bg-ink px-6 py-3.5 text-text-inv hover:bg-signal",
  "primary-inverse": "bg-paper px-6 py-3.5 text-ink hover:bg-signal-bright",
  secondary: "border-b border-rule pb-1 text-text hover:border-signal",
  "secondary-inverse": "border-b border-ink-3 pb-1 text-text-inv hover:border-signal-bright",
};

function Inner({ children, showArrow }) {
  return (
    <>
      {children}
      {showArrow ? <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /> : null}
    </>
  );
}

// `to` renders a router Link — required so the GitHub Pages basename is applied.
// `href` renders a plain anchor, for external links only.
export function Button({
  children,
  to,
  href,
  variant = "primary",
  arrow = true,
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const showArrow = arrow && variant.startsWith("primary");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <Inner showArrow={showArrow}>{children}</Inner>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        <Inner showArrow={showArrow}>{children}</Inner>
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      <Inner showArrow={showArrow}>{children}</Inner>
    </button>
  );
}
