import React from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";
import InformedNotes from "./InformedNotes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <InformedNotes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
