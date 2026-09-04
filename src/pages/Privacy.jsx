import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { DraftBadge } from "../components/ui/DraftBadge";
import { images } from "../content/images";

const sections = [
  ["What we collect", "When you use the Get Started form, we collect the information you choose to provide, such as your name, work email, company and message."],
  ["Why we collect it", "We use this information to understand your enquiry, respond to you and decide whether a conversation would be useful."],
  ["Who can see it", "The information is available to the Modelly principals who review enquiries. We do not sell it or publish it."],
  ["How long we keep it", "We keep enquiry information only for as long as it is reasonably needed to respond, keep a record of the conversation or meet a legal requirement."],
  ["Third parties", "We may use a form or hosting provider to receive and store submissions. Those providers handle information under their own terms and security practices."],
  ["Your rights under PIPEDA", "You may ask what personal information we hold about you, ask us to correct it or ask questions about how it is used. We will respond within the time required by applicable law."],
  ["Contact", "Use the Get Started form to ask a privacy question or make a request. We will route it to the person responsible for responding."],
];

export function Privacy() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Privacy policy" eyebrow="PRIVACY" title="Privacy policy" body="A plain-language draft for client approval." image={images.privacy}><DraftBadge always label="DRAFT — client approval required" /></PageHeader>
    <section className="mx-auto max-w-[72ch] px-5 py-16 md:py-24">{sections.map(([heading, body]) => <section key={heading} className="mb-10"><h2 className="font-display text-3xl">{heading}</h2><p className="mt-4 text-base leading-7 text-text-muted">{body}</p></section>)}</section>
    <CtaBand />
  </div>;
}
