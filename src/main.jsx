import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./scss/index.scss";
const rootEl = document.getElementById("root");
const rootInstance = ReactDOM.createRoot(rootEl);

rootInstance.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
