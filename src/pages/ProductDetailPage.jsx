import React from "react";
import { ChevronLeft } from "lucide-react";
import { PRODUCTS } from "../data/products.js";
import Button from "../components/Button.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SafeImage from "../components/SafeImage.jsx";

export default function ProductDetailPage({ product, go, viewProduct }) {
  if (!product) return null;
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="v-shell" style={{ padding: "48px 0 96px" }}>
      <a href="/products" className="v-back-link" onClick={(e) => { e.preventDefault(); go("products"); }}>
        <ChevronLeft size={16} /> Back to Products
      </a>
      <div className="v-detail-grid">
        <div className="v-detail-img">
          <SafeImage src={product.image} alt={product.name} />
        </div>
        <div>
          <div className="v-detail-cat">{product.category}</div>
          <h1 className="v-detail-title">{product.name}</h1>
          <p className="v-detail-desc">{product.description}</p>

          <div className="v-feature-tags">
            {product.features.map((f, i) => (
              <span key={i} className="v-feature-tag">{f}</span>
            ))}
          </div>

          <div className="v-spec-table">
            <div className="v-spec-row"><span className="v-spec-key">Recommended Use</span><span className="v-spec-val">{product.use}</span></div>
            <div className="v-spec-row"><span className="v-spec-key">Pack Sizes</span><span className="v-spec-val">{product.packSizes.join(", ")}</span></div>
            <div className="v-spec-row"><span className="v-spec-key">Finish</span><span className="v-spec-val">{product.finish}</span></div>
            <div className="v-spec-row"><span className="v-spec-key">Coverage Area</span><span className="v-spec-val">{product.coverageArea}</span></div>
            <div className="v-spec-row"><span className="v-spec-key">Drying Time</span><span className="v-spec-val">{product.dryingTime}</span></div>
          </div>

          <div className="v-product-docs" aria-label="Product documents">
            <a className="v-product-doc-link" href={product.tdsUrl} download>Download TDS <span>PDF</span></a>
            <a className="v-product-doc-link" href={product.sdsUrl} download>Download SDS <span>PDF</span></a>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => go("contact")}>Enquire About This Product</Button>
            <WhatsAppButton message={`Hello King Paints Nepal, I'd like to enquire about ${product.name}.`} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: 88 }}>
          <SectionHeading label="Related" title={`More in ${product.category}`} />
          <div className="v-grid-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onView={viewProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
