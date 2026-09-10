import React from "react";

export default function Button({ variant = "primary", size = "md", children, icon: Icon, onClick, type = "button", as, href, target, rel }) {
  const className = `v-btn v-btn-${variant} ${size === "sm" ? "v-btn-sm" : ""}`;

  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
        {Icon && <Icon size={16} strokeWidth={2.2} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
      {Icon && <Icon size={16} strokeWidth={2.2} />}
    </button>
  );
}
