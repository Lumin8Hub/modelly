const base = `${import.meta.env.BASE_URL}images/`;

const image = (file, alt) => ({ src: `${base}${file}.webp`, alt });

export const images = {
  "home-hero": image("home-hero", "Illustration of a governed financial model with connected inputs, calculations and reporting outputs."),
  "home-pillars": image("home-pillars", "Four coloured capability tiles connected to one central discipline."),
  "enterprise-systems": image("enterprise-systems", "Three source tables converging into one controlled report, with a broken handoff highlighted."),
  "accounting-processes": image("accounting-processes", "Month-end close schedule showing owners, automated steps, manual reviews and a fixed deadline."),
  "modern-governance": image("modern-governance", "Single model sheet showing selectors, variance analysis and highlighted exceptions."),
  "modern-governance-before": image("modern-governance-before", "Several disconnected model files with inconsistent tabs and highlighted errors."),
  "modern-governance-after": image("modern-governance-after", "One governed worksheet with a style key, selectors, a reconciled waterfall chart and passing checks."),
  ai: image("ai", "Model worksheet with a review assistant panel proposing changes for a person to accept or reject."),
  f1: image("f1", "Named formula defined once and used by a filtered model result."),
  f2: image("f2", "Structured data table with a query refresh workflow."),
  f3: image("f3", "Model table with input, formula, output and exception cell styles controlled from one style legend."),
  f4: image("f4", "Linked model tables extending into a new scenario and period."),
  f5: image("f5", "Model summary sheet with version control, naming standards and documentation index."),
  charter: image("charter", "One-page project charter covering purpose, scope, stakeholders and sign-off."),
  "raid-dar": image("raid-dar", "RAID.DAR register grouping risks, assumptions, issues and dependencies, each with a decision, action and repair."),
  rascix: image("rascix", "Responsibility matrix showing role assignments and one unassigned process step."),
  "requirements-matrix": image("requirements-matrix", "Requirements register tracing each request through design, build, testing and sign-off."),
  "work-plan": image("work-plan", "Forward project plan with owners, dates, milestones and timeline bars."),
  "workback-schedule": image("workback-schedule", "Schedule built backward from a fixed deadline."),
  about: image("about", "Three senior review lanes converging on one documented model with a sign-off strip."),
  "get-started": image("get-started", "Five-question diagnostic worksheet with the first three answers completed."),
  privacy: image("privacy", "Controlled data register with a protected information column."),
  terms: image("terms", "Terms of use version register with review and approval still pending."),
};
