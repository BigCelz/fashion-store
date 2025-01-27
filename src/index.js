import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
      <BrowserRouter />
    </ShopContextProvider>
    
    
  </React.StrictMode>
);

reportWebVitals();
