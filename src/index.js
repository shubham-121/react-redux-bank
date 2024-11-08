import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { deposit } from "./features/accounts/accountSlice";
import { createCustomer } from "./features/customers/customerSlice";

// store.dispatch({ type: "account/deposit", payload: 1000 });
// console.log(store.getState());

//

//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
