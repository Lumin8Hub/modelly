// =============================================================================
// Modelly — One-Page Marketing Site
// =============================================================================
// Single-file React component. Built for Vite + React + Tailwind CSS + Framer
// Motion + lucide-react. See design.md for the design system this implements
// and instructions.md for setup steps.
//
// All `CUSTOMIZE:` markers indicate places where a Claude Code agent (or a
// human developer) must swap in real client-supplied content, assets, or
// copy. Search the file for "CUSTOMIZE" to find every one.
// =============================================================================

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Gauge,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  ArrowRight,
  ArrowDown,
  Check,
  X,
  Layers,
  Workflow,
  ListChecks,
  GanttChart,
} from "lucide-react";

// =============================================================================
// Design tokens (mirror of design.md §2)
// =============================================================================
const COLORS = {
  ink: "#0A0B0D",
  inkSoft: "#1A1C20",
  paper: "#FAFAF7",
  paperElevated: "#F2F2EE",
  rule: "#E5E5E0",
  textMuted: "#6B6B66",
  textInverse: "#F5F5F0",
  teal: "#5DB5AE",
  amber: "#F4C04E",
  coral: "#E5546B",
};

// =============================================================================
// Pillar definitions (used in Triad section + referenced elsewhere)
// =============================================================================
const PILLARS = [
  {
    id: "systems",
    number: "01",
    title: "Systems Governance",
    accent: COLORS.teal,
    summary:
      "Effective controls and processes to optimise the IT systems your finance team depends on.",
    bullets: [
      "Evaluate financial systems (ERP, CRM, EPM, FSS, EDW)",
      "Assess and recommend system controls",
      "Implement workflow and approval enhancements",
      "Integrate multi-source data through Excel",
      "Design data cubes, hierarchies, and dashboards",
    ],
  },
  {
    id: "accounting",
    number: "02",
    title: "Accounting Governance",
    accent: COLORS.amber,
    summary:
      "Preventive, detective, and corrective controls for the people and processes behind the numbers.",
    bullets: [
      "Evaluate and streamline accounting processes",
      "Automate manual data and reconciliation work",
      "Implement RASCI-based responsibility frameworks",
      "Institutionalise periodic health checks",
      "Audit internal control systems for risk and compliance",
    ],
  },
  {
    id: "model",
    number: "03",
    title: "Model Governance",
    accent: COLORS.coral,
    summary:
      "A custom-built, copyrighted Excel framework for FP&A, business cases, and operational models. No macros. No VBA.",
    bullets: [
      "Comprehensive out-of-the-box Excel model",
      "Real-time forecasts and budgets",
      "Automated trend and variance analysis",
      "One workbook, one worksheet, multiple scenarios",
      "Framework-based — controls formulas, format, and charts centrally",
    ],
  },
];

// =============================================================================
// The 5 F's (framework section)
// =============================================================================
const FIVE_FS = [
  {
    n: "F1",
    word: "Foundation",
    def: "The groundwork that gives every model stability and supports everything built on top.",
    use: "Sets the standards every Modelly model is measured against — naming conventions, version control, documentation, model details summary.",
  },
  {
    n: "F2",
    word: "Framework",
    def: "A relational structure with customisable tables and helper rows that lets you build dynamic models on the fly.",
    use: "Single workbook, single worksheet. Add scenarios, periods, and line items without restructuring the model.",
  },
  {
    n: "F3",
    word: "Functions",
    def: "Up-to-date Excel formulas — LET, FILTER, UNIQUE, INDEX/MATCH — used to maximise efficiency and accuracy.",
    use: "Centrally controlled formulas via Named Ranges. Update one definition; the whole model updates with it.",
  },
  {
    n: "F4",
    word: "Features",
    def: "Native Excel capabilities — Tables, Power Query, Power Pivot, Named Functions — used the way they were intended.",
    use: "No macros. No VBA. No security flags. Models that open clean on locked-down corporate machines.",
  },
  {
    n: "F5",
    word: "Format",
    def: "Colours, fonts, borders, and arrangement, controlled centrally through Cell Styles and Conditional Formatting.",
    use: "Twenty-plus colour presets. Toggle between modelling and presentation modes. Number formats locked by measure type.",
  },
];

