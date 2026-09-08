import { Link } from "react-router-dom";

export function NotFound() {
  return <section className="mx-auto max-w-container px-5 py-24 md:px-10 md:py-36"><h1 className="font-display text-5xl">That page does not exist.</h1><p className="mt-5 max-w-lg text-lg text-text-muted">The link may be out of date. Everything is one click away.</p><div className="mt-8 flex gap-6 text-sm font-semibold"><Link to="/" className="underline">Go to the homepage</Link><Link to="/get-started" className="underline">Get started</Link></div></section>;
}
