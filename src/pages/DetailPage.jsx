import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { ReviewImage } from "../components/ui/ReviewImage";
import { DraftBadge } from "../components/ui/DraftBadge";
import { images } from "../content/images";

const imageOnLeft = new Set(["modern-governance", "ai"]);

function BulletList({ bullets }) {
  return <ul className="mt-6 grid gap-3 text-base leading-[1.65] md:text-lg">{bullets.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />{item}</li>)}</ul>;
}

export function DetailPage({ page, kind = "pillar" }) {
  const isPillar = kind === "pillar";
  const image = images[page.image || page.slug];
  return <div>
    <PageHeader breadcrumb={page.breadcrumb} breadcrumbLabel={page.name} eyebrow={page.eyebrow} title={page.h1 || page.name} body={isPillar ? page.body : undefined} image={images[page.slug]} draft={page.draft} />
    {isPillar ? <section className="mx-auto grid max-w-container gap-6 px-5 py-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-20"><div className={imageOnLeft.has(page.slug) ? "order-1 md:order-2" : "order-1 md:order-1"}><h2 className="font-display text-[30px] leading-[1.2] md:text-[40px]">What this involves{page.draft && <DraftBadge label="DRAFT — awaiting Lumin8 approval" />}</h2><BulletList bullets={page.bullets} /></div><div className={imageOnLeft.has(page.slug) ? "order-2 md:order-1" : "order-2 md:order-2"}><ReviewImage image={image} /></div></section> : <section className="mx-auto max-w-[720px] px-5 py-12 md:px-10 md:py-20"><ReviewImage image={image} /><div className="mt-10"><h2 className="font-display text-[30px] leading-[1.2] md:text-[40px]">What's inside</h2><BulletList bullets={page.bullets} />{page.slug === "rascix" && <div className="mt-8"><DraftBadge label="OPEN — Lumin8 must confirm the meaning of X and +." always /></div>}</div></section>}
    {page.callout && <aside className="mx-auto mb-12 max-w-container px-5 md:mb-20 md:px-10"><div className="border-l-4 border-accent-coral bg-paper-elevated p-6 font-display text-2xl font-light italic leading-tight">{page.callout}</div></aside>}
    <CtaBand />
  </div>;
}