// =============================================================================
// The 5 C's (process flow)
// =============================================================================
const FIVE_CS = [
  { n: "C1", pair: "Collect & Consolidate", body: "Pull raw data and inputs from every source." },
  { n: "C2", pair: "Control & Configure", body: "Apply rules, structure, and governance." },
  { n: "C3", pair: "Cleanse & Convert", body: "Standardise, transform, validate." },
  { n: "C4", pair: "Check & Correct", body: "Catch errors, fill gaps, fix inconsistencies." },
  { n: "C5", pair: "Consume & Circulate", body: "Analyse outputs and distribute insights." },
];

// =============================================================================
// Outcomes (bento grid)
// =============================================================================
const OUTCOMES = [
  {
    icon: Calendar,
    title: "Accelerate the close",
    body: "Streamlined budget and forecast process. Month-end in hours, not days.",
    feature: true,
  },
  {
    icon: Gauge,
    title: "Agile decisions",
    body: "Real-time updates that reflect the business as it is now.",
  },
  {
    icon: TrendingDown,
    title: "Less time, fewer errors",
    body: "Automated tasks replace the manual work that used to break things.",
  },
  {
    icon: ShieldCheck,
    title: "Minimised risk",
    body: "Robust internal control frameworks designed for audit readiness.",
  },
  {
    icon: Sparkles,
    title: "Clearer business view",
    body: "Complex data transformed into reports leadership actually uses.",
  },
];

// =============================================================================
// Pain → Solution (deck-derived)
// =============================================================================
const PAIN_SOLUTION = [
  {
    pain: "Variance analysis means rebuilding formulas every period.",
    fix: "Drop-down selectors for periods and scenarios. Rate, volume, and mix variance built in.",
  },
  {
    pain: "Multiple files and worksheets to manage scenarios — and they drift apart.",
    fix: "Every scenario, every period, on a single worksheet. Cross-references stay intact.",
  },
  {
    pain: "No way to tell which cells are inputs and which are formulas.",
    fix: "Cell Styles classify every cell by purpose. Trace and troubleshoot in seconds.",
  },
  {
    pain: "Errors and missing formulas hide until they bite at month-end.",
    fix: "Built-in error detection and missing-formula highlighter flag issues automatically.",
  },
  {
    pain: "Number formats drift across rows. ARPU shows up as $12.34 and $12.345 in the same model.",
    fix: "Number formats locked centrally by measure type. Override line-by-line when you need to.",
  },
  {
    pain: "Charts and rubrics for presentations get rebuilt by hand every month.",
    fix: "Integrated dynamic charting — single, combo, and waterfall — pulls from the model on demand.",
  },
];

// =============================================================================
// Project tools (xP&A Excel toolkit)
// =============================================================================
const PM_TOOLS = [
  {
    icon: ListChecks,
    title: "Charter",
    body: "Project kickoff document — purpose, goals, scope, stakeholders, and ground rules. Shareable and reusable.",
  },
  {
    icon: Layers,
    title: "RASCI+",
    body: "Roles and responsibilities matrix. Who's responsible, who approves, who's consulted. Flexible and easy to update.",
  },
  {
    icon: Workflow,
    title: "RAID.DAR",
    body: "Risks, assumptions, issues, dependencies — plus decision, action, and repair. Issue tracking with teeth.",
  },
  {
    icon: GanttChart,
    title: "GANTT",
    body: "Task and milestone tracking with auto-calculated bars. Add or remove items without breaking the chart.",
  },
];

// =============================================================================
// The four-metric stat strip and the past-employer logo strip that used to live
// here have been removed, and must not be reinstated without the client.
//
// The metrics (40+, $2.5B, 4–6 hrs, $80M) are accurate but were earned at past
// employers, and a company statistics band presents them as Modelly's own track
// record. They survive in Fabio's and Jennifer's bios below, where they are
// attributed to a named person and are therefore a factual claim about that
// person. The logo strip named six companies whose permission table came back
// blank; the client selected industry categories as the fallback, which is what
// renders in its place.
// =============================================================================

