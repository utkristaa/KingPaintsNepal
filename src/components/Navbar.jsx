import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon, MessageCircle } from "lucide-react";
import { NAV_ITEMS } from "../data/nav.js";
import { SITE, formatNepalPhone, getPhoneHref, getWhatsAppLink } from "../data/site.js";
import Button from "./Button.jsx";

const EASE_EXPO = [0.16, 1, 0.3, 1];

export default function Navbar({ page, go, menuOpen, setMenuOpen, darkMode, toggleDark }) {
  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <>
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
              <button
                type="button"
                className="v-theme-toggle"
                onClick={toggleDark}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={17} strokeWidth={2.2} /> : <Moon size={17} strokeWidth={2.2} />}
              </button>

              <Button variant="primary" size="sm" onClick={() => go("contact")}>Get in Touch</Button>
              <button
                className="v-nav-burger"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <Menu size={26} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer rendered outside sticky header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="v-mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: EASE_EXPO }}
          >
            <div className="v-mobile-menu-top">
              <a
                href="/"
                className="v-logo"
                onClick={(e) => { e.preventDefault(); go("home"); setMenuOpen(false); }}
              >
                KING PAINTS<span>.</span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  type="button"
                  className="v-theme-toggle"
                  onClick={toggleDark}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <Sun size={17} strokeWidth={2.2} /> : <Moon size={17} strokeWidth={2.2} />}
                </button>
                <button
                  className="v-mobile-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <nav className="v-mobile-links-list" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item, index) => {
                const isActive = page === item.id || (page === "product-detail" && item.id === "products");
                return (
                  <motion.a
                    key={item.id}
                    href={item.id === "home" ? "/" : `/${item.id}`}
                    className={`v-mobile-link ${isActive ? "active" : ""}`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.25, ease: EASE_EXPO }}
                    onClick={(e) => { e.preventDefault(); go(item.id); setMenuOpen(false); }}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="v-mobile-link-badge">Current</span>}
                  </motion.a>
                );
              })}
            </nav>

            <div className="v-mobile-menu-footer">
              <a href={getPhoneHref(SITE.phones[0])} className="v-mobile-phone-link">
                <Phone size={17} />
                <span>{formatNepalPhone(SITE.phones[0])}</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="v-mobile-wa-link"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <Button
                variant="primary"
                size="md"
                onClick={() => { go("contact"); setMenuOpen(false); }}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
