import { prisma } from "../_lib/prisma.js";
import { json, requireAdmin, STATUS_VALUES } from "../_lib/http.js";

export default async function handler(request, response) {
  if (!requireAdmin(request, response)) return;
  if (request.method !== "PATCH") {
    response.setHeader("Allow", "PATCH");
    return json(response, 405, { error: "Method not allowed" });
  }

  const status = typeof request.body?.status === "string" ? request.body.status : "";
  if (!STATUS_VALUES.includes(status)) return json(response, 400, { error: "Invalid status" });

  try {
    const inquiry = await prisma.inquiry.update({
      where: { id: request.query.id },
      data: { status },
    });
    return json(response, 200, { inquiry });
  } catch (error) {
    if (error.code === "P2025") return json(response, 404, { error: "Inquiry not found" });
    console.error("PATCH /api/inquiries/[id] failed", error);
    return json(response, 500, { error: "Unable to update inquiry" });
  }
}
