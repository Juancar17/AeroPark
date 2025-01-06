import React from "react";
import AppRoutes from "./AppRoutes"; // Importa las rutas
import Navbar from "./components/Navbar"; // Importa el Navbar

function App() {
  return (
    <>
      <Navbar /> {/* Navbar principal */}
      <AppRoutes /> {/* Renderiza las rutas */}
    </>
  );
}

export default App;
