// import { useAuth } from "../context/AuthContext";
import { objetivoGeneral } from "../data/misionVisionObjetivos";
import "../App.css";

function ObjGeneral() {
  // const { darkMode } = useAuth();

  return (
    // principal
    <div className="md:w-full md:h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60  md:pb-28 md:pt-20"> 
      {/* Objetivos */}
      <div className="flex md:flex-row sm:flex-col justify-center items-center w-auto ">
        {/* recuadro1 */}
        <div className=" flex flex-col justify-between items-center md:w-[670px] sm:w-auto md:py-20 md:-mt-32 md:-ml- ">
        <div className="bg-white trapecio md:hidden sm:-mr-0 md:-mr-[80px] md:w-[556px] sm:w-[200px] md:h-[150px] sm:h-24 md:-mt-10 md:ml-9 sm:ml-40 md:mb-7 sm:mb- sm:z-30"></div>
          <div className="md:w-[820px] sm:w-[350px] md:h-72 sm:h-26 bg-black text-white md:text-8xl sm:text-6xl md:mb-1 sm:mb-20 font-bold md:ml-20 sm:ml-2 sm:text-center md:mt-24">
            <h1 className="md:mt-10">OBJETIVOS</h1>
          </div>
          <div className=" hexagono1 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] bg-white justify-center items-center sombraHexagono">
            <div className="hexagono2 md:w-[628px] sm:w-[326px] md:h-[490px] sm:h-[276px] justify-between items-center md:ml-5 sm:ml-4 md:mt-4 sm:mt-3"></div>
          </div>
          <div className="  md:-mt-[470px] sm:-mt-72 w-[360px] h-auto z-30 py-5 ">
            <h1 className="text-white text-center md:text-4xl sm:text-xl font-bold md:mb-16 sm:mb-4 uppercase italic sombraText ">{objetivoGeneral.titulo}</h1>
            <p className="text-white md:text-2xl sm:text-sm sm:font-bold md:ml-4  md:w-96 sm:w-60 sm:ml-20 sm:mt-2" >  
              {objetivoGeneral.contenido}
            </p>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-col justify-around items-center md:w-[670px] sm:w-[360px] sm:-mr-">
          <div className="bg-white trapecio md:flex sm:hidden sm:-mr-0 md:-mr-[80px] md:w-[556px] sm:w-[250px] md:h-[150px] sm:h-28 md:-mt-7 sm:-mt- md:ml-9 sm:ml-28 md:mb-7 sm:z-30"></div>
          <div className="hexagono3  md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] bg-white justify-center items-center md:mb-52 sm:mb-24">
            <div className="hexagono4 md:w-[628px] sm:w-[326px] md:h-[490px] sm:h-[276px] justify-between items-center md:ml-5 sm:ml-4 md:mt-4 sm:mt-3"></div>
          </div>
          <div className="md:justify-center md:items-center bg-white text-transparent trapecio2 md:-mr-[80px] md:w-[556px] sm:w-[200px] md:h-[150px] sm:h-24 md:ml-9 sm:ml-40">
            <p className="md:justify-center md:items-center text-black lg:text-xl md:text-2xl italic font-semibold md:ml-32 sm:ml-4 md:mt-3 sm:mt-2 ">
              @Dynamos_movimiento
            </p>
          </div>  
        </div>
      </div>
      ;
    </div>
  );
}

export default ObjGeneral;
