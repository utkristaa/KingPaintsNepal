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
          Explore a curated set of colour families for planning your next project. Contact us to confirm availability
          and finish options before ordering.
        </p>
      </div>

      <div className="v-colour-toolbar">
        <div className="v-filter-row" style={{ padding: 0 }}>
          {COLOUR_FAMILIES.map((f) => (
            <button
              type="button"
              key={f}
              className={`v-filter-chip ${family === f ? "active" : ""}`}
              onClick={() => setFamily(f)}
              aria-pressed={family === f}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="v-search-box">
          <Search size={16} color="var(--charcoal-soft)" />
          <input
            type="text"
            aria-label="Search colours by name or code"
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
