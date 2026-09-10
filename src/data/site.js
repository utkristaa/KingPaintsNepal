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

  email: "",
  website: "https://kingpaintsnepal.com",

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

// WhatsApp number in E.164 format without the leading "+", used to build wa.me links.
// Source number: 985-1182340 → country code 977 (Nepal) + 9851182340.
// Update this single value if the WhatsApp number changes.
export const WHATSAPP_NUMBER = "9779851182340";

export function getWhatsAppLink(message = "Hello King Paints Nepal, I'd like to know more about your products.") {
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
