import { MaskReveal } from "../primitives/MaskReveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { EXPERIENCE_BANDS, EXPERIENCE_CAPTION } from "../../content/principals";

// /team section 03. Copy deck §5.5. Industry categories only.
//
// A logo wall implies a relationship between those companies and Modelly.
// Factual employment history inside a named person's bio implies only that the
// person worked there — the same claim their LinkedIn profile makes publicly. The
// first needs permission; the second does not (§5.4).
export function ExperienceBands() {
  return (
    <Section labelledBy="experience-heading" theme="paper-2">
      <SectionHeader number="03" total="04" eyebrow="Where this comes from" />

      <MaskReveal
        id="experience-heading"
        lines={["Where this experience comes from."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <ul className="mt-10 border-t border-rule">
        {EXPERIENCE_BANDS.map((band) => (
          <li
            key={band}
            className="border-b border-rule py-5 font-display text-display-3 text-text"
          >
            {band}
          </li>
        ))}
      </ul>

      <p className="mt-8 font-mono text-mono-sm text-text-muted">{EXPERIENCE_CAPTION}</p>
    </Section>
  );
}
