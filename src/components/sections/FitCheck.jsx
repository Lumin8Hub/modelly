import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DUR, EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { track } from "../../lib/track";
import { Button } from "../primitives/Button";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { SectionHeader } from "../primitives/SectionHeader";
import { FIT_QUESTIONS, fitResult } from "../../content/fitCheck";

// Homepage section 08. Copy deck §1.8, interaction spec 05 §3.3.
//
// The critical behaviour: a score of 0 or 1 routes to /approach, not to the
// diagnostic. Question 19 asked the site to "subtly disqualify the wrong fit so
// you don't spend discovery calls on it." A qualifier that funnels every answer
// to the form is a lead form wearing a costume, and a referral-source reader will
// notice. That routing lives in content/fitCheck.js.
//
// Each question is a fieldset with a legend and two radio inputs, not buttons
// with click handlers (04 §8.1).

export default function FitCheck() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const reduce = useReducedMotion();
  const legendRef = useRef(null);
  const shouldFocus = useRef(false);

  const total = FIT_QUESTIONS.length;
  const complete = index >= total;
  const score = answers.filter(Boolean).length;

  // Focus moves to the new legend on advance, but not on first render.
  useEffect(() => {
    if (shouldFocus.current && legendRef.current) legendRef.current.focus();
  }, [index]);

  useEffect(() => {
    if (complete) track("fit_check_complete", { score });
  }, [complete, score]);

  function answer(value) {
    shouldFocus.current = true;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    setIndex((i) => i + 1);
  }

  function back() {
    shouldFocus.current = true;
    setIndex((i) => Math.max(0, i - 1));
  }

  function restart() {
    shouldFocus.current = false;
    setAnswers([]);
    setIndex(0);
  }

  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
      };

  const result = complete ? fitResult(score) : null;

  return (
    <section
      aria-labelledby="fit-heading"
      className="on-ink bg-ink py-16 text-text-inv md:py-28"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <SectionHeader eyebrow="Is this for you" theme="dark" />

        <MaskReveal
          id="fit-heading"
          lines={["We are not right for everyone."]}
          className="mt-10 font-display text-display-2 md:mt-14"
        />

        <Measure as="p" className="mt-6 font-sans text-body text-text-inv-mut">
          Four questions. An honest answer here saves us both a call.
        </Measure>

        <div className="mt-12 min-h-[19rem] md:min-h-[16rem]">
          {/* Progress: four small signal segments filling left to right. */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-mono-sm text-text-inv-mut">
              {complete
                ? `${String(score).padStart(2, "0")} / 0${total}`
                : `${String(index + 1).padStart(2, "0")} / 0${total}`}
            </span>
            <span className="flex flex-1 gap-1" aria-hidden="true">
              {FIT_QUESTIONS.map((question, i) => (
                <span
                  key={question}
                  className={`h-0.5 flex-1 transition-colors duration-[180ms] ${
                    i < index ? "bg-signal-bright" : "bg-ink-3"
                  }`}
                />
              ))}
            </span>
          </div>

          <div aria-live="polite" className="mt-8">
            <AnimatePresence mode="wait" initial={false}>
              {complete ? (
                <motion.div
                  key="result"
                  {...slide}
                  transition={{ duration: DUR.base, ease: EASE.out }}
                >
                  <p className="font-mono text-mono-lg text-signal-bright">
                    {score} / {total}
                  </p>
                  <h3 className="mt-4 font-display text-display-3 text-text-inv">
                    {result.heading}
                  </h3>
                  <Measure as="p" className="mt-4 font-sans text-body text-text-inv-mut">
                    {result.body}
                  </Measure>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <Button to={result.action.to} variant="primary-inverse">
                      {result.action.label}
                    </Button>
                    <button
                      type="button"
                      onClick={restart}
                      className="border-b border-ink-3 pb-1 font-sans text-body-sm text-text-inv-mut transition-colors duration-[180ms] hover:border-signal-bright hover:text-text-inv"
                    >
                      Start again
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  {...slide}
                  transition={{ duration: DUR.base, ease: EASE.out }}
                >
                  <fieldset>
                    <legend
                      ref={legendRef}
                      tabIndex={-1}
                      className="max-w-[34ch] font-display text-display-3 text-text-inv outline-none"
                    >
                      {FIT_QUESTIONS[index]}
                    </legend>
                    <div className="mt-8 flex flex-wrap gap-4">
                      {[
                        { label: "Yes", value: true },
                        { label: "No", value: false },
                      ].map((option) => (
                        <label
                          key={option.label}
                          className="cursor-pointer border border-ink-3 px-10 py-4 font-sans text-body text-text-inv transition-colors duration-[180ms] hover:border-signal-bright focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-text-inv"
                        >
                          <input
                            type="radio"
                            name={`fit-${index}`}
                            className="sr-only"
                            checked={answers[index] === option.value}
                            onChange={() => answer(option.value)}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {index > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="mt-8 font-mono text-mono-sm uppercase text-text-inv-mut transition-colors duration-[180ms] hover:text-text-inv"
                    >
                      Back
                    </button>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
