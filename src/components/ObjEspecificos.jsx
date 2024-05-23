// import { useAuth } from "../context/AuthContext";
import { objetivosEspecificos } from "../data/misionVisionObjetivos";
import "../App.css";

function ObjGeneral() {
  // const { darkMode } = useAuth();

  return (
    // principal
    <div className="flex flex-col lg:w-full lg:h-full md:w-full md:h-full justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-20 md:pb-20 md:pt-32 md:-mt-16">
      {/* Objetivos */}
      <div className="flex md:flex-row sm:flex-col justify-center items-center w-full ">
        {/* recuadro1 */}
        <div className=" flex flex-col justify-around items-center md:w-[670px] sm:w-[360px] py-20 md:-mt-[210px] ">
          <div className="md:w-[660px] md:h-80 sm:h-28 justify-center bg-black text-white md:text-7xl sm:text-5xl font-bold md:ml-64 sombraText md:pt-20 sm:mb-20 uppercase">
            <h1 className="md:mt-5 sm:-mt-3 sm:ml-10 text-start">
              {objetivosEspecificos.titulo}
            </h1>
          </div>
          <div className=" hexagono1 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] bg-white justify-center items-center sm:z-30">
            <div className="hexagono4 flex flex-col md:w-[628px] sm:w-[326px] md:h-[496px] sm:h-[276px] justify-center items-center md:ml-5 sm:ml-4 sm:mt-3">
              <p className="text-white md:w-96 sm:w-60 text-2xl md:ml-4 md:mt-24 z-30">
                {objetivosEspecificos.contenido2}
              </p>
              <div className="bg-black md:w-full sm:w[360px] h-72 opacity-60 text-transparent md:-mt-60 "></div>
            </div>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex md:flex-col sm:flex-col justify-center items-center md:w-[670px] sm:w-[360px] md:-mt-16 sm:-mt-32">
          <div className="hexagono3 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] bg-white justify-center items-center mb-12">
            <div className=" flex flex-col hexagono6  md:w-[628px] sm:w-[326px] md:h-[496px] sm:h-[276px] justify-center items-center md:ml-5 sm:ml-4 sm:mt-3">
              <p className="text-white md:w-96 sm:w-60 md:text-2xl md:ml-4 md:-mt-28 z-30">
                {objetivosEspecificos.contenido}
              </p>
              <div className="bg-black md:w-full sm:w[360px] h-60 opacity-60 text-transparent -mt-48 "></div>
            </div>
          </div>
          <div className="hexagono5 flex flex-col md:w-[608px] sm:w-[360px] md:h-[450px] sm:h-80 justify-start items-center md:-mb-32 sm:-mt-28 ">
            <p className="text-white md:w-96 sm:w-60 md:text-2xl md:text-start md:mt-8 md:ml-12 z-30">
              {objetivosEspecificos.contenido3}
            </p>
            <div className="bg-black md:w-full h-48 sm:w-[360px] opacity-60 text-transparent -mt-48 ">
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
