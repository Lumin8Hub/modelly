import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";

export function Construct() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Construct" eyebrow="MODELLING CONSTRUCT" title="The Five Cs" />
    <section className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20">
      <div className="border border-rule bg-white p-6 text-base leading-[1.65] md:p-8 md:text-lg">Content pending from Lumin8: the five C names, descriptions and images. This page is not ready for publication.</div>
    </section>
    <CtaBand />
  </div>;
}
