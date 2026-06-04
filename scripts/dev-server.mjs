import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || process.argv[2] || 3000);
const root = process.cwd();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml"
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${port}`);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
    const filePath = join(root, safePath);
    const data = await readFile(filePath);
    const type = mimeTypes[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio site running at http://127.0.0.1:${port}`);
});
