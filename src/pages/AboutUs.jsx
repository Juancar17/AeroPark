import { motion } from "framer-motion";
import React from "react";

const ArticleItem = ({ icon, title }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 transition transform"
    >
      <motion.img
        src={icon}
        alt={title}
        className="w-40 h-40 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h3
        className="text-center font-ligth text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

const ArticlesGrid = () => {
  const articles = [
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXP79Q9X4RE2MD5XNNDEY",
      title: "Haz una nueva reserva",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXN3TWMP50T6WV4RT8FSS",
      title: "Cambia tu reserva",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXRWJ65GP30FDDHRG660V",
      title: "Cancelar la reserva",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXPQDAK5ES41T0A98KCBG",
      title: "Preguntas generales sobre los aparcamientos",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXRC83NVMZW7GV290WGQ8",
      title: "Parking shuttle (lanzadera)",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXRMPAX1CX3D3JMF48XRA",
      title: "Parking Valet (aparcacoches)",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXRRT42FMAJNYTFEX42DV",
      title: "Acerca de AeroPark",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXM6XMT1RWJ2AZT0YS8RJ",
      title: "Pago",
    },
    {
      icon: "https://parkos.zendesk.com/hc/theming_assets/01HZPQXRFS1GCYK4KA00R6S9MB",
      title: "Escribir una valoración",
    },
  ];

  return (
    <>
      {/* Sección de Artículos */}
      <section className="mt-20 bg-gradient-to-r from-blue-500 to-blue-700 text-black py-16 px-8">
        <div className="container mx-auto">
          <motion.h2
            className="text-5xl font-bold text-white mb-6 text-center font-roboto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ¿En que te podemos ayudar?
          </motion.h2>

          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {articles.map((article, index) => (
              <ArticleItem
                key={index}
                icon={article.icon}
                title={article.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer con input */}
      <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8 border-t-4">
        <div className="container mx-auto text-center">
          <h1 className="text-xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              className="w-full sm:w-96 p-4 text-black border border-gray-400 rounded-lg"
              placeholder="Escribe tu mensaje..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-600 transition"
            >
              Enviar
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ArticlesGrid;
