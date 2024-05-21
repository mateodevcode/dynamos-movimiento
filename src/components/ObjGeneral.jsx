// import { useAuth } from "../context/AuthContext";
// import objgeneral1 from "../img/somosdynamos/objgeneral1.jpg";
// import objgeneral2 from "../img/somosdynamos/objgeneral2.jpg";
// import { objetivoGeneral } from "../data/misionVisionObjetivos";
import "../App.css";

function ObjGeneral() {
  // const { darkMode } = useAuth();

  return (
    // principal
    <div className="w-full h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-20 pb-60">
      {/* Objetivos */}
      <div className="flex flex-row justify-center items-center w-full ">
        {/* recuadro1 */}x
        <div className=" flex flex-col justify-between items-center md:w-[670px] ">
          <div className="text-white text-8xl mb-44 mt-12 font-bold ml-5">
            <h1>OBJETIVOS</h1>
          </div>
          <div className=" hexagono1 md:w-[668px] md:h-[528px] bg-white justify-center items-center">
            <div className="hexagono2 md:w-[628px] md:h-[496px] justify-center items-center ml-5 mt-4 "></div>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-col justify-around items-center md:w-[670px]">
          <div className="bg-white trapecio md:-mr-[80px] md:w-[556px] md:h-[150px] md:-mt-8 md:ml-9 "></div>
          <div className="hexagono3 md:w-[668px] md:h-[528px] bg-white justify-center items-center">
            <div className="hexagono4 md:w-[628px] md:h-[496px] justify-center items-center ml-5 mt-4"></div>
          </div>
          <div className="bg-white text-transparent trapecio2 md:-mr-[80px] md:w-[556px] md:h-[200px] md:mt-60 md:ml-9"></div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ObjGeneral;
