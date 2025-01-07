import { motion } from "framer-motion"; // Animaciones dinámicas
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Usamos React Router
import logo from "../assets/2.png";
import Footer from "../components/Footer";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const stats = [
    {
      label: "Recogida y entrega del vehículo",
      value: "A la hora que nos indiques",
    },
    { label: "Clientes", value: "10K+ de toda España y del mundo" },
    { label: "Confianza", value: "Cuidamos tu coche como si fuera nuestro" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section
        className="bg-gradient-to-r from-blue-500 to-blue-700 mt-28 text-white py-16 px-8"
        id="nosotros"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Logo para móviles */}
          <motion.img
            src={logo}
            alt="AeroPark Express Logo"
            className="w-full max-w-md h-full mx-auto mt-8 block py-16 lg:hidden mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1, // Duración de la animación en segundos
              ease: "easeOut", // Suavizado
            }}
          />

          {/* Texto a la izquierda */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-7xl font-extrabold font-roboto leading-tight tracking-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1, // Duración de la animación
                ease: "easeOut",
              }}
            >
              Deja tu coche en buenas manos con{" "}
              <motion.span
                className="font-extrabold text-[#e2e2e1] underline decoration-blue-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5, // Retraso para que aparezca después del texto principal
                  ease: "easeOut",
                }}
              >
                AeroPark Express.
              </motion.span>
            </motion.h1>

            <p className="text-lg">
              Somos una empresa dedicada a ofrecer un servicio de
              estacionamiento de alta calidad en el aeropuerto Madrid-Barajas.
              Con años de experiencia, nos especializamos en la recogida y
              entrega de vehículos, garantizando que tu coche estará en las
              mejores manos mientras disfrutas de tu viaje.
            </p>
            <ul className="space-y-4">
              {stats.map((stat, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <span className="text-2xl text-green-500">✔</span>
                  <div>
                    <p className="text-lg font-semibold">{stat.label}</p>
                    <p className="text-sm">{stat.value}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Logo a la derecha en pantallas grandes */}
          <motion.img
            src={logo}
            alt="AeroPark Express Logo"
            className="w-full h-full object-cover mx-auto hidden lg:block ml-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1, // Duración de la animación en segundos
              ease: "easeOut", // Suavizado
            }}
          />
        </div>
      </section>

      {/* Barra de navegación secundaria */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-center space-x-12">
          <a
            href="#Como"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            ¿Cómo funciona?
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"></span>
          </a>

          <Link
            to="/reservar"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            Calcula tu precio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"></span>
          </Link>

          <a
            href="#Servicios"
            className="text-base font-light text-blue-600 relative group hover:text-blue-600"
          >
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
