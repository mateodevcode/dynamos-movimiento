import React from "react";
import mision1 from "../img/somosdynamos/mision1.jpeg";
import mision2 from "../img/somosdynamos/mision2.jpeg";
import mision3 from "../img/somosdynamos/mision3.jpeg";
/* import vision1 from "../img/somosdynamos/vision1.jpeg";
import vision2 from "../img/somosdynamos/vision2.jpeg"; */

function SomosDynamosNew() {
  return (
    <div className=" flex flex-col content-center justify-center items-center mt-12 w-full h-full dark:bg-gray-900 ">
      <div className="w-full h-full flex flex-row justify-center p-16 mb-20 bg-imagen-aboutus">
        <div className="flex w-[600px] h-[600px] flex-col rounded-full items-center justify-around fondo-claro-oscuro pr-48">
          <h1 className="text-4xl italic pl-10 font-extrabold">
            MISIÓN
          </h1>
          <p className="text-sm font-semibold text-justify px-4 w-60 mb-10">
            Este movimiento de valientes está inspirado por el Espiritu Santo
            para restaurar el avivamiento en la humanidad y al servicio de la
            poblacion en general, nos movemos en obras espirutuales y
            sociales.Nuestro equipo de trabajo desarrola su gestión sobre una
            solida base de principios cristianos.
          </p>
          <p className="text-xs italic font-semibold pl-20">
            @Dynamos_movimiento
          </p>
        </div>
        <div className="flex flex-col absolute pl-96 -mt-16 ">
          <img className="w-80 h-56 my-2 bg-blue-700" src={mision1} alt="" />
          <img className="w-80 h-56 my-2 bg-blue-700 " src={mision2} alt="" />
          <img className="w-80 h-56 my-2 bg-blue-700 " src={mision3} alt="" />
        </div>
      </div>
     {/*  <div className="w-full h-full flex flex-row justify-center bg-imagen-aboutus">
        <div className="flex w-96 h- flex-col fondo-claro-oscuro">
          <h1 className="text-4xl text-start pt-20 pb-4 pl-16 italic font-extrabold">
            VISIÓN
          </h1>
          <p className="text-xs font-semibold text-justify ml-5 px-4 w-60 mb-10">
            Extendernos en los proximos años, con el fin de dewarrollar
            actividades o (proyectos) espirituales y sociales. Logrando un
            impacto positivo en las familias.
          </p>
          <p className="text-xs italic font-semibold pl-20">
            @Dynamos_movimiento
          </p>
        </div>
        <div className="flex flex-row -mt-12 ">
          <img
            className="w-4/12 h-3/6 bg-blue-700 absolute"
            src={vision1}
            alt=""
          />
          <img
            className="w-36 h-36 bg-blue-700 absolute "
            src={vision2}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}

export default SomosDynamosNew;
