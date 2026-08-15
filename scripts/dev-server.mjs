import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = normalize(join(fileURLToPath(new URL("..", import.meta.url)), "dist"));
const port = Number(process.env.PORT || 3000);
const mimeTypes = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".pdf": "application/pdf", ".png": "image/png" };

createServer((request, response) => {
  const rawPath = request.url?.split("?")[0] || "/";
  const relative = rawPath === "/" ? "index.html" : rawPath.replace(/^\//, "");
  const target = normalize(join(root, relative));
  if (!target.startsWith(root) || !existsSync(target)) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "Content-Type": mimeTypes[extname(target)] || "application/octet-stream" });
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`Preview available at http://127.0.0.1:${port}`));
