import { ConstructFlow } from "../components/sections/ConstructFlow";
import { CtaBand } from "../components/sections/CtaBand";
import { DeliveryLayers } from "../components/sections/DeliveryLayers";
import { FundamentalsGrid } from "../components/sections/FundamentalsGrid";
import { PageHero } from "../components/sections/PageHero";
import { ProjectDiscipline } from "../components/sections/ProjectDiscipline";

// Six sections. See 02-architecture.md §3.3.
//
// No proprietary framework name appears on this page. The substance is published
// in full — method cannot be trademarked anyway — and the names drop in as a
// one-file change once the filing is in (07-open-items.md B1).
export default function Approach() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        headlineLines={["A method, not improvisation."]}
        sub="Every model we build follows the same structure. That is what makes them possible to hand over, and what makes them outlast the person who built them."
      />

      <DeliveryLayers />
      <FundamentalsGrid />
      <ConstructFlow />
      <ProjectDiscipline />
      <CtaBand />
    </>
  );
}
