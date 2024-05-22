import { useAuth } from "../context/AuthContext";
import imgBienvenida from "../img/bienvenida/img-bienvenida.jpg";
import logoDynamos from "../img/logo/logo-dynamo.png";

const NewBienvenida = () => {
  const { darkMode } = useAuth();

  return (
    <div
      className={`w-full flex flex-col justify-start items-center dark:bg-gray-900 ${
        darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
      } lg:h-screen md:h-screen sm:h-96`}
    >
      <div className="absolute lg:top-80 md:top-64 sm:top-[72px] lg:left-32 md:left-32 sm:left-6 flex flex-row justify-center items-center">
        <div className="bg-white/50 dark:bg-gray-900/50 lg:p-10 md:p-10 sm:p-4 rounded-full">
          <img src={logoDynamos} alt="" className="lg:w-32 md:w-32 sm:w-10" />
        </div>
        <h2 className="lg:text-9xl md:text-9xl font-extrabold sm:text-2xl sm:text-center text-white sm:text-black dark:sm:text-white lg:-ml-8 md:-,l-8 sm:-ml-4">
          ynamos
        </h2>
      </div>
      <div className="lg:h-96 md:h-96 sm:h-32">
        <img src={imgBienvenida} alt="" className="w-full" />
      </div>
      <div className="w-full">
        <p className="lg:text-3xl md:text-3xl sm:text-sm lg:mt-36 md:mt-16 sm:mt-0 text-right lg:pl-[500px] md:pl-[500px] sm:pl-[80px] lg:pr-40 md:pr-40 sm:pr-10">
          {`"Aquí podrán ver lo que hacemos como movimiento al servicio de Dios y del prójimo, y también cómo pueden unirse a nosotros en este camino de fe."`}
        </p>
      </div>
    </div>
  );
};

export default NewBienvenida;
