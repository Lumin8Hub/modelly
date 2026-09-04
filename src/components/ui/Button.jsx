import { Link } from "react-router-dom";

export function Button({ children, to = "/get-started", inverse = false, className = "" }) {
  return <Link to={to} className={`inline-flex items-center justify-center border px-5 py-3 text-sm font-semibold transition-colors ${inverse ? "border-white bg-white text-ink hover:bg-transparent hover:text-white" : "border-ink bg-ink text-white hover:bg-transparent hover:text-ink"} ${className}`}>{children}</Link>;
}
