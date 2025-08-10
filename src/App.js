import React, { useState } from "react";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed === "") {
      setResult({ type: "notfound" });
      return;
    }

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === trimmed.toLowerCase()
    );

    if (found) {
      setResult({ type: "found", meaning: found.meaning });
    } else {
      setResult({ type: "notfound" });
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: 20 }}>
        {result?.type === "found" && (
          <>
            <h3>Definition:</h3>
            <p>{result.meaning}</p>
          </>
        )}
        {result?.type === "notfound" && (
          <p>Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  );
}

export default App;
