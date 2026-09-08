import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { home } from "../content/home";
import { pillars } from "../content/pillars";
import { fiveFs } from "../content/fiveFs";
import { images } from "../content/images";
import { Button } from "../components/ui/Button";
import { DraftBadge } from "../components/ui/DraftBadge";
import { ReviewImage } from "../components/ui/ReviewImage";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { PageHeader } from "../components/sections/PageHeader";
import { ProcessFlow } from "../components/graphics/ProcessFlow";
import { CtaBand } from "../components/sections/CtaBand";

const pillarBorder = {
  "enterprise-systems": "border-accent-slate",
  "modern-governance": "border-accent-teal",
  "accounting-processes": "border-accent-amber",
  ai: "border-accent-coral",
};

export function Home() {
  return <div>
    <PageHeader eyebrow={home.hero.eyebrow} title={home.hero.title} body={home.hero.body} image={images["home-hero"]}>
      <div className="mt-6 flex flex-wrap items-center gap-5"><Button>Get started</Button><a href="#pillars" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-muted hover:underline">See what we do <ArrowRight size={16} aria-hidden="true" /></a></div>
    </PageHeader>

    <section className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20"><SectionHeader eyebrow="WHAT CHANGES" title="What actually changes."><p className="mt-4 max-w-[68ch] text-base leading-[1.65] text-text-muted md:text-lg">Changes to how your team closes, reports and uses information.</p></SectionHeader><div className="grid gap-4 md:grid-cols-2">{home.outcomes.map((card, index) => { const Icon = card.icon; return <Reveal key={card.title} delay={index * .04}><article className="h-full bg-paper-elevated p-6 md:p-8"><Icon size={25} strokeWidth={1.5} /><h3 className="mt-6 font-display text-2xl leading-[1.25] md:text-[28px]">{card.title}</h3><p className="mt-3 max-w-[45ch] text-base leading-[1.65] text-text-muted">{card.body}</p>{card.details && <ul className="mt-6 grid gap-3 text-base leading-[1.65]">{card.details.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />{detail}</li>)}</ul>}</article></Reveal>; })}</div></section>

    <section id="pillars" className="scroll-mt-24 bg-white"><div className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20"><SectionHeader eyebrow="OUR PILLARS" title={<>Four areas. <em className="font-light">One discipline.</em></>}><p className="mt-4 max-w-[68ch] text-base leading-[1.65] text-text-muted md:text-lg">{home.pillarsIntro}</p></SectionHeader><ReviewImage image={images["home-pillars"]} className="mx-auto max-w-[720px]" /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{pillars.map((pillar) => <Link key={pillar.slug} to={pillar.to} className={`border-l-4 ${pillarBorder[pillar.slug]} bg-paper p-6 transition-colors hover:bg-paper-elevated`}><h3 className="font-display text-[26px] leading-tight">{pillar.teaser.title}{pillar.draft && <DraftBadge label="DRAFT — awaiting Lumin8 approval" />}</h3><p className="mt-2 font-display text-lg font-light italic text-text-muted">{pillar.teaser.tagline}</p><p className="mt-4 text-base leading-[1.65] text-text-muted">{pillar.teaser.body}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-muted">Explore {pillar.name} <ArrowRight size={15} aria-hidden="true" /></span></Link>)}</div></div></section>

    <section id="five-fs" className="scroll-mt-24 mx-auto max-w-container px-5 py-12 md:px-10 md:py-20"><SectionHeader eyebrow="THE FIVE FS" title="What every model we build has in common."><p className="mt-4 text-base leading-[1.65] text-text-muted md:text-lg">Functions, Features, Format, Framework and Foundation.</p></SectionHeader><div className="border-t border-rule">{fiveFs.map((item) => <div key={item.slug} className="grid gap-2 border-b border-rule py-5 md:grid-cols-[48px_140px_minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-5 md:py-4"><span className="font-mono text-xs text-text-muted">{item.number}</span><span className="font-display text-2xl">{item.name}</span><span className="text-base leading-[1.65] text-text-muted">{item.table.def}</span><span><strong className="block text-base">{item.table.heading}</strong><span className="text-base leading-[1.65] text-text-muted">{item.table.desc}</span></span></div>)}</div><Link to="/five-fs" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-muted">Explore the Five Fs <ArrowRight size={15} aria-hidden="true" /></Link></section>

    <section id="process" className="scroll-mt-24 bg-paper-elevated"><div className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20"><SectionHeader eyebrow="HOW THE WORK RUNS" title="Every number takes the same five steps."><p className="mt-4 text-base leading-[1.65] text-text-muted md:text-lg">See how a Modelly model is built.</p></SectionHeader><Link to="/five-cs" aria-label="Explore the Five Cs" className="block border border-rule bg-white p-4 transition-shadow hover:shadow-md md:p-8"><ProcessFlow /></Link><Link to="/five-cs" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-muted">Explore the Five Cs <ArrowRight size={15} aria-hidden="true" /></Link></div></section>

    <section id="toolkit" className="scroll-mt-24 mx-auto max-w-container px-5 py-12 md:px-10 md:py-20"><SectionHeader eyebrow="PROJECT MANAGEMENT FRAMEWORK" title="Six tools that travel with every engagement."><p className="mt-4 max-w-[62ch] text-base leading-[1.65] text-text-muted md:text-lg">{home.toolkitIntro}</p></SectionHeader><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{home.tools.map((tool) => { const Icon = tool.icon; return <Link key={tool.slug} to={`/models/${tool.slug}`} className="bg-paper-elevated p-7 transition-colors hover:bg-white"><Icon size={25} strokeWidth={1.5} /><h3 className="mt-6 font-display text-2xl">{tool.name}{tool.draft && <DraftBadge label="DRAFT — awaiting Lumin8 approval" />}</h3><p className="mt-3 text-base leading-[1.65] text-text-muted">{tool.body}</p><ArrowRight size={16} className="mt-6" aria-hidden="true" /></Link>; })}</div><Link to="/project-management-framework" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-muted">Explore the Project Management Framework <ArrowRight size={15} aria-hidden="true" /></Link></section>

    <CtaBand />
  </div>;
}
