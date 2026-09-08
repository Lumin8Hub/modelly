import { Eyebrow } from "./Eyebrow";

export function SectionHeader({ eyebrow, title, children }) {
  return <div className="mb-8 border-t border-rule pt-3 md:mb-10 md:pt-4">
    <Eyebrow>{eyebrow}</Eyebrow>
    {title && <h2 className="mt-3 max-w-[24ch] font-display text-[30px] leading-[1.2] tracking-tight md:text-[40px]">{title}</h2>}
    {children}
  </div>;
}
