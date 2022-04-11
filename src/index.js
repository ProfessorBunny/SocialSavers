import React from "react";
import { createRoot } from "react-dom/client";
import "./utils/bootstrap.js";

import App from "./App";
import "./css/bootstrap.css";
import "./css/fontawesome-all.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import "./css/swiper.css";
import "./css/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
