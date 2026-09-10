import { useEffect } from "react";
import { SITE } from "../data/site.js";

const DEFAULT_IMAGE = `${SITE.website}/og-image.svg`;

export default function Seo({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website" }) {
  const canonical = `${SITE.website}${path === "/" ? "" : path}`;

  useEffect(() => {
    document.title = title;
    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "name", "description");
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "property", "og:title");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "property", "og:description");
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "property", "og:url");
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image");
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:type"]', "property", "og:type");
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description");
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image");
    setMeta('meta[name="twitter:image"]', "content", image);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [canonical, description, image, title]);

  return null;
}

export function StructuredData({ data }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.dataset.schema = "king-paints";
    document.head.appendChild(script);
    return () => script.remove();
  }, [data]);

  return null;
}

export function LocalBusinessSchema() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SITE.name,
        url: SITE.website,
        telephone: `+977-${SITE.phones[0].replaceAll("-", "")}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.factory.line1,
          addressLocality: "Kathmandu",
          addressCountry: "NP",
        },
        areaServed: "Nepal",
      }}
    />
  );
}