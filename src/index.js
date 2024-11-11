import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/css/reset.css";
import "./assets/scss/styles.scss";
import "./assets/scss/main.scss";
import "./assets/scss/suggestion.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div>
    <App />
  </div>
  // </React.StrictMode>
);
