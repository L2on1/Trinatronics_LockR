import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataBorneProvider } from "./Components/Lock-R/Mulhouse/Borne_1/ContextBorne";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <DataBorneProvider>
        <App />
      </DataBorneProvider>
    </React.StrictMode>
  </BrowserRouter>
);
