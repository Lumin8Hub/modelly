import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DUR, EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// Entrance animation. The floor, not the feature — see 05 §2.1.
// Tightened from v1: y 12 → 8, duration 0.6 → DUR.base.
export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: DUR.base, delay, ease: EASE.out }}
    >
      {children}
    </Component>
  );
}

// Stagger container. Children arrive 0.06s apart, capped at 6 so a ten-item
// list does not take 600ms to finish arriving.
const STAGGER = 0.06;
const STAGGER_CAP = 6;

export function RevealGroup({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: STAGGER, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "", index = 0 }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: DUR.base,
            ease: EASE.out,
            delay: Math.min(index, STAGGER_CAP) * STAGGER,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
