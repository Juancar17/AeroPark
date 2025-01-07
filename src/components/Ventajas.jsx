import React from "react";

const VentajasSection = () => {
  const advantages = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1895/1895109.png",
      title: "Inspección minuciosa",
      description: "Todos los coches son inspeccionados minuciosamente  ",
    },
    {
      icon: "https://assets.parkos.com/assets/img/thumbsup.svg",
      title: "Las mejores ofertas",
      description: "Las mejores ofertas de aparcamiento en el aeropuerto",
    },
    {
      icon: "https://assets.parkos.com/assets/img/24hrs.svg",
      title: "Cancelación gratuita",
      description: "Cancelación gratuita hasta 24 horas",
    },
    {
      icon: "https://assets.parkos.com/assets/img/check.svg",
      title: "+20 mil de clientes",
      description: "Más de 20 mil clientes en todo el mundo",
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestras ventajas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={advantage.icon}
                alt={advantage.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-200">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default VentajasSection;
