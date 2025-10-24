import React from "react";

function KategoriFiltre({ kategori, setKategori }) {
  return (
    <select
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #008080",
        backgroundColor: "#f5e6ff",
        color: "#008080",
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