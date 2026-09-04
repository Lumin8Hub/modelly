export const pillars = [
  {
    slug: "enterprise-systems", to: "/pillars/enterprise-systems", name: "Enterprise Systems", eyebrow: "OUR PILLARS — ENTERPRISE SYSTEMS",
    breadcrumb: [{ label: "Home", to: "/" }, { label: "Our Pillars", to: "/#pillars" }],
    h1: "Where your numbers come from.",
    body: "Every report rests on systems that were bought for something else. An ERP built for transactions. A CRM built for pipeline. A warehouse built for storage. Between them sit the spreadsheets your team wrote to make the handoffs work. That is usually where the reporting breaks.",
    sections: [
      { h2: "What this involves", list: ["Review the systems your reporting depends on: ERP, CRM, performance management, finance support systems, data warehouse", "Assess the controls inside those systems and recommend what to strengthen", "Improve the approval and workflow steps that slow the close", "Bring multiple sources together into one place your team can work from", "Design the hierarchies, cubes and dashboards that sit on top"] },
      { h2: "If you outgrow the spreadsheet", body: "Some clients need a full platform eventually. When that day comes, this work is what makes the implementation succeed: structured data, documented processes, and a reporting foundation that already makes sense." },
    ],
    teaser: { title: "Enterprise Systems", tagline: "Where your numbers come from.", body: "The ERP, the CRM, the performance management tool, the data warehouse, and the spreadsheets filling the gaps between them. We find where the data breaks on the way to your report, and fix the handoffs." },
  },
  {
    slug: "accounting-processes", to: "/pillars/accounting-processes", name: "Accounting Processes", eyebrow: "OUR PILLARS — ACCOUNTING PROCESSES",
    breadcrumb: [{ label: "Home", to: "/" }, { label: "Our Pillars", to: "/#pillars" }],
    h1: "How data becomes numbers you trust.",
    body: "The close is a process, not an event. So is reconciliation, so is reporting. Most of them grew by accretion, one workaround at a time, until nobody can say what the whole thing looks like. We map it, then remove the parts that only exist because of a limitation somewhere else.",
    sections: [
      { h2: "What this involves", list: ["Map how accounting and reporting work actually gets done today", "Replace manual data entry and reconciliation with something repeatable", "Set out who is responsible, who approves, who is consulted, who is informed — and keep it current", "Put periodic health checks on a schedule rather than leaving them to memory", "Review internal controls for risk, compliance and audit gaps"] },
      { h2: "Not only finance", body: "This is also where finance-adjacent work sits. We have rebuilt inventory tracking, promotional discounting and employee onboarding for the same reason we rebuild a forecast: the process was the problem, not the people running it." },
    ],
    teaser: { title: "Accounting Processes", tagline: "How data becomes numbers you trust.", body: "How the close, the reconciliations and the reporting actually run today. We map the steps, remove the manual ones, and make it clear who owns what." },
  },
  {
    slug: "modern-governance", to: "/pillars/modern-governance", name: "Modern Governance", eyebrow: "OUR PILLARS — MODERN GOVERNANCE",
    breadcrumb: [{ label: "Home", to: "/" }, { label: "Our Pillars", to: "/#pillars" }],
    h1: "Models that keep working after we leave.",
    body: "A model is not a deliverable, it is an instrument someone has to operate for years. Most fail for the same two reasons: only the author understands the structure, and every change means a rebuild. We build for the opposite. One workbook, one structure, and a method your team can extend.",
    sections: [
      { h2: "What this involves", list: ["Forecasts and budgets that update as inputs change", "Variance analysis by rate, volume and mix, without rebuilding formulas", "Every scenario and every period in one place, so nothing drifts apart", "Error detection and missing-formula checks built into the file", "Formats, formulas and charts controlled centrally, changed once", "Documentation and handover training as part of the build, not an extra"] },
      { h2: "Six things your team stops doing manually.", comparison: true },
    ],
    callout: "No macros. No VBA. Nothing for IT to block, and nothing that breaks when the person who wrote it leaves.",
    teaser: { title: "Modern Governance", tagline: "Models that keep working after we leave.", body: "One workbook. Every scenario and every period on a single sheet, built from native features. Nothing for IT to block, and nothing that stops working when one person leaves." },
  },
  {
    slug: "ai", to: "/pillars/ai", name: "AI", eyebrow: "OUR PILLARS — AI", draft: true,
    breadcrumb: [{ label: "Home", to: "/" }, { label: "Our Pillars", to: "/#pillars" }],
    h1: "AI, used narrowly and well.",
    body: "AI is useful here in a narrow and unglamorous way. It can draft the documentation nobody wants to write, read a process and flag the missing steps, and notice when a model's assumptions have drifted from what the business is actually doing. We set it up as an assistant to your team, inside the tools you already license.",
    sections: [
      { h2: "What this involves", draft: true, list: ["Draft and maintain the documentation as the model and the process change", "Read a process end to end and flag the missing or redundant steps", "Watch for assumptions that have drifted from what the business is doing", "Support your team's continuous improvement of the models and processes we hand over", "Set up inside Microsoft 365 or Google Workspace — no new platform to buy"] },
      { h2: "What we will not do", draft: true, body: "We do not hand your model to something you cannot inspect. Every output lands in a file your team can open, read and check." },
    ],
    closing: "AI is the fourth pillar, not the first. It helps once the systems, the processes and the model underneath are sound — which is why it comes last.",
    teaser: { title: "AI", tagline: "Reporting that keeps itself current.", body: "AI set up as an assistant to your team, inside the tools you already license. It drafts the documentation, flags the missing steps, and notices when a model's assumptions have drifted from the business." },
  },
];
