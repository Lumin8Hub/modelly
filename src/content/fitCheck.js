// Copy deck §1.8, drawn from Question 19. The zero-or-one-yes result routes to
// /approach, not to the diagnostic — Question 19 asked the site to "subtly
// disqualify the wrong fit," and a qualifier that always says yes is a lead form
// wearing a costume.
export const FIT_QUESTIONS = [
  "Does your finance or reporting team spend more time preparing information than using it?",
  "Is your planning and reporting held together by files that only one or two people fully understand?",
  "Do you see better reporting systems as a business investment rather than an administrative cost?",
  "Are you willing to change how the work gets done, not only to buy a tool?",
];

const RESULTS = {
  high: {
    heading: "This is exactly what we do.",
    body: "Tell us what you would fix first and we will come back within two business days.",
    action: { label: "Start a diagnostic", to: "/diagnostic" },
  },
  middle: {
    heading: "Probably worth a conversation.",
    body: "Enough of this fits that a thirty-minute call would tell us both something. Start with the one thing you would most like to fix.",
    action: { label: "Start a diagnostic", to: "/diagnostic" },
  },
  low: {
    heading: "We are probably not your best option right now.",
    body: "If your current files are holding up and the volume is manageable, keep the money. If what you want is software you can subscribe to rather than a system built around how your business runs, a planning platform will suit you better. When that changes, come back.",
    action: { label: "See how we work", to: "/approach" },
  },
};

export function fitResult(score) {
  if (score >= 4) return RESULTS.high;
  if (score >= 2) return RESULTS.middle;
  return RESULTS.low;
}

// The static Phase 2 version of the section shows the two-or-three-yes block.
export const FIT_RESULT_STATIC = RESULTS.middle;
