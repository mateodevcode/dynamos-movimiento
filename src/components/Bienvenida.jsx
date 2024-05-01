import imagenPrincipal from '../img/imagen-principal.jpg'

function Bienvenida() {

  return (
    <div className={`flex w-full justify-center items-center`}>
      <div className="w-10/12 flex md:flex-row md:pt-32 md:pb-24 sm:flex-col sm:justify-center sm:items-center">
        <div className="flex flex-col md:w-11/12 md:text-left md:m-10 md:mt-32 sm:mt-12">
          <h2 className="md:text-6xl md:text-left font-bold md:mb-10 sm:text-2xl sm:text-center sm:mb-10 dark:text-white">
            Bienvenidos al Movimiento Dynamos
          </h2>
          <p className="md:flex md:text-xl text-gray-600 dark:text-gray-300 sm:mb-5 sm:hidden">
            Aquí podrán ver lo que hacemos como iglesia, cómo servimos a Dios y
            a nuestro prójimo, y cómo pueden unirse a nosotros en este camino de
            fe..
          </p>
        </div>
        <div className="flex md:w-11/12 md:m-10 sm:w-11/12">
          <div className="shadow-lg shadow-gray-900/50 rounded-lg sm:mb-10">
            <img
              className="rounded-lg animate-pulse"
              src={imagenPrincipal}
              alt="Imagen principal de bienvenida"
            />
          </div>
        </div>
        <p className="sm:flex md:hidden text-sm text-justify w-10/12 sm:mb-20 text-gray-600 dark:text-gray-300">
          Aquí podrán ver lo que hacemos como iglesia, cómo servimos a Dios y a
          nuestro prójimo, y cómo pueden unirse a nosotros en este camino de
          fe..
        </p>
      </div>
    </div>
  );
}

export default Bienvenida;
