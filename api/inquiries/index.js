import { databaseConfigured, prisma } from "../_lib/prisma.js";
import { json, readJson, requireAdmin, validateInquiry } from "../_lib/http.js";

export default async function handler(request, response) {
  if (request.method === "POST") {
    if (!databaseConfigured()) return json(response, 503, { code: "DATABASE_NOT_CONFIGURED", error: "Inquiry storage is not configured. Add DATABASE_URL in Vercel and run npm run prisma:push." });
    try {
      const { inquiry, errors } = validateInquiry(readJson(request));
      if (Object.keys(errors).length > 0) return json(response, 400, { error: "Invalid inquiry", fields: errors });
      const created = await prisma.inquiry.create({ data: inquiry });
      return json(response, 201, { inquiry: created });
    } catch (error) {
      console.error("POST /api/inquiries failed", error);
      return json(response, 500, { error: "Unable to save inquiry" });
    }
  }

  if (request.method === "GET") {
    if (!requireAdmin(request, response)) return;
    if (!databaseConfigured()) return json(response, 503, { code: "DATABASE_NOT_CONFIGURED", error: "Inquiry storage is not configured. Add DATABASE_URL in Vercel and run npm run prisma:push." });
    try {
      const inquiries = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });
      return json(response, 200, { inquiries });
    } catch (error) {
      console.error("GET /api/inquiries failed", error);
      return json(response, 500, { error: "Unable to load inquiries" });
    }
  }

  response.setHeader("Allow", "GET, POST");
  return json(response, 405, { error: "Method not allowed" });
}
