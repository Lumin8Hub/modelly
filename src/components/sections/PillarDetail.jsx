import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { Measure } from "../primitives/Measure";

// One pillar on /services. Sticky left column, scrolling right column.
// Spec in 04 §6.3 and 05 §3.4.
//
// As each bullet crosses the viewport midpoint it moves from text-muted to text
// and a 1px signal rule draws in from the left. Everything above stays lit;
// everything below stays muted — the reader can see their own progress through
// the argument.
//
// position: sticky with top: 6rem. No scroll-jacking library. Below md the pin
// and the highlight are both removed.
const NARROW = "(max-width: 767px)";

export function PillarDetail({ pillar, number }) {
  const [lit, setLit] = useState(0);
  const [isNarrow, setIsNarrow] = useState(() => window.matchMedia(NARROW).matches);
  const listRef = useRef(null);
  const reduce = useReducedMotion();

  // No pin and no progressive highlight below md or under reduced motion: every
  // bullet reads as lit. Derived, not pushed through state from an effect.
  const pinned = !isNarrow && !reduce;
  const activeCount = pinned ? lit : pillar.bullets.length;

  useEffect(() => {
    const query = window.matchMedia(NARROW);
    const update = (event) => setIsNarrow(event.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !pinned) return undefined;

    function onScroll() {
      const items = Array.from(list.children);
      const midpoint = window.innerHeight / 2;
      setLit(items.filter((item) => item.getBoundingClientRect().top < midpoint).length);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Deferred so the initial sync does not run inside the effect body — the
    // section may already be past the midpoint on a deep link to #models.
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pinned]);

  return (
    <section
      id={pillar.id}
      aria-labelledby={`${pillar.id}-heading`}
      className="scroll-mt-24 border-t border-rule py-16 md:py-24"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-sticky-top">
              <p className="font-mono text-mono-sm text-text-muted">
                {number} — {pillar.title}
              </p>
              <h2
                id={`${pillar.id}-heading`}
                className="mt-4 font-display text-display-2 text-text"
              >
                {pillar.line}
              </h2>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Measure as="p" className="font-sans text-body text-text-muted">
              {pillar.body}
            </Measure>

            <p className="mt-12 font-sans text-label uppercase text-text-muted">
              What this involves
            </p>

            <ul ref={listRef} className="mt-6">
              {pillar.bullets.map((bullet, i) => {
                const lit = i < activeCount;
                return (
                  <li
                    key={bullet}
                    className="border-b border-rule py-5 first:border-t"
                  >
                    <span className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className={`mt-3 h-px shrink-0 bg-signal transition-all duration-[240ms] ${
                          lit ? "w-6" : "w-0"
                        }`}
                      />
                      <span
                        className={`font-sans text-body transition-colors duration-[240ms] ${
                          lit ? "text-text" : "text-text-muted"
                        }`}
                      >
                        {bullet}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            {pillar.callout ? (
              <p className="mt-10 border-l-2 border-signal bg-paper-2 py-5 pl-6 pr-5 font-display text-display-3 text-text">
                {pillar.callout}
              </p>
            ) : null}

            {pillar.closing ? (
              <Measure as="p" className="mt-10 font-sans text-body-sm text-text-muted">
                {pillar.closing}
              </Measure>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
