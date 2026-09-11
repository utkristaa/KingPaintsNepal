import React, { useState } from "react";
import Button from "./Button.jsx";

const INITIAL_FORM = {
  businessName: "",
  contactPerson: "",
  email: "",
  phone: "",
  district: "",
  municipality: "",
  hardwareStore: "",
  monthlyVolume: "",
};

export default function DealerApplicationForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  const nextStep = () => setStep((current) => Math.min(3, current + 1));
  const previousStep = () => setStep((current) => Math.max(1, current - 1));

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.contactPerson, businessName: form.businessName, email: form.email, phone: form.phone, location: `${form.municipality}, ${form.district}`, message: `Existing hardware store: ${form.hardwareStore}. Estimated monthly volume: ${form.monthlyVolume}.` }) })
      .then(async (response) => { if (!response.ok) throw new Error("Unable to submit application"); setSubmitted(true); })
      .catch(() => alert("We could not submit your application. Please contact our team directly."));
  };

  if (submitted) {
    return <div className="v-dealer-success" role="status">Thank you. Our partnerships team will review your details and contact you shortly.</div>;
  }

  return (
    <form className="v-dealer-form" onSubmit={handleSubmit}>
      <div className="v-dealer-form-progress" aria-label={`Dealer application step ${step} of 3`}>
        {["Business", "Location", "Capacity"].map((label, index) => <span key={label} className={step >= index + 1 ? "active" : ""}>{index + 1}. {label}</span>)}
      </div>

      {step === 1 && <div className="v-dealer-form-grid">
        <div className="v-field"><label htmlFor="dealer-business-name">Business Name</label><input id="dealer-business-name" required value={form.businessName} onChange={updateField("businessName")} /></div>
        <div className="v-field"><label htmlFor="dealer-contact-person">Contact Person</label><input id="dealer-contact-person" required value={form.contactPerson} onChange={updateField("contactPerson")} /></div>
        <div className="v-field"><label htmlFor="dealer-email">Email</label><input id="dealer-email" type="email" required value={form.email} onChange={updateField("email")} /></div>
        <div className="v-field"><label htmlFor="dealer-phone">Phone</label><input id="dealer-phone" inputMode="tel" required value={form.phone} onChange={updateField("phone")} placeholder="+977 98X-XXXXXXX" /></div>
      </div>}

      {step === 2 && <div className="v-dealer-form-grid">
        <div className="v-field"><label htmlFor="dealer-district">District</label><input id="dealer-district" required value={form.district} onChange={updateField("district")} placeholder="e.g. Kathmandu" /></div>
        <div className="v-field"><label htmlFor="dealer-municipality">Municipality / Area</label><input id="dealer-municipality" required value={form.municipality} onChange={updateField("municipality")} placeholder="e.g. Tarkeshwor" /></div>
      </div>}

      {step === 3 && <div className="v-dealer-form-grid">
        <fieldset className="v-field v-radio-field"><legend>Existing Hardware Store</legend><label><input type="radio" name="hardwareStore" value="Yes" required checked={form.hardwareStore === "Yes"} onChange={updateField("hardwareStore")} /> Yes</label><label><input type="radio" name="hardwareStore" value="No" checked={form.hardwareStore === "No"} onChange={updateField("hardwareStore")} /> No</label></fieldset>
        <div className="v-field"><label htmlFor="dealer-monthly-volume">Estimated Monthly Volume</label><select id="dealer-monthly-volume" required value={form.monthlyVolume} onChange={updateField("monthlyVolume")}><option value="">Select volume</option><option>Under 100 litres</option><option>100-500 litres</option><option>500-1,000 litres</option><option>Over 1,000 litres</option></select></div>
      </div>}

      <div className="v-dealer-form-actions">
        {step > 1 && <Button variant="outline" type="button" onClick={previousStep}>Back</Button>}
        {step < 3 ? <Button variant="primary" type="button" onClick={nextStep}>Continue</Button> : <Button variant="primary" type="submit">Submit Partnership Enquiry</Button>}
      </div>
    </form>
  );
}
