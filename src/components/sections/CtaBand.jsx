import { Button } from "../primitives/Button";
import { LINKEDIN } from "../../lib/site";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { SectionHeader } from "../primitives/SectionHeader";

// Copy deck §1.9. Used on the homepage as section 09 and reused verbatim at the
// foot of /services, /approach, /results and /team with the counter dropped.
// One closing action, worded identically everywhere, is the point — do not write
// page-specific variants.
//
// No hello@modelly.ca here. The mailbox does not exist yet (07 B2), and a dead
// primary CTA on a credibility site is the worst available outcome.
export function CtaBand({ number }) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="on-ink bg-ink py-16 text-text-inv md:py-28"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <SectionHeader number={number} eyebrow="Start here" theme="dark" />

        <MaskReveal
          id="cta-heading"
          lines={["Start with a diagnostic."]}
          className="mt-10 font-display text-display-2 md:mt-14"
        />

        <Measure as="p" className="mt-6 font-sans text-body text-text-inv-mut">
          Five questions, about two minutes. One of us reads every answer and comes back within
          two business days, either with a time to talk or with an honest no.
        </Measure>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button to="/diagnostic" variant="primary-inverse">
            Start a diagnostic
          </Button>
          <Button href={LINKEDIN.company} variant="secondary-inverse" arrow={false}>
            Modelly on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
