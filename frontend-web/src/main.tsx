import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
