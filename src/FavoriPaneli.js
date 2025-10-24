import React from "react";

function FavoriPaneli({ kitaplar, favoriler, setFavoriler }) {
  const favoriKitaplar = kitaplar.filter((k) => favoriler.includes(k.id));

  return (
    <div
      style={{
        width: "35%",
        backgroundColor: "#FFF3B0",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        color: "#3E3E3E",
      }}
    >
      <h3 style={{ textAlign: "center", color: "#FF6F00" }}>
        💛 Favoriler ({favoriler.length})
      </h3>
      {favoriKitaplar.length === 0 ? (
        <p style={{ textAlign: "center" }}>Henüz favori kitap yok.</p>
      ) : (
        favoriKitaplar.map((k) => (
          <div
            key={k.id}
            style={{
              backgroundColor: "#FFF8E1",
              padding: "8px",
              borderRadius: "8px",
              marginBottom: "8px",
              textAlign: "center",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            {k.baslik}
            <button
              onClick={() => setFavoriler(favoriler.filter((f) => f !== k.id))}
              style={{
                marginLeft: "10px",
                backgroundColor: "#FFD54F",
                border: "none",
                borderRadius: "6px",
                padding: "4px 8px",
                cursor: "pointer",
                color: "#3E3E3E",
                fontWeight: "bold",
              }}
            >
              Kaldır
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriPaneli;