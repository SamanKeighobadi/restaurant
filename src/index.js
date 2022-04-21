import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// redux store
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import css
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
