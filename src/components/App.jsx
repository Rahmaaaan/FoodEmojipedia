import React from "react";
import Entry from "./Entry";
import Footer from "./Footer";
import emojipedia from "../emojipedia";

function createEntry(asianEmoji) {
  return (
    <Entry
      key={asianEmoji.id}
      emoji={asianEmoji.emoji}
      name={asianEmoji.name}
      description={asianEmoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Asian Food Emojis</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
