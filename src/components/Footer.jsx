import { Link } from 'react-router-dom';
import logoDynamo from '../img/logo-dynamo.png'
import { BsFacebook, BsInstagram, BsWhatsapp, BsTiktok, BsYoutube, BsTelegram, BsFillEnvelopeAtFill } from "react-icons/bs";

function Footer() {
  
    const enviarCorreo = (event) => {
      event.preventDefault();
      const destinatario = 'dynamosoficial@gmail.com';
      const asunto = 'Solicitud para agregarme a Dynamos';
      const cuerpoCorreo = 'Hola me gustaria ser parte del movimiento Dynamos';
  
      window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpoCorreo}`;
    };
  
  return (
    <div className={`flex flex-col justify-center items-center text-gray-400 pt-20 pb-10`}>
      <Link to="/"><img src={logoDynamo} alt="Logo de Movimiento Dynamo" className='md:w-24 sm:w-16 animate-bounce md:mb-0 sm:mb-5' /></Link>
      <div className="text-gray-400 md:flex flex-row sm:hidden md:my-4">
        <p className="mx-5 hover:text-black font-bold cursor-pointer"><Link to="/">Inicio</Link></p>
        <p className="mx-5 hover:text-black font-bold cursor-pointer"><Link to="/eventos">Eventos</Link></p>
        <p className="mx-5 hover:text-black font-bold cursor-pointer"><Link to="/testimonios">Testimonios</Link></p>
        <p className="mx-5 hover:text-black font-bold cursor-pointer"><Link to="/team">Unete + TEAM</Link></p>
      </div>
      <div className="flex md:flex-row md:mb-10 sm:mb-5 md:w-full sm:flex-wrap sm:justify-center sm:items-center sm:w-10/12 md:mt-5">
        <Link to="https://www.facebook.com/profile.php?id=100092449118564" target='_blank'><BsFacebook className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-blue-600 "/></Link>
        <Link to="https://www.tiktok.com/@dynamosoficial?_t=8hH10TZO0FJ&_r=1" target='_blank'><BsTiktok className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-black "/></Link>
        <Link to="https://www.instagram.com/dynamos_oficial/?igshid=MzMyNGUyNmU2YQ%3D%3D" target='_blank'><BsInstagram className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-pink-500"/></Link>
        <Link to="https://www.youtube.com/@Dynamosoficial" target='_blank'><BsYoutube className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-red-600"/></Link>
        <Link to="https://api.whatsapp.com/message/ZTMXRXMANGEWF1?autoload=1&app_absent=0" target='_blank'><BsWhatsapp className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-green-500"/></Link>
        <Link to="https://telegram.me/Dynamosoficial" target='_blank'><BsTelegram className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-blue-500"/></Link>
        <Link to="#" ><BsFillEnvelopeAtFill onClick={enviarCorreo} className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-black"/></Link>
        
      </div>
      <p className="select-none md:w-full md:text-base sm:text-xs text-center">© 2023 Movimiento Dynamos, Inc. All rights reserved.</p>
    </div>
  );
}

// onClick={() => window.location = 'mailto:dynamosoficial@gmail.com'

export default Footer