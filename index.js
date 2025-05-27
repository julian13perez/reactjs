import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

Array.prototype.miMap = function (callback) {
  let resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i], i, this));
  }
  return resultado;
};

Array.prototype.miFilter = function (callback) {
  let resultado = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }
  return resultado;
};
