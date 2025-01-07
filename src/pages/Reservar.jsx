import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VentajasSection from "../components/Ventajas";

const Reservar = () => {
  const [formData, setFormData] = useState({
    diaEntrega: "",
    horaEntrega: "",
    diaRecogida: "",
    horaRecogida: "",
  });

  const [coste, setCoste] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // Control del modal
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calcularCoste = (e) => {
    e.preventDefault();

    const { diaEntrega, horaEntrega, diaRecogida, horaRecogida } = formData;

    const fechaActual = new Date();
    const fechaEntrega = new Date(`${diaEntrega}T${horaEntrega}`);
    const fechaRecogida = new Date(`${diaRecogida}T${horaRecogida}`);

    // Validación de fechas y horas
    if (fechaEntrega < fechaActual) {
      alert("La fecha y hora de entrega deben ser posteriores a la actual.");
      return;
    }
    if (fechaRecogida <= fechaEntrega) {
      alert(
        "La fecha y hora de recogida deben ser posteriores a la de entrega."
      );
      return;
    }

    // Calcular la diferencia en días
    const diffTime = fechaRecogida - fechaEntrega;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Días completos

    // Calcular el coste
    const costeTotal = 20 + (diffDays - 1) * 5; // 20 € por el primer día, 5 € por cada día adicional
    setCoste(costeTotal);
    setModalOpen(true); // Abrir modal
  };

  const handleContinue = () => {
    localStorage.setItem("precioReserva", coste);
    navigate("/registro"); // Redirigir a la página de registro
  };

  return (
    <>
      <div className="min-h-screen mt-28 bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-8">
        <motion.h2
          className="text-5xl font-bold text-white mb-6 text-center font-roboto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Calcula el coste de tu aparcamiento
        </motion.h2>

        <div className="container mx-auto max-w-2xl bg-white shadow-md rounded-lg p-8">
          <form onSubmit={calcularCoste} className="space-y-6">
            {/* Día de entrega */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Día de entrega
              </label>
              <input
                type="date"
                name="diaEntrega"
                value={formData.diaEntrega}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </motion.div>

            {/* Hora de entrega */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora de entrega
              </label>
              <input
                type="time"
                name="horaEntrega"
                value={formData.horaEntrega}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </motion.div>

            {/* Día de recogida */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Día de recogida
              </label>
              <input
                type="date"
                name="diaRecogida"
                value={formData.diaRecogida}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </motion.div>

            {/* Hora de recogida */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora de recogida
              </label>
              <input
                type="time"
                name="horaRecogida"
                value={formData.horaRecogida}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </motion.div>

            {/* Botón para calcular */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Calcular coste
              </button>
            </div>
          </form>
        </div>

        {/* Modal para mostrar el coste */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                ¡Cálculo completado!
              </h2>
              <p className="text-lg font-light">
                El coste total de tu aparcamiento es:{" "}
                <span className="font-bold text-3x1 ">{coste} €</span>
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Cerrar
              </button>
              <button
                onClick={handleContinue}
                className="mt-6 ml-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Continuar
              </button>
            </motion.div>
          </div>
        )}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VentajasSection />
        </motion.div>
      </div>
    </>
  );
};

export default Reservar;
