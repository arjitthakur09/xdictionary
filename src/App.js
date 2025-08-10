import React, { useState } from "react";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed === "") {
      setMeaning("");
      return;
    }

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === trimmed.toLowerCase()
    );

    if (found) {
      setMeaning(found.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      {/* Test expects this exact text */}
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Keep Definition: always visible for tests */}
      <div style={{ marginTop: 20 }}>
        <h3>Definition:</h3>
        {meaning && <p>{meaning}</p>}
      </div>
    </div>
  );
}

export default App;
