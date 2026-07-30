// The NN / TT counter, a hairline rule, and an eyebrow. The site's spine — it
// hangs on the same left edge on every page. Ported from v1 with the counter in
// mono, the eyebrow on the `label` token, and a theme prop replacing inline
// ternaries. See 04-design-system.md §6.5.
//
// `number` omitted renders the eyebrow alone, which is how CtaBand reuses this
// on pages other than the homepage (03-copy-deck.md §1.9).
export function SectionHeader({ number, total = "09", eyebrow, theme = "light", className = "" }) {
  const isDark = theme === "dark";
  const textClass = isDark ? "text-text-inv" : "text-text";
  const ruleClass = isDark ? "bg-ink-3" : "bg-rule";

  return (
    <div className={`flex items-center gap-4 ${textClass} ${className}`}>
      {number ? (
        <span className="font-mono text-mono-sm">{`${number} / ${total}`}</span>
      ) : null}
      <span className={`h-px flex-1 ${ruleClass}`} />
      <span className="font-sans text-label uppercase">{eyebrow}</span>
    </div>
  );
}
