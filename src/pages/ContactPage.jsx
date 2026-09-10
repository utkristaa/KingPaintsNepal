import React, { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { SITE, ENQUIRY_SUBJECTS } from "../data/site.js";
import Button from "../components/Button.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import SafeImage from "../components/SafeImage.jsx";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", subject: ENQUIRY_SUBJECTS[0], message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

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
      phone: sanitizeInput(form.phone),
      subject: sanitizeInput(form.subject),
      message: sanitizeInput(form.message),
      consent: form.consent,
    };

    console.log("Sanitized submission package:", cleanForm);
    setSubmitted(true);
  };

  return (
    <div className="v-shell">
      <div className="v-page-header">
        <h1>Contact Us</h1>
        <p>Product enquiries, dealer and distributor enquiries, bulk orders, project requirements, or general questions — send us a message and our team will get back to you.</p>
      </div>

      <div className="v-contact-grid">
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
              <div className="v-info-val">{SITE.phones[0]}<br />{SITE.phones[1]}</div>
            </div>
          </div>
          {SITE.email && <div className="v-info-row">
            <div className="v-info-icon"><Mail size={19} /></div>
            <div>
              <div className="v-info-title">Email</div>
              <div className="v-info-val">{SITE.email}</div>
            </div>
          </div>}
          <div style={{ marginTop: 4 }}>
            <WhatsAppButton />
          </div>
          <div className="v-map-strip">
            <SafeImage src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=900&q=80" alt="Manufacturing facility building" />
          </div>
        </div>

        <div className="v-form-card">
          {submitted && (
            <div className="v-success-note">
              <CheckCircle2 size={18} /> This form does not transmit messages yet. Please use the phone or WhatsApp options to contact the team directly.
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
            </div>
            <div className="v-form-grid">
              <div className="v-field">
                <label htmlFor="subject">Subject</label>
                <select id="subject" value={form.subject} onChange={handleChange("subject")}>
                  {ENQUIRY_SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
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
      </div>
    </div>
  );
}
