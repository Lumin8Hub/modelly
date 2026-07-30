/** @type {import('tailwindcss').Config} */
// Design tokens. See docs/revision-plan/04-design-system.md §1 and §2.
//
// Two rules the config depends on:
//   1. Colours are raw hexes, not var(). Tailwind's opacity modifiers
//      (text-ink/70) need channel values, and var() referencing a full hex
//      breaks them silently. See 04 §2.3.
//   2. fontSize tokens carry size, line-height, tracking and weight — but
//      never family. Pair them in markup: `text-display-1 font-display`.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C0E", // primary dark surface
        "ink-2": "#16181C", // elevated dark surface, footer
        "ink-3": "#22252A", // rules and borders on dark
        paper: "#FBFBF8", // primary light surface
        "paper-2": "#F1F1EC", // elevated light surface, cards
        rule: "#E2E2DC", // rules and borders on light
        text: "#0B0C0E", // body text on light — 18.9:1
        "text-muted": "#55554F", // secondary text on light — 7.3:1
        "text-faint": "#6E6E67", // 16px and above only — 4.9:1
        "text-inv": "#F5F5F0", // body text on dark — 17.4:1
        "text-inv-mut": "#A0A099", // secondary text on dark — 7.4:1
        signal: "#0F766A", // Modelly, the fixed state, the good path
        "signal-bright": "#5EC8BC", // same meaning, on dark backgrounds only
        caution: "#E0A32E", // attention, data highlight. Never as text.
        before: "#C4453F", // the current broken state. Two uses only.
      },
      fontFamily: {
        // fontsource registers the variable family as "Inter Tight Variable".
        // "Inter Tight" alone falls through to the system stack.
        display: ['"Inter Tight Variable"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": [
          "clamp(2.75rem, 6vw, 5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "500" },
        ],
        "display-2": [
          "clamp(2.25rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" },
        ],
        "display-3": [
          "clamp(1.5rem, 2.4vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        lead: [
          "clamp(1.125rem, 1.5vw, 1.375rem)",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" },
        ],
        body: ["1.0625rem", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        // `label` also needs the `uppercase` utility — casing is not a token.
        label: ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.16em", fontWeight: "600" }],
        "mono-lg": [
          "clamp(2rem, 4vw, 3.25rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "mono-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "400" }],
      },
      maxWidth: {
        container: "1200px",
        measure: "660px", // the single prose measure. See 04 §2.6.
      },
      spacing: {
        "sticky-top": "6rem", // PillarDetail pin offset, 05 §3.4
      },
    },
  },
  plugins: [],
};
