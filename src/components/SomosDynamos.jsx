import logoDynamos from '../img/logo-dynamo.png'
import { useAuth } from "../context/AuthContext.jsx";

function SomosDynamos() {
  const { themma } = useAuth()

  return (
    <div className={`flex w-full items-center justify-center ${themma}`}>
      <div className="flex flex-row md:mt-32 sm:mt-20">
        <div className="flex flex-col justify-center items-center w-5/12">
          <img src={logoDynamos} alt="Logo de dynamos" className='w-64'/>
          <img src={logoDynamos} alt="Logo de dynamos" className='opacity-10 w-64'/>
        </div>
        <div className={`flex flex-col w-5/12 justify-center items-center ${themma == "light" ? "text-black" : "text-white"}`}>
          <h3 className='text-6xl mb-24 text-left text-yellow-600'>SIGNIFICADO DE LA PALABRA </h3>
          <p className='text-xl italic'>
            En griego la raíz de la palabra Dunamis es dynamus, que significa,
            el poder explosivo del Espíritu Santo con una connotación de
            dinamita y dinámica.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SomosDynamos