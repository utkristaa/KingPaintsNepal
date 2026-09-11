import { CATEGORIES } from "./nav.js";

function buildProducts() {
  const products = [];
  for (let i = 1; i <= 40; i += 1) {
    const num = String(i).padStart(2, "0");
    const category = CATEGORIES[(i - 1) % CATEGORIES.length];
    products.push({
      id: `product-${num}`,
      name: `${category} ${num}`,
      category,
      shortDesc: `${category} for Nepal's homes, projects, and commercial spaces.`,
      image: "/paint-product.webp",
      description: `A King Paints Nepal ${category.toLowerCase()} range for dependable coverage and a consistent finish. Contact our team for product specifications and availability.`,
      features: ["Consistent finish", "Made in Kathmandu", "Project support"],
      use: `Interior and exterior ${category.toLowerCase()} applications`,
      packSizes: ["1L", "4L", "10L", "20L"],
      finish: i % 3 === 0 ? "Semi-Gloss" : (i % 2 === 0 ? "Gloss" : "Matte"),
      coverageArea: "100-120 sq ft/liter",
      dryingTime: "Touch dry in 2-4 hours",
      tdsUrl: "/documents/king-paints-tds.pdf",
      sdsUrl: "/documents/king-paints-sds.pdf",
    });
  }
  return products;
}

export const PRODUCTS = buildProducts();
