import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { store } from "./store";
// import { Provider } from "react-redux";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
