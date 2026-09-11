import React from "react";

const FALLBACK_IMAGE = "/paint-placeholder.svg";

export default function SafeImage({ src, alt, ...props }) {
  const handleError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  const { loading = "lazy", width = 800, height = 600 } = props;
  return (
    <picture>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onError={handleError}
        {...props}
      />
    </picture>
  );
}