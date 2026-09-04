import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { DraftBadge } from "../components/ui/DraftBadge";
import { images } from "../content/images";

const sections = [
  ["Using this site", "You may use this site for lawful, personal or internal business purposes. Please do not interfere with the site or use its content in a way that misleads others."],
  ["Our intellectual property", "The site, its written content, visual design, frameworks, methods and templates belong to Modelly unless stated otherwise. © Modelly. The Modelly modelling framework is copyrighted material."],
  ["What this site is not", "The information on this site is general information, not accounting, legal, tax or other professional advice. A conversation with Modelly is needed before relying on a particular approach."],
  ["Links", "This site may link to other sites for convenience. Modelly does not control those sites and is not responsible for their content or practices."],
  ["Changes", "We may update this site and these terms from time to time. The current version will appear on this page."],
  ["Contact", "Use the Get Started form if you have a question about these terms or want to discuss anything on this site."],
];

export function Terms() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Terms of use" eyebrow="TERMS" title="Terms of use" body="A plain-language draft for client approval." image={images.terms}><DraftBadge always label="DRAFT — client approval required" /></PageHeader>
    <section className="mx-auto max-w-[72ch] px-5 py-16 md:py-24">{sections.map(([heading, body]) => <section key={heading} className="mb-10"><h2 className="font-display text-3xl">{heading}</h2><p className="mt-4 text-base leading-7 text-text-muted">{body}</p></section>)}</section>
    <CtaBand />
  </div>;
}
