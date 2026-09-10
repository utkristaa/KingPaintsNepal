import React from "react";
import { motion } from "framer-motion";
import { Factory, Flame, ShieldCheck, Boxes, ChevronRight } from "lucide-react";
import { PRODUCTS } from "../data/products.js";
import Button from "../components/Button.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SafeImage from "../components/SafeImage.jsx";

const EASE_EXPO = [0.16, 1, 0.3, 1];

export default function HomePage({ go, viewProduct }) {
  const featuredProducts = PRODUCTS.slice(0, 3);

  // Staggered variants for typography
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const textLineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: EASE_EXPO,
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE_EXPO,
      },
    },
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: EASE_EXPO,
      },
    },
  };

  return (
    <>
      {/* Hero */}
      <section className="v-hero">
        <div className="v-hero-ambient" />
        <div className="v-hero-ambient-left" />

        <div className="v-shell v-hero-grid">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textLineVariants} className="v-badge">
              <span className="v-badge-dot" />Manufactured in Kathmandu, Nepal
            </motion.div>

            <h1>
              <span className="v-mask-wrap">
                <motion.span variants={textLineVariants} style={{ display: "inline-block" }}>
                  Paint, Manufactured
                </motion.span>
              </span>
              <br />
              <span className="v-mask-wrap">
                <motion.span variants={textLineVariants} style={{ display: "inline-block" }}>
                  In-House in Kathmandu.
                </motion.span>
              </span>
            </h1>

            <motion.p variants={textLineVariants} className="v-hero-tagline">
              Beyond Your Imagination...
            </motion.p>

            <motion.p variants={textLineVariants} className="v-hero-sub">
              King Paints Nepal develops a locally manufactured paint range from its facility in Tarakeshwar Municipality, Kathmandu.
            </motion.p>

            <motion.div variants={textLineVariants} className="v-hero-ctas">
              <Button variant="primary" onClick={() => go("products")}>Explore Products</Button>
              <WhatsAppButton />
            </motion.div>
          </motion.div>

          <div className="v-hero-collage">
            {/* Top right floating architectural exterior */}
            <motion.div
              className="v-hc-img v-hc-1"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [-3, 3, -3],
              }}
              transition={{
                opacity: { duration: 0.9, ease: EASE_EXPO },
                scale: { duration: 0.9, ease: EASE_EXPO },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <SafeImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75" alt="A freshly painted building exterior" />
            </motion.div>

            {/* Bottom left floating manufacturing facility */}
            <motion.div
              className="v-hc-img v-hc-2"
              initial={{ opacity: 0, scale: 0.92, y: 36 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [3, -3, 3],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.2, ease: EASE_EXPO },
                scale: { duration: 1, delay: 0.2, ease: EASE_EXPO },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <SafeImage src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=75" alt="Inside a paint manufacturing facility" />
            </motion.div>

            {/* Glassmorphic floating metadata tag */}
            <motion.div
              className="v-hc-card"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: [-2, 2, -2],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4, ease: EASE_EXPO },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="v-hc-card-title">Made in Kathmandu</div>
              <div className="v-hc-card-sub">Paint made for projects across Nepal</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats with staggered viewport counter cards — Striking Colorful Cards */}
      <section className="v-shell" style={{ padding: "48px 0 20px" }}>
        <motion.div
          className="v-stats-cards-grid"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            { num: "100% In-House", label: "Tarakeshwar plant synthesis", accent: "#BE4B2A", bg: "linear-gradient(145deg, #FFFFFF 0%, #FAF0EC 100%)", border: "#F0CFC5" },
            { num: "0% Lead", label: "Zero heavy metals, family-safe", accent: "#C78B2A", bg: "linear-gradient(145deg, #FFFFFF 0%, #FAF5E8 100%)", border: "#EEDBB7" },
            { num: "≥ 98.5%", label: "Lab-verified two-coat opacity", accent: "#1B5276", bg: "linear-gradient(145deg, #FFFFFF 0%, #EFF5F9 100%)", border: "#C4DCEB" },
            { num: "1L – 20L", label: "Consumer & contractor buckets", accent: "#2A6B44", bg: "linear-gradient(145deg, #FFFFFF 0%, #EEF6F1 100%)", border: "#C5E1CF" },
          ].map((s) => (
            <motion.div
              key={s.num}
              variants={statItemVariants}
              style={{
                background: s.bg,
                border: `1.5px solid ${s.border}`,
                borderRadius: 18,
                padding: "24px 26px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.03)",
              }}
              whileHover={{ y: -4, borderColor: s.accent, boxShadow: `0 12px 24px -6px ${s.accent}25` }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.accent }} />
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 32, color: s.accent, fontWeight: 700, marginBottom: 4 }}>
                {s.num}
              </div>
              <div style={{ fontSize: 13.5, color: "var(--charcoal-soft)", fontWeight: 500 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured products */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-section-head-row" style={{ marginBottom: 48 }}>
            <SectionHeading
              label="Featured Products"
              title="Architectural Coatings & Emulsions."
              description="Explore paint categories manufactured at our Kathmandu facility, then contact us for project-specific specifications."
            />
            <Button variant="ghost" onClick={() => go("products")}>
              View all products <ChevronRight size={16} style={{ display: "inline", verticalAlign: "middle" }} />
            </Button>
          </div>
          <div className="v-grid-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onView={viewProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — manufacturing & technology positioning with striking colors */}
      <section className="v-section-tight" style={{ background: "var(--ivory-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="v-shell">
          <SectionHeading
            label="Manufacturing & Technology"
            title="Why our paint performs differently."
            description="Our approach starts at the molecular level, not at the mixing bucket."
          />
          <motion.div
            className="v-feature-grid"
            variants={featureContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Factory,
                title: "In-House Resin Synthesis",
                desc: "Our Kathmandu facility supports local formulation and polymer production for residential, commercial, and project enquiries.",
                accent: "#BE4B2A",
                bg: "linear-gradient(145deg, #FFFFFF 0%, #FAF0EC 100%)",
                border: "#F0CFC5",
              },
              {
                icon: Flame,
                title: "Thermal Cross-Linking",
                desc: "We engineer paint solutions according to surface temperature, moisture exposure, and durability requirements.",
                accent: "#C78B2A",
                bg: "linear-gradient(145deg, #FFFFFF 0%, #FAF5E8 100%)",
                border: "#EEDBB7",
              },
              {
                icon: ShieldCheck,
                title: "Climate-Specific Formulation",
                desc: "Formulated specifically for Nepal's harsh UV index, monsoon dampness, and masonry characteristics.",
                accent: "#1B5276",
                bg: "linear-gradient(145deg, #FFFFFF 0%, #EFF5F9 100%)",
                border: "#C4DCEB",
              },
              {
                icon: Boxes,
                title: "Manufactured, Not Resold",
                desc: "King Paints Nepal manufactures directly at our Tarakeshwar plant with full chemical quality control.",
                accent: "#2A6B44",
                bg: "linear-gradient(145deg, #FFFFFF 0%, #EEF6F1 100%)",
                border: "#C5E1CF",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={featureItemVariants}
                  className="v-feature"
                  style={{
                    background: f.bg,
                    border: `1.5px solid ${f.border}`,
                    borderRadius: 20,
                    padding: "28px 24px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.03)",
                  }}
                  whileHover={{ y: -5, borderColor: f.accent, boxShadow: `0 14px 28px -6px ${f.accent}20` }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: f.accent }} />
                  <motion.div
                    className="v-feature-icon"
                    style={{ background: f.accent, color: "#FFFFFF", boxShadow: `0 4px 12px ${f.accent}40`, marginBottom: 18 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <h3 style={{ fontSize: 19, marginBottom: 8, color: "var(--forest-dark)" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--charcoal-soft)", lineHeight: 1.6 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="v-shell" style={{ paddingBottom: 96 }}>
        <motion.div
          className="v-cta-band"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE_EXPO }}
        >
          <div>
            <h2>Have a project or bulk order in mind?</h2>
            <p>Reach out by phone, WhatsApp, or the contact form and our team will get back to you.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <WhatsAppButton variant="light" />
            <Button variant="outline-light" onClick={() => go("contact")}>Get in Touch</Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

