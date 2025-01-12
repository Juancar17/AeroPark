import {
  faCheckCircle,
  faShieldAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"; // Para animaciones
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom"; // Usamos React Router

const SectionHeader = ({ title, subtitle }) => (
  <div className="container mx-auto text-center max-w-3xl">
    <motion.h1
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h1>
    <motion.p
      className="text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const InfoCard = ({ title, content }) => (
  <motion.div
    className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
    </motion.div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {content}
    </motion.p>
  </motion.div>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

const TeamMember = ({ index, name, role }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl"
    whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
  >
    <img
      src={`https://i.pravatar.cc/150?img=${index + 1}`}
      alt={`Miembro del equipo ${index + 1}`}
      className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg"
    />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </motion.div>
);

TeamMember.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

const QuienesSomos = () => {
  const teamMembers = [
    { name: "Juan Pérez", role: "CEO & Fundador" },
    { name: "Ana Gómez", role: "Directora de Operaciones" },
    { name: "Carlos López", role: "Gerente de Marketing" },
    { name: "María Rodríguez", role: "Jefa de Ventas" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="mt-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 mb-12">
        <SectionHeader
          title="¿Quiénes Somos?"
          subtitle="En AeroPark, nuestro compromiso es ofrecer un servicio excepcional de estacionamiento diseñado para garantizar que cada cliente disfrute de la máxima seguridad, comodidad y confianza durante sus viajes. Entendemos que dejar tu coche en manos de otros puede ser una decisión importante, por lo que hemos implementado estrictos protocolos de seguridad para asegurar que tu vehículo esté protegido en todo momento."
        />
      </header>

      {/* Sección de misión, visión y valores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <InfoCard
            title="Nuestra Misión"
            content="Ofrecer una experiencia de estacionamiento segura, cómoda y eficiente para nuestros clientes mientras viajan."
          />
          <InfoCard
            title="Nuestra Visión"
            content="Ser líderes en servicios de estacionamiento en los aeropuertos principales, garantizando excelencia y confianza."
          />
          <InfoCard
            title="Nuestros Valores"
            content={
              <ul className="list-disc list-inside space-y-2 text-center">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-500 mr-2"
                  />{" "}
                  Confianza
                </li>
                <li className="flex items-center text-center">
                  {" "}
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="text-blue-500 mr-2"
                  />{" "}
                  Seguridad
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-blue-500 mr-2"
                  />{" "}
                  Excelencia en el servicio
                </li>
              </ul>
            }
          />
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                index={index}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Lo que dicen nuestros clientes
          </h2>
          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl italic mb-4">
              "El servicio fue excelente, mi coche estuvo seguro todo el tiempo.
              Definitivamente lo usaré nuevamente."
            </p>
            <p className="text-blue-600 font-bold">- Laura Fernández</p>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para reservar tu plaza?
          </h2>
          <p className="mb-6">
            Únete a miles de clientes satisfechos que confían en AeroPark.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/reservar"
              className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
            >
              Reservar Ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
