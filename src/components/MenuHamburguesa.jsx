import { useAuth } from "../context/AuthContext";
import { enlacesNavbar } from "../data/enlaces.navbar";
import EnlaceNavbar from "./EnlaceNavbar";

const MenuHamburguesa = () => {
  const { mostrarMenu } = useAuth();

  return (
    <div className={`w-full flex flex-col justify-center items-start lg:hidden md:hidden mt-12 p-4 bg-gray-900/10 dark:bg-gray-900 dark:text-gray-300 ${mostrarMenu ? "flex" : "hidden"}`}>
      {enlacesNavbar.map((enlace, index) => {
        return (
          <EnlaceNavbar key={index} nombre={enlace.nombre} ruta={enlace.ruta} />
        );
      })}
    </div>
  );
};

export default MenuHamburguesa;
