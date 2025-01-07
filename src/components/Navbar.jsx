import {
  faBars,
  faCar,
  faHeadset,
  faInfoCircle,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usamos React Router
import logo from "../assets/2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#e2e2e1] shadow-md animate-slideDown">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="AeroPark Express" className="h-20" />
          </Link>
        </div>

        {/* Menú Principal (Reservar y Atención al Cliente) */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link
            to="/reservar"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faCar} className="mr-2" />
            Reservar
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faHeadset} className="mr-2" />
            Atención al cliente
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Enlaces Secundarios (Regístrate y Quiénes somos) */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link
            to="/registro"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Regístrate
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/atencion"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Quiénes somos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Botón del menú para móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-blue-600"
        >
          {/* Botón que activa el menú */}
          {isMenuOpen ? (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </motion.span>
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          )}
        </button>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#e2e2e1] shadow-md md:hidden animate-slideDown mt-12">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link
                to="/reservar"
                className="text-blue-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCar} className="mr-2" />
                Reservar
              </Link>

              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faHeadset} className="mr-2" />
                Atención al cliente
              </Link>

              <Link
                to="/atencion"
                className="text-blue-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                Quiénes somos
              </Link>

              <Link
                to="/registro"
                className="text-blue-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Regístrate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
