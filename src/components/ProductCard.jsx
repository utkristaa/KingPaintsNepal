import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SafeImage from "./SafeImage.jsx";

const CATEGORY_STYLES = {
  "Interior Paints": { color: "#C25E3A", bg: "#FBF1EC", border: "#F2D5C8" },
  "Exterior Paints": { color: "#2B5B75", bg: "#EDF4F8", border: "#CDE0EA" },
  "Primers": { color: "#4A6E53", bg: "#EEF4F0", border: "#CEE0D3" },
  "Enamels": { color: "#C78B2A", bg: "#FAF3E5", border: "#F0DEC0" },
  "Waterproofing": { color: "#1D7068", bg: "#E8F5F3", border: "#C2E5E1" },
  "Wood & Metal Finishes": { color: "#8E4D30", bg: "#F8EDE7", border: "#E8CFC2" },
  "Construction Coatings": { color: "#5C5346", bg: "#F2EFEA", border: "#DDD7CE" },
};

export default function ProductCard({ product, onView }) {
  const catStyle = CATEGORY_STYLES[product.category] || {
    color: "var(--forest-dark)",
    bg: "var(--forest-tint)",
    border: "var(--border)",
  };

  return (
    <motion.div
      className="v-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Category top color accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: catStyle.color,
          zIndex: 2,
        }}
      />

      <div className="v-card-img">
        <SafeImage src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="v-card-body">
        <div>
          <span
            className="v-card-cat-badge"
            style={{
              display: "inline-block",
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 999,
              background: catStyle.bg,
              color: catStyle.color,
              border: `1px solid ${catStyle.border}`,
              marginBottom: 8,
            }}
          >
            {product.category}
          </span>
        </div>
        <div className="v-card-title">{product.name}</div>
        <p className="v-card-desc">{product.shortDesc}</p>
        <div className="v-card-foot">
          <button type="button" className="v-card-link" onClick={() => onView(product.id)} aria-label={`View details for ${product.name}`}>
            View Details <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
