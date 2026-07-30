import { CaseStudy } from "../components/sections/CaseStudy";
import { CtaBand } from "../components/sections/CtaBand";
import { PageHero } from "../components/sections/PageHero";
import { UnexpectedOutcomes } from "../components/sections/UnexpectedOutcomes";
import { CASE_STUDIES } from "../content/caseStudies";

// Four sections. See 02-architecture.md §3.4.
//
// The page says plainly that Modelly is new and this page is short. The reader
// already knows. A results page padded with anonymous "a leading telecom" cards
// reads as a firm with something to hide.
export default function Results() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        headlineLines={["One case study, in full."]}
        sub="Modelly is a new company built by people who are not new. This page will get longer. Today it holds the engagement we can describe completely, with the client's permission, rather than five we would have to be vague about."
      />

      {CASE_STUDIES.map((study) => (
        <CaseStudy key={study.client} study={study} />
      ))}

      <UnexpectedOutcomes />
      <CtaBand />
    </>
  );
}
