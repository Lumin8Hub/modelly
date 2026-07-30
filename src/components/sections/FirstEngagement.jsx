import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { WorkbookStructure } from "../diagrams/WorkbookStructure";
import { FIRST_ENGAGEMENT } from "../../content/engagementFormats";

// /services section 06. Copy deck §2.6, from Question 23.
//
// Carries IMG-07, the one-workbook schematic. It is a diagram of a structure, not
// a picture of a spreadsheet, so it carries no client-asset dependency.
export function FirstEngagement() {
  return (
    <Section labelledBy="first-heading">
      <SectionHeader eyebrow="Where most clients start" />

      <MaskReveal
        id="first-heading"
        lines={["The engagement we wish", "everyone started with."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
        {FIRST_ENGAGEMENT.body}
      </Measure>

      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-sans text-label uppercase text-text-muted">What you get</p>
          <RevealGroup className="mt-6">
            {FIRST_ENGAGEMENT.deliverables.map((item, i) => (
              <RevealItem key={item} index={i} className="border-b border-rule py-4 first:border-t">
                <p className="flex gap-3 font-sans text-body-sm text-text">
                  <span aria-hidden="true" className="text-signal">
                    ·
                  </span>
                  {item}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="md:col-span-6">
          <p className="font-mono text-mono-sm text-text-muted">
            One workbook, four regions
          </p>
          <div className="mt-3 border border-rule bg-paper-2 p-4 md:p-6">
            <WorkbookStructure />
          </div>
        </div>
      </div>

      <Measure as="p" className="mt-12 border-t border-rule pt-8 font-sans text-body-sm text-text-muted">
        {FIRST_ENGAGEMENT.pricingNote}
      </Measure>
    </Section>
  );
}
