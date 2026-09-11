import React, { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { SITE, ENQUIRY_SUBJECTS, formatNepalPhone, getPhoneHref } from "../data/site.js";
import Button from "../components/Button.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import SafeImage from "../components/SafeImage.jsx";
import GoogleMap from "../components/GoogleMap.jsx";
import DealerApplicationForm from "../components/DealerApplicationForm.jsx";
import { saveLocalInquiry } from "../data/localInquiries.js";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", subject: ENQUIRY_SUBJECTS[0], message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const sanitizeInput = (str) => {
    if (typeof str !== "string") return "";
    return str
      .trim()
      .replace(/[<>]/g, "")
      .slice(0, 1000);
  };

  const handleChange = (field) => (e) => {
    const val = e.target.value;
    setForm((f) => ({ ...f, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number format if provided
    if (form.phone && !/^(?:\+?977[- ]?)?(?:9[78]\d{8}|0\d{1,2}[- ]?\d{6,7})$/.test(form.phone.trim())) {
      alert("Please enter a valid Nepali telephone or mobile number.");
      return;
    }

    const cleanForm = {
      name: sanitizeInput(form.name),
      email: sanitizeInput(form.email),
      phone: sanitizeInput(form.phone),
      subject: sanitizeInput(form.subject),
      location: sanitizeInput(form.location),
      message: sanitizeInput(form.message),
      consent: form.consent,
    };

    fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...cleanForm, message: `${cleanForm.subject}: ${cleanForm.message}` }) })
      .then(async (response) => { if (!response.ok) throw new Error("Unable to send enquiry"); setSubmitted(true); })
      .catch(() => {
        saveLocalInquiry(cleanForm);
        setSubmitted(true);
      });
  };

  return (
    <div className="v-shell">
      <div className="v-page-header">
        <h1>Contact Us</h1>
        <p>Product enquiries, dealer and distributor enquiries, bulk orders, project requirements, or general questions — send us a message and our team will get back to you.</p>
      </div>

      <div className="v-contact-tabs" role="tablist" aria-label="Contact options">
        <button type="button" role="tab" aria-selected={activeTab === "contact"} className={activeTab === "contact" ? "active" : ""} onClick={() => setActiveTab("contact")}>General Contact</button>
        <button type="button" role="tab" aria-selected={activeTab === "dealer"} className={activeTab === "dealer" ? "active" : ""} onClick={() => setActiveTab("dealer")}>Become a Dealer / Partner</button>
      </div>

      {activeTab === "contact" ? <div className="v-contact-grid">
        <div className="v-contact-info-card">
          <div className="v-info-row">
            <div className="v-info-icon"><MapPin size={19} /></div>
            <div>
              <div className="v-info-title">Factory Address</div>
              <div className="v-info-val">{SITE.factory.full}</div>
            </div>
          </div>
          <div className="v-info-row">
            <div className="v-info-icon"><Phone size={19} /></div>
            <div>
              <div className="v-info-title">Phone</div>
              <div className="v-info-val"><a href={getPhoneHref(SITE.phones[0])}>{formatNepalPhone(SITE.phones[0])}</a><br /><a href={getPhoneHref(SITE.phones[1])}>{formatNepalPhone(SITE.phones[1])}</a></div>
            </div>
          </div>
          {SITE.email && <div className="v-info-row">
            <div className="v-info-icon"><Mail size={19} /></div>
            <div>
              <div className="v-info-title">Email</div>
              <div className="v-info-val"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            </div>
          </div>}
          <div style={{ marginTop: 4 }}>
            <WhatsAppButton />
          </div>
          <div className="v-map-strip">
            <SafeImage src="/factory-location.webp" alt="King Paints Nepal factory in Tarkeshwor, Kathmandu" />
          </div>
        </div>

        <div className="v-form-card">
          {submitted && (
            <div className="v-success-note">
              <CheckCircle2 size={18} /> Your enquiry has been saved. Our team will review it and contact you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="v-form-grid">
              <div className="v-field">
                <label htmlFor="name">Name</label>
                <input id="name" required value={form.name} onChange={handleChange("name")} placeholder="Your full name" />
              </div>
              <div className="v-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" inputMode="tel" value={form.phone} onChange={handleChange("phone")} placeholder="98XXXXXXXX" />
              </div>
              <div className="v-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={handleChange("email")} placeholder="you@example.com" />
              </div>
              <div className="v-field">
                <label htmlFor="location">Location</label>
                <input id="location" required value={form.location} onChange={handleChange("location")} placeholder="District or municipality" />
              </div>
            </div>
            <div className="v-field" style={{ marginBottom: 18 }}>
              <label htmlFor="subject">Subject</label>
              <select id="subject" value={form.subject} onChange={handleChange("subject")}>
                {ENQUIRY_SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="v-field" style={{ marginBottom: 24 }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" required value={form.message} onChange={handleChange("message")} placeholder="Tell us a bit more..." />
            </div>
            <label className="v-consent">
              <input type="checkbox" required checked={form.consent} onChange={(e) => setForm((current) => ({ ...current, consent: e.target.checked }))} />
              <span>I have read the <a href="/privacy">Privacy Policy</a> and agree that King Paints Nepal may use these details to respond to my enquiry.</span>
            </label>
            <Button variant="primary" type="submit">Send Message</Button>
          </form>
        </div>
      </div> : <section className="v-dealer-application-panel" aria-labelledby="dealer-application-title">
        <div className="v-section-head">
          <div className="v-section-label">Partnerships across Nepal</div>
          <h2 id="dealer-application-title">Become a Dealer / Partner</h2>
          <p>Tell us about your business and our partnerships team will help you plan the right King Paints range for your market.</p>
        </div>
        <DealerApplicationForm />
      </section>}

      <section className="v-contact-map-section" aria-labelledby="factory-map-title">
        <div className="v-section-head-row">
          <div>
            <div className="v-eyebrow">Visit our factory</div>
            <h2 id="factory-map-title">King Paints Nepal Pvt. Ltd.</h2>
            <p>Bohorataar, Tarkeshwor, Kathmandu, Nepal</p>
          </div>
        </div>
        <GoogleMap className="v-factory-map" embed />
      </section>
    </div>
  );
}
