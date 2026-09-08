import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const banned = [
  "leverage", "utilise", "solutions", "offerings", "empower", "enable", "unlock",
  "best-in-class", "world-class", "cutting-edge", "transformation", "journey",
  "seamless", "robust", "comprehensive", "holistic", "enterprise-grade",
  "we are passionate about",
];
const files = [];

function collect(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) collect(path);
    else if (/\.(jsx?|html|md)$/.test(entry)) files.push(path);
  }
}

collect(join(root, "src"));
files.push(join(root, "index.html"), join(root, "README.md"));

const hits = [];
const addHits = (path, regex, label) => {
  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    if (regex.test(line)) hits.push(`${relative(root, path)}:${index + 1}: ${label}: ${line.trim()}`);
  });
};

for (const path of files) {
  addHits(path, /\bexcel\b/i, "forbidden word");
  for (const term of banned) addHits(path, new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i"), `banned term "${term}"`);
}
for (const path of files.filter((file) => file.startsWith(join(root, "src")))) {
  addHits(path, /\bagents?\b/i, "forbidden word");
  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const match of line.matchAll(/(\d+(?:\.\d+)?)%/g)) {
      if (match[1] !== "80" && match[1] !== "20") hits.push(`${relative(root, path)}:${index + 1}: forbidden percentage: ${line.trim()}`);
    }
  });
}

const allSource = files.filter((file) => file.startsWith(join(root, "src"))).map((path) => readFileSync(path, "utf8")).join("\n");
const macros = (allSource.match(/No macros\. No VBA\./g) || []).length;
if (macros !== 2) hits.push(`src: No macros. No VBA. count is ${macros}, expected 2`);

if (hits.length) {
  console.error(hits.join("\n"));
  process.exit(1);
}
console.log(`Copy check passed: ${files.length} files scanned; No macros. No VBA. count is 2.`);
