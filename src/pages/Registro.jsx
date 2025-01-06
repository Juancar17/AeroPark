import { motion } from "framer-motion"; // Para animaciones
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Para redirigir al login

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    cocheMarca: "",
    cocheModelo: "",
    matricula: "",
    correo: "",
    password: "", // Nuevo campo de contraseña
  });

  const [precioReserva, setPrecioReserva] = useState(null);

  useEffect(() => {
    const precio = localStorage.getItem("precioReserva");
    setPrecioReserva(precio);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/usuarios/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("¡Usuario registrado con éxito!");
        console.log("Respuesta del servidor:", data);
      } else {
        alert("Error al registrar el usuario: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al conectar con el servidor.");
    }
  };

  return (
    <motion.div
      className="min-h-screen mt-28 bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-10">
        <motion.h2
          className="text-4xl font-light text-center text-blue-600 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Completa tu Registro
        </motion.h2>

        {precioReserva && (
          <motion.div
            className="bg-blue-100 text-blue-800 font-bold text-xl text-center rounded-lg p-8 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Precio ofertado para tu reserva:
            <span className="block text-blue-900 text-4xl mt-2">
              {precioReserva} €
            </span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Apellidos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Apellidos
            </label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Marca del coche */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marca del coche
            </label>
            <input
              type="text"
              name="cocheMarca"
              value={formData.cocheMarca}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Modelo del coche */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modelo del coche
            </label>
            <input
              type="text"
              name="cocheModelo"
              value={formData.cocheModelo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Matrícula */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Matrícula
            </label>
            <input
              type="text"
              name="matricula"
              value={formData.matricula}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
          </div>

          {/* Botón de enviar */}
          <div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Registrarse
            </motion.button>
          </div>
        </form>

        {/* Enlace para iniciar sesión */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Registro;
