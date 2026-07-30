import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DUR, EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// Headline entrance: each line rises out of the rule beneath it. Used by the
// hero h1 and every section h2. See 05 §2.2.
//
// Lines are passed as an array of strings and split in the markup, never by a
// script that measures the DOM. The copy deck controls where lines break.
export function MaskReveal({ lines, className = "", as: Tag = "h2", delay = 0, id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();

  return (
    <Tag ref={ref} className={className} id={id}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          {reduce ? (
            <span className="block">{line}</span>
          ) : (
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : undefined}
              transition={{ duration: DUR.base, ease: EASE.out, delay: delay + i * 0.08 }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  );
}
