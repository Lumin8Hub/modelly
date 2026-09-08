export function Eyebrow({ children, dark = false }) {
  return <div className={`font-mono text-[11px] uppercase tracking-[.12em] md:text-right ${dark ? "text-white/75" : "text-text-muted"}`}>{children}</div>;
}
