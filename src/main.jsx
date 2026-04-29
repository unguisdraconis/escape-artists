import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Barplot } from "./Barplot";

const data = [
  { count: 6, name: "Hantavirus" },
  { count: 7, name: "Tularemia" },
  { count: 7, name: "Dengue" },
  { count: 9, name: "Ebola" },
  { count: 11, name: "E. coli" },
  { count: 15, name: "Tuberculosis" },
  { count: 17, name: "Salmonella" },
  { count: 18, name: "Vaccinia" },
  { count: 54, name: "Brucella" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Barplot width={650} height={360} data={data} />
  </StrictMode>,
);
