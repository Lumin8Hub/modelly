import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// IMG-06. Four stacked bands, widest at the base, narrowing upward so the shape
// reads as a foundation. The point of the diagram is the ORDER: skipping a layer
// means the one above inherits the problem. See 06-image-brief.md §6.
//
// Bands are listed bottom-up and drawn bottom-up, 90ms apart.
const BANDS = [
  { n: "01", title: "Systems", y: 372, width: 720, intensity: 0.28 },
  { n: "02", title: "Process and controls", y: 268, width: 640, intensity: 0.46 },
  { n: "03", title: "Models", y: 164, width: 560, intensity: 0.68 },
  { n: "04", title: "AI integration", y: 60, width: 480, intensity: 1 },
];

const BAND_HEIGHT = 88;

export function DeliveryLayersDiagram({ theme = "light", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();

  const isDark = theme === "dark";
  const stroke = isDark ? "#22252A" : "#E2E2DC";
  const text = isDark ? "#F5F5F0" : "#0B0C0E";
  const muted = isDark ? "#A0A099" : "#55554F";
  const signal = isDark ? "#5EC8BC" : "#0F766A";

  const animate = !reduce && inView;

  return (
    <svg
      ref={ref}
      viewBox="0 0 800 480"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Four stacked delivery layers, from systems at the base through process and controls, models, and AI integration at the top."
    >
      {BANDS.map((band, i) => {
        const x = (800 - band.width) / 2;
        // Drawn bottom-up: the base band animates first.
        const delay = (BANDS.length - 1 - i) * 0.09;

        return (
          <motion.g
            key={band.n}
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, ease: EASE.out, delay }}
          >
            <rect
              x={x}
              y={band.y}
              width={band.width}
              height={BAND_HEIGHT}
              fill={signal}
              fillOpacity={band.intensity * 0.1}
              stroke={stroke}
              strokeWidth="1"
            />
            <text
              x={x + 28}
              y={band.y + 52}
              fill={muted}
              fontFamily="JetBrains Mono, ui-monospace, monospace"
              fontSize="12"
              letterSpacing="0.5"
            >
              {band.n}
            </text>
            <text
              x={x + 72}
              y={band.y + 53}
              fill={text}
              fontFamily="Inter Tight, system-ui, sans-serif"
              fontSize="22"
              fontWeight="500"
              letterSpacing="-0.4"
            >
              {band.title}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
