import { BsFacebook, BsInstagram } from "react-icons/bs";
import teamDynamo from "../data/teamDynamo";

function Team() {

  return (
    <div className={`w-full flex justify-center items-center dark:bg-gray-900`}>
      <div className={`max-h-max w-10/12 flex flex-col justify-center items-center md:rounded-xl mt-12`}>
        <div className="flex flex-col md:w-8/12 sm:w-10/12">
          <h2 className={`font-sans font-bold md:text-5xl text-center md:mb-6 sm:text-3xl sm:mb-3 dark:text-white`}>
            Team Dynamos
          </h2>
          <p className={`text-center md:text-xl sm:text-base md:mb-20 sm:mb-5 text-gray-600 dark:text-gray-300`}>
            Únete a nuestra <strong>comunidad Dynamos</strong>, donde el amor y
            la fe nos unen. Juntos crecemos espiritualmente y construimos un
            camino de esperanza. ¡Te invitamos a formar parte de
            <strong>nuestra familia!</strong>
          </p>
        </div>
        <div className="md:flex md:flex-wrap justify-center items-center md:mb-20 sm:mb-10">
          <CardTeam />
        </div>
      </div>
    </div>
  );
}

const CardTeam = () => {

  return teamDynamo.map((valor, i) => {
    return (
      <div
        className={`flex md:max-h-96 md:w-96  rounded-2xl flex-col text-center justify-center items-center md:m-4 md:px-24 md:py-20 shadow-lg sm:max-h-80 sm:w-72 sm:m-4 sm:px-16 sm:py-12 dark:bg-gray-800 dark:shadow-cyan-500/50 bg-gray-100 shadow-cyan-900/50`}
        key={i}
      >
        <img
          className="flex w-44 rounded-full items-center justify-center mb-6 cursor-pointer"
          src={valor.img}
          alt={`Imagen de ${valor.nombre}`}
        />
        <p className={`font-bold mb-1 cursor-pointer md:text-base sm:text-sm dark:text-white`}>
          {valor.nombre}
        </p>
        <p className={`mb-4 md:text-sm sm:text-xs dark:text-gray-400 text-gray-700`}>{valor.cargo}</p>
        <div className="team-icons flex">
          <BsInstagram className={`ml-2 text-2xl cursor-pointer dark:text-gray-400`} />
          <BsFacebook className={`ml-2 text-2xl cursor-pointer dark:text-gray-400`} />
        </div>
      </div>
    );
  });
};

export default Team;
