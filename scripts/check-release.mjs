if (process.env.VITE_PREVIEW === "false") {
  const missing = ["M-01 Five Cs content", "M-02 pillar infographic approval", "M-03 toolkit icon approval", "M-04 approved portraits", "M-05 lead endpoint", "M-06 review-copy and framework approval", "M-07 legal text approval", "M-08 model image approvals"];
  if (!process.env.VITE_FORM_ENDPOINT) missing.push("VITE_FORM_ENDPOINT");
  console.error(`Production release blocked: ${missing.join(", ")} remain unresolved.`);
  process.exit(1);
}
console.log("Review build permitted; unresolved review items remain visible.");
