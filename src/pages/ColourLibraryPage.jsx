import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { COLOURS, COLOUR_FAMILIES } from "../data/colours.js";
import ColourCard from "../components/ColourCard.jsx";

export default function ColourLibraryPage() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");

  const filtered = useMemo(() => {
    return COLOURS.filter((c) => {
      const matchesFamily = family === "All" || c.family === family;
      const matchesQuery =
        query.trim() === "" ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.code.toLowerCase().includes(query.toLowerCase());
      return matchesFamily && matchesQuery;
    });
  }, [query, family]);

  return (
    <div className="v-shell">
      <div className="v-page-header">
        <h1>Colour Library</h1>
        <p>
          Our final colour catalogue has not been published yet. The grid below previews the layout with placeholder
          swatches, names, and codes — it will be replaced with the real King Paints Nepal colour range.
        </p>
      </div>

      <div className="v-colour-toolbar">
        <div className="v-filter-row" style={{ padding: 0 }}>
          {COLOUR_FAMILIES.map((f) => (
            <button
              key={f}
              className={`v-filter-chip ${family === f ? "active" : ""}`}
              onClick={() => setFamily(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="v-search-box">
          <Search size={16} color="var(--charcoal-soft)" />
          <input
            type="text"
            placeholder="Search by name or code"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="v-colour-grid">
          {filtered.map((c, i) => (
            <ColourCard key={i} colour={c} />
          ))}
        </div>
      ) : (
        <div className="v-empty-state">No colours match your search. Try a different name or code.</div>
      )}
    </div>
  );
}
