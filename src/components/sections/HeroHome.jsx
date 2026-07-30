import { Button } from "../primitives/Button";
import { ConnectorMark } from "../primitives/ConnectorMark";
import { Eyebrow } from "../primitives/Eyebrow";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { Parallax } from "../primitives/Parallax";
import { Reveal } from "../primitives/Reveal";
import { HERO_MODEL } from "../../assets/manifest";

// Copy deck §1.1. The only dark hero on the site; every other page uses PageHero
// on paper.
//
// IMG-01, the anonymised model screenshot, is blocked on the client (07 A1).
// Until it arrives the connector mark carries the space as a structural element
// at 10–12% opacity, cropped large — a real fallback, not a failure state, and
// much better than an invented screenshot (06 §2).
export function HeroHome() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="on-ink relative overflow-hidden bg-ink pb-16 pt-32 text-text-inv md:pb-24 md:pt-40"
    >
      {/* Cropped large and bled off the right edge. */}
      <div className="pointer-events-none absolute -right-32 -top-24 hidden md:block">
        <Parallax travel={8}>
          <ConnectorMark size={720} color="#5EC8BC" opacity={0.11} strokeWidth={1} />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-container px-6 md:px-12">
        <Reveal>
          <Eyebrow theme="dark">Planning · Forecasting · Reporting · Process</Eyebrow>
        </Reveal>

        <MaskReveal
          as="h1"
          id="hero-heading"
          lines={["Less time producing information.", "More time using it."]}
          className="mt-6 max-w-[18ch] font-display text-display-1"
          delay={0.08}
        />

        <Reveal delay={0.18}>
          <Measure as="p" className="mt-8 font-sans text-lead text-text-inv-mut">
            Most finance teams spend about 80% of their week preparing information and 20%
            acting on it. We build the planning, forecasting and reporting systems that flip
            that ratio, using the Microsoft 365 or Google Workspace tools your team already
            has.
          </Measure>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button to="/diagnostic" variant="primary-inverse">
              Start a diagnostic
            </Button>
            <Button to="/approach" variant="secondary-inverse" arrow={false}>
              See how we work
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <p className="mt-12 max-w-[46ch] font-sans text-body-sm text-text-inv-mut">
            Two CPAs and a marketing lead. Forty years in finance between them. The people who
            sell you the work are the people who do it.
          </p>
        </Reveal>

        {/* IMG-01 mount. When the screenshot clears, render the <picture> here
            inside a Parallax with an ink-2 mount and an ink-3 border (04 §7). */}
        {HERO_MODEL ? null : null}
      </div>
    </section>
  );
}
