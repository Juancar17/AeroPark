import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ type, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
        {type === "success" ? (
          <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" />
        ) : (
          <AiOutlineCloseCircle className="text-red-500 text-4xl mb-4" />
        )}
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
