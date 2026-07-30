import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { SectionHeader } from "../primitives/SectionHeader";
import { Section } from "../primitives/Section";
import { PAIN_QUOTES } from "../../content/painQuotes";

// Homepage section 03. Copy deck §1.3.
//
// Six quotes at display-3, one per row, separated by 1px rules. No icons and no
// quotation-mark graphics — the quotes are in buyer voice and do not need
// decorating (02 §3.9).
export function PainQuotes() {
  return (
    <Section labelledBy="pain-heading">
      <SectionHeader eyebrow="What we get called about" />

      <MaskReveal
        id="pain-heading"
        lines={["The questions that start most conversations."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <RevealGroup className="mt-10 border-t border-rule md:mt-14">
        {PAIN_QUOTES.map((quote, i) => (
          <RevealItem key={quote} index={i} className="border-b border-rule py-6 md:py-8">
            <p className="font-display text-display-3 text-text">{quote}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <p className="mt-10 font-sans text-body text-text-muted">
        Every one of these has a structural cause. None of them is a people problem.
      </p>
    </Section>
  );
}
