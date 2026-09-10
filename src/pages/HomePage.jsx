import React from "react";
import { Factory, Flame, ShieldCheck, Boxes, ChevronRight } from "lucide-react";
import { PRODUCTS } from "../data/products.js";
import Button from "../components/Button.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SafeImage from "../components/SafeImage.jsx";

export default function HomePage({ go, viewProduct }) {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="v-hero">
        <div className="v-shell v-hero-grid">
          <div>
            <div className="v-badge"><span className="v-badge-dot" />Manufactured in Kathmandu, Nepal</div>
            <h1>Paint, Manufactured<br />In-House in Kathmandu.</h1>
            <p className="v-hero-tagline">Beyond Your Imagination...</p>
            <p className="v-hero-sub">
              King Paints Nepal develops a locally manufactured paint range from its facility in Tarakeshwar Municipality, Kathmandu.
            </p>
            <div className="v-hero-ctas">
              <Button variant="primary" onClick={() => go("products")}>Explore Products</Button>
              <WhatsAppButton />
            </div>
          </div>
          <div className="v-hero-collage">
            <div className="v-hc-img v-hc-1">
              <SafeImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="A freshly painted building exterior" />
            </div>
            <div className="v-hc-img v-hc-2">
              <SafeImage src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80" alt="Inside a paint manufacturing facility" />
            </div>
            <div className="v-hc-card">
              <div className="v-hc-card-title">Made in Kathmandu</div>
              <div className="v-hc-card-sub">Paint made for projects across Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="v-shell">
        <div className="v-stats">
          <div className="v-stats-grid v-stats-grid-3">
            <div>
              <div className="v-stat-num">Local</div>
              <div className="v-stat-label">Kathmandu manufacturing</div>
            </div>
            <div>
              <div className="v-stat-num">Nepal</div>
              <div className="v-stat-label">Made for local projects</div>
            </div>
            <div>
              <div className="v-stat-num">Kathmandu</div>
              <div className="v-stat-label">Facility Location, Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-section-head-row" style={{ marginBottom: 48 }}>
            <div className="v-section-head" style={{ marginBottom: 0 }}>
              <div className="v-section-label">Featured Products</div>
              <h2>Our product catalogue is being finalized.</h2>
              <p>Explore paint categories manufactured at our Kathmandu facility, then contact us for project-specific specifications.</p>
            </div>
            <Button variant="ghost" onClick={() => go("products")}>View all products <ChevronRight size={16} style={{ display: "inline", verticalAlign: "middle" }} /></Button>
          </div>
          <div className="v-grid-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onView={viewProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — manufacturing & technology positioning */}
      <section className="v-section-tight" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading
            label="Manufacturing & Technology"
            title="Why our paint performs differently."
            description="Our approach starts at the molecular level, not at the mixing bucket."
          />
          <div className="v-feature-grid">
            <div className="v-feature">
              <div className="v-feature-icon"><Factory size={22} /></div>
              <h3>In-House Resin Synthesis</h3>
              <p>Our Kathmandu facility supports local formulation and production for residential, commercial, and project enquiries.</p>
            </div>
            <div className="v-feature">
              <div className="v-feature-icon"><Flame size={22} /></div>
              <h3>Thermal Cross-Linking</h3>
              <p>We work with customers to identify suitable paint categories and finishes for their surfaces, locations, and project requirements.</p>
            </div>
            <div className="v-feature">
              <div className="v-feature-icon"><ShieldCheck size={22} /></div>
              <h3>Climate-Specific Formulation</h3>
              <p>Our team can help discuss practical product options for the conditions and finish your project requires.</p>
            </div>
            <div className="v-feature">
              <div className="v-feature-icon"><Boxes size={22} /></div>
              <h3>Manufactured, Not Resold</h3>
              <p>King Paints Nepal is building a locally manufactured range from its Kathmandu facility rather than presenting itself as a general marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="v-shell" style={{ paddingBottom: 96 }}>
        <div className="v-cta-band">
          <div>
            <h2>Have a project or bulk order in mind?</h2>
            <p>Reach out by phone, WhatsApp, or the contact form and our team will get back to you.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <WhatsAppButton variant="light" />
            <Button variant="outline" onClick={() => go("contact")}>Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
