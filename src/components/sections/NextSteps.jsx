import { MaskReveal } from "../primitives/MaskReveal";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";

// /diagnostic section 02. Copy deck §6.6.
const STEPS = [
  {
    n: "01",
    title: "We read it",
    body: "A principal, not an assistant. Usually the same day.",
  },
  {
    n: "02",
    title: "We come back",
    body: "Either a time to talk or a straight no, within two business days.",
  },
  {
    n: "03",
    title: "We talk for thirty minutes",
    body: "You describe what is breaking. We tell you whether we can fix it and roughly what that involves. No deck.",
  },
];

export function NextSteps() {
  return (
    <Section labelledBy="next-heading" theme="paper-2">
      <SectionHeader number="02" total="02" eyebrow="What happens next" />

      <MaskReveal
        id="next-heading"
        lines={["What happens next."]}
        className="mt-10 font-display text-display-2 md:mt-14"
      />

      <RevealGroup className="mt-10 md:mt-14">
        {STEPS.map((step, i) => (
          <RevealItem key={step.n} index={i} className="border-b border-rule first:border-t">
            <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-10">
              <p className="font-mono text-mono-sm text-text-muted md:col-span-2">{step.n}</p>
              <h3 className="font-display text-display-3 text-text md:col-span-4">{step.title}</h3>
              <p className="font-sans text-body text-text-muted md:col-span-6">{step.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
