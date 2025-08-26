import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = document.getElementById("root");
const mainRoot = ReactDOM.createRoot(root);
mainRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
