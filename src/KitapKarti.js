import React from "react";

function KitapKarti({ id, baslik, yazar, kategori, favoriler, setFavoriler }) {
  const favoriMi = favoriler.includes(id);

  const toggleFavori = () => {
    if (favoriMi) {
      setFavoriler(favoriler.filter((f) => f !== id));
    } else {
      setFavoriler([...favoriler, id]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#FFE082",
        borderRadius: "12px",
        padding: "12px",
        marginBottom: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#3E3E3E",
      }}
    >
      <div>
        <strong>{baslik}</strong>
        <p style={{ margin: 0, fontSize: "14px" }}>
          {yazar} – {kategori}
        </p>
      </div>
      <button
        onClick={toggleFavori}
        style={{
          backgroundColor: favoriMi ? "#FFB74D" : "#FFE082",
          border: "none",
          borderRadius: "8px",
          padding: "6px 12px",
          cursor: "pointer",
          color: "#3E3E3E",
          fontWeight: "bold",
        }}
      >
        {favoriMi ? "★ Favoride" : "☆ Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;