// =============================================================================
// Reusable section wrapper — the eyebrow rhythm from design.md §7
// =============================================================================
function SectionHeader({ number, total = "09", eyebrow, theme = "light" }) {
  const text = theme === "light" ? COLORS.ink : COLORS.textInverse;
  const rule = theme === "light" ? COLORS.rule : "#2A2C30";
  return (
    <div
      className="flex items-center gap-4 mb-12 text-xs"
      style={{ color: text, fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span style={{ letterSpacing: "0.04em" }}>{`${number} / ${total}`}</span>
      <span className="flex-1 h-px" style={{ backgroundColor: rule }} />
      <span
        className="uppercase"
        style={{
          letterSpacing: "0.18em",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: "11px",
        }}
      >
        {eyebrow}
      </span>
    </div>
  );
}

// =============================================================================
// Connector motif — the rounded-square + dot + line graphic from the logo
// Used as ambient hero ornament and as the small mark above the Triad.
// =============================================================================
function ConnectorMotif({ size = 480, color = COLORS.paper, opacity = 0.06 }) {
  // Three rounded squares (top, bottom-left, bottom-right) connected at a
  // central node. Single color, no fill differentiation.
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.5" fill="none">
        {/* central node */}
        <circle cx="100" cy="100" r="3" fill={color} />
        {/* connecting lines */}
        <line x1="100" y1="100" x2="100" y2="40" />
        <line x1="100" y1="100" x2="50" y2="150" />
        <line x1="100" y1="100" x2="150" y2="150" />
        {/* top square */}
        <rect x="80" y="20" width="40" height="40" rx="10" />
        <circle cx="100" cy="40" r="2.5" fill={color} />
        {/* bottom-left square */}
        <rect x="30" y="130" width="40" height="40" rx="10" />
        <circle cx="50" cy="150" r="2.5" fill={color} />
        {/* bottom-right square */}
        <rect x="130" y="130" width="40" height="40" rx="10" />
        <circle cx="150" cy="150" r="2.5" fill={color} />
      </g>
    </svg>
  );
}

// =============================================================================
// Triad mark — the same motif but each square tinted with its pillar accent.
// Used once, above the Triad section header. The only place all three accent
// colors appear in close proximity outside the logo.
// =============================================================================
function TriadMark({ size = 96 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
      <g stroke={COLORS.ink} strokeWidth="1.5" fill="none">
        <circle cx="100" cy="100" r="3" fill={COLORS.ink} />
        <line x1="100" y1="100" x2="100" y2="40" />
        <line x1="100" y1="100" x2="50" y2="150" />
        <line x1="100" y1="100" x2="150" y2="150" />
      </g>
      <rect x="80" y="20" width="40" height="40" rx="10" fill={COLORS.teal} stroke={COLORS.ink} strokeWidth="1.5" />
      <rect x="30" y="130" width="40" height="40" rx="10" fill={COLORS.amber} stroke={COLORS.ink} strokeWidth="1.5" />
      <rect x="130" y="130" width="40" height="40" rx="10" fill={COLORS.coral} stroke={COLORS.ink} strokeWidth="1.5" />
      <circle cx="100" cy="40" r="2.5" fill={COLORS.ink} />
      <circle cx="50" cy="150" r="2.5" fill={COLORS.ink} />
      <circle cx="150" cy="150" r="2.5" fill={COLORS.ink} />
    </svg>
  );
}

// =============================================================================
// Monogram — stands in for a principal's headshot until the shoot happens.
//
// Replaces the two grey "CUSTOMIZE: HEADSHOT" boxes that were rendering in
// production. Initials read as a deliberate treatment; a placeholder label reads
// as an unfinished site. When photography arrives, swap the inner text for an
// <img> and nothing around it changes.
// =============================================================================
function Monogram({ initials }) {
  return (
    <div
      className="mb-6 aspect-square flex items-center justify-center"
      style={{
        backgroundColor: COLORS.paperElevated,
        border: `1px solid ${COLORS.rule}`,
        borderBottom: `2px solid ${COLORS.teal}`,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 400,
          fontSize: "96px",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: COLORS.textMuted,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

// =============================================================================
// Reveal — tiny utility wrapper for fade+rise on scroll-into-view
// =============================================================================
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// Buttons
// =============================================================================
function PrimaryButton({ children, href = "#contact", inverse = false }) {
  const bg = inverse ? COLORS.paper : COLORS.ink;
  const fg = inverse ? COLORS.ink : COLORS.paper;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-transform"
      style={{
        backgroundColor: bg,
        color: fg,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        letterSpacing: "0.01em",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {children}
      <ArrowRight size={16} strokeWidth={1.75} />
    </a>
  );
}

// =============================================================================
// SECTION 01 — HERO
// =============================================================================
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        backgroundColor: COLORS.ink,
        color: COLORS.textInverse,
        minHeight: "92vh",
      }}
    >
      {/* Ambient connector motif, slow rotation */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ right: "-80px", top: "50%", transform: "translateY(-50%)" }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        <ConnectorMotif size={680} color={COLORS.paper} opacity={0.045} />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 pb-24 md:pt-32 md:pb-40 relative">
        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            fontSize: "20px",
          }}
        >
          modelly
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 text-xs uppercase"
          style={{
            color: COLORS.textInverse,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.18em",
            opacity: 0.75,
          }}
        >
          FP&A · Systems · Accounting · Models
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[18ch]"
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 144',
          }}
        >
          Accelerate month-end &amp; financial planning.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[58ch]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 1.6vw, 22px)",
            lineHeight: 1.5,
            color: COLORS.textInverse,
            opacity: 0.82,
          }}
        >
          Modelly helps finance teams simplify systems, tighten controls, and replace
          fragile spreadsheets with one rigorous model. Built by two CPAs with forty
          years inside enterprise FP&amp;A.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          <PrimaryButton href="#contact" inverse>
            Schedule a discovery session
          </PrimaryButton>
          <a
            href="#outcomes"
            className="inline-flex items-center gap-2 text-sm pb-1 border-b"
            style={{
              borderColor: COLORS.textInverse,
              color: COLORS.textInverse,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              opacity: 0.85,
            }}
          >
            See how it works
            <ArrowDown size={14} strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 02 — OUTCOMES (bento grid)
