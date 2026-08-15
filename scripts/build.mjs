import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const publicEntries = ["index.html", "data", "scripts", "styles", "assets"];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of publicEntries) {
  await cp(join(root, entry), join(dist, entry), { recursive: true });
}

console.log("Built public site to dist/");
