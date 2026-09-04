export function Eyebrow({ children, dark = false }) {
  return <div className={`font-mono text-[11px] tracking-[.16em] uppercase ${dark ? "text-white/60" : "text-text-muted"}`}>{children}</div>;
}
