import { Link } from "react-router-dom";

export function Button({ children, to = "/get-started", inverse = false, className = "", onClick }) {
  return <Link to={to} onClick={onClick} className={`inline-flex min-h-11 items-center justify-center rounded-none border border-transparent px-6 py-3 text-sm font-semibold transition-colors ${inverse ? "border-white bg-white text-ink hover:bg-transparent hover:text-white" : "bg-accent-slate text-white hover:bg-ink"} ${className}`}>{children}</Link>;
}
