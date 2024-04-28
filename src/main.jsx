import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
