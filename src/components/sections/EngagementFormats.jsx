import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { ENGAGEMENT_FORMATS } from "../../content/engagementFormats";

// /services section 05. Copy deck §2.5. Absent from the v1 site entirely.
// No pricing anywhere — Question 24: "No — pricing is always custom."
export function EngagementFormats() {
  return (
    <Section labelledBy="formats-heading" theme="paper-2">
      <SectionHeader number="05" total="07" eyebrow="How we engage" />

      <MaskReveal
        id="formats-heading"
        lines={["Six ways to start."]}
        className="mt-10 font-display text-display-2 md:mt-14"
      />

      <RevealGroup className="mt-10 md:mt-14">
        {ENGAGEMENT_FORMATS.map((format, i) => (
          <RevealItem key={format.title} index={i} className="border-b border-rule first:border-t">
            <div className="grid gap-2 py-6 md:grid-cols-3 md:gap-10">
              <h3 className="font-display text-display-3 text-text">{format.title}</h3>
              <p className="font-sans text-body text-text-muted md:col-span-2">{format.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
