import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { DEALERS } from "../data/dealers.js";
import DealerCard from "../components/DealerCard.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

export default function DealerPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (query.trim() === "") return DEALERS;
    return DEALERS.filter(
      (d) =>
        d.location.toLowerCase().includes(query.toLowerCase()) ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.address.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="v-shell">
      <div className="v-page-header">
        <h1>Find a Dealer</h1>
        <p>
          Our dealer directory is being expanded. Contact us directly and the King Paints Nepal team can help you
          find the nearest source for your project.
        </p>
      </div>

      <div className="v-colour-toolbar" style={{ justifyContent: "flex-start" }}>
        <div className="v-search-box" style={{ minWidth: 340 }}>
          <Search size={16} color="var(--charcoal-soft)" />
          <input
            type="text"
            placeholder="Search by city, dealer name, or area"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <WhatsAppButton size="sm" message="Hello King Paints Nepal, could you help me find a dealer near me?" />
      </div>

      {filtered.length > 0 ? (
        <div className="v-dealer-grid">
          {filtered.map((d) => (
            <DealerCard key={d.id} dealer={d} />
          ))}
        </div>
      ) : (
        <div className="v-empty-state">No dealer listings match that search. Please contact us for local availability.</div>
      )}
    </div>
  );
}
