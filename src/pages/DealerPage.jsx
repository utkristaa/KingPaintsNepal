import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { DEALERS } from "../data/dealers.js";
import DealerCard from "../components/DealerCard.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import GoogleMap from "../components/GoogleMap.jsx";

export default function DealerPage() {
  const [query, setQuery] = useState("");
  const [activeDealerId, setActiveDealerId] = useState(DEALERS[0]?.id || null);

  const filtered = useMemo(() => {
    if (query.trim() === "") return DEALERS;
    return DEALERS.filter(
      (d) =>
        d.location.toLowerCase().includes(query.toLowerCase()) ||
        d.district.toLowerCase().includes(query.toLowerCase()) ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.address.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const selectDealer = (id) => setActiveDealerId(id);

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
        <div className="v-search-box" style={{ minWidth: "min(100%, 340px)" }}>
          <Search size={16} color="var(--charcoal-soft)" />
          <input
            type="text"
            aria-label="Search dealers by city, name, or area"
            placeholder="Search by city, dealer name, or area"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <WhatsAppButton size="sm" message="Hello King Paints Nepal, could you help me find a dealer near me?" />
      </div>

      <div className="v-locator-layout">
        <div className="v-locator-list" aria-label="Dealer results">
          {filtered.length > 0 ? filtered.map((dealer) => (
            <button
              type="button"
              key={dealer.id}
              className={`v-locator-item ${activeDealerId === dealer.id ? "active" : ""}`}
              onClick={() => selectDealer(dealer.id)}
              aria-pressed={activeDealerId === dealer.id}
            >
              <DealerCard dealer={dealer} />
            </button>
          )) : (
            <div className="v-empty-state">No dealer listings match that search. Please contact us for local availability.</div>
          )}
        </div>
        <GoogleMap locations={filtered} activeLocationId={activeDealerId} onMarkerSelect={selectDealer} />
      </div>
    </div>
  );
}
