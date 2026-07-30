// Standalone eyebrow, for page heroes and blocks that carry a label without the
// SectionHeader counter and rule.
export function Eyebrow({ children, theme = "light", className = "" }) {
  const textClass = theme === "dark" ? "text-text-inv-mut" : "text-text-muted";
  return (
    <p className={`font-sans text-label uppercase ${textClass} ${className}`}>{children}</p>
  );
}
