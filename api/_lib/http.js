export const STATUS_VALUES = ["PENDING", "REVIEWED", "CONTACTED"];

export function json(response, status, body) {
  response.status(status).json(body);
}

export function readJson(request) {
  if (!request.body) return {};
  return typeof request.body === "string" ? JSON.parse(request.body) : request.body;
}

export function requireAdmin(request, response) {
  const expected = process.env.ADMIN_API_TOKEN || "utkrista123";
  const received = request.headers.authorization?.replace(/^Bearer\s+/i, "") || request.headers["x-admin-token"];
  if (!expected || received !== expected) {
    json(response, 401, { error: "Unauthorized" });
    return false;
  }
  return true;
}

export function cleanString(value, maxLength) {
  return typeof value === "string" ? value.trim().replace(/[<>]/g, "").slice(0, maxLength) : "";
}

export function validateInquiry(payload) {
  const inquiry = {
    name: cleanString(payload.name, 120),
    businessName: cleanString(payload.businessName, 160),
    email: cleanString(payload.email, 180).toLowerCase(),
    phone: cleanString(payload.phone, 40),
    location: cleanString(payload.location, 180),
    message: cleanString(payload.message, 2000),
  };
  const errors = {};
  if (!inquiry.name) errors.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) errors.email = "A valid email is required";
  if (!inquiry.phone) errors.phone = "Phone is required";
  if (!inquiry.location) errors.location = "Location is required";
  if (!inquiry.message) errors.message = "Message is required";
  return { inquiry, errors };
}
