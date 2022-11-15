import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageContextProvider } from "./contexts/PageContext";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("App") as HTMLElement).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>
);
