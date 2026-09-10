import React, { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { SITE, ENQUIRY_SUBJECTS } from "../data/site.js";
import Button from "../components/Button.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: ENQUIRY_SUBJECTS[0], message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="v-info-row">
            <div className="v-info-icon"><Mail size={19} /></div>
            <div>
              <div className="v-info-title">Email</div>
              <div className="v-info-val">{SITE.email}</div>
            </div>
          </div>
          <div style={{ marginTop: 4 }}>
            <WhatsAppButton />
          </div>
          <div className="v-map-strip">
            <img src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=900&q=80" alt="Manufacturing facility building" />
          </div>
        </div>

        <div className="v-form-card">
          {submitted && (
            <div className="v-success-note">
              <CheckCircle2 size={18} /> Thanks — your message has been noted. Our team will be in touch shortly.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="v-form-grid">
              <div className="v-field">
                <label htmlFor="name">Name</label>
                <input id="name" required value={form.name} onChange={handleChange("name")} placeholder="Your full name" />
              </div>
              <div className="v-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={handleChange("email")} placeholder="you@example.com" />
              </div>
            </div>
            <div className="v-form-grid">
              <div className="v-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" value={form.phone} onChange={handleChange("phone")} placeholder="98XXXXXXXX" />
              </div>
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
            <Button variant="primary" type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
