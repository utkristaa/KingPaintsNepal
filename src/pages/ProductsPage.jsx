import React, { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products.js";
import { CATEGORIES } from "../data/nav.js";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductsPage({ viewProduct }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="v-shell">
        <div className="v-page-header">
          <h1>Our Products</h1>
          <p>
            Browse paint categories from King Paints Nepal. Contact our team for current product specifications,
            sizes, availability, and project guidance.
          </p>
        </div>
        <div className="v-filter-row">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              className={`v-filter-chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="v-shell" style={{ paddingBottom: 96 }}>
        <div className="v-grid-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onView={viewProduct} />
          ))}
        </div>
      </div>
    </>
  );
}
