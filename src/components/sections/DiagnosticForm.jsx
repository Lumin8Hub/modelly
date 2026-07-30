import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DUR, EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { track } from "../../lib/track";
import { LINKEDIN } from "../../lib/site";
import { Button } from "../primitives/Button";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";

// Copy deck §6, interaction spec 05 §3.5.
//
// Six fields exactly as ticked in Question 45. Do not add company size, revenue,
// current systems, timeline or budget — all were explicitly left unticked. The
// referral field is a recommendation, not a client instruction (07 A6): ship it
// optional, delete it if the client says no.
//
// Two steps rather than one page of five fields. Two steps convert better on a
// form this short and make a young firm look organised, which is the client's
// stated reason for choosing a custom form over Calendly.

const STEP_ONE_FIELDS = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "title", label: "Your title", type: "text", autoComplete: "organization-title" },
];

const EMPTY = {
  name: "",
  email: "",
  company: "",
  title: "",
  problem: "",
  referrer: "",
};

const FIELD_CLASS =
  "mt-2 w-full border-0 border-b border-rule bg-transparent pb-2 font-sans text-body " +
  "text-text outline-none transition-colors duration-[180ms] focus:border-signal";

function validate(values, step) {
  const errors = {};
  if (step === 0) {
    if (!values.name.trim()) errors.name = "Please tell us your name.";
    if (!values.email.trim()) {
      errors.email = "Please give us a work email so we can reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = "That does not look like an email address.";
    }
    if (!values.company.trim()) errors.company = "Please tell us where you work.";
    if (!values.title.trim()) errors.title = "Please tell us your title.";
  } else {
    if (!values.problem.trim()) {
      errors.problem = "A sentence or two is enough, but we do need this one.";
    }
  }
  return errors;
}

export function DiagnosticForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("editing"); // editing | sending | sent | failed
  const [started, setStarted] = useState(false);
  const formRef = useRef(null);
  const reduce = useReducedMotion();

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  function update(name, value) {
    if (!started) {
      setStarted(true);
      track("diagnostic_start");
    }
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function focusFirstError(found) {
    const first = Object.keys(found)[0];
    const field = formRef.current?.elements?.namedItem(first);
    if (field && typeof field.focus === "function") field.focus();
  }

  function onContinue() {
    const found = validate(values, 0);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirstError(found);
      return;
    }
    setStep(1);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const found = validate(values, 1);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirstError(found);
      return;
    }

    // Never hardcode the endpoint, and never post to one owned by the agency.
    // Without the variable the form would submit into nothing, so say so.
    if (!endpoint) {
      setStatus("failed");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      track("diagnostic_submit");
      setStatus("sent");
    } catch {
      // Keep the entered values so nothing is retyped.
      setStatus("failed");
    }
  }

  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
      };

  if (status === "sent") {
    return (
      <div aria-live="polite">
        <MaskReveal
          as="h2"
          lines={["Thanks. We have your answers."]}
          className="font-display text-display-2 text-text"
        />
        <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
          Fabio, Jennifer or Elaine will read this and come back within two business days. If we
          are not the right fit for what you described, we will say so and point you somewhere
          better.
        </Measure>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="flex items-center gap-4">
        <span className="font-mono text-mono-sm text-text-muted">
          Step {String(step + 1).padStart(2, "0")} of 02
        </span>
        <span className="flex flex-1 gap-1" aria-hidden="true">
          <span className="h-0.5 flex-1 bg-signal" />
          <span className={`h-0.5 flex-1 ${step === 1 ? "bg-signal" : "bg-rule"}`} />
        </span>
      </div>

      <div className="mt-10 min-h-[26rem]">
        <AnimatePresence mode="wait" initial={false}>
          {step === 0 ? (
            <motion.div key="step-1" {...slide} transition={{ duration: DUR.base, ease: EASE.out }}>
              <p className="font-sans text-label uppercase text-text-muted">About you</p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {STEP_ONE_FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="font-mono text-mono-sm uppercase text-text-muted"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      value={values[field.name]}
                      onChange={(event) => update(field.name, event.target.value)}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                      className={FIELD_CLASS}
                    />
                    {errors[field.name] ? (
                      <p id={`${field.name}-error`} className="mt-2 font-sans text-body-sm text-before">
                        {errors[field.name]}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button type="button" onClick={onContinue}>
                  Continue
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="step-2" {...slide} transition={{ duration: DUR.base, ease: EASE.out }}>
              <p className="font-sans text-label uppercase text-text-muted">What you would fix</p>

              <div className="mt-8">
                <label htmlFor="problem" className="font-mono text-mono-sm uppercase text-text-muted">
                  If you could fix one thing about how your team plans, reports or closes, what
                  would it be?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  rows={5}
                  value={values.problem}
                  onChange={(event) => update("problem", event.target.value)}
                  aria-invalid={Boolean(errors.problem)}
                  aria-describedby={errors.problem ? "problem-error problem-help" : "problem-help"}
                  className={FIELD_CLASS}
                />
                <p id="problem-help" className="mt-2 font-sans text-body-sm text-text-muted">
                  A sentence or two is enough. Specifics help more than polish.
                </p>
                {errors.problem ? (
                  <p id="problem-error" className="mt-2 font-sans text-body-sm text-before">
                    {errors.problem}
                  </p>
                ) : null}
              </div>

              <div className="mt-8 md:max-w-md">
                <label htmlFor="referrer" className="font-mono text-mono-sm uppercase text-text-muted">
                  Who suggested you get in touch? (optional)
                </label>
                <input
                  id="referrer"
                  name="referrer"
                  type="text"
                  value={values.referrer}
                  onChange={(event) => update("referrer", event.target.value)}
                  className={FIELD_CLASS}
                />
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send"}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="font-mono text-mono-sm uppercase text-text-muted transition-colors duration-[180ms] hover:text-text"
                >
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div aria-live="polite">
        {status === "failed" ? (
          <div className="mt-8 border-l-2 border-before bg-paper-2 py-5 pl-6 pr-5">
            <h2 className="font-display text-display-3 text-text">That did not send.</h2>
            <p className="mt-3 font-sans text-body-sm text-text-muted">
              Something went wrong on our end, and your answers are still here. Try again, or
              reach us through LinkedIn and we will pick it up from there.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="submit"
                className="border-b border-rule pb-1 font-sans text-body-sm text-text transition-colors duration-[180ms] hover:border-signal"
              >
                Try again
              </button>
              <a
                href={LINKEDIN.company}
                target="_blank"
                rel="noreferrer"
                className="border-b border-rule pb-1 font-sans text-body-sm text-text transition-colors duration-[180ms] hover:border-signal"
              >
                Modelly on LinkedIn
              </a>
            </div>
            {!endpoint ? (
              <p className="mt-5 font-mono text-mono-sm text-text-muted">
                Configuration note for the site owner: VITE_FORM_ENDPOINT is not set, so this
                form has nowhere to post. See .env.example.
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
}
