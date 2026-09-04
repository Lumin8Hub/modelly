import { DraftBadge } from "../ui/DraftBadge";

export function ModelPlaceholder({ variant = "hero", seed = 1, image, className = "" }) {
  if (image) return <img src={image} alt="" className={`w-full border border-rule object-cover shadow-sm ${className}`} />;
  const accent = ["#5DB5AE", "#F4C04E", "#E5546B", "#5B7DB1"][seed % 4];
  const chart = variant === "line"
    ? "M12 92 C45 65 55 81 84 45 S130 64 163 28 S210 40 238 15"
    : variant === "waterfall"
      ? "M15 92V45h28v23h28V35h28v37h28V17h28v75"
      : variant === "table"
        ? "M16 43h44v18H16zm54 0h44v18H70zm54 0h44v18h-44zM16 70h44v18H16zm54 0h44v18H70zm54 0h44v18h-44z"
        : variant === "grid"
          ? "M20 92V55h35v37zm47 0V35h35v57zm47 0V66h35v26zm47 0V45h35v47z"
          : variant === "flow"
            ? "M20 55h42l14-20 24 40 24-20 18 20h54"
            : "M16 92V60h25v32h18V39h25v53h18V50h25v42h18V26h25v66";
  return <div className={`relative border border-rule bg-white p-3 shadow-[0_16px_36px_rgba(10,11,13,.08)] ${className}`}>
    <DraftBadge label="PLACEHOLDER" />
    <svg viewBox="0 0 260 190" role="img" aria-label="Abstract model placeholder" className="h-auto w-full">
      <rect width="260" height="190" fill="#fff" />
      <rect width="260" height="25" fill="#F2F2EE" />
      {[45, 67, 89, 111, 133, 155].map((y) => <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#E5E5E0" />)}
      {[35, 70, 105, 140, 175, 210, 245].map((x) => <line key={x} x1={x} y1="25" x2={x} y2="190" stroke="#E5E5E0" />)}
      {[0, 1, 2, 3].map((n) => <rect key={n} x={12 + ((seed + n) % 5) * 35} y={32 + n * 22} width="20" height="12" rx="2" fill={n % 2 ? "#F4C04E" : accent} opacity=".75" />)}
      <path d={chart} fill={variant === "table" ? accent : "none"} stroke="#0A0B0D" strokeWidth="2" opacity=".7" />
      <line x1="12" y1="92" x2="238" y2="92" stroke="#0A0B0D" strokeWidth="1" opacity=".35" />
    </svg>
  </div>;
}