// =============================================================================
function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="02" eyebrow="What changes" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {OUTCOMES.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal
                key={o.title}
                delay={i * 0.06}
                className={
                  o.feature
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }
              >
                <div
                  className="h-full p-8 md:p-10 transition-colors duration-200 group"
                  style={{
                    backgroundColor: COLORS.paperElevated,
                    minHeight: o.feature ? "320px" : "200px",
                  }}
                >
                  <Icon size={28} strokeWidth={1.5} style={{ color: COLORS.ink }} />
                  <h3
                    className="mt-8"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 400,
                      fontSize: o.feature ? "clamp(28px, 3vw, 40px)" : "22px",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {o.title}
                  </h3>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: COLORS.textMuted,
                      fontSize: o.feature ? "17px" : "15px",
                      lineHeight: 1.55,
                      maxWidth: "42ch",
                    }}
                  >
                    {o.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 03 — THE TRIAD
// =============================================================================
function Triad() {
  const [hovered, setHovered] = useState(null);
  return (
    <section
      id="services"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="03" eyebrow="The triad" />

        {/* Triad mark */}
        <div className="flex justify-center mb-12">
          <Reveal>
            <TriadMark size={88} />
          </Reveal>
        </div>

        {/* Headline */}
        <Reveal>
          <h2
            className="text-center max-w-[20ch] mx-auto mb-20"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            Three pillars. <em style={{ fontWeight: 300 }}>One discipline.</em>
          </h2>
        </Reveal>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((p, i) => {
            const dimmed =
              hovered !== null && hovered !== p.id ? 0.4 : 1;
            return (
              <Reveal key={p.id} delay={i * 0.12}>
                <div
                  className="relative pl-6 transition-opacity duration-300 cursor-default"
                  style={{ opacity: dimmed }}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Accent vertical bar */}
                  <span
                    className="absolute left-0 top-0 w-1 h-full"
                    style={{ backgroundColor: p.accent }}
                    aria-hidden="true"
                  />

                  <div
                    className="text-xs mb-3"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: COLORS.textMuted,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.number} — {p.title.split(" ")[0]}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 400,
                      fontSize: "28px",
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "17px",
                      lineHeight: 1.55,
                      color: COLORS.ink,
                    }}
                  >
                    {p.summary}
                  </p>

                  <div
                    className="mt-8 pt-6 text-xs uppercase"
                    style={{
                      borderTop: `1px solid ${COLORS.rule}`,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      color: COLORS.textMuted,
                    }}
                  >
                    Where we help
                  </div>

                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "15px",
                          lineHeight: 1.5,
                          color: COLORS.ink,
                        }}
                      >
                        <span
                          className="mt-2 flex-shrink-0 rounded-full"
                          style={{
                            width: 4,
                            height: 4,
                            backgroundColor: p.accent,
                          }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 04 — THE 5 F's
// =============================================================================
function FiveFs() {
  return (
    <section
      id="framework"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="04" eyebrow="The framework" />

        <Reveal>
          <h2
            className="max-w-[18ch] mb-4"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            <em style={{ fontWeight: 300 }}>The five fundamentals</em> of Excel modelling.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="max-w-[60ch] mb-16"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "18px",
              lineHeight: 1.55,
              color: COLORS.textMuted,
            }}
          >
            Every Modelly model rests on the same five layers. Get any one wrong and the
            whole thing leaks. Get them all right and your team can take month-end off.
          </p>
        </Reveal>

        <div className="space-y-0">
          {FIVE_FS.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.06}>
              <div
                className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-start"
                style={{
                  borderTop: i === 0 ? `1px solid ${COLORS.rule}` : "none",
                  borderBottom: `1px solid ${COLORS.rule}`,
                  backgroundColor: i % 2 === 1 ? COLORS.paperElevated : "transparent",
                  paddingLeft: i % 2 === 1 ? "16px" : "0",
                  paddingRight: i % 2 === 1 ? "16px" : "0",
                }}
              >
                <div
                  className="col-span-2 md:col-span-1"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "14px",
                    color: COLORS.textMuted,
                    letterSpacing: "0.04em",
                    paddingTop: "8px",
                  }}
                >
                  {f.n}
                </div>
                <div className="col-span-10 md:col-span-3">
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "clamp(28px, 3.5vw, 44px)",
                      lineHeight: 1,
                      letterSpacing: "-0.015em",
                      fontVariationSettings: '"opsz" 144',
                    }}
                  >
                    {f.word}
                  </h3>
                </div>
                <div
                  className="col-span-12 md:col-span-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.55,
                    color: COLORS.ink,
                  }}
                >
                  {f.def}
                </div>
                <div
                  className="col-span-12 md:col-span-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.55,
                    color: COLORS.textMuted,
                  }}
                >
                  <span
                    className="block uppercase mb-2"
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      color: COLORS.ink,
                    }}
                  >
                    What we build with it
                  </span>
                  {f.use}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 05 — THE 5 C's (process flow)
