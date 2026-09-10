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
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=70",
      description: `A King Paints Nepal ${category.toLowerCase()} range for dependable coverage and a consistent finish. Contact our team for product specifications and availability.`,
      features: ["Consistent finish", "Made in Kathmandu", "Project support"],
      use: `Interior and exterior ${category.toLowerCase()} applications`,
      sizes: "Ask our team",
      finish: category,
      coverage: "Project dependent",
    });
  }
  return products;
}

export const PRODUCTS = buildProducts();
