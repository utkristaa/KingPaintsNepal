import React from "react";

const FALLBACK_IMAGE = "/paint-placeholder.svg";

export default function SafeImage({ src, alt, ...props }) {
  const handleError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={handleError} {...props} />;
}