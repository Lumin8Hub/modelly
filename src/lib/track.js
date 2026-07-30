// Analytics stub. No tool has been chosen yet — see 07-open-items.md A8, which
// recommends Plausible or Fathom (cookieless, so no consent banner).
//
// Exactly three events are in scope, per 02-architecture.md §7.1:
//   diagnostic_start, diagnostic_submit, fit_check_complete
//
// When a tool is picked, the provider call goes in the body below and nothing
// at the call sites changes.
export function track(event, props) {
  if (import.meta.env.DEV) {
    console.info("[track]", event, props ?? {});
  }
}
