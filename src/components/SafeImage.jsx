import React from "react";

const FALLBACK_IMAGE = "/paint-placeholder.svg";

export default function SafeImage({ src, alt, ...props }) {
  const handleError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  const { loading = "lazy", width = 800, height = 600 } = props;
  const isUnsplashImage = typeof src === "string" && src.startsWith("https://images.unsplash.com/");
  const avifSrc = isUnsplashImage ? src.replace("auto=format", "auto=format&fm=avif") : null;
  const webpSrc = isUnsplashImage ? src.replace("auto=format", "auto=format&fm=webp") : null;

  return (
    <picture>
      {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
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