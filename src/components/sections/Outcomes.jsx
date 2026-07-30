import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { OUTCOMES } from "../../content/outcomes";

// Homepage section 05. Copy deck §1.5.
//
// The v1 bento layout survives. Two fixes: the feature card carries the
// four-item detail list that fills the space that used to be empty
// (01-assessment.md §4.3), and the section now has an h2 above the card h3s —
// v1 rendered h3 with no h2, skipping a heading level (04 §8.1).
export function Outcomes() {
  return (
    <Section labelledBy="outcomes-heading">
      <SectionHeader eyebrow="What changes" />

      <MaskReveal
        id="outcomes-heading"
        lines={["What actually changes."]}
        className="mt-10 font-display text-display-2 md:mt-14"
      />

      <RevealGroup className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:grid-rows-2">
        {OUTCOMES.map((outcome, i) => (
          <RevealItem
            key={outcome.title}
            index={i}
            // The feature card is first in the source order, so it also comes
            // first in the single-column mobile stack (04 §5).
            className={outcome.feature ? "md:col-span-2 md:row-span-2" : ""}
          >
            <div
              className={
                `flex h-full flex-col border border-rule bg-paper-2 p-8 ` +
                `transition-colors duration-[180ms] hover:border-signal`
              }
            >
              <h3
                className={`font-display text-text ${outcome.feature ? "text-display-2" : "text-display-3"}`}
              >
                {outcome.title}
              </h3>
              <p
                className={`mt-4 font-sans text-text-muted ${outcome.feature ? "text-lead" : "text-body-sm"}`}
              >
                {outcome.body}
              </p>

              {outcome.detail ? (
                <ul className="mt-8 space-y-3 border-t border-rule pt-6">
                  {outcome.detail.map((item) => (
                    <li key={item} className="flex gap-3 font-sans text-body-sm text-text">
                      <span aria-hidden="true" className="text-signal">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
