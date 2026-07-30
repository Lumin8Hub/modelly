import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { DUR, EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { Measure } from "../primitives/Measure";
import { Reveal } from "../primitives/Reveal";
import { SectionHeader } from "../primitives/SectionHeader";
import { MaskReveal } from "../primitives/MaskReveal";

// Homepage section 02, and the most important element on the site: it dramatises
// the one idea the client identified as the actual selling point.
// Copy deck §1.2, interaction spec 05 §3.1.
//
// One motionValue is the single source of truth. The numerals are derived from
// the same value that positions the segment boundary, so they read 80/20, 71/29,
// 54/46, 31/69, 20/80 as the bar moves. Watching the numbers change under your
// own click is what turns a chart into an instrument.
//
// `drawn` handles the separate entry animation: the bar reveals left to right by
// clip (not scaleX, which would distort the labels) while both numerals count up
// from zero. At drawn = 1 the numerals equal the boundary value exactly, so one
// formula covers both phases.

const STATES = {
  today: { label: "Today", prep: 80 },
  modelly: { label: "With Modelly", prep: 20 },
};

const ORDER = ["today", "modelly"];

// EASE.snap overshoots, so the raw boundary transiently passes outside the range.
// Bar-width overshoot is fine visually; a numeral reading 18 is a bug.
//
// Clamp the boundary, never the displayed product: during the entry animation
// `drawn` scales both numerals up from zero, and clamping there would floor the
// "preparing" numeral at 20 and invert the pair.
function clampBoundary(value) {
  return Math.min(80, Math.max(20, value));
}

export function RatioFlip() {
  const [state, setState] = useState("today");
  const sectionRef = useRef(null);
  const prepNumeralRef = useRef(null);
  const usingNumeralRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-96px" });
  const reduce = useReducedMotion();

  const prep = useMotionValue(STATES.today.prep);
  const drawn = useMotionValue(reduce ? 1 : 0);

  const prepWidth = useTransform(prep, (v) => `${v}%`);
  const usingWidth = useTransform(prep, (v) => `${100 - v}%`);
  const clipRight = useTransform(drawn, (v) => `${(1 - v) * 100}%`);
  const clip = useMotionTemplate`inset(0 ${clipRight} 0 0)`;

  // Numerals are written straight to the DOM rather than through state, so the
  // bar does not re-render on every animation frame.
  useEffect(() => {
    function write() {
      const boundary = clampBoundary(prep.get());
      const scale = drawn.get();
      // Both numerals count up from zero on entry, and at scale = 1 they are
      // exactly the boundary and its complement — one formula, both phases.
      const preparing = Math.round(boundary * scale);
      const using = Math.round((100 - boundary) * scale);
      if (prepNumeralRef.current) prepNumeralRef.current.textContent = String(preparing);
      if (usingNumeralRef.current) usingNumeralRef.current.textContent = String(using);
    }
    write();
    const unsubPrep = prep.on("change", write);
    const unsubDrawn = drawn.on("change", write);
    return () => {
      unsubPrep();
      unsubDrawn();
    };
  }, [prep, drawn]);

  // Entry: the bar draws in, both numerals count up. Once only.
  useEffect(() => {
    if (reduce) {
      drawn.jump(1);
      return undefined;
    }
    if (!inView) return undefined;
    const controls = animate(drawn, 1, { duration: DUR.slow, ease: EASE.out });
    return () => controls.stop();
  }, [inView, reduce, drawn]);

  // Announced on settle rather than per frame — a screen reader does not want
  // sixty label updates a second.
  const [announced, setAnnounced] = useState(STATES.today.prep);
  useMotionValueEvent(prep, "animationComplete", () =>
    setAnnounced(Math.round(clampBoundary(prep.get()))),
  );

  function selectState(next) {
    setState(next);
    const target = STATES[next].prep;
    if (reduce) {
      // jump() fires no animationComplete, so the label is set here instead.
      prep.jump(target);
      setAnnounced(target);
      return;
    }
    animate(prep, target, { duration: DUR.slow, ease: EASE.snap });
  }

  const barLabel =
    `${STATES[state].label}: ${announced} percent preparing information, ` +
    `${100 - announced} percent using it.`;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ratio-heading"
      className="on-ink bg-ink py-16 text-text-inv md:py-28"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <SectionHeader number="02" eyebrow="The ratio" theme="dark" />

        <MaskReveal
          id="ratio-heading"
          lines={["Your team's week, before and after."]}
          className="mt-10 max-w-[24ch] font-display text-display-2 md:mt-14"
        />

        <Reveal delay={0.08}>
          <Measure as="p" className="mt-6 font-sans text-body text-text-inv-mut">
            Ask a finance team where the week goes and the answer is rarely analysis. It goes to
            pulling data, fixing formats, chasing errors and rebuilding last month's file. The
            work people were hired to do gets whatever is left.
          </Measure>
        </Reveal>

        {/* Toggle */}
        <div
          role="radiogroup"
          aria-label="Compare how the week is spent"
          className="mt-12 flex w-full border border-ink-3 sm:w-auto sm:self-start"
        >
          {ORDER.map((key) => {
            const selected = state === key;
            return (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => selectState(key)}
                className={
                  `flex-1 px-6 py-3 font-mono text-mono-sm uppercase transition-colors ` +
                  `duration-[180ms] sm:flex-none ` +
                  (selected
                    ? "bg-text-inv text-ink"
                    : "text-text-inv-mut hover:text-text-inv")
                }
              >
                {STATES[key].label}
              </button>
            );
          })}
        </div>

        {/* The bar. Segments stack below sm so the numerals stay legible. */}
        <motion.div
          style={{ clipPath: clip }}
          className="mt-8 flex h-auto w-full flex-col sm:h-14 sm:flex-row"
          role="img"
          aria-label={barLabel}
        >
          <motion.div
            style={{ width: prepWidth }}
            className="flex min-h-14 items-center justify-end bg-before px-4"
          >
            <span className="flex items-baseline gap-1.5 font-mono text-display-3 text-text-inv sm:text-mono-lg">
              <span ref={prepNumeralRef} className="inline-block tabular-nums" style={{ minWidth: "2ch" }}>
                80
              </span>
              <span className="font-mono text-mono-sm">%</span>
            </span>
          </motion.div>
          <motion.div
            style={{ width: usingWidth }}
            className="flex min-h-14 items-center justify-start bg-signal-bright px-4"
          >
            <span className="flex items-baseline gap-1.5 font-mono text-display-3 text-ink sm:text-mono-lg">
              <span ref={usingNumeralRef} className="inline-block tabular-nums" style={{ minWidth: "2ch" }}>
                20
              </span>
              <span className="font-mono text-mono-sm">%</span>
            </span>
          </motion.div>
        </motion.div>

        <div className="mt-4 flex flex-col gap-1 font-mono text-mono-sm uppercase text-text-inv-mut sm:flex-row sm:justify-between">
          <span>Preparing</span>
          <span>Using</span>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-10 font-display text-display-3 text-text-inv">
            We do not make people work faster. We remove the work.
          </p>
          <Measure as="p" className="mt-6 font-sans text-body text-text-inv-mut">
            The lost time is not the whole cost. Errors hide inside that 20%, so some of the
            little time left over goes to finding them.
          </Measure>
        </Reveal>
      </div>
    </section>
  );
}
