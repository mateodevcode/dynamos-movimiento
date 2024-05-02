import { Link } from "react-router-dom";

const EnlaceFooter = ({nombre, ruta}) => {
  return (
    <p className="mx-5 hover:text-black font-bold cursor-pointer">
      <Link to="/">{nombre}</Link>
    </p>
  );
};

export default EnlaceFooter;
