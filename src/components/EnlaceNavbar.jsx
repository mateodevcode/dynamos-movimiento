import { Link } from "react-router-dom";

const EnlaceNavbar = ({nombre, ruta}) => {
  return (
    <Link to={ruta}>
      <p
        className={`text-lg mx-4 cursor-pointer dark:hover:text-gray-400 hover:text-black  hover:scale-110 my-2`}
      >
        {nombre}
      </p>
    </Link>
  );
};

export default EnlaceNavbar;
