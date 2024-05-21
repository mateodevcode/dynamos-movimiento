// import { useAuth } from "../context/AuthContext";
import { objetivoGeneral } from "../data/misionVisionObjetivos";
import "../App.css";

function ObjGeneral() {
  // const { darkMode } = useAuth();

  return (
    // principal
    <div className="w-full h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-20 pb-28 md:pt-40"> 
      {/* Objetivos */}
      <div className="flex flex-row justify-center items-center w-full ">
        {/* recuadro1 */}x
        <div className=" flex flex-col justify-between items-center md:w-[670px] py-20 -mt-32 ">
          <div className="w-[640px] bg-black text-white text-8xl mb-44 font-bold ml-40 mt-24">
            <h1>OBJETIVOS</h1>
          </div>
          <div className=" hexagono1 md:w-[668px] md:h-[528px] bg-white justify-center items-center sombraHexagono">
            <div className="hexagono2 md:w-[628px] md:h-[496px] justify-between items-center ml-5 mt-4"></div>
          </div>
          <div className="  md:-mt-[470px] w-96 h-auto z-30 py-5">
            <h1 className="text-white text-center text-4xl font-bold mb-16 uppercase italic sombraText ">{objetivoGeneral.titulo}</h1>
            <p className="text-white text-2xl ml-4">  
              {objetivoGeneral.contenido}
            </p>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-col justify-around items-center md:w-[670px]">
          <div className="bg-white trapecio md:-mr-[80px] md:w-[556px] md:h-[150px] md:-mt-7 md:ml-9 md:mb-7"></div>
          <div className="hexagono3 md:w-[668px] md:h-[528px] bg-white justify-center items-center mb-48">
            <div className="hexagono4 md:w-[628px] md:h-[496px] justify-center items-center ml-5 mt-4"></div>
          </div>
          <div className="md:justify-center md:items-center bg-white text-transparent trapecio2 md:-mr-[80px] md:w-[556px] md:h-[200px] md:ml-9">
            <p className="md:justify-center md:items-center text-black lg:text-xl md:text-2xl italic font-semibold md:ml-32 md:mt-5 ">
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
