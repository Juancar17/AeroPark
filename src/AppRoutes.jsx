import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import QuienesSomos from "./pages/QuienesSomos";
import Registro from "./pages/Registro";
import Reservar from "./pages/Reservar"; // Importa el componente Reservar

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reservar" element={<Reservar />} />{" "}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/QuienesSomos" element={<QuienesSomos />} />
      {/* Ruta para reservar */}
      {/* Ruta para atención */}
    </Routes>
  );
};

export default AppRoutes;
