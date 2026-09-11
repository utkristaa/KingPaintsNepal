// ============================================================
// CENTRAL SITE CONFIGURATION
// Edit this file to update company details site-wide.
// Keep company details centralized so contact and structured data stay aligned.
// ============================================================

export const SITE = {
  name: "King Paints Nepal",
  tagline: "Beyond Your Imagination...",
  legalName: "King Paints Nepal",

  factory: {
    line1: "Tarakeshwar Municipality, Ward 5",
    line2: "Kathmandu, Nepal",
    full: "Tarakeshwar Municipality, Ward 5, Kathmandu, Nepal",
  },

  phones: ["985-1182340", "9851033919"],

  email: "info@kingpaintsnepal.com.np",
  website: "https://kingpaintsnepal.com.np",
  factoryMapUrl: "https://maps.google.com/?cid=7605525506212840303",
  factoryPlaceId: "ChIJX1st5BMZ6zkRb0P97yZBjGk",

  social: {
    facebook: "https://www.facebook.com/kingpaintsnepal",
    instagram: "https://www.instagram.com/kingpaintsnepal",
    linkedin: "https://www.linkedin.com/company/king-paints-nepal/",
  },
};

export function formatNepalPhone(phone) {
  const digits = String(phone).replace(/\D/g, "").replace(/^977/, "");
  if (digits.length === 10 && digits.startsWith("9")) {
    return `+977 ${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  if (digits.length >= 7) {
    return `+977 ${digits.slice(0, 1)}-${digits.slice(1)}`;
  }
  return phone;
}

export function getPhoneHref(phone) {
  const digits = String(phone).replace(/\D/g, "").replace(/^977/, "");
  return `tel:+977${digits}`;
}

// WhatsApp number in E.164 format without the leading "+", used to build wa.me links.
// Source number: 985-1182340 → country code 977 (Nepal) + 9851182340.
// Update this single value if the WhatsApp number changes.
export const WHATSAPP_NUMBER = "9779851182340";

export function getWhatsAppLink(message = "Hi King Paints, I would like to inquire about your products.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Enquiry subjects offered on the Contact page.
export const ENQUIRY_SUBJECTS = [
  "Product Enquiry",
  "Dealer / Distributor Enquiry",
  "Bulk Order",
  "Project Requirement",
  "Product Information",
  "General Enquiry",
  "Other",
];
