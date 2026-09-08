import fs from "node:fs";
import path from "node:path";

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return Object.fromEntries(fs.readFileSync(filePath, "utf8").split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^\s*(VITE_[A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!match) return [];
    const value = match[2].replace(/^("|')(.*)\1$/, "$2");
    return [[match[1], value]];
  }));
}

const envDir = process.cwd();
const fileEnv = [".env", ".env.local", ".env.production", ".env.production.local"]
  .map((fileName) => readEnvFile(path.join(envDir, fileName)))
  .reduce((values, current) => ({ ...values, ...current }), {});
const effectiveEnv = { ...fileEnv, ...process.env };
const preview = effectiveEnv.VITE_PREVIEW;
const formEndpoint = effectiveEnv.VITE_FORM_ENDPOINT;

if (preview === "false") {
  const missing = ["M-01 Five Cs content", "M-02 pillar infographic approval", "M-03 toolkit icon approval", "M-04 approved portraits", "M-05 lead endpoint", "M-06 review-copy and framework approval", "M-07 legal text approval", "M-08 model image approvals"];
  if (!formEndpoint?.trim()) missing.push("VITE_FORM_ENDPOINT");
  console.error(`Production release blocked: ${missing.join(", ")} remain unresolved.`);
  process.exit(1);
}
console.log("Review build permitted; unresolved review items remain visible.");
