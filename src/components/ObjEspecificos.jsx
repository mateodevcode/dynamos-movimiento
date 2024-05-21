// import { useAuth } from "../context/AuthContext";
import { objetivosEspecificos } from "../data/misionVisionObjetivos";
import "../App.css";

function ObjGeneral() {
  // const { darkMode } = useAuth();

  return (
    // principal
    <div className="w-full h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-20 pb-32 md:pt-24 md:-mt-16">
      {/* Objetivos */}
      <div className="flex flex-row justify-center items-center w-full ">
        {/* recuadro1 */}x
        <div className=" flex flex-col justify-around items-center md:w-[670px] py-20  md:-mt-[210px] ">
          <div className="w-[680px] h-80 justify-center bg-black text-white text-7xl font-bold md:ml-64 sombraText md:pt-20 uppercase">
            <h1 className="md:mt-5 text-start">
              {objetivosEspecificos.titulo}
            </h1>
          </div>
          <div className=" hexagono1 md:w-[668px] md:h-[528px] bg-white justify-center items-center sombraHexagono">
            <div className="hexagono4 flex flex-col md:w-[628px] md:h-[496px] justify-center items-center ml-5 mt-4">
              <p className="text-white w-96 text-2xl ml-4 mt-24 z-30">
                {objetivosEspecificos.contenido2}
              </p>
              <div className="bg-black w-full h-72 opacity-60 text-transparent -mt-60 "></div>
            </div>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-col justify-center items-center md:w-[670px] md:-mt-16">
          <div className="hexagono3 md:w-[668px] md:h-[528px] bg-white justify-center items-center mb-12 mt-">
            <div className=" flex flex-col hexagono6 md:w-[628px] md:h-[496px] justify-center items-center ml-5 mt-4">
              <p className="text-white w-96 text-2xl ml-4 -mt-24 z-30">
                {objetivosEspecificos.contenido}
              </p>
              <div className="bg-black w-full h-48 opacity-60 text-transparent -mt-40 "></div>
            </div>
          </div>
          <div className="hexagono5 flex flex-col md:w-[608px] md:h-[450px] justify-start items-center -mb-32 ">
            <p className="text-white w-96 text-2xl text-start mt-8 ml-12 z-30">
              {objetivosEspecificos.contenido3}
            </p>
            <div className="bg-black w-full h-48 opacity-60 text-transparent -mt-48 ">
              {objetivosEspecificos.contenido3}
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ObjGeneral;
