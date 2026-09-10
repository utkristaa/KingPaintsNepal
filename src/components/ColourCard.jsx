import React from "react";

export default function ColourCard({ colour }) {
  return (
    <div className="v-colour-card">
      <div className="v-swatch" style={{ background: colour.hex }} />
      <div className="v-colour-info">
        <div className="v-colour-name">{colour.name}</div>
        <div className="v-colour-code">{colour.code}</div>
      </div>
    </div>
  );
}
