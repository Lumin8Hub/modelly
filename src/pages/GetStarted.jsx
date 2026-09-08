import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../components/sections/PageHeader";
import { LINKEDIN } from "../lib/site";
import { images } from "../content/images";

const initialValues = { name: "", email: "", company: "", phone: "", message: "" };

function Field({ label, name, value, onChange, error, type = "text", autoComplete = "off", children, helper }) {
  const errorId = `${name}-error`;
  return <div className="grid gap-2"><label htmlFor={name} className="text-base font-semibold text-ink">{label}</label>{children || <input id={name} name={name} type={type} value={value} onChange={onChange} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : helper ? `${name}-help` : undefined} className="min-h-12 w-full border border-accent-slate bg-white px-4 py-3 text-base font-normal outline-none transition-colors focus:border-ink" />}{helper && <p id={`${name}-help`} className="text-sm leading-6 text-text-muted">{helper}</p>}{error && <p id={errorId} className="text-sm leading-6 text-accent-coral">{error}</p>}</div>;
}

export function GetStarted() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();

  useEffect(() => { if (status === "success") successRef.current?.focus(); }, [status]);
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));

  function validate(form) {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    const email = form.elements.email;
    if (!email.value.trim() || !email.validity.valid) next.email = "Enter a valid work email address.";
    if (!values.company.trim()) next.company = "Enter your company name.";
    if (!values.message.trim()) next.message = "Tell us what you would like to fix.";
    return next;
  }

  async function submit(event) {
    event.preventDefault();
    if (!endpoint || status === "sending") return;
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      event.currentTarget.elements[Object.keys(nextErrors)[0]]?.focus();
      return;
    }
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: values.name.trim(), email: values.email.trim(), company: values.company.trim(), phone: values.phone.trim(), message: values.message.trim() }), signal: controller.signal });
      if (!response.ok) throw new Error("Lead rejected");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return <div>
    <PageHeader breadcrumb={[{ label: "Home", to: "/" }]} breadcrumbLabel="Get Started" eyebrow="GET STARTED" title="Start with a diagnostic." body="A few questions, about two minutes. One of us reads every answer and comes back within two business days, either with a time to talk or with an honest no." image={images["get-started"]} />
    <section className="mx-auto max-w-[720px] px-5 py-12 md:px-10 md:py-20">
      <p role="status" aria-live="polite" className="sr-only">{status === "sending" ? "Sending…" : ""}</p>
      {status === "success" ? <div role="status" aria-live="polite"><h2 ref={successRef} tabIndex="-1" className="font-display text-[30px] leading-[1.2] md:text-[40px]">Thanks. We have your answers.</h2><p className="mt-4 text-base leading-[1.65] text-text-muted md:text-lg">Your message has been sent to Modelly.</p></div> : <>
        {status === "error" && <div role="alert" className="mb-8 border border-accent-coral bg-white p-5 text-base text-accent-coral">Your message was not sent. Please try again. <a href={LINKEDIN.company} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Modelly on LinkedIn</a></div>}
        {!endpoint && <p role="status" className="mb-8 border border-accent-slate bg-white p-5 text-base text-ink">Preview only — this form is not connected. Your answers will not be sent.</p>}
        <form noValidate onSubmit={submit} className="grid gap-5">
          <Field label="Your name" name="name" value={values.name} onChange={update} error={errors.name} autoComplete="name" />
          <Field label="Work email" name="email" value={values.email} onChange={update} error={errors.email} type="email" autoComplete="email" />
          <Field label="Company" name="company" value={values.company} onChange={update} error={errors.company} autoComplete="organization" />
          <Field label="Phone number (optional)" name="phone" value={values.phone} onChange={update} type="tel" autoComplete="tel" helper="Include your country code if you are outside Canada." />
          <Field label="If you could fix one thing about how your team plans, reports or closes, what would it be?" name="message" value={values.message} onChange={update} error={errors.message} helper="A sentence or two is enough. Specifics help more than polish."><textarea id="message" name="message" value={values.message} onChange={update} rows="5" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error message-help" : "message-help"} className="w-full border border-accent-slate bg-white px-4 py-3 text-base font-normal outline-none transition-colors focus:border-ink" /></Field>
          <button type="submit" disabled={!endpoint || status === "sending"} className="mt-1 inline-flex min-h-11 w-fit items-center justify-center rounded-none bg-accent-slate px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Sending…" : "Send"}</button>
        </form>
      </>}
    </section>
  </div>;
}
