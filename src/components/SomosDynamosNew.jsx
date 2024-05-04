import React from "react";
import mision1 from "../img/images/mision1.jpeg"
import mision2 from "../img/images/mision2.jpeg"
import mision3 from "../img/images/mision3.jpeg"
/* import vision1 from "../img/images/vision1.jpg"
import vision2 from "../img/images/vision2.jpg" */


function SomosDynamosNew() {
  return (
    <div className="flex flex-col content-center justify-center items-center mt-12 py-10 w-full h-auto dark:bg-gray-900">
      <div className="w-auto h-auto flex flex-row bg-imagen-aboutus p-10 ">
        <div className="flex w-96 h-96 flex-col rounded-full fondo-claro-oscuro">
          <h1 className="text-4xl text-start pt-20 pb-4 pl-16 italic font-extrabold">
            MISIÓN
          </h1>
          <p className="text-xs font-semibold text-justify ml-5 px-4 w-60 mb-10">
            Este movimiento de valientes está inspirado por el Espiritu Santo
            para restaurar el avivamiento en la humanidad y al servicio de la
            poblacion en general, nos movemos en obras espirutuales y
            sociales.Nuestro equipo de trabajo desarrola su gestión sobre una
            solida base de principios cristianos.
          </p>
          <p className="text-xs italic font-semibold pl-20">@Dynamos_movimiento</p>
        </div>
        <div className="flex flex-col absolute pl-64 -mt-12 ">
          <img className="w-36 h-36 my-2 bg-blue-700" src={mision1} alt="" />
          <img className="w-36 h-36 my-2 bg-blue-700 " src={mision2} alt="" />
          <img className="w-36 h-36 my-2 bg-blue-700 " src={mision3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SomosDynamosNew;
