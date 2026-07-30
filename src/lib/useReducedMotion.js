import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

// Single source of truth for the reduced-motion decision. The CSS media query
// in index.css cannot reach Framer Motion, which animates inline styles through
// JavaScript, so every primitive consults this instead. See 05 §5.
export function useReducedMotion() {
  return useFramerReducedMotion() === true;
}
