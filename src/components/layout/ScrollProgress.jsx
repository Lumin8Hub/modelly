import { motion, useScroll } from "framer-motion";

// A 2px signal bar at the very top of the viewport, above the navigation, so it
// stays visible when the nav hides on scroll down. See 05 §2.4.
//
// Kept under reduced motion: it is a position indicator, not decoration.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-signal"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
