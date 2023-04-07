import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./scss/main.scss";
import { SearchContextProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
