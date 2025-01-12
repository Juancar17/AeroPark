import { motion } from "framer-motion"; // Para animaciones
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Para redirigir al login
import logo from "../assets/2.png";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
    cocheMarca: "",
    cocheModelo: "",
    matricula: "",
  });

  const [showCarForm, setShowCarForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCarForm(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="md:w-1/2 p-8 bg-gradient-to-r from-blue-500 to-blue-700"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            Crea tu cuenta
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Continuar
            </motion.button>
            <div className="mt-6 text-center">
              <p className="text-sm text-white">
                ¿Aún no tienes cuenta?{" "}
                <Link
                  to="/registro"
                  className="text-white hover:underline font-medium"
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="md:w-1/2 bg-[#e2e2e1] p-10 flex flex-col justify-center text-blue-700"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center">
            <motion.img
              src={logo}
              alt="Logo AeroPark"
              className="w-84 h-84 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </div>
          <h2 className="text-4xl text-center font-bold mb-4">
            Accede a AeroPark
          </h2>
          <p className="mb-6">
            Accede a tu cuenta para disfrutar de{" "}
            <span className="font-bold">descuentos exclusivos</span> por ser
            cliente. Disfruta de seguridad y comodidad mientras viajas.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Registro;
