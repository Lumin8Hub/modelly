// The default section shell: 1200px container, px-6 md:px-12, py-16 md:py-28,
// and an aria-labelledby landmark pointing at the section's own heading.
// See 02-architecture.md §3.9 and 04-design-system.md §3.1.
//
// `theme="dark"` adds the `on-ink` class, which index.css uses to flip the
// focus-ring colour so it stays visible on dark surfaces.
export function Section({
  id,
  labelledBy,
  theme = "light",
  className = "",
  containerClassName = "",
  children,
}) {
  const themeClass =
    theme === "dark"
      ? "on-ink bg-ink text-text-inv"
      : theme === "ink-2"
        ? "on-ink bg-ink-2 text-text-inv"
        : theme === "paper-2"
          ? "bg-paper-2 text-text"
          : "bg-paper text-text";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 md:py-28 ${themeClass} ${className}`}
    >
      <div className={`mx-auto w-full max-w-container px-6 md:px-12 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
