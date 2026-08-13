import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const seo = JSON.parse(
  await fs.readFile(path.join(projectRoot, "src", "app", "seo.json"), "utf8"),
);
const siteUrl = seo.siteUrl.replace(/\/$/, "");
const indexPath = path.join(distDir, "index.html");
const indexHtml = await fs.readFile(indexPath, "utf8");

function escapeHtmlAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function withMetadata(html, metadata) {
  const canonical = `${siteUrl}${metadata.path === "/" ? "/" : metadata.path}`;

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${metadata.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtmlAttribute(metadata.description)}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
    );
}

await Promise.all(
  seo.routes.map(async (metadata) => {
    const outputPath =
      metadata.path === "/"
        ? indexPath
        : path.join(distDir, ...metadata.path.slice(1).split("/"), "index.html");

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, withMetadata(indexHtml, metadata));
  }),
);
