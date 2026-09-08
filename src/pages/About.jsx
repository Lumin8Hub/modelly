import { CtaBand } from "../components/sections/CtaBand";
import { PageHeader } from "../components/sections/PageHeader";
import { PendingPortrait } from "../components/ui/ReviewImage";
import { images } from "../content/images";
import { LINKEDIN } from "../lib/site";

const profiles = [
  { initials: "FC", name: "Fabio Ciampa", role: "Co-founder · CPA, CA", bio: "Fabio has spent his career in enterprise finance and financial systems: planning and analysis for revenue, cost of goods and product development, revenue assurance, billing system controls, and the data engineering underneath reporting. At Modelly he leads model design and systems work.", url: LINKEDIN.fabio },
  { initials: "JH", name: "Jennifer Hui", role: "Co-founder · CPA", bio: "Jennifer has spent her career in finance across telecom, retail and consumer packaged goods. Her work covers planning and analysis for revenue, equipment and operating costs, subscriber reporting and forecasting, and analytics. At Modelly she leads process and delivery.", url: LINKEDIN.jennifer },
  { initials: "ET", name: "Elaine Toribio", role: "Growth", bio: "Elaine has spent more than twenty years growing brands in telecom, technology and enterprise services, including growth programmes at Hydro One, Rogers and Bell covering rebrands, market expansion and lead generation. At Modelly she leads growth.", url: LINKEDIN.elaine },
];

function Profile({ profile }) {
  return <article>
    <a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${profile.name}'s LinkedIn profile`} className="block text-ink"><PendingPortrait initials={profile.initials} name={profile.name} /></a>
    <a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${profile.name}'s LinkedIn profile`} className="mt-5 block font-display text-2xl text-ink hover:underline">{profile.name}</a>
    <p className="mt-1 text-base font-semibold">{profile.role}</p>
    <p className="mt-4 text-base leading-[1.65] text-text-muted">{profile.bio}</p>
    <a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${profile.name}'s LinkedIn profile`} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-text-muted">View LinkedIn profile</a>
  </article>;
}

export function About() {
  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="About Us" eyebrow="ABOUT US" title="The people who sell you the work are the people who do it." body="Three principals. Forty years between them running finance, reporting and operations inside large businesses. No junior bench, no handoff, no implementation partner in the middle." image={images.about} />
    <section className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-20"><div className="grid gap-6 md:grid-cols-3">{profiles.map((profile) => <Profile key={profile.name} profile={profile} />)}</div></section>
    <CtaBand />
  </div>;
}
