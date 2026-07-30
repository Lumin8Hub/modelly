import { Measure } from "./primitives/Measure";

// Single column, 68-character measure, no motion. Used by /privacy and /terms.
// See 02-architecture.md §3.7.
//
// The content is a drafting task for Lumin8, not for the build. The placeholder
// banner must not be visible at launch — 07-open-items.md B3 is a hard blocker,
// because the diagnostic form collects personal information and PIPEDA requires a
// published policy.
export function LegalPage({ title, lastUpdated, sections }) {
  return (
    <section aria-labelledby="legal-heading" className="bg-paper pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-container px-6 md:px-12">
        {/* Full-width, caution left border, no motion. Copy deck §7.1. */}
        <p className="border-l-2 border-caution bg-paper-2 py-4 pl-6 pr-5 font-sans text-body-sm text-text">
          This page is being drafted and will be published before launch.
        </p>

        <h1 id="legal-heading" className="mt-12 font-display text-display-2 text-text">
          {title}
        </h1>
        <p className="mt-4 font-mono text-mono-sm text-text-muted">Last updated: {lastUpdated}</p>

        <Measure className="mt-14">
          {sections.map((section) => (
            <div key={section.heading} className="border-t border-rule py-8">
              <h2 className="font-display text-display-3 text-text">{section.heading}</h2>
              {section.note ? (
                <p className="mt-3 font-sans text-body text-text-muted">{section.note}</p>
              ) : null}
            </div>
          ))}
        </Measure>
      </div>
    </section>
  );
}
