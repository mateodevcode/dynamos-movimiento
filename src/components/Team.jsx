import { useAuth } from "../context/AuthContext.jsx";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import teamDynamo from "../data/teamDynamo";

function Team() {

  return (
    <div className={`w-full flex justify-center items-center`}>
      <div className={`max-h-max w-10/12 flex flex-col justify-center items-center md:rounded-xl md:mt-32 sm:mt-20`}>
        <div className="flex flex-col md:w-8/12 sm:w-10/12">
          <h2 className={`font-sans font-bold md:text-5xl text-center md:mb-6 sm:text-3xl sm:mt-12 sm:mb-3`}>
            Team Dynamos
          </h2>
          <p className={`text-center md:text-xl m-2 sm:text-base md:mb-20 sm:mb-5`}>
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
  const { themma } = useAuth()

  return teamDynamo.map((valor, i) => {
    return (
      <div
        className={`flex md:max-h-96 md:w-96  rounded-2xl flex-col text-center justify-center items-center md:m-4 md:px-24 md:py-20 shadow-lg sm:max-h-80 sm:w-72 sm:m-4 sm:px-16 sm:py-12 ${themma == "dark" ? "bg-gray-800 shadow-cyan-500/50" : "bg-gray-100 shadow-cyan-900/50"}`}
        key={i}
      >
        <img
          className="flex w-44 rounded-full items-center justify-center mb-6 cursor-pointer"
          src={valor.img}
          alt={`Imagen de ${valor.nombre}`}
        />
        <p className={`font-bold mb-1 cursor-pointer md:text-base sm:text-sm ${themma == "dark" ? "text-white" : "text-black"}`}>
          {valor.nombre}
        </p>
        <p className={`mb-4 text-gray-400 md:text-sm sm:text-xs ${themma == "dark" ? "text-gray-400" : "text-gray-700"}`}>{valor.cargo}</p>
        <div className="team-icons flex">
          <BsInstagram className={`mr-4 text-gray-400 text-2xl cursor-pointer ${themma == "dark" ? "text-gray-400" : "text-gray-700"}`} />
          <BsFacebook className={`ml-2 text-gray-400 text-2xl cursor-pointer ${themma == "dark" ? "text-gray-400" : "text-gray-700"}`} />
        </div>
      </div>
    );
  });
};

export default Team;
