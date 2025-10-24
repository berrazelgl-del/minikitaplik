import React from "react";

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <input
      type="text"
      placeholder="Kitap ara..."
      value={aramaMetni}
      onChange={(e) => setAramaMetni(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #FF6F00",
        outline: "none",
        width: "200px",
        marginRight: "10px",
        color: "#3E3E3E",
        backgroundColor: "#FFF8E1",
      }}
    />
  );
}

export default AramaCubugu;