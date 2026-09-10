import React from "react";
import { Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="v-testimonial-card">
      <Quote size={22} className="v-testimonial-icon" />
      <p className="v-testimonial-quote">{testimonial.quote}</p>
      <div className="v-testimonial-name">{testimonial.name}</div>
      <div className="v-testimonial-detail">{testimonial.detail}</div>
    </div>
  );
}
