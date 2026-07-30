import { Suspense, lazy } from "react";
import { FilesToWorkbook } from "../diagrams/FilesToWorkbook";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { Reveal } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { COMPARE_IMAGES } from "../../assets/manifest";

// Homepage section 06. Copy deck §1.6.
//
// The anonymised before/after screenshots are blocked on the client (07 A1).
// Until they clear this renders the IMG-04 diagram with the alternative headline
// from the copy deck. Do not ship a fabricated mock-up of a client model: a
// constructed spreadsheet is detectable in seconds by exactly this reader.
//
// The slider is lazy-loaded and only reachable once COMPARE_IMAGES is populated,
// so the diagram path costs nothing.
const CompareSlider = lazy(() => import("./CompareSlider"));

export function ModelCompare() {
  const hasImages = Boolean(COMPARE_IMAGES);

  return (
    <Section labelledBy="compare-heading">
      <SectionHeader eyebrow="Before and after" />

      <MaskReveal
        id="compare-heading"
        lines={
          hasImages
            ? ["The same numbers. A different instrument."]
            : ["One workbook instead of eleven files."]
        }
        className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
      />

      {hasImages ? (
        <>
          <Reveal delay={0.08}>
            <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
              Drag the divider. On the left, the kind of file most finance teams work in. On
              the right, the same reporting after we rebuild it.
            </Measure>
          </Reveal>

          <p className="mt-10 font-mono text-mono-sm text-text-muted">
            A real client model, anonymised.
          </p>

          <div className="mt-3">
            {/* Fixed-height skeleton so nothing shifts on load (04 §8.3). */}
            <Suspense fallback={<div className="min-h-[320px] md:min-h-[620px]" aria-hidden="true" />}>
              <CompareSlider images={COMPARE_IMAGES} />
            </Suspense>
          </div>
        </>
      ) : (
        <Reveal delay={0.08}>
          <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
            Most teams arrive with reporting spread across files that drift apart, each one
            rebuilt by hand every period. We replace them with a single workbook holding every
            scenario and every period, built so a change happens once.
          </Measure>

          <div className="mt-12 border border-rule bg-paper-2 p-6 md:p-10">
            <FilesToWorkbook />
          </div>
        </Reveal>
      )}
    </Section>
  );
}
