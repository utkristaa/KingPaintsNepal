import React from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS } from "../data/nav.js";
import { SITE } from "../data/site.js";
import Button from "./Button.jsx";

export default function Navbar({ page, go, menuOpen, setMenuOpen }) {
  return (
    <header className="v-nav-wrap">
      <div className="v-shell">
        <nav className="v-nav">
          <a href="/" onClick={(e) => { e.preventDefault(); go("home"); }} className="v-logo">
            KING PAINTS<span>.</span>
          </a>
          <div className="v-nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id === "home" ? "/" : `/${item.id}`}
                className={`v-nav-link ${page === item.id || (page === "product-detail" && item.id === "products") ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); go(item.id); }}
              >
                {item.label}
              </a>
            ))}
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

      {menuOpen && (
        <div className="v-mobile-menu">
          <div className="v-mobile-menu-top">
            <span className="v-logo">KING PAINTS<span>.</span></span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.id === "home" ? "/" : `/${item.id}`}
              className="v-mobile-link"
              onClick={(e) => { e.preventDefault(); go(item.id); setMenuOpen(false); }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="v-nav-phone"><Phone size={16} /> {SITE.phones[0]}</div>
            <Button variant="primary" onClick={() => { go("contact"); setMenuOpen(false); }}>Get in Touch</Button>
          </div>
        </div>
      )}
    </header>
  );
}
