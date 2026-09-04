import { Calendar, CalendarClock, CalendarRange, Layers, ListChecks, Table2, Workflow } from "lucide-react";

export const home = {
  hero: {
    eyebrow: "PLANNING · FORECASTING · REPORTING · PROCESS",
    title: "Less time producing information.\nMore time using it.",
    body: "Most finance teams spend about 80% of their week preparing information and 20% acting on it. We build the planning, forecasting and reporting systems that flip that ratio, using the Microsoft 365 or Google Workspace tools your team already has.",
    trust: "Two CPAs and a marketing lead. Forty years in finance between them. The people who sell you the work are the people who do it.",
  },
  outcomes: [
    {
      title: "A close that fits inside the week",
      body: "Month-end stops eating weekends. Budget and forecast cycles run to a schedule instead of a scramble.",
      details: ["variance analysis without rebuilding formulas", "scenarios switched from a drop-down, not a new file", "errors and missing formulas flagged as you work", "charts and reporting packs that rebuild themselves"],
      icon: Calendar,
    },
    { title: "Decisions on current numbers", body: "Change an input, see the result. No week-long rebuild in between.", icon: Workflow },
    { title: "Fewer errors, less rework", body: "The manual steps that used to break things are gone. What is left checks itself.", icon: Layers },
    { title: "Audit-ready by default", body: "Controls designed in from the start, documented, and easy to evidence when someone asks.", icon: ListChecks },
    { title: "A finance team that grows", body: "People move from producing reports to reading them. That is also how you keep them.", icon: Table2 },
  ],
  pillarsIntro: "You cannot write reliable controls without knowing what the systems can and cannot do. You cannot build a model that survives without both. And none of it stays current on its own. Most firms sell one of the four. We work across all of them, because that is the only way the end result holds.",
  toolkitIntro: "Rebuilding how a team works is a change project, and change projects fail in predictable ways. These six keep every Modelly engagement honest.",
  tools: [
    { name: "Charter", slug: "charter", body: "Purpose, scope, stakeholders and ground rules, agreed before anything gets built.", icon: ListChecks },
    { name: "RAID.DAR", slug: "raid-dar", body: "Risks, assumptions, issues and dependencies, each with a decision, an action and an owner.", icon: Workflow },
    { name: "RASCIX+", slug: "rascix", body: "Who is responsible, who approves, who is consulted, who is informed. Kept current, per step.", icon: Layers },
    { name: "Requirements Matrix", slug: "requirements-matrix", body: "Every requirement captured, prioritised and traced from request to delivery.", icon: Table2, draft: true },
    { name: "Work Plan", slug: "work-plan", body: "Tasks and milestones with owners, and dates that move when reality does.", icon: CalendarRange },
    { name: "Workback Schedule", slug: "workback-schedule", body: "Start from the deadline and work backwards, so every step protects it.", icon: CalendarClock, draft: true },
  ],
};