// =============================================================================
function FiveCs() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-150px" });

  return (
    <section
      id="construct"
      style={{ backgroundColor: COLORS.inkSoft, color: COLORS.textInverse }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="05" eyebrow="The construct" theme="dark" />

        <Reveal>
          <h2
            className="max-w-[22ch] mb-16"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            <em style={{ fontWeight: 300 }}>The five C's</em> — how data becomes a decision.
          </h2>
        </Reveal>

        {/* Desktop: horizontal flow */}
        <div ref={containerRef} className="hidden md:block relative mt-24">
          {/* Animated baseline */}
          <div
            className="absolute left-0 right-0 h-px"
            style={{
              backgroundColor: "rgba(245,245,240,0.18)",
              top: "32px",
            }}
          />
          <motion.div
            className="absolute left-0 h-px origin-left"
            style={{
              backgroundColor: COLORS.textInverse,
              top: "32px",
            }}
            initial={{ scaleX: 0, width: "100%" }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          <div className="grid grid-cols-5 gap-6 relative">
            {FIVE_CS.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.18 }}
              >
                <div
                  className="rounded-full flex items-center justify-center mb-6"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: COLORS.inkSoft,
                    border: `1px solid ${COLORS.textInverse}`,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {c.n}
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: 1.3,
                    marginBottom: "8px",
                  }}
                >
                  {c.pair}
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    opacity: 0.7,
                  }}
                >
                  {c.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-12 space-y-8 relative">
          <div
            className="absolute left-8 top-2 bottom-2 w-px"
            style={{ backgroundColor: "rgba(245,245,240,0.18)" }}
          />
          {FIVE_CS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="flex gap-6 items-start relative">
                <div
                  className="rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: COLORS.inkSoft,
                    border: `1px solid ${COLORS.textInverse}`,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "16px",
                  }}
                >
                  {c.n}
                </div>
                <div className="pt-3">
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "17px",
                      marginBottom: "6px",
                    }}
                  >
                    {c.pair}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.5,
                      opacity: 0.7,
                    }}
                  >
                    {c.body}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 06 — PAIN → SOLUTION
