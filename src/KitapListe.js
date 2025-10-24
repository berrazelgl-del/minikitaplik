import React from "react";
import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriler, setFavoriler }) {
  return (
    <div style={{ width: "55%" }}>
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          {...kitap}
          favoriler={favoriler}
          setFavoriler={setFavoriler}
        />
      ))}
    </div>
  );
}

export default KitapListe;