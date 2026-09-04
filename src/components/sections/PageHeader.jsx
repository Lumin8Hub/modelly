import { Breadcrumb } from "../ui/Breadcrumb";
import { DraftBadge } from "../ui/DraftBadge";
import { Eyebrow } from "../ui/Eyebrow";
import { ModelPlaceholder } from "../graphics/ModelPlaceholder";

export function PageHeader({ eyebrow, title, lede, body, breadcrumb, breadcrumbLabel, seed = 1, variant, image, draft, children }) {
  return <section className="bg-white">
    <div className="mx-auto grid max-w-container gap-12 px-5 py-12 md:grid-cols-[1fr_0.9fr] md:items-center md:px-10 md:py-20">
      <div>{breadcrumb && <Breadcrumb items={[...breadcrumb, { label: breadcrumbLabel || title }]} />}<Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-5 whitespace-pre-line font-display text-[clamp(40px,5.5vw,72px)] font-normal leading-[1.02] tracking-[-.03em]">{title}{draft && <DraftBadge />}</h1>{lede && <p className="mt-6 max-w-[32ch] font-display text-2xl font-light italic leading-tight text-text-muted md:text-[26px]">{lede}</p>}{body && <p className="mt-6 max-w-[58ch] text-lg leading-7 text-text-muted">{body}</p>}{children}</div>
      {image ? <ModelPlaceholder image={image.src} alt={image.alt} priority /> : <ModelPlaceholder variant={variant || (seed % 2 ? "bars" : "line")} seed={seed} />}
    </div>
  </section>;
}
