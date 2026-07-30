import { Eyebrow } from "../primitives/Eyebrow";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { Reveal } from "../primitives/Reveal";

// Used on /services, /approach, /results and /team. Always paper, never ink —
// only the homepage hero is dark. See 04-design-system.md §6.7.
//
// Five pages that open identically read as one considered site; five that each
// try something read as a template.
export function PageHero({ eyebrow, headlineLines, sub, id = "page-heading" }) {
  return (
    <section aria-labelledby={id} className="bg-paper pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>

        <MaskReveal
          as="h1"
          id={id}
          lines={headlineLines}
          className="mt-6 max-w-[24ch] font-display text-display-2"
          delay={0.06}
        />

        <Reveal delay={0.08}>
          <Measure as="p" className="mt-8 font-sans text-lead text-text-muted">
            {sub}
          </Measure>
        </Reveal>

        <div className="mt-16 h-px bg-rule" />
      </div>
    </section>
  );
}
