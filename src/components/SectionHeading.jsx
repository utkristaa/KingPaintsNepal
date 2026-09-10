import React from "react";

export default function SectionHeading({ label, title, description, align = "left" }) {
  return (
    <div
      className="v-section-head"
      style={align === "center" ? { margin: "0 auto 48px", textAlign: "center" } : undefined}
    >
      {label && <div className="v-section-label">{label}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
