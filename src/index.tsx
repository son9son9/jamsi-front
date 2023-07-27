import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import QRTag from "./pages/QRTag";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<QRTag />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
