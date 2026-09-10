import React from "react";
import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";

export default function NotFoundPage({ go }) {
  return (
    <div className="v-shell v-not-found-wrap">
      <Seo title="Page Not Found | King Paints Nepal" description="The page you requested could not be found on the King Paints Nepal website." path="/404" />
      <div className="v-not-found-page">
        <div className="v-badge" style={{ marginBottom: 16 }}>
          <span className="v-badge-dot" /> 404 Error
        </div>
        <h1>That page is not available.</h1>
        <p>The address may have changed, or the page you're looking for no longer exists.</p>
        <div className="v-not-found-actions">
          <Button variant="primary" onClick={() => go("home")}>Return Home</Button>
          <Button variant="outline" onClick={() => go("products")}>Explore Products</Button>
        </div>
      </div>
    </div>
  );
}