import React from "react";

export default function Recommendations({ onOpen }) {
  const sample = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxMV5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Year: "2010",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNmYwYy00ZDFhLThmNTAtZDYxNjQ5ZTA1YjI1XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_SX300.jpg",
      Year: "1999",
    },
    {
      imdbID: "tt0468569",
      Title: "The Dark Knight",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMDU2Mw@@._V1_SX300.jpg",
      Year: "2008",
    },
  ];

  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={{ margin: "8px 0" }}>🎬 Recommended Movies</h2>
      <div
        className="rec-row"
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(160px,1fr)",
          gap: 12,
          overflowX: "auto",
          paddingBottom: 6,
        }}
      >
        {sample.map((m) => (
          <article
            key={m.imdbID}
            className="card"
            style={{
              minWidth: 180,
              cursor: "pointer",
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            onClick={() => onOpen(m.imdbID)}
          >
            <img
              src={m.Poster}
              alt={m.Title}
              loading="lazy"
              style={{
                height: 220,
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <div className="card-meta" style={{ padding: "6px 8px" }}>
              <h3 style={{ fontSize: 14, margin: 0 }}>{m.Title}</h3>
              <p style={{ fontSize: 12, margin: 0, opacity: 0.7 }}>{m.Year}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
