import { useReducedMotion } from "../../lib/useReducedMotion";

// One pixel of travel. Not four, not eight. See 05 §2.6.
// Under reduced motion the border colour still changes; the transform does not.
export function HoverLift({ children, className = "", as: Tag = "div" }) {
  const reduce = useReducedMotion();
  const lift = reduce ? "" : "hover:-translate-y-px";

  return (
    <Tag
      className={
        `border border-rule transition-[colors,transform] duration-[180ms] ` +
        `hover:border-signal ${lift} ${className}`
      }
    >
      {children}
    </Tag>
  );
}
