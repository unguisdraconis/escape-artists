import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Barplot } from "./Barplot";
import { data } from "./data.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Barplot width={650} height={360} data={data} />
  </StrictMode>,
);
