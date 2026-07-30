import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// IMG-04. Eleven scattered files on the left, one structured workbook on the
// right. Makes the argument visually without pretending to be a product
// screenshot, which means it cannot be wrong. See 06-image-brief.md §4.

// Eleven rectangles at slight angles. One is tinted `before`.
const FILES = [
  { x: 40, y: 96, r: -7 },
  { x: 116, y: 62, r: 5 },
  { x: 196, y: 88, r: -3 },
  { x: 60, y: 168, r: 8, broken: true },
  { x: 140, y: 142, r: -5 },
  { x: 218, y: 166, r: 6 },
  { x: 34, y: 244, r: 4 },
  { x: 112, y: 222, r: -8 },
  { x: 194, y: 248, r: 3 },
  { x: 76, y: 310, r: -4 },
  { x: 166, y: 322, r: 7 },
];

// Five clean internal divisions in the single workbook.
const DIVISIONS = [118, 172, 226, 280];

export function FilesToWorkbook({ theme = "light", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();

  const isDark = theme === "dark";
  const line = isDark ? "#22252A" : "#E2E2DC";
  const label = isDark ? "#A0A099" : "#55554F";
  const good = isDark ? "#5EC8BC" : "#0F766A";
  const broken = "#C4453F";

  const animate = !reduce && inView;

  return (
    <svg
      ref={ref}
      viewBox="0 0 800 420"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Eleven scattered spreadsheet files on the left; one structured workbook on the right."
    >
      {/* Left: eleven files, drifting 4px toward each other as they fade in. */}
      {FILES.map((file, i) => (
        <motion.rect
          key={`${file.x}-${file.y}`}
          x={file.x}
          y={file.y}
          width="64"
          height="46"
          fill="none"
          stroke={file.broken ? broken : line}
          strokeWidth="1.5"
          transform={`rotate(${file.r} ${file.x + 32} ${file.y + 23})`}
          initial={reduce ? undefined : { opacity: 0, x: file.x < 130 ? -4 : 4 }}
          animate={animate ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE.out, delay: i * 0.03 }}
        />
      ))}

      {/* Three thin connector lines crossing each other. */}
      <g stroke={line} strokeWidth="1" opacity="0.7">
        <line x1="72" y1="119" x2="258" y2="271" />
        <line x1="258" y1="85" x2="92" y2="333" />
        <line x1="66" y1="267" x2="230" y2="189" />
      </g>

      {/* Right: one larger rectangle, aligned to the grid, drawing its border. */}
      <motion.rect
        x="452"
        y="64"
        width="308"
        height="292"
        fill="none"
        stroke={good}
        strokeWidth="1.5"
        initial={reduce ? undefined : { pathLength: 0 }}
        animate={animate ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.7, ease: EASE.out }}
      />
      <g stroke={good} strokeWidth="1" opacity="0.5">
        {DIVISIONS.map((y) => (
          <line key={y} x1="452" y1={y} x2="760" y2={y} />
        ))}
      </g>

      <text
        x="40"
        y="392"
        fill={label}
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize="12"
        letterSpacing="0.5"
      >
        ELEVEN FILES
      </text>
      <text
        x="452"
        y="392"
        fill={label}
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize="12"
        letterSpacing="0.5"
      >
        ONE WORKBOOK
      </text>
    </svg>
  );
}
