// Copy deck §1.4 (homepage summaries) and §2.2–§2.4 (services detail).
// Pillar names come from Question 20: Enterprise Systems, Accounting Processes,
// Persistent Models. Not "governance" three times.
export const PILLARS = [
  {
    id: "systems",
    number: "01",
    title: "Enterprise Systems",
    line: "Where your numbers come from.",
    summary:
      "The ERP, the CRM, the performance management tool, the data warehouse, and the spreadsheets filling the gaps between them. We find where the data breaks on the way to your report, and fix the handoffs.",
    body: "Every report rests on systems that were bought for something else. An ERP built for transactions. A CRM built for pipeline. A warehouse built for storage. Between them sit the spreadsheets your team wrote to make the handoffs work. That is usually where the reporting breaks.",
    bullets: [
      "Review the systems your reporting depends on: ERP, CRM, performance management, finance support systems, data warehouse",
      "Assess the controls inside those systems and recommend what to strengthen",
      "Improve the approval and workflow steps that slow the close",
      "Bring multiple sources together into one place your team can work from",
      "Design the hierarchies, cubes and dashboards that sit on top",
    ],
    closing:
      "Some clients need a full platform eventually. When that day comes, this work is what makes the implementation succeed: structured data, documented processes, and a reporting foundation that already makes sense.",
  },
  {
    id: "processes",
    number: "02",
    title: "Accounting Processes",
    line: "How data becomes numbers you trust.",
    summary:
      "How the close, the reconciliations and the reporting actually run today. We map the steps, remove the manual ones, and make it clear who owns what.",
    body: "The close is a process, not an event. So is reconciliation, so is reporting. Most of them grew by accretion, one workaround at a time, until nobody can say what the whole thing looks like. We map it, then remove the parts that only exist because of a limitation somewhere else.",
    bullets: [
      "Map how accounting and reporting work actually gets done today",
      "Replace manual data entry and reconciliation with something repeatable",
      "Set out who is responsible, who approves, who is consulted, who is informed, and keep it current",
      "Put periodic health checks on a schedule rather than leaving them to memory",
      "Review internal controls for risk, compliance and audit gaps",
    ],
    closing:
      "This is also where finance-adjacent work sits. We have rebuilt inventory tracking, promotional discounting and employee onboarding for the same reason we rebuild a forecast: the process was the problem, not the people running it.",
  },
  {
    id: "models",
    number: "03",
    title: "Persistent Models",
    line: "Models that keep working after we leave.",
    summary:
      "One workbook. Every scenario and every period on a single sheet, built from native features. No macros. No VBA. Nothing for IT to block, and nothing that stops working when one person leaves.",
    body: "A model is not a deliverable, it is an instrument someone has to operate for years. Most fail for the same two reasons: only the author understands the structure, and every change means a rebuild. We build for the opposite. One workbook, one structure, and a method your team can extend.",
    bullets: [
      "Forecasts and budgets that update as inputs change",
      "Variance analysis by rate, volume and mix, without rebuilding formulas",
      "Every scenario and every period in one place, so nothing drifts apart",
      "Error detection and missing-formula checks built into the file",
      "Formats, formulas and charts controlled centrally, changed once",
      "Documentation and handover training as part of the build, not an extra",
    ],
    // "No macros. No VBA." appears exactly once on the site, in this callout.
    // Question 39: "Mention it once, prominently, and move on."
    callout:
      "No macros. No VBA. Nothing for IT to block, and nothing that breaks when the person who wrote it leaves.",
  },
];
