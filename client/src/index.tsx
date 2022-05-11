import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ProductList from "./ProductList";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <ProductList /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
