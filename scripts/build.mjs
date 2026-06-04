import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

const entries = [
  { from: "index.html", to: "index.html" },
  { from: "research", to: "research" },
  { from: "projects", to: "projects" },
  { from: "styles", to: "styles" },
  { from: "scripts/site.js", to: "scripts/site.js" },
  { from: "scripts/home.js", to: "scripts/home.js" },
  { from: "scripts/detail.js", to: "scripts/detail.js" },
  { from: "data", to: "data" },
  { from: "assets", to: "assets" }
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of entries) {
  const from = join(root, entry.from);
  const to = join(dist, entry.to);
  await mkdir(dirname(to), { recursive: true });
  await cp(from, to, { recursive: true });
}

await writeFile(join(dist, ".nojekyll"), "");

console.log(`Built static site to ${dist}`);
