import { CtaBand } from "../components/sections/CtaBand";
import { EngagementFormats } from "../components/sections/EngagementFormats";
import { FirstEngagement } from "../components/sections/FirstEngagement";
import { PageHero } from "../components/sections/PageHero";
import { PillarDetail } from "../components/sections/PillarDetail";
import { PILLARS } from "../content/pillars";

// Seven sections. See 02-architecture.md §3.2.
//
// Accounting Processes is 35% of revenue and gets equal weight in practice, not
// just in layout — the v1 site gave it five bullet points.
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        headlineLines={["Three areas that only", "work together."]}
        sub="You cannot write reliable controls without knowing what the systems can and cannot do. You cannot build a model that survives without both. Most firms sell one of the three. We work across all of them, because that is the only way the end result holds."
      />

      {PILLARS.map((pillar) => (
        <PillarDetail key={pillar.id} pillar={pillar} />
      ))}

      <EngagementFormats />
      <FirstEngagement />
      <CtaBand />
    </>
  );
}
