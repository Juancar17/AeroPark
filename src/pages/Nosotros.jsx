import {
  faCalendarAlt,
  faCar,
  faFileAlt,
  faKey,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"; // Para animaciones
import React, { useEffect, useState } from "react";

const StepsCarousel = () => {
  const stepsData = [
    {
      icon: faCalendarAlt,
      image:
        "https://aerolatinnews.com/wp-content/uploads/2017/09/comprar-online-1.jpg",
      title: "Reserva tu plaza",
      description:
        "Es muy sencillo, puedes reservar a través de nuestra web o directamente por teléfono. Podrás reservar online hasta 4 horas antes de tu salida, y por teléfono hasta 20 minutos antes.",
    },
    {
      icon: faCar,
      image:
        "https://img.freepik.com/foto-gratis/mujer-estacion-servicio-acr-comprobando-su-coche-mecanico_1303-28490.jpg?t=st=1736293029~exp=1736296629~hmac=d2c1f0319db7f3dc14ad1d178a1e3913022d13c00a127a6794c3aca836f55e45&w=1800",
      title: "Recogemos tu coche",
      description:
        "Uno de nuestros conductores recogerá tu vehículo directamente en la zona central de las terminales T1, T2 y T4.",
    },
    {
      icon: faFileAlt,
      image:
        "https://img.freepik.com/foto-gratis/mediados-seccion-mecanica-preparacion-lista-verificacion_1170-1309.jpg?t=st=1736293096~exp=1736296696~hmac=0dfb54ffd193be7cc6d160ae77185265e1c3700c0ed7f28f9a5b34eaee7d41d3&w=1800",
      title: "Peritación del vehículo",
      description:
        "En el momento de la recogida, se te entregará un contrato con el estado del vehículo. Firma para confirmar.",
    },
    {
      icon: faPlane,
      image:
        "https://img.freepik.com/foto-gratis/vacaciones-romanticas_93675-128396.jpg?t=st=1736293159~exp=1736296759~hmac=219b5ed8ff78aa5d9a390bd8cc224ab3873dd31cc24b07f17af41280c8367c7f&w=1800",
      title: "Durante tu viaje",
      description: "Disfruta de tu viaje mientras nosotros cuidamos tu coche.",
    },
    {
      icon: faKey,
      image:
        "https://img.freepik.com/foto-gratis/manos-alto-angulo-sosteniendo-llave-auto_23-2150321011.jpg?t=st=1736293239~exp=1736296839~hmac=f084527baf3997cbc25ef2955fe0a33c8fcc435b2aeb62cd610360ba18f65b30&w=1800",
      title: "Te lo devolvemos",
      description:
        "Al aterrizar, llámanos y en 20 minutos te entregaremos tu coche en la terminal.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [intervalStarted, setIntervalStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const updateStep = (index) => {
    setCurrentStep(index);
  };

  const startInterval = () => {
    if (!intervalStarted) {
      const id = setInterval(() => {
        setCurrentStep((prevStep) => (prevStep + 1) % stepsData.length);
      }, 2000); // Cambia cada 3 segundos
      setIntervalId(id);
      setIntervalStarted(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!intervalStarted) {
        updateStep(currentStep);
        startInterval();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentStep, intervalStarted]);

  return (
    <section className="mt-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 font-roboto">
          ¿Cómo funciona?
        </h2>

        {/* Imagen */}
        <div className="relative mb-12">
          <motion.img
            src={stepsData[currentStep].image}
            alt={stepsData[currentStep].title}
            className="w-full object-cover rounded-lg shadow-xl"
            style={{ height: "700px" }}
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Pasos */}
        <div className="flex flex-wrap justify-center gap-8">
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md w-64 text-center transition-all duration-300 cursor-pointer ${
                index === currentStep
                  ? "bg-blue-600 text-white scale-110"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => {
                updateStep(index);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ minHeight: "250px" }} // Fijar altura mínima
            >
              <FontAwesomeIcon icon={step.icon} className="text-4xl mb-4" />
              <motion.h3
                className="text-lg font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsCarousel;
