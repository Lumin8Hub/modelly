import { PREVIEW } from "../../lib/site";

export function DraftBadge({ label = "DRAFT" }) {
  if (!PREVIEW) return null;
  return <span className="ml-2 inline-flex items-center rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 align-middle font-mono text-[10px] font-medium uppercase tracking-wider text-amber-900">{label}</span>;
}
