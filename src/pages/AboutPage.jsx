import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Factory, Flame, ShieldCheck, Leaf, Quote,
  Phone, MessageSquare, Beaker, Gauge, Cpu, Layers, Sliders
} from "lucide-react";
import { TIMELINE } from "../data/timeline.js";
import { MACHINERY_CATEGORIES } from "../data/machinery.js";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SafeImage from "../components/SafeImage.jsx";
import { formatNepalPhone, getPhoneHref } from "../data/site.js";
import DealerApplicationForm from "../components/DealerApplicationForm.jsx";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.65, ease: EASE_EXPO, delay },
});

const FOUNDERS = [
  {
    name: "Krishna Bahadur Adhikari",
    role: "Founder & Managing Director",
    phone: "9851182340",
    img: "/founder-krishna.jpg",
    tag: "Founder & Plant Leadership",
    vision:
      "We started King Paints Nepal because families and builders in Nepal deserve reliable paint made here at home. We check every batch carefully so customers get a durable finish at a fair price.",
  },
  {
    name: "Ujjwal Adhikari",
    role: "Co-Founder & Head of Operations",
    phone: "9851033919",
    img: "/founder-ujjwal.jpg",
    tag: "Co-Founder & Operations",
    vision:
      "Every wall and climate is different. We make our paints for Nepal's heat, monsoon weather, and common masonry surfaces, helping walls stay cleaner and protected for longer.",
  },
];

const FACTORY_STEPS = [
  {
    step: "01",
    title: "Raw Material & Pigment Assay",
    icon: Beaker,
    desc: "Inspection of pure Rutile Titanium Dioxide (TiO₂), micro-fine natural calcites, and 100% pure acrylic copolymer binders to verify zero moisture contamination.",
  },
  {
    step: "02",
    title: "High-Shear Dispersion",
    icon: Cpu,
    desc: "Industrial Cowles dissolvers operating at calibrated variable speeds break pigment agglomerates into sub-micron particles for complete binder wetting.",
  },
  {
    step: "03",
    title: "Precision Bead Milling",
    icon: Layers,
    desc: "Closed-chamber horizontal sand and bead mills grind the pigment paste to sub-15 micron fineness on the Hegman gauge, maximizing opacity and finish consistency.",
  },
  {
    step: "04",
    title: "Laboratory QC & Stress Testing",
    icon: Gauge,
    desc: "Every batch is verified on Stormer viscometers (95–105 KU), opacity drawdown charts, and mechanical wet-scrub washability test stands before approval.",
  },
  {
    step: "05",
    title: "Centrifugal Micro-Filtration",
    icon: Sliders,
    desc: "Continuous double-mesh mechanical sieves remove any micro-particulates, ensuring smooth, effortless flow on brushes, rollers, and spray systems.",
  },
  {
    step: "06",
    title: "Volumetric Filling & Traceability",
    icon: Factory,
    desc: "Pneumatic volumetric dispensers accurately package paint into 1L, 4L, 10L, and 20L containers, sealed and labeled with batch numbers and manufacture dates.",
  },
];

const QC_STANDARDS = [
  {
    metric: "Opacity & Contrast Ratio",
    value: "≥ 98.5%",
    desc: "Verified on Leneta drawdown opacity charts for superior two-coat hiding power.",
  },
  {
    metric: "Viscosity Control",
    value: "95 – 105 KU",
    desc: "Calibrated via Stormer Krebs Viscometer to eliminate roller spatter and brush drag.",
  },
  {
    metric: "Wet Scrub Resistance",
    value: "5,000+ Cycles",
    desc: "Tested per ASTM D2486 to ensure dependable washability and stain removal.",
  },
  {
    metric: "Heavy Metal Safety",
    value: "0% Lead Added",
    desc: "Zero added lead, mercury, or harmful chromium compounds, safe for families.",
  },
  {
    metric: "Himalayan UV Resilience",
    value: "UV Index 11+",
    desc: "Photostable acrylic resins formulated to resist chalking under high-altitude sun.",
  },
  {
    metric: "Anti-Fungal Protection",
    value: "Class 1 Biocide",
    desc: "Built-in fungal and efflorescence inhibitors engineered for monsoon dampness.",
  },
];

