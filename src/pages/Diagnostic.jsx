import { DiagnosticForm } from "../components/sections/DiagnosticForm";
import { MaskReveal } from "../components/primitives/MaskReveal";
import { Measure } from "../components/primitives/Measure";
import { NextSteps } from "../components/sections/NextSteps";

// Two sections. See 02-architecture.md §3.6.
//
// Opens straight into the form with the heading and sub inline: a page whose only
// job is a form should not make the reader scroll past a hero to reach it
// (04 §6.7).
export default function Diagnostic() {
  return (
    <>
      <section aria-labelledby="diagnostic-heading" className="bg-paper pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <MaskReveal
            as="h1"
            id="diagnostic-heading"
            lines={["Start with a diagnostic."]}
            className="font-display text-display-2 text-text"
          />
          <Measure as="p" className="mt-6 font-sans text-lead text-text-muted">
            Five questions, about two minutes. One of us reads every answer and comes back within
            two business days, either with a time to talk or with an honest no.
          </Measure>

          <div className="mt-16 max-w-3xl">
            <DiagnosticForm />
          </div>
        </div>
      </section>

      <NextSteps />
    </>
  );
}
