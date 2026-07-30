import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ConnectorMark } from "../primitives/ConnectorMark";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { PILLARS } from "../../content/pillars";

// Homepage section 04. Copy deck §1.4.
//
// The connector mark renders at 64px with each square tinted by its pillar, and
// each square anchors to the matching section on /services (04 §6.9). The tints
// are the semantic colours, not the retired teal/amber/coral accents — signal
// carries all three because all three pillars are the good path.
const TINTS = ["#0F766A", "#0F766A", "#0F766A"];

export function PillarTriad() {
  return (
    <Section labelledBy="pillars-heading">
      <SectionHeader number="04" eyebrow="What we do" />

      <div className="mt-10 md:mt-14">
        <ConnectorMark size={64} color="#0B0C0E" tint={TINTS} className="opacity-90" />
      </div>

      <MaskReveal
        id="pillars-heading"
        lines={["Three areas. One discipline."]}
        className="mt-8 font-display text-display-2"
      />

      <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
        You cannot write reliable controls without knowing what the systems can and cannot do.
        You cannot build a model that survives without both. Most firms sell one of the three.
        We work across all of them, because that is the only way the end result holds.
      </Measure>

      <RevealGroup className="mt-12 grid gap-px border-t border-rule md:mt-16 md:grid-cols-3 md:gap-8 md:border-t-0">
        {PILLARS.map((pillar, i) => (
          <RevealItem
            key={pillar.id}
            index={i}
            className="border-b border-rule py-8 md:border-b-0 md:border-t md:pb-0 md:pt-8"
          >
            <p className="font-mono text-mono-sm text-text-muted">{pillar.number}</p>
            <h3 className="mt-4 font-display text-display-3 text-text">{pillar.title}</h3>
            <p className="mt-2 font-sans text-body-sm text-signal">{pillar.line}</p>
            <p className="mt-4 font-sans text-body-sm text-text-muted">{pillar.summary}</p>
            <Link
              to={`/services#${pillar.id}`}
              className="mt-6 inline-flex items-center gap-2 border-b border-rule pb-1 font-sans text-body-sm text-text transition-colors duration-[180ms] hover:border-signal"
            >
              What this involves
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
