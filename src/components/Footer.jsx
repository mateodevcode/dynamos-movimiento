import { Link } from "react-router-dom";
import logoDynamo from "../img/logo-dynamo.png";
import { enlacesFooter } from "../data/enlaces.footer";
import EnlacesIconsFooter from "./EnlacesIconsFooter";
import { enlacesIconFooter } from "../data/enlaces.icon.footer";

function Footer() {

  return (
    <div
      className={`flex flex-col justify-center items-center text-gray-400 pt-20 pb-10 bg-black`}
    >
      <Link to="/">
        <img
          src={logoDynamo}
          alt="Logo de Movimiento Dynamo"
          className="md:w-24 sm:w-16 animate-bounce md:mb-0 sm:mb-5"
        />
      </Link>
      <div className="md:flex flex-row sm:hidden md:my-4">
        {enlacesFooter.map((enlace, i) => {
          return (
            <p
              key={i}
              className="mx-5 hover:text-black font-bold cursor-pointer dark:hover:text-white"
            >
              <Link to={enlace.ruta}>{enlace.nombre}</Link>
            </p>
          );
        })}
      </div>
      {enlacesIconFooter.map((enlace, i) => {
        const redes = enlace.redes;
        return <EnlacesIconsFooter key={i} enlace={redes} />;
      })}

      <p className="select-none md:w-full md:text-base sm:text-xs text-center">
        © 2023 Movimiento Dynamos, Inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
