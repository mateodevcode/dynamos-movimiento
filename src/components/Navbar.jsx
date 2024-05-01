import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logoDynamo from "../img/logo-dynamo.png";
import { enlacesNavbar } from "../data/enlaces.navbar";
import EnlaceNavbar from "./EnlaceNavbar";
import ModoDark from "./ModoDark";
import { BsList } from "react-icons/bs";
import "../App.css";
import MenuHamburguesa from "./MenuHamburguesa";

function BarraDeNavegacion() {
  const { onclickMenu } = useAuth();

  return (
    <div className="flex flex-col justify-start items-start mb-10">
      <div
        className={`w-full h-12 flex flex-row items-center lg:justify-around md:justify-around sm:justify-between bg-slate-100/25  dark:bg-gray-900/80 dark:text-white border-gray-200 border-b-2 z-10 fixed`}
      >
        {/* Imagen principal */}
        <Link to={"/"}>
          <img
            className="w-8 mx-8 animate-bounce"
            src={logoDynamo}
            alt="Logo de Dynamo"
          />
        </Link>

        {/* Un map de los enlaces */}
        <div
          className={`md:flex flex-row justify-center items-center sm:hidden`}
        >
          {enlacesNavbar.map((enlace, index) => {
            return (
              <EnlaceNavbar
                key={index}
                nombre={enlace.nombre}
                ruta={enlace.ruta}
              />
            );
          })}
        </div>

        <div
          className={`flex flex-row justify-center items-center cursor-pointer animate-pulse mx-4`}
        >
          <EnlaceNavbar nombre="Log in" ruta="/login" />
          <ModoDark />
          <BsList
            className={`mx-4 text-2xl md:hidden`}
            onClick={onclickMenu}
          />
        </div>
      </div>
      <MenuHamburguesa />
    </div>
  );
}

export default BarraDeNavegacion;
