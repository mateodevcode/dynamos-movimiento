import { useAuth } from "../context/AuthContext";
import vision1 from "../img/somosdynamos/vision1.jpeg";
import vision2 from "../img/somosdynamos/vision2.jpeg";

function Vision() {

  const { darkMode } = useAuth();

  return (
    // principal
    <div className="w-full h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 lg:mt-4 pt-6 pb-60 mt-4">
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
      <div className="flex flex-row w-full h-full justify-center items-center lg:-mt-[620px] lg:-ml-24 md:-mt-[555px] md:-ml-24">
        <div className="text-9xl -rotate-90 font-extrabold text-gray-500 dark:opacity-30 opacity-40 -mr-[265px] ">
          VISION
        </div>
        <div
          className={`flex flex-col w-[500px] h-[500px] justify-around items-center ${
            darkMode ? "fondo-claro-oscuro-dark" : "fondo-claro-oscuro"
          }`}
        >
          <h1 className="dark:text-gray-300 text-7xl text-start italic font-extrabold my-16">
            VISIÓN
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-900 font-bold text-justify w-96 ml-6 mb-24 z-10">
            Extendernos en los proximos años, con el fin de dewarrollar
            actividades o (proyectos) espirituales y sociales. Logrando un
            impacto positivo en las familias.
          </p>
          <p className="dark:text-gray-300 text-lg italic font-semibold">@Dynamos_movimiento</p>
          <p className="dark:text-gray-300 text-xl italic font-semibold">...........</p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
