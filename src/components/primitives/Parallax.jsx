import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// Translates its child on scroll. Three uses on the whole site: the hero
// screenshot, the connector mark behind the hero, and the comparison images.
// A fourth use means deleting one. See 05 §2.5.
//
// Travel is a percentage of element height, 8% maximum. Never more.
export function Parallax({ children, travel = 8, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const capped = Math.min(Math.abs(travel), 8);
  const y = useTransform(scrollYProgress, [0, 1], [`${capped / 2}%`, `-${capped / 2}%`]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
