import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const envFiles = [
  path.join(projectRoot, ".env.server"),
  path.join(projectRoot, ".env"),
];

for (const envFile of envFiles) {
  await loadEnvFile(envFile);
}

const PORT = Number(process.env.PORT ?? 3001);
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "http://localhost:5173";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const profileLabels = {
  administradora: "Administradora",
  comprador: "Comprador",
  proprietario: "Proprietário",
  sindico: "Síndico",
};

const subjectLabels = {
  condominial: "Condominial",
  contratos: "Contratos",
  regularizacao: "Regularização",
};

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/contact" && req.method === "POST") {
    await handleContactRequest(req, res);
    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    await serveStaticFile(req, res);
    return;
  }

  sendJson(res, 404, { error: "Rota não encontrada." });
});

server.listen(PORT, () => {
  console.log(
    `Servidor iniciado em http://localhost:${PORT} com endpoint POST /api/contact`,
  );
});

async function handleContactRequest(req, res) {
  try {
    const body = await readJsonBody(req);
    const normalized = normalizePayload(body);
    validatePayload(normalized);

    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      replyTo:
        normalized.email ||
        process.env.CONTACT_REPLY_TO_EMAIL ||
        process.env.CONTACT_FROM_EMAIL,
      subject: buildEmailSubject(normalized),
      text: buildTextEmail(normalized),
      html: buildHtmlEmail(normalized),
      to: process.env.CONTACT_TO_EMAIL,
    });

    sendJson(res, 200, { success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao processar formulário.";
    const status = error instanceof HttpError ? error.statusCode : 500;

    if (!(error instanceof HttpError)) {
      console.error("Falha ao enviar e-mail do formulário:", error);
    }

    sendJson(res, status, { error: message });
  }
}

async function serveStaticFile(req, res) {
  const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const requestedPath =
    pathname === "/" ? path.join(distDir, "index.html") : path.join(distDir, pathname);

  const safeRoot = path.resolve(distDir);
  const safePath = path.resolve(requestedPath);

  if (!safePath.startsWith(safeRoot)) {
    sendJson(res, 403, { error: "Acesso negado." });
    return;
  }

  const filePath = await resolveStaticPath(safePath);

  if (!filePath) {
    sendJson(res, 404, { error: "Arquivo não encontrado." });
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const mimeType = mimeTypes[extension] ?? "application/octet-stream";
  const fileBuffer = await fs.readFile(filePath);

  res.writeHead(200, { "Content-Type": mimeType });
  if (req.method === "HEAD") {
    res.end();
    return;
  }

  res.end(fileBuffer);
}

async function resolveStaticPath(candidatePath) {
  try {
    const stats = await fs.stat(candidatePath);
    if (stats.isFile()) return candidatePath;
  } catch {
    // fall through
  }

  const fallbackPath = path.join(distDir, "index.html");
  try {
    const fallbackStats = await fs.stat(fallbackPath);
    return fallbackStats.isFile() ? fallbackPath : null;
  } catch {
    return null;
  }
}

async function readJsonBody(req) {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > 1024 * 1024) {
      throw new HttpError("O formulário excede o tamanho permitido.", 413);
    }
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    throw new HttpError("Nenhum dado foi enviado.", 400);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf-8"));
  } catch {
    throw new HttpError("O corpo da requisição está inválido.", 400);
  }
}

function normalizePayload(body) {
  return {
    aceitaPrivacidade: Boolean(body.aceitaPrivacidade),
    assunto: normalizeText(body.assunto),
    email: normalizeText(body.email),
    mensagem: normalizeText(body.mensagem),
    nome: normalizeText(body.nome),
    perfil: normalizeText(body.perfil),
    whatsapp: normalizeText(body.whatsapp),
  };
}

function validatePayload(payload) {
  const requiredFields = [
    ["nome", "Nome completo"],
    ["whatsapp", "WhatsApp"],
    ["email", "E-mail"],
    ["perfil", "Perfil"],
    ["assunto", "Assunto"],
    ["mensagem", "Mensagem"],
  ];

  for (const [field, label] of requiredFields) {
    if (!payload[field]) {
      throw new HttpError(`O campo "${label}" é obrigatório.`, 400);
    }
  }

  if (!payload.aceitaPrivacidade) {
    throw new HttpError(
      "É necessário aceitar a política de privacidade para enviar o formulário.",
      400,
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    throw new HttpError("Informe um e-mail válido.", 400);
  }
}

function createTransporter() {
  const requiredEnv = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL",
  ];

  for (const key of requiredEnv) {
    if (!process.env[key]) {
      throw new HttpError(
        `A variável de ambiente ${key} não foi configurada no servidor.`,
        500,
      );
    }
  }

  return nodemailer.createTransport({
    auth: {
      pass: process.env.SMTP_PASS,
      user: process.env.SMTP_USER,
    },
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
  });
}

function buildEmailSubject(payload) {
  const assunto = subjectLabels[payload.assunto] ?? payload.assunto;
  return `Novo contato do site - ${assunto}`;
}

function buildTextEmail(payload) {
  const perfil = profileLabels[payload.perfil] ?? payload.perfil;
  const assunto = subjectLabels[payload.assunto] ?? payload.assunto;

  return [
    "Novo formulário enviado pelo site",
    "",
    `Nome: ${payload.nome}`,
    `WhatsApp: ${payload.whatsapp}`,
    `E-mail: ${payload.email}`,
    `Perfil: ${perfil}`,
    `Assunto: ${assunto}`,
    "",
    "Mensagem:",
    payload.mensagem,
  ].join("\n");
}

function buildHtmlEmail(payload) {
  const perfil = escapeHtml(profileLabels[payload.perfil] ?? payload.perfil);
  const assunto = escapeHtml(subjectLabels[payload.assunto] ?? payload.assunto);

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="color: #081a52;">Novo formulário enviado pelo site</h2>
      <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Nome</td>
            <td style="padding: 8px 0;">${escapeHtml(payload.nome)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">WhatsApp</td>
            <td style="padding: 8px 0;">${escapeHtml(payload.whatsapp)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">E-mail</td>
            <td style="padding: 8px 0;">${escapeHtml(payload.email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Perfil</td>
            <td style="padding: 8px 0;">${perfil}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Assunto</td>
            <td style="padding: 8px 0;">${assunto}</td>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 24px;">
        <p style="font-weight: 700; margin-bottom: 8px;">Mensagem</p>
        <div style="padding: 16px; border-radius: 12px; background: #f3f4f6; white-space: pre-wrap;">
          ${escapeHtml(payload.mensagem)}
        </div>
      </div>
    </div>
  `;
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(body));
}

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
}

async function loadEnvFile(filePath) {
  try {
    const envContent = await fs.readFile(filePath, "utf-8");
    for (const line of envContent.split(/\r?\n/u)) {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine.startsWith("#")) continue;

      const separatorIndex = trimmedLine.indexOf("=");
      if (separatorIndex <= 0) continue;

      const key = trimmedLine.slice(0, separatorIndex).trim();
      const value = trimmedLine
        .slice(separatorIndex + 1)
        .trim()
        .replace(/^['"]|['"]$/gu, "");

      if (!(key in process.env)) {
        process.env[key] = value;
      }
    }
  } catch {
    // The env file is optional.
  }
}

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
}
