import { useAuth } from "../context/AuthContext";
import imgBienvenida from "../img/bienvenida/img-bienvenida.jpg";
import logoDynamos from "../img/logo/logo-dynamo.png";

const NewBienvenida = () => {
  const { darkMode } = useAuth();

  return (
    <div
      className={`w-full flex flex-col justify-start items-center dark:bg-gray-900 ${
        darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
      } h-screen`}
    >
      <div className="absolute top-80 left-32 flex flex-row justify-center items-center">
        <div className="bg-white/50 dark:bg-gray-900/50 p-10 rounded-full">
          <img src={logoDynamos} alt="" className="w-32" />
        </div>
        <h2 className="lg:text-9xl md:text-9xl font-extrabold sm:text-2xl sm:text-center text-white sm:text-black dark:sm:text-white -ml-8">
          ynamos
        </h2>
      </div>
      <div className="h-96">
        <img src={imgBienvenida} alt="" className="w-full" />
      </div>
      <div className="w-full">
        <p className="text-3xl mt-36 text-right pl-[500px] pr-40">
          {`"Aquí podrán ver lo que hacemos como movimiento al servicio de Dios y del prójimo, y también cómo pueden unirse a nosotros en este camino de fe."`}
        </p>
      </div>
    </div>
  );
};

export default NewBienvenida;
