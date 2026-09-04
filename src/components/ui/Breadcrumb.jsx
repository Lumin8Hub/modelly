import { Link } from "react-router-dom";

export function Breadcrumb({ items = [] }) {
  return <nav aria-label="Breadcrumb" className="mb-7 font-mono text-[11px] uppercase tracking-[.08em] text-text-muted">
    {items.map((item, index) => <span key={`${item.label}-${index}`}>{index > 0 && <span className="mx-2 text-rule">/</span>}{item.to ? <Link className="hover:text-ink" to={item.to}>{item.label}</Link> : item.label}</span>)}
  </nav>;
}
