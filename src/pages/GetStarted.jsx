import { useState } from "react";
import { PageHeader } from "../components/sections/PageHeader";
import { DraftBadge } from "../components/ui/DraftBadge";
import { LINKEDIN, PREVIEW } from "../lib/site";

const initialValues = { name: "", email: "", company: "", message: "", referral: "" };

function Field({ label, name, value, onChange, optional, children, type = "text" }) {
  return <label className="grid gap-2 text-sm font-semibold" htmlFor={name}>
    <span>{label}{optional && <DraftBadge label="DRAFT — optional" />}</span>
    {children || <input id={name} name={name} type={type} value={value} onChange={onChange} required={!optional} className="border border-rule bg-white px-4 py-3 font-normal outline-none transition-colors focus:border-ink" />}
  </label>;
}

export function GetStarted() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    if (!endpoint && PREVIEW) {
      setTimeout(() => setStatus("success"), 600);
      return;
    }
    if (!endpoint) {
      setStatus("error");
      return;
    }
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Get Started" eyebrow="GET STARTED" title="Start with a diagnostic." body="A few questions, about two minutes. One of us reads every answer and comes back within two business days, either with a time to talk or with an honest no." variant="table" seed={11} />
    <section className="mx-auto grid max-w-container gap-16 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-10 md:py-24">
      <div>
        {status === "success" ? <div className="border border-rule bg-paper-elevated p-7"><h2 className="font-display text-3xl">Thanks. We have your answers.</h2><p className="mt-5 text-base leading-7 text-text-muted">Fabio, Jennifer or Elaine will read this and come back within two business days. If we are not the right fit for what you described, we will say so and point you somewhere better.</p></div> : status === "error" ? <div className="border border-rule bg-paper-elevated p-7"><h2 className="font-display text-3xl">That did not send.</h2><p className="mt-5 text-base leading-7 text-text-muted">Something went wrong on our end, and your answers are still here. Try again, or reach us through LinkedIn and we will pick it up from there.</p><div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold"><button type="button" className="bg-ink px-5 py-3 text-white" onClick={() => setStatus("idle")}>Try again</button><a href={LINKEDIN.company} target="_blank" rel="noreferrer" className="py-3 underline">Modelly on LinkedIn</a></div></div> : <form className="grid gap-5" onSubmit={submit}>
          <Field label="Your name" name="name" value={values.name} onChange={update} />
          <Field label="Work email" name="email" value={values.email} onChange={update} type="email" />
          <Field label="Company" name="company" value={values.company} onChange={update} />
          <Field label="If you could fix one thing about how your team plans, reports or closes, what would it be?" name="message" value={values.message} onChange={update}><textarea id="message" name="message" value={values.message} onChange={update} required rows="5" className="border border-rule bg-white px-4 py-3 font-normal outline-none transition-colors focus:border-ink" /><span className="text-xs font-normal text-text-muted">A sentence or two is enough. Specifics help more than polish.</span></Field>
          <Field label="Who suggested you get in touch?" name="referral" value={values.referral} onChange={update} optional />
          <button type="submit" disabled={status === "sending"} className="mt-2 w-fit bg-ink px-6 py-3 text-sm font-semibold text-white disabled:opacity-60">{status === "sending" ? "Sending…" : "Send"}</button>
        </form>}
      </div>
      <div>
        <div className="border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-wider text-text-muted">What happens next</div>
        <ol className="mt-8 grid gap-7">
          <li><strong className="font-mono text-xs">01 — We read it.</strong><p className="mt-2 text-sm leading-6 text-text-muted">A principal, not an assistant. Usually the same day.</p></li>
          <li><strong className="font-mono text-xs">02 — We come back.</strong><p className="mt-2 text-sm leading-6 text-text-muted">Either a time to talk or a straight no, within two business days.</p></li>
          <li><strong className="font-mono text-xs">03 — We talk for thirty minutes.</strong><p className="mt-2 text-sm leading-6 text-text-muted">You describe what is breaking. We tell you whether we can fix it and roughly what that involves. No deck.</p></li>
        </ol>
      </div>
    </section>
  </div>;
}
