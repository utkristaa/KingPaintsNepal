const STORAGE_KEY = "kp_local_inquiries";

function read() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveLocalInquiry(inquiry) {
  const item = {
    id: `local-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    ...inquiry,
    status: "PENDING",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([item, ...read()]));
  return item;
}

export function getLocalInquiries() {
  return read();
}

export function updateLocalInquiry(id, status) {
  const inquiries = read().map((inquiry) => inquiry.id === id
    ? { ...inquiry, status, updatedAt: new Date().toISOString() }
    : inquiry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  return inquiries.find((inquiry) => inquiry.id === id);
}
