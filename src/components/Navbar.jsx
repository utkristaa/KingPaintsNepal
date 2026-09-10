import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS } from "../data/nav.js";
import { SITE } from "../data/site.js";
import Button from "./Button.jsx";

const EASE_EXPO = [0.16, 1, 0.3, 1];

export default function Navbar({ page, go, menuOpen, setMenuOpen }) {
  return (
    <header className="v-nav-wrap">
      <div className="v-shell">
        <nav className="v-nav">
          <motion.a
            href="/"
            onClick={(e) => { e.preventDefault(); go("home"); }}
            className="v-logo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            KING PAINTS<span>.</span>
          </motion.a>

          <div className="v-nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = page === item.id || (page === "product-detail" && item.id === "products");
              return (
                <a
                  key={item.id}
                  href={item.id === "home" ? "/" : `/${item.id}`}
                  className={`v-nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); go(item.id); }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: "-4px",
                        height: "2.5px",
                        background: "var(--gold)",
                        borderRadius: "2px",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="v-nav-right">
            <div className="v-nav-phone">
              <Phone size={16} />
              {SITE.phones[0]}
            </div>
            <Button variant="primary" size="sm" onClick={() => go("contact")}>Get in Touch</Button>
            <button className="v-nav-burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="v-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
          >
            <div className="v-mobile-menu-top">
              <span className="v-logo">KING PAINTS<span>.</span></span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.id === "home" ? "/" : `/${item.id}`}
                className="v-mobile-link"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.3, ease: EASE_EXPO }}
                onClick={(e) => { e.preventDefault(); go(item.id); setMenuOpen(false); }}
              >
                {item.label}
              </motion.a>
            ))}
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="v-nav-phone"><Phone size={16} /> {SITE.phones[0]}</div>
              <Button variant="primary" onClick={() => { go("contact"); setMenuOpen(false); }}>Get in Touch</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
