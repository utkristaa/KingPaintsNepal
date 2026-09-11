import React from "react";
import { getContrastText } from "../data/colourGenerator.js";

export default function ColourCard({ colour, onSelect }) {
  return (
    <button type="button" className="v-colour-card" onClick={() => onSelect(colour)} aria-label={`Preview ${colour.name}, ${colour.code}`}>
      <div className="v-swatch" style={{ background: colour.hex }} />
      <div className="v-colour-info" style={{ background: colour.hex, color: getContrastText(colour.hex) }}>
        <div className="v-colour-name">{colour.name}</div>
        <div className="v-colour-code">{colour.hex} | {colour.code}</div>
        <div className="v-colour-meta">{colour.finish} | {colour.usage}</div>
      </div>
    </button>
  );
}
