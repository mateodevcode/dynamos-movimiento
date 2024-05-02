import logoDynamos from "../img/logo-dynamo.png";

function SomosDynamos() {
  return (
    <div
      className={`flex flex-col w-full items-center dark:bg-gray-900`}
    >
      {/* Recueadro1 */}
      <div className="flex md:flex-row sm:flex-col justify-around items-center md:mt-20 md:mb-10 sm:mt-20 sm:w-auto">
        <div className="flex flex-col justify-center items-center md:w-5/12 md:pr-20 sm:mb-4 md:mb-0">
          <img
            src={logoDynamos}
            alt="Logo de dynamos"
            className=" md:w-48 sm:w-32 "
          />
        </div>
        <div className={`flex flex-col w-5/12 justify-center items-center`}>
          <h3 className="text-6xl mb-10 sm:text-center text-yellow-600">MISIÓN </h3>
          <p className="text-xl italic sm:text-center md:text-left md:w-auto sm:w-72 text-gray-600 dark:text-gray-300 sm:mx-0 md:mx-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum
            ducimus eaque, delectus adipisci obcaecati doloremque. Quis harum
            pariatur laudantium sed, vero nisi tempora modi quasi necessitatibus
            optio facilis magnam..
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* Recueadro2 */}
      <div className="flex md:flex-row sm:flex-col justify-around items-center md:ml-32 md:mt-0 sm:mt-20">
        <div className={`flex flex-col w-5/12 justify-center items-center sm:mb-4 md:mb-0`}>
          <h3 className="text-6xl mb-10 text-left  text-yellow-600">VISIÓN </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic sm:text-center md:text-left md:w-auto sm:w-72">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum
            ducimus eaque, delectus adipisci obcaecati doloremque. Quis harum
            pariatur laudantium sed, vero nisi tempora modi quasi necessitatibus
            optio facilis magnam..
          </p>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-auto md:w-5/12 ">
          <img
            src={logoDynamos}
            alt="Logo de dynamos"
            className="opacity-10 md:w-48 sm:w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default SomosDynamos;
