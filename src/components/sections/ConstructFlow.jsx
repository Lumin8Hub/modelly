import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { CONSTRUCT_CLOSING, CONSTRUCT_STEPS } from "../../content/constructSteps";

// /approach section 04. Copy deck §3.4, motion spec 05 §3.4.
//
// This is the section that most needs the treatment: it describes a SEQUENCE and
// the v1 site rendered it as five static columns. The connector line draws as the
// section passes through the viewport, and each step activates as the line
// reaches it — the motion carries the meaning.
//
// Below md the line runs vertically down the left edge and draws downward. Same
// logic, rotated. The v1 grid-cols-5 with no breakpoint prefix crushed below
// 900px (04 §5).
export function ConstructFlow() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(0);

  // Reduced motion means every step is active and the line is fully drawn —
  // derived here rather than pushed through state from an effect.
  const progress = reduce ? 1 : scrolled;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.55"],
  });

  // The rule is a scaleX (or scaleY on mobile) from 0 to 1, transform-origin at
  // the start edge — never a state update per scroll event for the line itself.
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (reduce) return undefined;
    return scrollYProgress.on("change", setScrolled);
  }, [reduce, scrollYProgress]);

  const total = CONSTRUCT_STEPS.length;

  return (
    <Section labelledBy="construct-heading">
      <div ref={sectionRef}>
        <SectionHeader number="04" total="06" eyebrow="How the work runs" />

        <MaskReveal
          id="construct-heading"
          lines={["Every number takes", "the same five steps."]}
          className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
        />

        {/* Desktop: horizontal line, five columns. */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="absolute inset-x-0 top-2 h-px bg-rule" />
            <motion.div
              className="absolute inset-x-0 top-2 h-px origin-left bg-signal"
              style={{ scaleX: reduce ? 1 : scale }}
            />
            <div className="relative grid grid-cols-5 gap-6">
              {CONSTRUCT_STEPS.map((step, i) => {
                const active = reduce || progress >= i / total;
                return (
                  <div key={step.n}>
                    <span
                      aria-hidden="true"
                      className={`block h-4 w-4 -translate-y-1.5 rounded-full border transition-colors duration-[240ms] ${
                        active ? "border-signal bg-signal" : "border-rule bg-paper"
                      }`}
                    />
                    <p
                      className={`mt-6 font-mono text-mono-sm transition-colors duration-[240ms] ${
                        active ? "text-signal" : "text-text-faint"
                      }`}
                    >
                      {step.n}
                    </p>
                    <h3
                      className={`mt-3 font-display text-display-3 transition-colors duration-[240ms] ${
                        active ? "text-text" : "text-text-faint"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 font-sans text-body-sm text-text-muted">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack with the line running down the left. */}
        <div className="mt-12 md:hidden">
          <div className="relative pl-10">
            <div className="absolute bottom-0 left-2 top-0 w-px bg-rule" />
            <motion.div
              className="absolute bottom-0 left-2 top-0 w-px origin-top bg-signal"
              style={{ scaleY: reduce ? 1 : scale }}
            />
            <div className="space-y-10">
              {CONSTRUCT_STEPS.map((step, i) => {
                const active = reduce || progress >= i / total;
                return (
                  <div key={step.n} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-10 top-1.5 h-4 w-4 rounded-full border transition-colors duration-[240ms] ${
                        active ? "border-signal bg-signal" : "border-rule bg-paper"
                      }`}
                    />
                    <p
                      className={`font-mono text-mono-sm transition-colors duration-[240ms] ${
                        active ? "text-signal" : "text-text-faint"
                      }`}
                    >
                      {step.n}
                    </p>
                    <h3 className="mt-2 font-display text-display-3 text-text">{step.title}</h3>
                    <p className="mt-2 font-sans text-body-sm text-text-muted">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Measure as="p" className="mt-14 font-sans text-body text-text-muted">
          {CONSTRUCT_CLOSING}
        </Measure>
      </div>
    </Section>
  );
}
