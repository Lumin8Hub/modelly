import { DraftBadge } from "../ui/DraftBadge";

export function PillarsMark() {
  return <div className="relative mx-auto my-12 max-w-[340px]"><DraftBadge label="PLACEHOLDER" /><svg viewBox="0 0 340 150" className="w-full" aria-label="Four pillar placeholder">
    <line x1="105" y1="75" x2="235" y2="75" stroke="#0A0B0D" strokeWidth="1.5" opacity=".3" />
    <circle cx="170" cy="75" r="18" fill="#0A0B0D" />
    <rect x="28" y="48" width="42" height="42" rx="10" fill="#5DB5AE" /><rect x="100" y="18" width="42" height="42" rx="10" fill="#F4C04E" /><rect x="198" y="18" width="42" height="42" rx="10" fill="#E5546B" /><rect x="270" y="48" width="42" height="42" rx="10" fill="#5B7DB1" />
  </svg></div>;
}
