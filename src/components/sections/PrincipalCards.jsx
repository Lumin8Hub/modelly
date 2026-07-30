import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { PRINCIPALS } from "../../content/principals";

// /team section 02. Copy deck §5.2–§5.4.
//
// The v1 site shipped two grey boxes reading "CUSTOMIZE: HEADSHOT" to production.
// These monogram tiles look deliberate instead, and swap for photography in one
// line: set `photo` in content/principals.js and the <img> replaces the initials.
// Nothing else changes (04 §6.4, IMG-05).
export function PrincipalCards() {
  return (
    <Section labelledBy="principals-heading">
      <SectionHeader number="02" total="04" eyebrow="Who we are" />

      <h2 id="principals-heading" className="sr-only">
        The three principals
      </h2>

      <RevealGroup className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3">
        {PRINCIPALS.map((person, i) => (
          <RevealItem key={person.name} index={i}>
            <div className="relative aspect-square border border-rule bg-paper-2">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={`${person.name}, ${person.role} of Modelly.`}
                  width="600"
                  height="600"
                  loading="lazy"
                  className="h-full w-full object-cover saturate-[0.9]"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-full w-full items-center justify-center font-display text-[6rem] font-medium leading-none text-text-muted"
                >
                  {person.initials}
                </span>
              )}
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-signal" />
            </div>

            <h3 className="mt-6 font-display text-display-3 text-text">{person.name}</h3>
            <p className="mt-2 font-mono text-mono-sm uppercase text-text-muted">
              {person.credentials ? `${person.role} · ${person.credentials}` : person.role}
            </p>
            <p className="mt-4 font-sans text-body-sm text-text-muted">{person.bio}</p>
            <a
              href={person.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block border-b border-rule pb-1 font-sans text-body-sm text-text transition-colors duration-[180ms] hover:border-signal"
            >
              {person.name.split(" ")[0]} on LinkedIn
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
