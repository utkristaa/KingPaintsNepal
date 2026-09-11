import React, { useEffect } from "react";
import { X } from "lucide-react";
import { getAccentRecommendations } from "../data/colourGenerator.js";

export default function ColourQuickView({ colour, onClose }) {
  const accents = getAccentRecommendations(colour.hex);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="v-colour-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="v-colour-modal" role="dialog" aria-modal="true" aria-labelledby="colour-quick-view-title">
        <button type="button" className="v-colour-modal-close" onClick={onClose} aria-label="Close colour preview">
          <X size={20} />
        </button>
        <div className="v-room-visualizer" style={{ "--wall-colour": colour.hex }} aria-label={`Room preview with ${colour.name} walls`}>
          <div className="v-room-window"><span /><span /><span /><span /></div>
          <div className="v-room-art" />
          <div className="v-room-console" />
          <div className="v-room-sofa"><span /><span /><span /></div>
          <div className="v-room-floor" />
        </div>
        <div className="v-colour-modal-content">
          <div className="v-colour-modal-eyebrow">Factory shade preview</div>
          <h2 id="colour-quick-view-title">{colour.name}</h2>
          <div className="v-colour-modal-meta">
            <span>{colour.code}</span>
            <span>{colour.hex}</span>
            <span>{colour.finish}</span>
            <span>{colour.usage}</span>
          </div>
          <h3>Complementary accents</h3>
          <div className="v-accent-list">
            {accents.map((accent) => <span key={accent} className="v-accent-swatch" style={{ background: accent }} title={accent} aria-label={`Accent colour ${accent}`} />)}
          </div>
          <p>Use this shade as a starting point for your room palette. Confirm the finish and availability with the King Paints Nepal team before ordering.</p>
        </div>
      </section>
    </div>
  );
}
