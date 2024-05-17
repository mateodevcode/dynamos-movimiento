import "../App.css";
import { useAuth } from "../context/AuthContext.jsx";
import CardEvento from "./CardEvento.jsx";

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


export default Eventos;
