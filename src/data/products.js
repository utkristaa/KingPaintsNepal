// ============================================================
// PRODUCTS DATA
// Final product names, descriptions, and specifications have not been
// provided yet. This file uses clearly labelled placeholders (Product 01
// - Product 40) so the catalogue structure is ready to populate later.
// Replace the fields below once real product information is available.
// ============================================================

import { CATEGORIES } from "./nav.js";

function buildPlaceholderProducts() {
  const products = [];
  for (let i = 1; i <= 40; i += 1) {
    const num = String(i).padStart(2, "0");
    const category = CATEGORIES[(i - 1) % CATEGORIES.length];
    products.push({
      id: `product-${num}`,
      name: `Product ${num}`,
      category,
      shortDesc: "[Product description to be added.]",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
      description:
        "[Full product description to be added. This will cover what the product is, what it's formulated for, and why it fits this category.]",
      features: ["[FEATURE TO BE ADDED]", "[FEATURE TO BE ADDED]", "[FEATURE TO BE ADDED]"],
      use: "[RECOMMENDED USE TO BE ADDED]",
      sizes: "[SIZES TO BE ADDED]",
      finish: "[FINISH / TYPE TO BE ADDED]",
      coverage: "[COVERAGE TO BE ADDED]",
    });
  }
  return products;
}

export const PRODUCTS = buildPlaceholderProducts();
