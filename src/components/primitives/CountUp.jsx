import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// Counts from 0 to `value` on entering view, once. See 05 §2.3.
//
// Width is reserved from the final value's digit count. JetBrains Mono is
// fixed-pitch, so `Nch` is exact — which is why the site-wide rule that every
// numeral is monospaced (04 §2.2) is also what keeps this from shifting layout.
export function CountUp({ value, duration = 0.9, className = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();
  const [counted, setCounted] = useState(0);

  // With reduced motion the final value renders immediately — derived here
  // rather than pushed through state from an effect.
  const display = reduce ? value : counted;

  useEffect(() => {
    if (reduce || !inView) return undefined;

    const controls = animate(0, value, {
      duration,
      ease: EASE.out,
      onUpdate: (latest) => setCounted(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  const width = `${String(value).length + suffix.length}ch`;

  return (
    <span
      ref={ref}
      className={`inline-block tabular-nums ${className}`}
      style={{ minWidth: width }}
    >
      {display}
      {suffix}
    </span>
  );
}
