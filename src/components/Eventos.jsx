import "../App.css";
import { useAuth } from "../context/AuthContext.jsx";
import eventoDynamo from "../data/eventoDynamo.js";

function Eventos() {
  const { mostrarMenu } = useAuth();

  return (
    <div
      className={`w-full flex flex-col justify-center items-center dark:bg-gray-900 ${mostrarMenu ? "mt-0" : "pt-12"}`}
    >
      <div className="flex flex-col justify-center items-center w-10/12">
        <div className="md:w-11/12 sm:w-11/12">
          <h3 className="md:text-5xl font-bold dark:text-white md:mb-10 sm:text-2xl sm:mt-10 sm:mb-5 sm:text-center">
            Eventos Dynamos
          </h3>
          <p className="md:mb-10 md:text-2xl sm:text-sm sm:mb-3 text-gray-600 dark:text-gray-300 sm:text-center">
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
  return eventoDynamo.map((valor, i) => {
    return (
      <div
        key={i}
        className="flex justify-center items-center sm:m-3 text-gray-600 dark:text-gray-300 sm:mb-5"
      >
        <div
          className={`flex flex-col justify-center items-center md:p-4 rounded-md`}
        >
          <img
            src={valor.img}
            alt={`evento ${valor.titulo}`}
            className="w-80 rounded-xl mb-4"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="flex mb-3">
              <p className={`md:text-lg sm:text-xs`}>{valor.fecha}</p>
              <img
                src={valor.imgCreador}
                alt={`Imagen de ${valor.creador}`}
                className="md:w-7 rounded-full md:mx-4 sm:mx-2 sm:w-5"
              />
              <p className={`md:text-lg dark:text-gray-300 sm:text-xs `}>
                {valor.creador}
              </p>
            </div>
            <p
              className={`md:w-80 md:text-lg sm:text-justify sm:text-xs sm:w-80 `}
            >
              {valor.titulo}
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default Eventos;
