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
              {SITE.name} manufactures 100% of the paints it produces, from our facility in {SITE.factory.line2.replace(", Nepal", "")}.
            </p>
            <div style={{ marginTop: 18 }}>
              <WhatsAppButton size="sm" />
            </div>
            <div className="v-footer-social">
              <a className="v-social-btn" href={SITE.social.facebook.startsWith("[") ? "#" : SITE.social.facebook} aria-label="Facebook"><Facebook size={16} /></a>
              <a className="v-social-btn" href={SITE.social.instagram.startsWith("[") ? "#" : SITE.social.instagram} aria-label="Instagram"><Instagram size={16} /></a>
              <a className="v-social-btn" href={SITE.social.linkedin.startsWith("[") ? "#" : SITE.social.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>
          <div>
            <div className="v-footer-col-title">Navigation</div>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href="#" className="v-footer-link" onClick={(e) => { e.preventDefault(); go(item.id); }}>{item.label}</a>
            ))}
          </div>
          <div>
            <div className="v-footer-col-title">Products</div>
            {CATEGORIES.slice(0, 5).map((cat) => (
              <a key={cat} href="#" className="v-footer-link" onClick={(e) => { e.preventDefault(); go("products"); }}>{cat}</a>
            ))}
          </div>
          <div>
            <div className="v-footer-col-title">Contact</div>
            <div className="v-footer-contact-row"><MapPin size={16} />{SITE.factory.full}</div>
            <div className="v-footer-contact-row"><Phone size={16} />{SITE.phones.join(" / ")}</div>
            <div className="v-footer-contact-row"><Mail size={16} />{SITE.email}</div>
          </div>
        </div>
        <div className="v-footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span>Manufactured in Kathmandu, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
