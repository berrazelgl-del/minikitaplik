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
        border: "1px solid #008080",
        outline: "none",
        width: "200px",
        marginRight: "10px",
        color: "#008080",
      }}
    />
  );
}

export default AramaCubugu;