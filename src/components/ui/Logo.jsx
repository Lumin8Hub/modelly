import { Link } from "react-router-dom";

export function Logo({ inverse = false, footer = false }) {
  return <Link to="/" className={`inline-flex min-h-11 items-center ${footer ? "bg-white px-2" : ""} ${inverse ? "text-text-inverse" : "text-ink"}`} aria-label="Modelly home">
    <img src={`${import.meta.env.BASE_URL}brand/modelly-logo.svg`} alt="Modelly" className={footer ? "h-10 max-w-[220px]" : "h-8 max-w-[180px]"} style={{ width: "auto", objectFit: "contain" }} />
  </Link>;
}
