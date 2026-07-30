// Copy deck §3.3.
//
// Order follows Fabio's correction in Question 38 — Functions, Features, Format,
// Framework, Foundation — which he flagged as important. The v1 site ran
// Foundation, Framework, Functions, Features, Format. Confirm before launch:
// 07-open-items.md A4. Changing it is a reorder of this array and nothing else.
export const FUNDAMENTALS = [
  {
    n: "01",
    title: "Functions",
    body: "Current spreadsheet formulas, used properly. LET, FILTER, UNIQUE, INDEX and MATCH, defined once through named ranges. Change one definition and the whole model follows.",
  },
  {
    n: "02",
    title: "Features",
    body: "Native capabilities used the way they were designed. Tables, Power Query, Power Pivot, named functions. No macros, no VBA, nothing for IT to flag.",
  },
  {
    n: "03",
    title: "Format",
    body: "Colour, type, borders and layout controlled centrally through cell styles and conditional formatting. Number formats locked by measure, so a rate cannot appear as $12.34 in one row and $12.345 in the next.",
  },
  {
    n: "04",
    title: "Framework",
    body: "A relational structure of tables and helper rows. Add a scenario, a period or a line item without rebuilding anything.",
  },
  {
    n: "05",
    title: "Foundation",
    body: "The standards underneath all of it. Naming, version control, documentation, and a summary sheet anyone can read without a handover call.",
  },
];

// Copy deck §3.2. The client's four-part delivery model. The proprietary name is
// withheld until the trademark filing is in — 07-open-items.md B1.
export const DELIVERY_LAYERS = [
  {
    n: "01",
    title: "Systems",
    body: "What the data can do, and where it breaks on the way to a report.",
  },
  {
    n: "02",
    title: "Process and controls",
    body: "How the work runs, who owns each step, and what catches an error before it reaches the board pack.",
  },
  {
    n: "03",
    title: "Models",
    body: "The build itself, to the standards in the next section.",
  },
  {
    n: "04",
    title: "AI integration",
    body: "Where a model can keep itself current, and where it should not try.",
  },
];

export const AI_LAYER_EXPANDED =
  "AI is useful here in a narrow and unglamorous way. It can draft the documentation nobody wants to write, read a process and flag the missing steps, and notice when a model's assumptions have drifted from what the business is actually doing. We set it up as an assistant to your team, inside the tools you already license. We do not hand your model to something you cannot inspect.";

// Copy deck §3.5. These are the four tools the v1 site called Charter, RASCI+,
// RAID.DAR and GANTT. The internal names return once the filing is in (07 B1).
export const PROJECT_DISCIPLINE = [
  {
    title: "Charter",
    body: "Purpose, scope, stakeholders and ground rules, agreed before anything gets built. It is also what we point at when scope starts moving.",
  },
  {
    title: "Responsibility matrix",
    body: "Who is responsible, who approves, who is consulted, who is informed. Written down and kept current, per step, not per person.",
  },
  {
    title: "Risk and issue log",
    body: "Risks, assumptions, issues and dependencies, each carrying a decision, an action and an owner. Nothing sits in the log without a name against it.",
  },
  {
    title: "Schedule",
    body: "Tasks and milestones with dates that move when reality does, rather than dates that quietly go stale.",
  },
];
