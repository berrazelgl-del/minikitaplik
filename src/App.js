import React, { useState, useEffect } from "react";
import AramaCubugu from "./AramaCubugu";
import KategoriFiltre from "./KategoriFiltre";
import KitapListe from "./KitapListe";
import FavoriPaneli from "./FavoriPaneli";

function App() {
  const [aramaMetni, setAramaMetni] = useState(
    localStorage.getItem("aramaMetni") || ""
  );
  const [kategori, setKategori] = useState("Tümü");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  const kitaplar = [
    { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web" },
    { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web" },
    { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS" },
    { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS" },
    { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım" },
  ];


  const filtreliKitaplar = kitaplar.filter(
    (k) =>
      (kategori === "Tümü" || k.kategori === kategori) &&
      k.baslik.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e6ccff",
        padding: "20px",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        color: "#008080",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📚 Mini Kitaplık</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <KitapListe
          kitaplar={filtreliKitaplar}
          favoriler={favoriler}
          setFavoriler={setFavoriler}
        />
        <FavoriPaneli
          kitaplar={kitaplar}
          favoriler={favoriler}
          setFavoriler={setFavoriler}
        />
      </div>
    </div>
  );
}

export default App;