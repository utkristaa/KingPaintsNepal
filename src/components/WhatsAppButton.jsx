import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../data/site.js";
import Button from "./Button.jsx";

export default function WhatsAppButton({ variant = "outline", size = "md", message, label = "WhatsApp Us" }) {
  return (
    <Button
      as="a"
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      icon={MessageCircle}
    >
      <span>{label}</span>
    </Button>
  );
}
