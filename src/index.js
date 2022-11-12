import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { AppProvider } from "./context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <PayPalScriptProvider
          options={{
            client_id:
              "AZjJ7thkdli-Gk7qeRdIYMWQYo0N3vVd_O3_qD5MFbNeuO7WBdJ-HuLkFlPpQUflnsmHDaSQIALS0tHg",
          }}
        >
          <App />
        </PayPalScriptProvider>
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
