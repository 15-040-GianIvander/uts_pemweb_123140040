import React, { useState } from "react";

export default function SearchForm({ onSearch, currentSort = "relevance", recent = [] }) {
  const [q, setQ] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState(currentSort || "relevance");

  function submit(e) {
    e.preventDefault();
    if (!q.trim()) return;
    onSearch(q.trim(), year.trim(), sort);
  }

  return (
    <>
      <form className="search-form" onSubmit={submit} noValidate>
        <input
          type="text"
          placeholder="Masukkan judul film..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          required
          minLength={2}
        />
        <input
          type="number"
          placeholder="Tahun (optional)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min="1900"
          max={new Date().getFullYear()}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="title-asc">Title A→Z</option>
          <option value="title-desc">Title Z→A</option>
          <option value="year-desc">Year ↓</option>
          <option value="year-asc">Year ↑</option>
        </select>
        <button type="submit">Cari</button>
      </form>

      {/* ⬇️ Tambahan: Recent search chips */}
      {Array.isArray(recent) && recent.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {recent.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => onSearch(term, "", "relevance")}
              style={{
                background: "#e6f0ff",
                color: "#0b74de",
                borderRadius: "999px",
                padding: "6px 10px",
                border: "1px solid rgba(11,116,222,0.2)",
                cursor: "pointer",
              }}
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
