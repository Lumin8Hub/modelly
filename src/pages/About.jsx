import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { DraftBadge } from "../components/ui/DraftBadge";
import { Monogram } from "../components/ui/Monogram";
import { images } from "../content/images";

const profiles = [
  {
    initials: "FC",
    name: "Fabio Ciampa",
    role: "Co-founder · CPA, CA",
    bio: "Fabio has spent his career in enterprise finance and financial systems: planning and analysis for revenue, cost of goods and product development, revenue assurance, billing system controls, and the data engineering underneath reporting. At Modelly he leads model design and systems work.",
  },
  {
    initials: "JH",
    name: "Jennifer Hui",
    role: "Co-founder · CPA",
    bio: "Jennifer has spent her career in finance across telecom, retail and consumer packaged goods. Her work covers planning and analysis for revenue, equipment and operating costs, subscriber reporting and forecasting, and analytics. At Modelly she leads process and delivery.",
  },
  {
    initials: "ET",
    name: "Elaine Toribio",
    role: "Growth",
    bio: "Elaine has spent more than twenty years growing brands in telecom, technology and enterprise services, including growth programmes at Hydro One, Rogers and Bell covering rebrands, market expansion and lead generation. At Modelly she leads growth.",
  },
];

export function About() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="About Us" eyebrow="ABOUT US" title="The people who sell you the work are the people who do it." body="Three principals. Forty years between them running finance, reporting and operations inside large businesses. No junior bench, no handoff, no implementation partner in the middle." image={images.about}>
      <p className="mt-6 max-w-[58ch] text-lg leading-7 text-text-muted">Most firms separate the two. A partner wins the engagement, a junior team builds it, and an implementation partner delivers it. Often nobody in that chain has run a finance function. We built Modelly to work the other way: every engagement is designed and built by the people you met. Modelly is young; the experience behind it is not — and you get senior attention partly because we are not running forty engagements at once.</p>
    </PageHeader>
    <section className="mx-auto max-w-container px-5 py-16 md:px-10 md:py-24">
      <div className="mb-8 border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-wider text-text-muted">Our principals</div>
      <div className="grid gap-5 md:grid-cols-3">
        {profiles.map((profile) => <article key={profile.name} className="bg-paper-elevated p-6">
          <Monogram initials={profile.initials} label={profile.name} />
          <DraftBadge label="PLACEHOLDER" />
          <h2 className="mt-5 font-display text-2xl">{profile.name}</h2>
          <p className="mt-1 text-sm font-semibold">{profile.role}</p>
          <p className="mt-4 text-sm leading-6 text-text-muted">{profile.bio}</p>
        </article>)}
      </div>
    </section>
    <section className="bg-white">
      <div className="mx-auto max-w-container px-5 py-16 md:px-10 md:py-24">
        <div className="border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-wider text-text-muted">Where this comes from</div>
        <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">Where this experience comes from.</h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-5">
          {["Telecom", "Retail", "Consumer packaged goods", "Professional services", "Enterprise software"].map((sector) => <div key={sector} className="bg-paper p-5 font-display text-lg">{sector}</div>)}
        </div>
        <p className="mt-4 text-sm text-text-muted">Named past employers appear in each bio above. We do not display employer or client logos.</p>
      </div>
    </section>
    <CtaBand />
  </div>;
}
