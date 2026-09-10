import React from "react";
import { CheckCircle2, Factory, Flame, ShieldCheck, Leaf } from "lucide-react";
import { TIMELINE } from "../data/timeline.js";
import { MACHINERY_CATEGORIES } from "../data/machinery.js";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SafeImage from "../components/SafeImage.jsx";

export default function AboutPage({ go }) {
  return (
    <>
      {/* Intro */}
      <div className="v-shell">
        <div className="v-about-hero">
          <div className="v-section-label">Who We Are</div>
          <h1 style={{ fontSize: 46, marginBottom: 18 }}>A paint manufacturer based in Kathmandu.</h1>
          <p style={{ fontSize: 17, color: "var(--charcoal-soft)", lineHeight: 1.7 }}>
            King Paints Nepal develops a locally manufactured paint range from its facility in Tarakeshwar Municipality,
            Ward 5, Kathmandu. Contact the team for current product, project, and availability information.
          </p>
        </div>
      </div>

      {/* Story timeline */}
      <section className="v-section">
        <div className="v-shell">
          <SectionHeading
            label="Our Story"
            title="How King Paints Nepal was built."
            description="King Paints Nepal is building a locally manufactured paint range from its Kathmandu facility."
          />
          <div className="v-timeline">
            {TIMELINE.map((item, i) => (
              <div className="v-timeline-item" key={i}>
                <div className="v-timeline-marker">
                  <div className="v-timeline-dot" />
                  {i < TIMELINE.length - 1 && <div className="v-timeline-line" />}
                </div>
                <div className="v-timeline-content">
                  <div className="v-timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="v-section-tight" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading label="Leadership" title="People behind the paint." description="Meet the team through the contact channel for current company and project enquiries." />
        </div>
      </section>

      {/* Manufacturing facility */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-split">
            <div className="v-split-img">
              <SafeImage src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1000&q=80" alt="Interior of a paint manufacturing facility" />
            </div>
            <div>
              <div className="v-section-label">Our Manufacturing Facility</div>
              <h2 style={{ fontSize: 34, marginBottom: 16 }}>A Kathmandu facility for local paint production.</h2>
              <p style={{ color: "var(--charcoal-soft)", fontSize: 16, lineHeight: 1.7 }}>
                Our facility in Tarakeshwar Municipality, Ward 5, Kathmandu, supports paint formulation, processing,
                and packaging for the King Paints Nepal range.
              </p>
              <div className="v-checklist">
                <div className="v-check-item"><CheckCircle2 size={18} /> Formulation, processing, and packaging under one roof</div>
                <div className="v-check-item"><CheckCircle2 size={18} /> Located in Kathmandu, Nepal</div>
                <div className="v-check-item"><CheckCircle2 size={18} /> Supporting local paint production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment categories */}
      <section className="v-section-tight" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading
            label="Manufacturing Capabilities"
            title="The categories of equipment behind our process."
            description="Our facility supports formulation, processing, quality control, and packaging under one roof."
          />
          <div className="v-machinery-grid">
            {MACHINERY_CATEGORIES.map((m, i) => (
              <div className="v-machinery-item" key={i}>
                <Factory size={18} />
                <div>
                  <div className="v-machinery-title">{m.title}</div>
                  <div className="v-machinery-note">{m.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="v-section">
        <div className="v-shell">
          <SectionHeading label="Our Technology" title="Built from the molecule up." />
          <div className="v-feature-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="v-feature">
              <div className="v-feature-icon"><Factory size={22} /></div>
              <h3>Resin Synthesis</h3>
              <p>Our process is designed around local formulation and production, with product and availability details confirmed directly with the team.</p>
            </div>
            <div className="v-feature">
              <div className="v-feature-icon"><Flame size={22} /></div>
              <h3>Thermal Cross-Linking</h3>
              <p>We select and discuss paint solutions according to the surface, environment, and finish required by each project.</p>
            </div>
            <div className="v-feature">
              <div className="v-feature-icon"><ShieldCheck size={22} /></div>
              <h3>Climate-Customized Batches</h3>
              <p>Contact our team for current information about available products, finishes, and recommended applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality philosophy */}
      <section className="v-section-tight" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <div className="v-split" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="v-section-label">Quality Philosophy</div>
              <h2 style={{ fontSize: 34, marginBottom: 16 }}>Consistency comes from control, not chance.</h2>
              <p style={{ color: "var(--charcoal-soft)", fontSize: 16, lineHeight: 1.7 }}>
                Because we synthesize our own resins and control every stage of processing, we're able to hold each
                batch to the same standard rather than relying on ingredients sourced from outside suppliers. Our
                quality-control laboratory supports this process from raw material through to the finished product.
              </p>
            </div>
            <div className="v-split-img" style={{ height: 320 }}>
              <SafeImage src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" alt="Paint tins being checked for quality" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental responsibility */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-value-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="v-value-card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div className="v-feature-icon" style={{ marginBottom: 0, flexShrink: 0 }}><Leaf size={22} /></div>
              <div>
                <h3>Environmental Responsibility</h3>
                <p>We consider responsible operation, careful material handling, and efficient manufacturing part of the work required to make dependable paint locally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="v-section-tight" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading label="Certifications & Approvals" title="Manufacturing with care." description="Contact the King Paints Nepal team for current documentation and approvals relevant to your project." />
        </div>
      </section>

      {/* Where we're going */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-split">
            <div>
              <div className="v-section-label">Where We're Going Next</div>
              <h2 style={{ fontSize: 34, marginBottom: 16 }}>Building on the facility we've put in place.</h2>
              <p style={{ color: "var(--charcoal-soft)", fontSize: 16, lineHeight: 1.7 }}>
                Our near-term focus is finishing our full product catalogue and colour library, expanding our dealer
                network across Nepal, and continuing to invest in our in-house manufacturing and formulation
                capability from our Kathmandu facility.
              </p>
            </div>
            <div className="v-split-img">
              <SafeImage src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=1000&q=80" alt="Exterior of a manufacturing building" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="v-shell">
        <div className="v-stats" style={{ marginBottom: 40 }}>
          <div className="v-stats-grid v-stats-grid-3">
            <div><div className="v-stat-num">Local</div><div className="v-stat-label">Kathmandu production</div></div>
            <div><div className="v-stat-num">Nepal</div><div className="v-stat-label">Built for local projects</div></div>
            <div><div className="v-stat-num">Kathmandu</div><div className="v-stat-label">Facility Location, Nepal</div></div>
          </div>
        </div>
      </section>

      <section className="v-shell" style={{ paddingBottom: 96 }}>
        <div className="v-cta-band">
          <div>
            <h2>Want to know more about our facility?</h2>
            <p>Reach out to our team to learn more about our manufacturing process and quality standards.</p>
          </div>
          <Button variant="light" onClick={() => go("contact")}>Talk to Our Team</Button>
        </div>
      </section>
    </>
  );
}
