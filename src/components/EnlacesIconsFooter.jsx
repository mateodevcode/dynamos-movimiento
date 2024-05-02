import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsFillEnvelopeAtFill,
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

const EnlacesIconsFooter = () => {
  const enviarCorreo = (event) => {
    event.preventDefault();
    const destinatario = "dynamosoficial@gmail.com";
    const asunto = "Solicitud para agregarme a Dynamos";
    const cuerpoCorreo = "Hola me gustaria ser parte del movimiento Dynamos";

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpoCorreo}`;
  };

  return (
    <div className="flex md:flex-row md:mb-10 sm:mb-5 md:w-full sm:flex-wrap sm:justify-center sm:items-center sm:w-10/12 md:mt-5">
      <Link
        to="https://www.facebook.com/profile.php?id=100092449118564"
        target="_blank"
      >
        <BsFacebook className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-blue-600 hover:bg-white hover:rounded-full" />
      </Link>
      <Link
        to="https://www.tiktok.com/@dynamosoficial?_t=8hH10TZO0FJ&_r=1"
        target="_blank"
      >
        <BsTiktok className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer" />
      </Link>
      <Link
        to="https://www.instagram.com/dynamos_oficial/?igshid=MzMyNGUyNmU2YQ%3D%3D"
        target="_blank"
      >
        <BsInstagram className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-pink-500" />
      </Link>
      <Link to="https://www.youtube.com/@Dynamosoficial" target="_blank">
        <BsYoutube className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-red-600" />
      </Link>
      <Link
        to="https://api.whatsapp.com/message/ZTMXRXMANGEWF1?autoload=1&app_absent=0"
        target="_blank"
      >
        <BsWhatsapp className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-green-500" />
      </Link>
      <Link to="https://telegram.me/Dynamosoficial" target="_blank">
        <BsTelegram className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-blue-500" />
      </Link>
      <Link to="#">
        <BsFillEnvelopeAtFill
          onClick={enviarCorreo}
          className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-black"
        />
      </Link>
    </div>
  );
  // onClick={() => window.location = 'mailto:dynamosoficial@gmail.com'
};

export default EnlacesIconsFooter;
