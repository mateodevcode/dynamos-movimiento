import '../App.css'
import { useAuth } from "../context/AuthContext.jsx";
import eventoDynamo from "../data/eventoDynamo.js";

function Eventos() {
  const { themma } = useAuth()


  return (
    <div className={`w-full flex flex-col justify-center items-center ${themma}`}>
      <div className="flex flex-col justify-center items-center w-10/12 border-b-2 border-x-2 border-gray-200">
      <div className="md:w-11/12 sm:w-10/12 md:mt-32 sm:mt-20">
        <h3 className="md:text-5xl font-bold md:mb-10 sm:text-2xl sm:mt-10 sm:mb-5">Eventos Dynamos</h3>
        <p className="md:mb-10 md:text-2xl sm:text-sm sm:mb-3">
          No te pierdas ninguno de <strong>nuestros eventos</strong>. Aquí
          compartiremos y exploraremos juntos los acontecimientos que han
          marcado y marcarán <strong>nuestra comunidad</strong>. ¡Únete a
          nosotros en este momento especial!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center sm:w-11/12 sm:mb-10 md:mb-40 md:mt-10">
        <CardEvento />
      </div>
      </div>
    </div>
  );
}

const CardEvento = () => {
  const { themma } = useAuth()

  return eventoDynamo.map((valor, i) => {
    return (
      <div key={i} className="flex justify-center items-center sm:m-3">
        <div className={`flex flex-col justify-center items-center md:p-4 rounded-md sm:p-2 ${themma == "light" ? "bg-gray-900" : "bg-white"}`} >
          <img
            src={valor.img}
            alt={`evento ${valor.titulo}`}
            className="md:w-80 rounded-xl mb-4 sm:w-52"
          />
          <div className="flex flex-col justify-center items-center">
            <div className="flex mb-3">
              <p className={`md:text-lg sm:text-xs ${themma == "light" ? "text-gray-300" : "text-gray-600"}`}>{valor.fecha}</p>
              <img
                src={valor.imgCreador}
                alt={`Imagen de ${valor.creador}`}
                className="md:w-7 rounded-full md:mx-4 sm:mx-2 sm:w-5"
              />
              <p className={`md:text-lg text-gray-300 sm:text-xs ${themma == "light" ? "text-gray-300" : "text-gray-600"}`}>{valor.creador}</p>
            </div>
            <p className={`md:w-80 md:text-lg sm:text-justify sm:text-xs sm:w-52 ${themma == "light" ? "text-white" : "text-black" }`}>{valor.titulo}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Eventos;
