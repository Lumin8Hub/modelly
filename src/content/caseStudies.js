// Copy deck §4.2. LUMIN8 is the only approved, complete case study — named use
// approved by the client in Question 32.
//
// No quote exists yet ("To be obtained", Question 32), so no quote block renders.
// No figures exist yet, so the caption says so; a fabricated percentage would be
// worse than the caption, and the caption also tells the reader Modelly measures
// things. Do not invent numbers (07-open-items.md A3).
//
// The WOW Mobile case study is unwritten (07 A5). /results deliberately renders a
// single full-width case study rather than a grid holding one card, so adding the
// second is additive.
export const CASE_STUDIES = [
  {
    client: "LUMIN8",
    sector: "Marketing and technology",
    broken:
      "Bookkeeping, financial records and tax reporting had drifted out of shape. The accounting file needed cleaning. The data was not structured for reporting, so getting a clear view of the business meant assembling it by hand. Every filing created friction, and expense tracking had no reliable process behind it.",
    did: [
      "Audited the bookkeeping, the financial records and the tax return process end to end",
      "Cleaned and restructured the accounting data",
      "Rebuilt the chart of accounts so the numbers group the way the business actually works",
      "Organised the statements so the balance sheet and profit and loss can be read at a glance",
      "Streamlined tax return preparation and confirmed CRA compliance",
      "Put a real process behind expense tracking",
      "Set financial controls and reporting standards in place",
    ],
    changed: [
      "Records that are accurate and filing-ready without a scramble",
      "Bookkeeping and tax preparation that run as a process rather than an annual event",
      "A clear view of how the business is performing, available when it is needed",
      "Less administrative friction every month",
      "A structure that will hold as the business grows",
    ],
    caption:
      "Figures for this engagement are being confirmed with the client before publication.",
    quote: null,
  },
];

// Copy deck §4.3, all three from client verbatim, Question 18.
export const UNEXPECTED_OUTCOMES = [
  {
    n: "01",
    title: "They did not know the problem was there.",
    body: "Some of what we fix was never on the list. A control gap. A process step that holds up until volume doubles. A number that has been quietly wrong for two quarters.",
  },
  {
    n: "02",
    title: "They did not know it could be that much faster.",
    body: "Teams accept the current speed as the speed, because it has always taken this long. Usually it does not have to.",
  },
  {
    n: "03",
    title: "They did not expect us to train them out of needing us.",
    body: "We hand over the build, the documentation and the method. Then we leave. That is what we are selling.",
  },
];
