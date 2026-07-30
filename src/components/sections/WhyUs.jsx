import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { EXPERIENCE_BANDS } from "../../content/principals";

// Homepage section 07. Copy deck §1.7.
//
// This section carries the credibility block that replaces the deleted
// four-metric strip and the deleted logo wall. Every claim here attaches to the
// people rather than to the company, so no reader could mistake it for Modelly's
// client results (01-assessment.md §3.1 and §3.2).
const BLOCKS = [
  {
    title: "Senior people, start to finish",
    body: "Every engagement is designed and built by the people you met. Forty years of running finance, reporting and operations inside large businesses, applied to your model directly.",
  },
  {
    title: "We build ourselves out of the job",
    body: "Our aim is that you do not need us again. We build the system, document it, and train your team to run and extend it without us. Clients tell us this is the part they did not expect.",
  },
  {
    title: "New company, not new people",
    body: "Modelly is young. The experience behind it is not. You get senior attention partly because we are not running forty engagements at once.",
  },
];

export function WhyUs() {
  return (
    <Section labelledBy="why-heading">
      <SectionHeader number="07" eyebrow="Why Modelly" />

      <MaskReveal
        id="why-heading"
        lines={["The people who sell you the work", "are the people who do it."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
        Most firms separate the two. A partner wins the engagement, a junior team builds it, and
        an implementation partner delivers it. Often nobody in that chain has run a finance
        function.
      </Measure>

      <RevealGroup className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
        {BLOCKS.map((block, i) => (
          <RevealItem key={block.title} index={i} className="border-t border-rule pt-8">
            <h3 className="font-display text-display-3 text-text">{block.title}</h3>
            <p className="mt-4 font-sans text-body-sm text-text-muted">{block.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Replaces the named past-employer logo strip. No logos, no company names,
          no wordmarks — Question 31's permission table came back blank and the
          client selected industry categories. */}
      <div className="mt-16 border-t border-rule pt-8">
        <p className="font-sans text-label uppercase text-text-muted">Experience built inside</p>
        <p className="mt-4 font-display text-display-3 text-text">
          {EXPERIENCE_BANDS.join(" · ")}
        </p>
      </div>
    </Section>
  );
}
