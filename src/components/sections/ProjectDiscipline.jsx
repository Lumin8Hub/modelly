import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { PROJECT_DISCIPLINE } from "../../content/fundamentals";

// /approach section 05. Copy deck §3.5.
//
// These are the four tools the v1 site called Charter, RASCI+, RAID.DAR and
// GANTT. The internal names return once the trademark filing is in (07 B1) — a
// one-file change in content/fundamentals.js.
export function ProjectDiscipline() {
  return (
    <Section labelledBy="discipline-heading" theme="paper-2">
      <SectionHeader number="05" total="06" eyebrow="Keeping the work honest" />

      <MaskReveal
        id="discipline-heading"
        lines={["Four documents that keep", "a project honest."]}
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
        Rebuilding how a finance team works is a change project, and change projects fail in
        predictable ways. These four travel with every engagement.
      </Measure>

      <RevealGroup className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
        {PROJECT_DISCIPLINE.map((item, i) => (
          <RevealItem key={item.title} index={i}>
            <div className="h-full border border-rule bg-paper p-8 transition-colors duration-[180ms] hover:border-signal">
              <h3 className="font-display text-display-3 text-text">{item.title}</h3>
              <p className="mt-4 font-sans text-body-sm text-text-muted">{item.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
