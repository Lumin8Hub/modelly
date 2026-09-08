import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { ReviewImage } from "../components/ui/ReviewImage";
import { images } from "../content/images";
import { fiveFs } from "../content/fiveFs";

export function Fundamentals() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Fundamentals" eyebrow="MODELLING FUNDAMENTALS" title="The Five Fs" image={images.f1} />
    <div className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20">
      <div className="grid gap-16 md:gap-24">
        {fiveFs.map((item, index) => {
          const imageLeft = index % 2 === 1;
          return <section id={item.name.toLowerCase()} key={item.slug} className="grid gap-6 border-b border-rule pb-16 last:border-b-0 md:grid-cols-2 md:gap-12 md:pb-24">
            <div className={imageLeft ? "order-2 md:order-2" : "order-1 md:order-1"}>
              <h2 className="font-display text-[30px] leading-[1.2] md:text-[40px]">{item.number} — {item.name}</h2>
              <ul className="mt-6 grid gap-3 text-base leading-[1.65] md:text-lg">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />{bullet}</li>)}</ul>
            </div>
            <div className={imageLeft ? "order-1 md:order-1" : "order-2 md:order-2"}><ReviewImage image={images[item.image]} /></div>
          </section>;
        })}
      </div>
    </div>
    <CtaBand />
  </div>;
}
