import React from "react";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="v-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}