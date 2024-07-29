import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { SectionProvider } from "./Hooks/useSection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </React.StrictMode>
);
