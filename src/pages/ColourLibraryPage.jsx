import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { COLOURS, COLOUR_FAMILIES, FINISH_TYPES, USAGES } from "../data/colours.js";
import ColourCard from "../components/ColourCard.jsx";
import ColourQuickView from "../components/ColourQuickView.jsx";

const PAGE_SIZE = 48;

export default function ColourLibraryPage() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");
  const [finish, setFinish] = useState("All");
  const [usage, setUsage] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedColour, setSelectedColour] = useState(null);

  const filtered = useMemo(() => {
    return COLOURS.filter((c) => {
      const matchesFamily = family === "All" || c.family === family;
      const matchesFinish = finish === "All" || c.finish === finish;
      const matchesUsage = usage === "All" || c.usage === usage;
      const matchesQuery =
        query.trim() === "" ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.code.toLowerCase().includes(query.toLowerCase());
      return matchesFamily && matchesFinish && matchesUsage && matchesQuery;
    });
  }, [query, family, finish, usage]);

  useEffect(() => setPage(1), [query, family, finish, usage]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visibleColours = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="v-shell">
      <div className="v-page-header">
        <h1>Colour Library</h1>
        <p>
          Explore a curated set of colour families for planning your next project. Contact us to confirm availability
          and finish options before ordering.
        </p>
      </div>

      <div className="v-colour-toolbar v-colour-toolbar-expanded">
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
        <div className="v-colour-selects">
          <label>Finish <select value={finish} onChange={(e) => setFinish(e.target.value)} aria-label="Filter by finish type">{FINISH_TYPES.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>Usage <select value={usage} onChange={(e) => setUsage(e.target.value)} aria-label="Filter by usage">{USAGES.map((option) => <option key={option}>{option}</option>)}</select></label>
        </div>
      </div>

      <div className="v-colour-results-summary"><strong>{filtered.length.toLocaleString()}</strong> shades <span>Showing page {page} of {pageCount}</span></div>

      {filtered.length > 0 ? (
        <div className="v-colour-grid">
          {visibleColours.map((c) => (
            <ColourCard key={c.id} colour={c} onSelect={setSelectedColour} />
          ))}
        </div>
      ) : (
        <div className="v-empty-state">No colours match your search. Try a different name or code.</div>
      )}

      {pageCount > 1 && <nav className="v-pagination" aria-label="Colour library pages">
        <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1}>Previous</button>
        <span>Page {page} / {pageCount}</span>
        <button type="button" onClick={() => setPage((current) => Math.min(pageCount, current + 1))} disabled={page === pageCount}>Next</button>
      </nav>}

      {selectedColour && <ColourQuickView colour={selectedColour} onClose={() => setSelectedColour(null)} />}
    </div>
  );
}
