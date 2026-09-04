import { Eyebrow } from "./Eyebrow";

export function SectionHeader({ eyebrow, title, children }) {
  return <div className="mb-10 border-t border-rule pt-4">
    <Eyebrow>{eyebrow}</Eyebrow>
    {title && <h2 className="mt-5 max-w-[24ch] font-display text-4xl leading-[1.08] tracking-tight md:text-5xl">{title}</h2>}
    {children}
  </div>;
}
