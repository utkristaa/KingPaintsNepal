import React from "react";
import { ChevronRight } from "lucide-react";
import SafeImage from "./SafeImage.jsx";

export default function ProductCard({ product, onView }) {
  return (
    <div className="v-card">
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
    </div>
  );
}
