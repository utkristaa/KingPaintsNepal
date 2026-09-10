import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SafeImage from "./SafeImage.jsx";

export default function ProductCard({ product, onView }) {
  return (
    <motion.div
      className="v-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="v-card-img">
        <SafeImage src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="v-card-body">
        <div className="v-card-cat">{product.category}</div>
        <div className="v-card-title">{product.name}</div>
        <p className="v-card-desc">{product.shortDesc}</p>
        <div className="v-card-foot">
          <button className="v-card-link" onClick={() => onView(product.id)}>
            View Details <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
