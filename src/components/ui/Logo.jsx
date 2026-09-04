import { Link } from "react-router-dom";

export function Logo({ inverse = false }) {
  return <Link to="/" className={`inline-flex items-center gap-2 font-sans font-medium tracking-tight ${inverse ? "text-text-inverse" : "text-ink"}`} aria-label="Modelly home">
    <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" className="h-7 w-7" />
    <span>modelly</span>
  </Link>;
}
