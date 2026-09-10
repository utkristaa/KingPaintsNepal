// ============================================================
// DEALER NETWORK DATA
// The King Paints Nepal dealer network list has not been provided yet.
// These are placeholder entries so the Find a Dealer page and its
// search/filter behaviour can be previewed. Replace with real dealer
// details once available — do not treat these as real businesses.
// ============================================================

function buildPlaceholderDealers() {
  const count = 6;
  return Array.from({ length: count }, (_, i) => ({
    name: "[DEALER NAME]",
    location: "[LOCATION]",
    address: "[ADDRESS]",
    phone: "[PHONE]",
    id: `dealer-${i + 1}`,
  }));
}

export const DEALERS = buildPlaceholderDealers();
