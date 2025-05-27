import React from "react";
import Navbar from "./components/navbar";
import Itemlist from "./components/itemlist";

function App() {
  return (
    <div>
      <NavBar />
      <Itemlist mensaje="¡Bienvenido a nuestra tienda deportiva!" />
    </div>
  );
}

export default App;
