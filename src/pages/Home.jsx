import { Suspense, lazy } from "react";
import { CtaBand } from "../components/sections/CtaBand";
import { HeroHome } from "../components/sections/HeroHome";
import { ModelCompare } from "../components/sections/ModelCompare";
import { Outcomes } from "../components/sections/Outcomes";
import { PainQuotes } from "../components/sections/PainQuotes";
import { PillarTriad } from "../components/sections/PillarTriad";
import { RatioFlip } from "../components/sections/RatioFlip";
import { WhyUs } from "../components/sections/WhyUs";

// Nine sections. Order rationale in 02-architecture.md §3.1: the reader arrives
// already warm, so the page opens with the idea rather than the credentials. Pain
// quotes come third because recognition earns the right to explain the method.
// The fit check sits at 08 because a self-qualified visitor converts far better
// than a cold one.
//
// FitCheck is lazy with a fixed-height skeleton. RatioFlip is deliberately not
// lazy — it is the flagship and sits near the fold.
const FitCheck = lazy(() => import("../components/sections/FitCheck"));

export default function Home() {
  return (
    <>
      <HeroHome />
      {/* A 1px rule inside the dark band softens the hero → ratio transition
          without an SVG wave. See 05 §4. */}
      <div className="bg-ink">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="h-px bg-ink-3" />
        </div>
      </div>
      <RatioFlip />
      <PainQuotes />
      <PillarTriad />
      <Outcomes />
      <ModelCompare />
      <WhyUs />
      <Suspense fallback={<div className="min-h-[34rem] bg-ink" aria-hidden="true" />}>
        <FitCheck />
      </Suspense>
      <div className="bg-ink">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="h-px bg-ink-3" />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
