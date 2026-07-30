// An eyebrow and a hairline rule. The site's spine — it hangs on the same left
// edge on every page. Ported from v1 with the eyebrow on the `label` token and a
// theme prop replacing inline ternaries. See 04-design-system.md §6.5.
//
// The NN / TT counter this component carried in v1 has been removed at the
// client's request. The eyebrow leads and the rule runs out to the right, so the
// left edge stays the spine that §3.2 asks for.
export function SectionHeader({ eyebrow, theme = "light", className = "" }) {
  const isDark = theme === "dark";
  const textClass = isDark ? "text-text-inv" : "text-text";
  const ruleClass = isDark ? "bg-ink-3" : "bg-rule";

  return (
    <div className={`flex items-center gap-4 ${textClass} ${className}`}>
      <span className="font-sans text-label uppercase">{eyebrow}</span>
      <span className={`h-px flex-1 ${ruleClass}`} />
    </div>
  );
}
