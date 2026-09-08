import { Breadcrumb } from "../ui/Breadcrumb";
import { DraftBadge } from "../ui/DraftBadge";
import { Eyebrow } from "../ui/Eyebrow";

export function PageHeader({ eyebrow, title, lede, body, breadcrumb, breadcrumbLabel, image, draft, children }) {
  return <section className="relative min-h-[280px] overflow-hidden bg-white md:min-h-[320px]">
    {image && <div aria-hidden="true" className="absolute -inset-4 bg-cover bg-center blur-lg" style={{ backgroundImage: `url(${image.src})` }} />}
    {image && <div aria-hidden="true" className="absolute inset-0 bg-white/[.90]" />}
    <div className="relative mx-auto flex min-h-[280px] max-w-container items-center px-5 py-12 md:min-h-[320px] md:px-10 md:py-[72px]">
      <div className="w-full max-w-[640px]">{breadcrumb && <Breadcrumb items={[...breadcrumb, { label: breadcrumbLabel || title }]} />}<Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-3 whitespace-pre-line font-display text-[40px] font-normal leading-[1.1] tracking-[-.03em] md:text-[clamp(48px,5vw,64px)]">{title}{draft && <DraftBadge label="DRAFT — awaiting Lumin8 approval" />}</h1>{lede && <p className="mt-4 max-w-[32ch] font-display text-2xl font-light italic leading-tight text-text-muted md:text-[26px]">{lede}</p>}{body && <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-text-muted md:text-lg">{body}</p>}{children}</div>
    </div>
  </section>;
}
