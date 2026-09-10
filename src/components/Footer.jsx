import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_ITEMS, CATEGORIES } from "../data/nav.js";
import { SITE } from "../data/site.js";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function Footer({ go }) {
  return (
    <footer className="v-footer">
      <div className="v-shell">
        <div className="v-footer-grid">
          <div>
            <div className="v-footer-logo">KING PAINTS<span>.</span></div>
            <p className="v-footer-desc">
              {SITE.name} develops a locally manufactured paint range from its facility in {SITE.factory.line2.replace(", Nepal", "")}.
            </p>
            <div style={{ marginTop: 18 }}>
              <WhatsAppButton size="sm" />
            </div>
            {Object.values(SITE.social).some(Boolean) && <div className="v-footer-social">
              {SITE.social.facebook && <a className="v-social-btn" href={SITE.social.facebook} aria-label="Facebook"><Facebook size={16} /></a>}
              {SITE.social.instagram && <a className="v-social-btn" href={SITE.social.instagram} aria-label="Instagram"><Instagram size={16} /></a>}
              {SITE.social.linkedin && <a className="v-social-btn" href={SITE.social.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a>}
            </div>}
          </div>
          <div>
            <div className="v-footer-col-title">Navigation</div>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={item.id === "home" ? "/" : `/${item.id}`} className="v-footer-link" onClick={(e) => { e.preventDefault(); go(item.id); }}>{item.label}</a>
            ))}
          </div>
          <div>
            <div className="v-footer-col-title">Products</div>
            {CATEGORIES.slice(0, 5).map((cat) => (
              <a key={cat} href="/products" className="v-footer-link" onClick={(e) => { e.preventDefault(); go("products"); }}>{cat}</a>
            ))}
          </div>
          <div>
            <div className="v-footer-col-title">Contact</div>
            <div className="v-footer-contact-row"><MapPin size={16} />{SITE.factory.full}</div>
            <div className="v-footer-contact-row"><Phone size={16} />{SITE.phones.join(" / ")}</div>
            {SITE.email && <div className="v-footer-contact-row"><Mail size={16} />{SITE.email}</div>}
          </div>
        </div>
        <div className="v-footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span>Based in Kathmandu, Nepal</span>
        </div>
        <div className="v-footer-legal" aria-label="Legal information">
          <a href="/privacy" onClick={(e) => { e.preventDefault(); go("privacy"); }}>Privacy Policy</a>
          <a href="/terms" onClick={(e) => { e.preventDefault(); go("terms"); }}>Terms and Conditions</a>
          <a href="/cookies" onClick={(e) => { e.preventDefault(); go("cookies"); }}>Cookie Policy</a>
          <a href="/refunds" onClick={(e) => { e.preventDefault(); go("refunds"); }}>Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