export default function AboutPage({ go }) {
  return (
    <>
      {/* Page Hero */}
      <div className="v-shell">
        <motion.div className="v-about-hero" {...fadeUp(0)}>
          <div className="v-badge">
            <span className="v-badge-dot" />
            Kathmandu Manufacturing Facility
          </div>
          <h1 style={{ fontSize: "clamp(34px, 5vw, 52px)", marginBottom: 18, lineHeight: 1.08 }}>
            Paint Manufacturing<br />In-House in Kathmandu.
          </h1>
          <p style={{ fontSize: 17, color: "var(--charcoal-soft)", lineHeight: 1.7, maxWidth: 640 }}>
            King Paints Nepal formulates and produces architectural coatings from our facility in
            Tarakeshwar Municipality, Ward 5, Kathmandu. Designed and manufactured for Nepal’s climate,
            masonry, and architectural requirements.
          </p>
        </motion.div>
      </div>

      {/* Leadership & Founders Section — High-End Executive Presentation */}
      <section className="v-executive-section">
        <div className="v-shell">
          <motion.div {...fadeUp(0)} className="v-executive-header">
            <span className="v-badge-gold">
              Executive Leadership
            </span>
            <h2>
              The People Behind The Paint.
            </h2>
            <p>
              Direct chemical formulation oversight and plant leadership from our facility in Tarakeshwar, Kathmandu.
            </p>
          </motion.div>

          <div className="v-executive-grid">
            {FOUNDERS.map((founder, i) => (
              <motion.div
                key={founder.name}
                {...fadeUp(i * 0.12)}
                className="v-executive-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: EASE_EXPO }}
              >
                <div className="v-executive-card-inner">
                  {/* Portrait & Core Credentials */}
                  <div className="v-executive-profile">
                    <div className="v-executive-avatar-wrap">
                      <SafeImage
                        src={founder.img}
                        alt={founder.name}
                        className="v-executive-avatar-img"
                        style={{
                          objectPosition: i === 0 ? "center 5%" : "center 12%",
                        }}
                        width={160}
                        height={160}
                      />
                    </div>

                    <div className="v-executive-meta">
                      <span className="v-executive-tag">{founder.tag}</span>
                      <h3 className="v-executive-name">{founder.name}</h3>
                      <div className="v-executive-role">{founder.role}</div>
                    </div>
                  </div>

                  {/* Vision Quote Block */}
                  <div className="v-executive-quote-box">
                    <Quote size={18} className="v-executive-quote-icon" />
                    <p className="v-executive-quote-text">
                      {founder.vision}
                    </p>
                  </div>

                  {/* Clean Direct Contact Actions */}
                  <div className="v-executive-actions">
                    <a
                      href={getPhoneHref(founder.phone)}
                      className="v-exec-action-call"
                      aria-label={`Call ${founder.name}`}
                    >
                      <Phone size={14} />
                      <span>{formatNepalPhone(founder.phone)}</span>
                    </a>
                    <a
                      href={`https://wa.me/977${founder.phone}?text=Hello%20${encodeURIComponent(founder.name)},%20I%20am%20contacting%20you%20from%20the%20King%20Paints%20website.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="v-exec-action-wa"
                      aria-label={`WhatsApp ${founder.name}`}
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Paint Factory Production Pipeline — Clean Cohesive Industrial Design */}
      <section className="v-section" style={{ background: "var(--ivory-soft)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading
            label="Plant Operations"
            title="From Raw Pigments to Sealed Tins."
            description="Our manufacturing process follows strict formulation and quality assurance protocols at our Kathmandu facility."
          />

          <div className="v-process-grid" style={{ marginTop: 44 }}>
            {FACTORY_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  {...fadeUp(i * 0.07)}
                  className="v-step-card"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "26px 24px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    position: "relative",
                  }}
                  whileHover={{ y: -4, borderColor: "var(--forest)" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "var(--forest-tint)",
                        color: "var(--forest-dark)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "var(--charcoal-soft)",
                        opacity: 0.45,
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 18, marginBottom: 8, color: "var(--forest-dark)" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--charcoal-soft)", lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Control & Scientific Testing Benchmarks — High-Precision Specification Cards */}
      <section className="v-section">
        <div className="v-shell">
          <SectionHeading
            label="Quality Control"
            title="Formulation & Laboratory Standards."
            description="Every batch is tested in our quality-control laboratory for opacity, washability, viscosity, and weather resistance."
          />

          <div className="v-qc-grid" style={{ marginTop: 44 }}>
            {QC_STANDARDS.map((qc, i) => (
              <motion.div
                key={qc.metric}
                {...fadeUp(i * 0.06)}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                }}
                whileHover={{ y: -3, borderColor: "var(--forest)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 700, color: "var(--forest-dark)" }}>
                    {qc.metric}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--forest-dark)",
                      background: "var(--forest-tint)",
                      padding: "3px 10px",
                      borderRadius: 6,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {qc.value}
                  </span>
                </div>
                <p style={{ fontSize: 13.5, color: "var(--charcoal-soft)", lineHeight: 1.55, margin: 0 }}>
                  {qc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Heavy Plant Equipment */}
      <section
        className="v-section"
        style={{
          background: "var(--ivory-soft)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="v-shell">
          <SectionHeading
            label="Plant Equipment"
            title="Manufacturing Hardware & Processing."
            description="Our Tarakeshwar plant houses specialized industrial dispersion, milling, reaction, and automated canning units."
          />

          <div className="v-machinery-grid-6" style={{ marginTop: 40 }}>
            {MACHINERY_CATEGORIES.map((m, i) => (
              <motion.div
                key={m.title}
                {...fadeUp(i * 0.06)}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                }}
                whileHover={{ y: -3, borderColor: "var(--forest)" }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--forest-tint)",
                    color: "var(--forest-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Factory size={19} />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, color: "var(--forest-dark)", marginBottom: 5 }}>{m.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--charcoal-soft)", lineHeight: 1.55, marginBottom: 8 }}>
                    {m.note}
                  </p>
                  {m.spec && (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: "var(--charcoal-soft)",
                        background: "var(--ivory-soft)",
                        border: "1px solid var(--border)",
                        padding: "2px 8px",
                        borderRadius: 4,
                      }}
                    >
                      {m.spec}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate-Engineered Formulations */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-split">
            <motion.div className="v-split-img" {...fadeUp(0)}>
              <SafeImage
                src="/factory-formulation.webp"
                alt="Paint formulation facility in Kathmandu"
              />
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <div className="v-section-label">Climate-Engineered Formulations</div>
              <h2 style={{ fontSize: 32, marginBottom: 16 }}>Formulated For Nepal's Weather Extremes.</h2>
              <p style={{ color: "var(--charcoal-soft)", fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
                Standard imported paints are often formulated for dry or moderate climates. In Nepal, exterior walls must
                endure intense Himalayan UV radiation, winter frost, and heavy monsoon downpours.
              </p>
              <div className="v-checklist">
                <div className="v-check-item">
                  <CheckCircle2 size={18} />
                  <span><strong>UV-Resistant Binders:</strong> Engineered to minimize chalking and premature color fading.</span>
                </div>
                <div className="v-check-item">
                  <CheckCircle2 size={18} />
                  <span><strong>Breathable Moisture Barrier:</strong> Prevents rain penetration while allowing internal masonry vapor to vent.</span>
                </div>
                <div className="v-check-item">
                  <CheckCircle2 size={18} />
                  <span><strong>Efflorescence Resistance:</strong> Specifically formulated for local brick and plaster alkalinity.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="v-section" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading
            label="Plant Timeline"
            title="Our Manufacturing Journey."
            description="From initial factory foundations in Tarakeshwar to an active architectural coatings plant."
          />
          <div className="v-timeline" style={{ marginTop: 44 }}>
            {TIMELINE.map((item, i) => (
              <motion.div className="v-timeline-item" key={i} {...fadeUp(i * 0.08)}>
                <div className="v-timeline-marker">
                  <div className="v-timeline-dot" />
                  {i < TIMELINE.length - 1 && <div className="v-timeline-line" />}
                </div>
                <div className="v-timeline-content">
                  <div className="v-timeline-year">
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: 20, marginBottom: 8, color: "var(--forest-dark)" }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--charcoal-soft)", lineHeight: 1.65 }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Snapshot / Key Figures */}
      <section className="v-shell" style={{ padding: "64px 0" }}>
        <div className="v-stats" style={{ marginBottom: 0 }}>
          <div className="v-stats-grid v-stats-grid-3">
            <div>
              <div className="v-stat-num">100%</div>
              <div className="v-stat-label">In-House Kathmandu Synthesis</div>
            </div>
            <div>
              <div className="v-stat-num">0% Lead</div>
              <div className="v-stat-label">Zero Heavy Metal Formulations</div>
            </div>
            <div>
              <div className="v-stat-num">1L – 20L</div>
              <div className="v-stat-label">Contractor & Residential Packs</div>
            </div>
          </div>
        </div>
      </section>

      <section className="v-shell v-about-dealer-section" aria-labelledby="about-dealer-title">
        <div className="v-section-head">
          <div className="v-section-label">Grow with King Paints</div>
          <h2 id="about-dealer-title">Become a Dealer / Partner</h2>
          <p>Join our growing network of hardware stores, contractors, and paint specialists across Nepal.</p>
        </div>
        <DealerApplicationForm />
      </section>

      {/* CTA Band */}
      <section className="v-shell" style={{ paddingBottom: 96 }}>
        <motion.div
          className="v-cta-band"
          {...fadeUp(0)}
        >
          <div>
            <h2>Have questions about our facility or bulk supply?</h2>
            <p>
              Call Founders Krishna Bahadur Adhikari (<a href={getPhoneHref(FOUNDERS[0].phone)}><strong>{formatNepalPhone(FOUNDERS[0].phone)}</strong></a>) or Ujjwal Adhikari (<a href={getPhoneHref(FOUNDERS[1].phone)}><strong>{formatNepalPhone(FOUNDERS[1].phone)}</strong></a>) for factory-direct inquiries.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="https://wa.me/9779851182340?text=Hello%20King%20Paints%20Nepal,%20I'd%20like%20to%20know%20more%20about%20your%20products%20and%20factory%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="v-about-wa-cta"
            >
              <MessageSquare size={16} /> WhatsApp Us
            </a>
            <Button variant="outline-light" onClick={() => go("contact")}>
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
