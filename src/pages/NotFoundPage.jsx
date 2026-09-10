import React from "react";
import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";

export default function NotFoundPage({ go }) {
  return (
    <div className="v-shell v-page-header v-not-found-page">
      <Seo title="Page Not Found | King Paints Nepal" description="The page you requested could not be found on the King Paints Nepal website." path="/404" />
      <h1>That page is not available.</h1>
      <p>The address may have changed, or the page may no longer exist.</p>
      <Button variant="primary" onClick={() => go("home")}>Return Home</Button>
    </div>
  );
}