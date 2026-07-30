// Copy deck §2.5, all six from Question 25. No pricing anywhere —
// Question 24: "No — pricing is always custom."
export const ENGAGEMENT_FORMATS = [
  {
    title: "Diagnostic",
    body: "A structured review of how your planning, reporting and close run today, with the gaps named and ordered by what they cost you.",
  },
  {
    title: "Fixed-scope project",
    body: "A defined deliverable, a defined price, a defined end date.",
  },
  {
    title: "Model build",
    body: "One model, built and handed over, with documentation and training included.",
  },
  {
    title: "Model audit",
    body: "A health check on a model you already depend on. What is fragile, what is already wrong, and what to fix first.",
  },
  {
    title: "Advisory retainer",
    body: "Ongoing access for a team doing the work themselves and wanting a second opinion before they commit to a structure.",
  },
  {
    title: "Training",
    body: "Your team learns to build and extend what we built. Most clients take this, and it is the point.",
  },
];

// Copy deck §2.6, from Question 23.
export const FIRST_ENGAGEMENT = {
  body: "A review of how your planning, forecasting, reporting and adjacent workflows run today, followed by the build. Four to eight weeks, depending on how complex the business is and how ready the data is.",
  deliverables: [
    "A review of your current processes and controls",
    "An inventory of every model your team depends on, with the risks and gaps in each one named",
    "A gap analysis across reporting and forecasting",
    "Model architecture, then the build",
    "A budgeting and forecasting framework",
    "Reporting templates and dashboards",
    "Recommendations on workflow",
    "Onboarding and implementation support for your team",
    "A working method for using AI to keep the model and the process current",
  ],
  pricingNote:
    "We do not publish prices. Scope varies enough between a two-week model audit and an eight-week rebuild that a range would mislead you more than it would help. We quote after the diagnostic, before any work starts.",
};
