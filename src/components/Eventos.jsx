import "../App.css";
import { useAuth } from "../context/AuthContext.jsx";
import DrawerEventos from "./DrawerEventos.jsx";
import { eventos } from "../data/eventoDynamo.js";

function Eventos() {
  const { darkMode } = useAuth();

  return (
    <div
      className={`w-full flex flex-col justify-center items-center lg:pt-24 md:pt-24 sm:pt-12 ${
        darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
      }`}
    >
      <div className="flex flex-col justify-center items-center w-10/12">
        <div className="md:w-11/12 sm:w-11/12">
          <h2 className="lg:text-5xl md:text-5xl font-bold dark:text-white md:mb-10 sm:text-3xl sm:mt-10 sm:mb-5 sm:text-center">
            Eventos Dynamos
          </h2>
          <p className="md:mb-10 lg:text-2xl md:text-2xl sm:text-base sm:mb-3 text-gray-700 dark:text-gray-200 text-center">
            No te pierdas ninguno de <strong>nuestros eventos</strong>. Aquí
            compartiremos y exploraremos juntos los acontecimientos que han
            marcado y marcarán <strong>nuestra comunidad</strong>. ¡Únete a
            nosotros en este momento especial!
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center sm:w-11/12 sm:mb-10 md:mb-40">
          <CardEvento />
        </div>
      </div>
    </div>
  );
}

const CardEvento = () => {
  const { indiceSeleccionado, handleClick } = useAuth();

  const evento_01 = eventos[0].map((evento) => {
    evento.img;
  });
  const evento_02 = eventos.map((evento) => {
    evento.img[1];
  });
  const evento_03 = eventos.map((evento) => {
    evento.img[2];
  });
  console.log(evento_01);
  const img_eventos = [[evento_01], [evento_02], [evento_03]];

  return eventos.map((valor, i) => {
    return (
      <div key={i} className="flex justify-center items-center sm:m-3 sm:mb-5">
        <div
          className={`flex flex-col justify-center items-center md:p-4 rounded-md scrol-img`}
          onClick={() => handleClick(i)}
        >
          {/* <DrawerEventos /> */}
          {indiceSeleccionado !== null && (
            <DrawerEventos imagenes={img_eventos[indiceSeleccionado]} />
          )}
          <img
            src={valor.imgPrincipal}
            alt={`evento ${valor.titulo}`}
            className="w-80 h-96 rounded-xl mb-4"
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
