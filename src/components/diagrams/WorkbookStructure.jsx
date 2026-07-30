import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// IMG-07. A schematic of a single worksheet: input, framework, calculation and
// output regions. A diagram of a structure, not a picture of a spreadsheet —
// abstract enough that nobody mistakes it for a screenshot, specific enough that
// a finance person recognises the pattern. See 06-image-brief.md §7.
//
// Regions fade in in reading order, 80ms apart.
const REGIONS = [
  { label: "INPUTS", x: 40, y: 64, w: 220, h: 168, rows: 5 },
  { label: "FRAMEWORK", x: 292, y: 64, w: 568, h: 168, rows: 5, columns: 4 },
  { label: "CALCULATION", x: 40, y: 264, w: 472, h: 200, rows: 6 },
  { label: "OUTPUT", x: 544, y: 264, w: 316, h: 200, chart: true },
];

const BARS = [
  { x: 588, h: 54 },
  { x: 630, h: 88 },
  { x: 672, h: 40 },
  { x: 714, h: 104 },
  { x: 756, h: 72 },
  { x: 798, h: 92 },
];

export function WorkbookStructure({ theme = "light", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();

  const isDark = theme === "dark";
  const stroke = isDark ? "#22252A" : "#E2E2DC";
  const muted = isDark ? "#A0A099" : "#55554F";
  const signal = isDark ? "#5EC8BC" : "#0F766A";
  const caution = "#E0A32E";

  const animate = !reduce && inView;

  return (
    <svg
      ref={ref}
      viewBox="0 0 900 520"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Schematic of a single worksheet showing input, framework, calculation and output regions."
    >
      {REGIONS.map((region, i) => (
        <motion.g
          key={region.label}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={animate ? { opacity: 1 } : undefined}
          transition={{ duration: 0.4, ease: EASE.out, delay: i * 0.08 }}
        >
          <text
            x={region.x}
            y={region.y - 12}
            fill={muted}
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="12"
            letterSpacing="0.5"
          >
            {region.label}
          </text>
          <rect
            x={region.x}
            y={region.y}
            width={region.w}
            height={region.h}
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
          />

          {/* Input cells carry the caution tint; everything computed is signal.
              This mirrors the cell-style argument in the copy. */}
          {region.rows
            ? Array.from({ length: region.rows }, (_, row) => {
                const rowY = region.y + 18 + row * ((region.h - 28) / region.rows);
                return (
                  <line
                    key={row}
                    x1={region.x + 16}
                    y1={rowY}
                    x2={region.x + region.w - 16}
                    y2={rowY}
                    stroke={region.label === "INPUTS" ? caution : signal}
                    strokeOpacity={region.label === "INPUTS" ? 0.55 : 0.4}
                    strokeWidth="6"
                  />
                );
              })
            : null}

          {region.columns
            ? Array.from({ length: region.columns - 1 }, (_, col) => {
                const colX = region.x + ((col + 1) * region.w) / region.columns;
                return (
                  <line
                    key={`c-${col}`}
                    x1={colX}
                    y1={region.y}
                    x2={colX}
                    y2={region.y + region.h}
                    stroke={stroke}
                    strokeWidth="1"
                  />
                );
              })
            : null}

          {region.chart
            ? BARS.map((bar) => (
                <rect
                  key={bar.x}
                  x={bar.x}
                  y={region.y + region.h - 24 - bar.h}
                  width="24"
                  height={bar.h}
                  fill={signal}
                  fillOpacity="0.65"
                />
              ))
            : null}
        </motion.g>
      ))}
    </svg>
  );
}
