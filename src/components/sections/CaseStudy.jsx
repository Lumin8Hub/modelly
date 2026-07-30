import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";

// Copy deck §4.2. Full-width, three blocks as a three-column grid on desktop.
//
// Deliberately not a grid holding one card — a single full-width case study reads
// as one engagement described completely, and adding WOW Mobile later is additive
// (02 §3.4, 07 A5).
//
// No quote block renders while `quote` is null. An empty quote block on the page
// is worse than none.
export function CaseStudy({ study }) {
  const blocks = [
    { label: "What was broken", body: study.broken },
    { label: "What we did", items: study.did },
    { label: "What changed", items: study.changed },
  ];

  return (
    <Section labelledBy="case-heading">
      <SectionHeader number="02" total="04" eyebrow="Case study" />

      <div className="mt-10 md:mt-14">
        <MaskReveal
          id="case-heading"
          lines={[study.client]}
          className="font-display text-display-2 text-text"
        />
        <p className="mt-3 font-mono text-mono-sm uppercase text-text-muted">
          {study.sector} · Named use approved by client
        </p>
      </div>

      <RevealGroup className="mt-12 grid gap-10 border-t border-rule pt-10 md:grid-cols-3">
        {blocks.map((block, i) => (
          <RevealItem key={block.label} index={i}>
            <h3 className="font-sans text-label uppercase text-text-muted">{block.label}</h3>
            {block.body ? (
              <p className="mt-5 font-sans text-body text-text">{block.body}</p>
            ) : (
              <ul className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 font-sans text-body-sm text-text">
                    <span aria-hidden="true" className="text-signal">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </RevealItem>
        ))}
      </RevealGroup>

      {/* More credible than a fabricated percentage, and it tells the reader
          Modelly measures things (07 A3). */}
      <p className="mt-12 border-t border-rule pt-6 font-mono text-mono-sm text-text-muted">
        {study.caption}
      </p>
    </Section>
  );
}
