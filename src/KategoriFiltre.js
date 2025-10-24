import React from "react";

function KategoriFiltre({ kategori, setKategori }) {
  return (
    <select
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #FF6F00",
        backgroundColor: "#FFF8E1",
        color: "#3E3E3E",
        fontWeight: "bold",
      }}
    >
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Tasarım">Tasarım</option>
    </select>
  );
}

export default KategoriFiltre;