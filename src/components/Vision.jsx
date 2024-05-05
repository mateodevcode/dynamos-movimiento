import { useAuth } from "../context/AuthContext";
import vision1 from "../img/somosdynamos/vision1.jpeg";
import vision2 from "../img/somosdynamos/vision2.jpeg";

function Vision() {

  const { darkMode } = useAuth();

  return (
    // principal
    <div className="w-full h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-20 pb-60">
      {/* vision */}
      <div className="flex flex-col w-full">
        {/* recuadro1 */}
        <div className="flex flex-row w-full items-center">
          <div className="flex w-1/4"></div>
          <div className="flex justify-end w-3/4 lg:mr-10 md:mr-10">
            <img className="w-7/12 h-4/6" src={vision1} alt="" />
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-row items-center">
          <div className="flex justify-start w-3/4 lg:ml-10 md:ml-10">
            <img className="w-6/12" src={vision2} alt="" />
          </div>
          <div className="flex w-1/4"></div>
        </div>
      </div>
      <div className="flex flex-row lg:w-full lg:h-full md:w-full md:h-full justify-center items-center lg:-mt-[620px] lg:-ml-24 md:-mt-[555px] md:-ml-28 sm:w-72 sm:h-72 sm:-mt-[255px] sm:ml-3">
        <div className="lg:text-9xl md:text-8xl -rotate-90 font-extrabold text-gray-500 dark:opacity-30 opacity-40 lg:-mr-[265px] sm:text-5xl sm:-mr-[100px] md:-mr-[205px]">
          VISION
        </div>
        <div
          className={`flex flex-col lg:w-[500px] lg:h-[500px] lg:justify-around items-center ${
            darkMode ? "fondo-claro-oscuro-dark" : "fondo-claro-oscuro"
          }`}
        >
          <h1 className="dark:text-gray-300 lg:text-7xl md:text-7xl text-start italic font-extrabold lg:my-16 md:my-16 sm:text-4xl sm:my-2">
            VISIÓN
          </h1>
          <p className="lg:text-xl dark:text-gray-300 text-gray-900 font-bold text-justify lg:w-96 lg:ml-6 lg:mb-24 z-10 sm:text-[11px] sm:mb-2 sm:px-5 lg:px-0 md:text-xl md:mb-10 md:w-[450px] md:px-16">
            Extendernos en los proximos años, con el fin de dewarrollar
            actividades o (proyectos) espirituales y sociales. Logrando un
            impacto positivo en las familias.
          </p>
          <p className="dark:text-gray-300 lg:text-lg md:text-lg italic font-semibold sm:text-[10px]">@Dynamos_movimiento</p>
          <p className="dark:text-gray-300 text-xl italic font-semibold">...........</p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
