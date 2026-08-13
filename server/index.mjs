import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const PORT = Number(process.env.PORT ?? 3001);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" || req.method === "HEAD") {
    await serveStaticFile(req, res);
    return;
  }

  sendJson(res, 405, { error: "Método não permitido." });
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});

async function serveStaticFile(req, res) {
  const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const requestedPath =
    pathname === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, pathname);
  const safeRoot = path.resolve(distDir);
  const safePath = path.resolve(requestedPath);

  if (!isPathInside(safeRoot, safePath)) {
    sendJson(res, 403, { error: "Acesso negado." });
    return;
  }

  const filePath = await resolveStaticPath(safePath);
  if (!filePath) {
    sendJson(res, 404, { error: "Arquivo não encontrado." });
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": mimeTypes[extension] ?? "application/octet-stream",
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  res.end(await fs.readFile(filePath));
}

function isPathInside(rootPath, candidatePath) {
  return candidatePath === rootPath || candidatePath.startsWith(`${rootPath}${path.sep}`);
}

async function resolveStaticPath(candidatePath) {
  try {
    if ((await fs.stat(candidatePath)).isFile()) return candidatePath;
  } catch {
    // Fall through to a route-specific page or the client application fallback.
  }

  const routeIndexPath = path.join(candidatePath, "index.html");
  try {
    if ((await fs.stat(routeIndexPath)).isFile()) return routeIndexPath;
  } catch {
    // Routes without a generated page are handled by the client application.
  }

  const fallbackPath = path.join(distDir, "index.html");
  try {
    return (await fs.stat(fallbackPath)).isFile() ? fallbackPath : null;
  } catch {
    return null;
  }
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(body));
}
