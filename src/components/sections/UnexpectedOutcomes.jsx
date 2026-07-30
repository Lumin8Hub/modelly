import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { UNEXPECTED_OUTCOMES } from "../../content/caseStudies";

// /results section 03. Copy deck §4.3, all three client verbatim from Q18.
// The client's own answer here is a case study in three sentences, and none of it
// appeared on the v1 site.
export function UnexpectedOutcomes() {
  return (
    <Section labelledBy="unexpected-heading" theme="paper-2">
      <SectionHeader number="03" total="04" eyebrow="What clients tell us" />

      <MaskReveal
        id="unexpected-heading"
        lines={["Three things clients say", "they did not expect."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <RevealGroup className="mt-10 md:mt-14">
        {UNEXPECTED_OUTCOMES.map((item, i) => (
          <RevealItem key={item.n} index={i} className="border-b border-rule first:border-t">
            <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-10">
              <p className="font-mono text-mono-sm text-text-muted md:col-span-2">{item.n}</p>
              <h3 className="font-display text-display-3 text-text md:col-span-4">
                {item.title}
              </h3>
              <p className="font-sans text-body text-text-muted md:col-span-6">{item.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
