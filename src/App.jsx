import * as React from "react";
import { Barplot } from "./Barplot.jsx";
import "./App.css";
import "./index.css";
import { data } from "./data.js";

export default function App() {
  return (
    <div className="App">
      <h1>Escape artists</h1>
      <Barplot data={data} />
    </div>
  );
}
