import React from "react";

function FavoriPaneli({ favoriler, setFavoriler }) {
  const kitapBilgileri = [
    { id: 1, baslik: "React'e Giriş" },
    { id: 2, baslik: "İleri JavaScript" },
    { id: 3, baslik: "Veri Yapıları" },
    { id: 4, baslik: "Algoritmalar" },
    { id: 5, baslik: "UI/UX Temelleri" },
  ];

  const favoriKitaplar = kitapBilgileri.filter((k) => favoriler.includes(k.id));

  return (
    <div
      style={{
        width: "35%",
        backgroundColor: "#f5e6ff",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        color: "#008080",
      }}
    >
      <h3 style={{ textAlign: "center" }}>💙 Favoriler ({favoriler.length})</h3>
      {favoriKitaplar.length === 0 ? (
        <p style={{ textAlign: "center" }}>Henüz favori kitap yok.</p>
      ) : (
        favoriKitaplar.map((k) => (
          <div
            key={k.id}
            style={{
              backgroundColor: "#fff",
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
                backgroundColor: "#b2dfdb",
                border: "none",
                borderRadius: "6px",
                padding: "4px 8px",
                cursor: "pointer",
                color: "#008080",
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