import React from "react";
import Cartwidget from "./carwidget";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#eee",
      }}
    >
      <h2>Tienda Ritual</h2>
      <div>
        <a href="#">Inicio</a> | <a href="#">Productos</a> |{" "}
        <a href="#">Contacto</a>
      </div>
      <Cartwidget />
    </nav>
  );
}

export default Navbar;
