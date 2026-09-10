import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function DealerCard({ dealer }) {
  return (
    <div className="v-dealer-card">
      <div>
        <div className="v-dealer-city">{dealer.location}</div>
        <div className="v-dealer-name">{dealer.name}</div>
      </div>
      <div className="v-dealer-row"><MapPin size={16} />{dealer.address}</div>
      <div className="v-dealer-row"><Phone size={16} />{dealer.phone}</div>
    </div>
  );
}
