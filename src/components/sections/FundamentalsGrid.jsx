import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { FUNDAMENTALS } from "../../content/fundamentals";

// /approach section 03. Copy deck §3.3.
//
// The v1 site laid this out as a three-column specification table with alternating
// row shading — legible and dull, for the thing the client says IS the
// differentiator (01-assessment.md §4.6). Numbers do the work here, not icons.
//
// Order follows Fabio's correction and is set in content/fundamentals.js.
export function FundamentalsGrid() {
  return (
    <Section labelledBy="fundamentals-heading" theme="paper-2">
      <SectionHeader number="03" total="06" eyebrow="The five fundamentals" />

      <MaskReveal
        id="fundamentals-heading"
        lines={["What every model we build", "has in common."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <RevealGroup className="mt-10 md:mt-14">
        {FUNDAMENTALS.map((item, i) => (
          <RevealItem key={item.n} index={i} className="border-b border-rule first:border-t">
            <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-10">
              <p className="font-mono text-mono-lg text-signal md:col-span-2">{item.n}</p>
              <h3 className="font-display text-display-3 text-text md:col-span-3">
                {item.title}
              </h3>
              <p className="font-sans text-body text-text-muted md:col-span-7">{item.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