// =============================================================================
function PainSolution() {
  return (
    <section
      id="pain-solution"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="06" eyebrow="What changes in your spreadsheets" />

        <Reveal>
          <h2
            className="max-w-[20ch] mb-16"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            <em style={{ fontWeight: 300 }}>Six things</em> your team stops doing manually.
          </h2>
        </Reveal>

        <div
          className="hidden md:grid grid-cols-12 gap-8 pb-6 mb-2 uppercase"
          style={{
            borderBottom: `1px solid ${COLORS.rule}`,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: COLORS.textMuted,
          }}
        >
          <div className="col-span-6">Today, in your spreadsheets</div>
          <div className="col-span-6">With Modelly</div>
        </div>

        <div className="space-y-0">
          {PAIN_SOLUTION.map((row, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-start"
                style={{ borderBottom: `1px solid ${COLORS.rule}` }}
              >
                <div
                  className="col-span-1 md:col-span-6 flex gap-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.5,
                    color: COLORS.textMuted,
                  }}
                >
                  <X
                    size={18}
                    strokeWidth={1.5}
                    className="flex-shrink-0 mt-1"
                    style={{ color: COLORS.textMuted }}
                  />
                  <span style={{ textDecoration: "line-through", textDecorationColor: COLORS.rule }}>
                    {row.pain}
                  </span>
                </div>
                <div
                  className="col-span-1 md:col-span-6 flex gap-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.5,
                    color: COLORS.ink,
                  }}
                >
                  <Check
                    size={18}
                    strokeWidth={2}
                    className="flex-shrink-0 mt-1"
                    style={{ color: COLORS.coral }}
                  />
                  <span>{row.fix}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 07 — PROJECT TOOLS
// =============================================================================
function ProjectTools() {
  return (
    <section
      id="project-tools"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="07" eyebrow="The xP&A toolkit" />

        <Reveal>
          <h2
            className="max-w-[22ch] mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            <em style={{ fontWeight: 300 }}>Project management</em>, built in the same Excel your team already uses.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="max-w-[60ch] mb-16"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "18px",
              lineHeight: 1.55,
              color: COLORS.textMuted,
            }}
          >
            Designed at Rogers and refined across a dozen finance organisations. Four
            tools that travel with every Modelly engagement.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PM_TOOLS.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 0.08}>
                <div
                  className="p-8 md:p-10 h-full transition-colors"
                  style={{
                    backgroundColor: COLORS.paperElevated,
                    minHeight: "200px",
                  }}
                >
                  <Icon size={28} strokeWidth={1.5} style={{ color: COLORS.ink }} />
                  <h3
                    className="mt-6"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 400,
                      fontSize: "26px",
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "16px",
                      lineHeight: 1.55,
                      color: COLORS.textMuted,
                    }}
                  >
                    {t.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 08 — TEAM & TRACK RECORD
// =============================================================================
function TeamTrackRecord() {
  return (
    <section
      id="team"
      style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <SectionHeader number="08" eyebrow="The team & the track record" />

        <Reveal>
          <h2
            className="max-w-[18ch] mb-20"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            <em style={{ fontWeight: 300 }}>Forty years</em> inside enterprise FP&A.
          </h2>
        </Reveal>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Fabio */}
          <Reveal>
            <div>
              {/* Monogram tile. Swap the initials for an <img> when the headshot
                  session happens; nothing else in this card changes. */}
              <Monogram initials="FC" />
              <div
                className="text-xs uppercase mb-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: COLORS.textMuted,
                  letterSpacing: "0.04em",
                }}
              >
                CO-FOUNDER · CPA, CA
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 400,
                  fontSize: "32px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Fabio Ciampa
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.55,
                  color: COLORS.ink,
                }}
              >
                Led the only revenue team at Rogers to achieve SOX compliance on $2.5B
                in revenue, with a top-performing month-end close in four to six hours.
                Designed major components of the EPC and customer reporting structures
                for AMDOCS Telco billing — used internationally.
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  color: COLORS.textMuted,
                }}
              >
                FP&A for revenue, COGs, and product development · Revenue assurance and
                billing system security · Financial systems and operations · Complex
                data engineering.
              </p>
            </div>
          </Reveal>

          {/* Jennifer */}
          <Reveal delay={0.1}>
            <div>
              <Monogram initials="JH" />
              <div
                className="text-xs uppercase mb-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: COLORS.textMuted,
                  letterSpacing: "0.04em",
                }}
              >
                CO-FOUNDER · CPA · PSM 1
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 400,
                  fontSize: "32px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Jennifer Hui
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.55,
                  color: COLORS.ink,
                }}
              >
                Twenty-five years across telecom, retail, and consumer packaged goods.
                Shortened FP&A cycles by two to four days through automation, and
                coached squads through twenty-six successful test campaigns in nine
                months as a certified Scrum Master.
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  color: COLORS.textMuted,
                }}
              >
                FP&A for revenue, equipment, and OPEX · Subscriber reporting and
                forecasting · Big-data analytics · Marketing campaign analytics.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Trusted-by logo strip */}
        <Reveal>
          <div
            className="text-xs uppercase mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: COLORS.textMuted,
            }}
          >
            Experience built inside
          </div>
          {/* Industry categories, not company names. The client's permission
              table for past-employer logos came back blank and they selected
              categories as the fallback. Do not reinstate the wordmarks. */}
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              color: COLORS.ink,
              maxWidth: "52ch",
            }}
          >
            Telecom · Retail · Consumer packaged goods · Professional services ·
            Enterprise software
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// =============================================================================
// SECTION 09 — CTA
// =============================================================================
function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.ink, color: COLORS.textInverse }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ left: "-120px", bottom: "-120px" }}
      >
        <ConnectorMotif size={520} color={COLORS.paper} opacity={0.04} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40 relative">
        <SectionHeader number="09" eyebrow="Let's talk" theme="dark" />

        <Reveal>
          <h2
            className="max-w-[18ch] mb-8"
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(48px, 7vw, 84px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontVariationSettings: '"opsz" 144',
            }}
          >
            Ready to close faster?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="max-w-[58ch] mb-12"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "20px",
              lineHeight: 1.5,
              opacity: 0.82,
            }}
          >
            A thirty-minute discovery session. We listen, we ask the questions that
            matter, and we tell you whether Modelly is right for the work — honestly.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-8">
            {/* hello@modelly.ca is not a live mailbox yet, so both CTAs here
                used to be dead links — the worst failure available on a page
                whose only job is to start a conversation. Points at LinkedIn
                until the mailbox exists, then swap the href back. */}
            <PrimaryButton href="https://www.linkedin.com/company/modelly" inverse>
              Start a conversation
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// =============================================================================
// FOOTER
// =============================================================================
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: COLORS.inkSoft, color: COLORS.textInverse }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              letterSpacing: "-0.01em",
            }}
          >
            modelly
          </div>
          <div
            className="md:text-center"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              opacity: 0.7,
            }}
          >
            FP&A · Systems · Accounting · Models
          </div>
          <div
            className="md:text-right flex md:justify-end items-center gap-6"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              opacity: 0.7,
            }}
          >
            {/* CUSTOMIZE: Replace with the real LinkedIn URL. */}
            <a
              href="https://linkedin.com/company/modelly"
              className="inline-flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <span aria-hidden="true" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                in
              </span>
              LinkedIn
            </a>
            <span>© {year} Modelly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================================================
// ROOT APP
// =============================================================================
export default function App() {
  // Smooth-scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:px-4 focus:py-3"
        style={{
          backgroundColor: COLORS.paper,
          color: COLORS.ink,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        Skip to content
      </a>
      <main
        id="main"
        style={{
          backgroundColor: COLORS.paper,
          color: COLORS.ink,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <Hero />
        <Outcomes />
        <Triad />
        <FiveFs />
        <FiveCs />
        <PainSolution />
        <ProjectTools />
        <TeamTrackRecord />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
