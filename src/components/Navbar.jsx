import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logoDynamo from "../img/logo-dynamo.png";
import { BsList, BsSun, BsMoonFill } from "react-icons/bs";
import "../App.css";

function BarraDeNavegacion() {
  const { themma, onClickThemma, mostrarMenu, onclickMenu } = useAuth();

  return (
    <div className={`flex flex-row items-center justify-around border-gray-200 border-b-2 w-full z-10 fixed ${themma}`}>
      <img
        className="w-8 md:mt-0 select-none sm:mt-4 sm:animate-bounce md:animate-none"
        src={logoDynamo}
        alt="Logo de Dynamo"
      />
      <div className={`text-white sm:text-3xl`} onClick={onsubmit}></div>
      <div className={`md:flex flex-row justify-center items-center sm:hidden`}>
        <Link to="/">
          <p
            className={`text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2 md:flex`}
          >
            Inicio
          </p>
        </Link>
        <Link to="/somos-dynamos">
          <p
            className={`text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2 md:flex`}
          >
            Dynamos
          </p>
        </Link>
        <Link to="/eventos">
          <p
            className={`text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2 md:flex`}
          >
            Eventos
          </p>
        </Link>
        <Link to="/testimonios">
          <p
            className={`text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2 md:flex`}
          >
            Testimonios
          </p>
        </Link>
        <Link to="/team">
          <p
            className={`text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2 md:flex`}
          >
            Unete + TEAM
          </p>
        </Link>
      </div>
      <div
        className={`flex flex-row justify-center items-center cursor-pointer animate-pulse`}
      >
        <div className="flex" onClick={onClickThemma}>
          <BsMoonFill
            className={`mx-2 text-2xl  ${themma == "light" ? "" : "hidden"}`}
          />
          <BsSun
            className={`mx-2 text-2xl  ${themma == "light" ? "hidden" : ""}`}
          />
        </div>
        <Link to="/login">
          <p className="text-sm font-bold hover:text-gray-400 mx-2">Log in</p>
        </Link>
        <BsList className={`mx-2 text-2xl md:hidden `} onClick={onclickMenu} />
      </div>
      <div
        className={`w-full flex flex-col justify-center items-center ${mostrarMenu} text-white`}
      >
        <Link to="/" onClick={onclickMenu}>
          <p
            className={`flex text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2`}
          >
            Inicio
          </p>
        </Link>
        <Link to="/somos-dynamos" onClick={onclickMenu}>
          <p
            className={`flex text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2`}
          >
            Dynamos
          </p>
        </Link>
        <Link to="/eventos">
          <p
            className={`flex text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2`}
          >
            Eventos
          </p>
        </Link>
        <Link to="/testimonios">
          <p
            className={`flex text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2`}
          >
            Testimonios
          </p>
        </Link>
        <Link to="/team">
          <p
            className={`flex text-lg md:mx-8 cursor-pointer hover:text-gray-400 hover:scale-110 sm:my-2`}
          >
            Unete + TEAM
          </p>
        </Link>
      </div>
    </div>
  );
}

export default BarraDeNavegacion;
