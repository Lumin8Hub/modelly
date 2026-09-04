import { ConnectorMotif } from "../graphics/ConnectorMotif";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";

export function CtaBand() {
  return <section className="relative overflow-hidden bg-ink py-20 text-text-inverse md:py-28"><div className="pointer-events-none absolute -bottom-28 -left-10"><ConnectorMotif size={430} /></div><div className="relative mx-auto max-w-container px-5 md:px-10"><Eyebrow dark>START HERE</Eyebrow><h2 className="mt-6 font-display text-5xl font-light italic leading-none tracking-tight md:text-7xl">Start with a diagnostic.</h2><p className="mt-7 max-w-[58ch] text-lg leading-7 text-white/75">A few questions, about two minutes. One of us reads every answer and comes back within two business days, either with a time to talk or with an honest no.</p><Button inverse className="mt-9">Get started</Button></div></section>;
}
