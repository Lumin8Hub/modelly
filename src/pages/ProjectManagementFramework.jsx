import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { DraftBadge } from "../components/ui/DraftBadge";
import { home } from "../content/home";
import { images } from "../content/images";

export function ProjectManagementFramework() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Project Management Framework" eyebrow="PROJECT MANAGEMENT FRAMEWORK" title="Six tools that travel with every engagement." body={home.toolkitIntro} image={images.charter} />
    <section className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{home.tools.map((tool) => { const Icon = tool.icon; return <Link key={tool.slug} to={`/models/${tool.slug}`} className="bg-paper-elevated p-7 transition-colors hover:bg-white"><Icon size={25} strokeWidth={1.5} /><h2 className="mt-6 font-display text-2xl">{tool.name}{tool.draft && <DraftBadge label="DRAFT — awaiting Lumin8 approval" />}</h2><p className="mt-3 text-base leading-[1.65] text-text-muted">{tool.body}</p><ArrowRight size={16} className="mt-6" aria-hidden="true" /></Link>; })}</div>
    </section>
    <CtaBand />
  </div>;
}
