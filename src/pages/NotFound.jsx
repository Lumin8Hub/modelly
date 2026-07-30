import { Link } from "react-router-dom";

// Copy deck §8.4. Wordmark, one line, two links. No cleverness.
export default function NotFound() {
  return (
    <section aria-labelledby="notfound-heading" className="bg-paper pb-32 pt-40">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <h1 id="notfound-heading" className="font-display text-display-2 text-text">
          That page does not exist.
        </h1>
        <p className="mt-6 font-sans text-lead text-text-muted">
          The link may be out of date. Everything is one click away.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            to="/"
            className="border-b border-rule pb-1 font-sans text-body text-text transition-colors duration-[180ms] hover:border-signal"
          >
            Go to the homepage
          </Link>
          <Link
            to="/diagnostic"
            className="border-b border-rule pb-1 font-sans text-body text-text transition-colors duration-[180ms] hover:border-signal"
          >
            Start a diagnostic
          </Link>
        </div>
      </div>
    </section>
  );
}
