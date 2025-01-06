import { motion } from "framer-motion"; // Para animaciones
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirección después de login

const Login = () => {
  const [formData, setFormData] = useState({
    correo: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("token", data.token); // Guardar token en localStorage
        navigate("/dashboard"); // Redirigir a otra página después del login
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <motion.div
      className="min-h-screen mt-28 bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
        <motion.h2
          className="text-4xl font-light text-center text-blue-600 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Iniciar Sesión
        </motion.h2>

        {error && (
          <motion.div
            className="bg-red-100 text-red-800 font-semibold text-center rounded-lg p-4 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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
              Iniciar Sesión
            </motion.button>
          </div>
        </form>

        {/* Enlace para registrarse */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a
              href="/registro"
              className="text-blue-600 hover:underline font-medium"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
