import { CtaBand } from "../components/sections/CtaBand";
import { ExperienceBands } from "../components/sections/ExperienceBands";
import { PageHero } from "../components/sections/PageHero";
import { PrincipalCards } from "../components/sections/PrincipalCards";

// Four sections. See 02-architecture.md §3.5.
//
// The highest-traffic secondary page. Elaine was missing from the v1 site
// entirely, which for a firm whose main objection is "we have not heard of you"
// was a self-inflicted wound (01-assessment.md §2.6).
export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        headlineLines={["The people who sell you the work", "are the people who do it."]}
        sub="Three principals. Forty years between them running finance, reporting and operations inside large businesses. No junior bench, no handoff, no implementation partner in the middle."
      />

      <PrincipalCards />
      <ExperienceBands />
      <CtaBand />
    </>
  );
}
