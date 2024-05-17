// Evento # 1
import img_evento_01 from "../img/eventos/09-07-23/flayer-evento.jpg";
import img_evento_01_01 from "../img/eventos/09-07-23/img-01.jpg";
import img_evento_01_02 from "../img/eventos/09-07-23/img-02.jpg";
import img_evento_01_03 from "../img/eventos/09-07-23/img-03.jpg";
import img_evento_01_04 from "../img/eventos/09-07-23/img-04.jpg";
import img_evento_01_05 from "../img/eventos/09-07-23/img-05.jpg";
import img_evento_01_06 from "../img/eventos/09-07-23/img-06.jpg";
import img_evento_01_07 from "../img/eventos/09-07-23/img-07.jpg";
import img_evento_01_08 from "../img/eventos/09-07-23/img-08.jpg";

// Evento # 2
import img_evento_02 from "../img/eventos/17-09-23/flayer-evento.jpg";
import img_evento_02_01 from "../img/eventos/17-09-23/img-01.jpg";
import img_evento_02_02 from "../img/eventos/17-09-23/img-02.jpg";
import video_evento_02_01 from "../img/eventos/17-09-23/video-01.mp4";

// Evento # 3
import img_evento_03 from "../img/eventos/28-05-23/flayer-evento.jpg";
import img_evento_03_01 from "../img/eventos/28-05-23/img-01.jpg";
import img_evento_03_02 from "../img/eventos/28-05-23/img-02.jpg";
import img_evento_03_03 from "../img/eventos/28-05-23/img-03.jpg";
import img_evento_03_04 from "../img/eventos/28-05-23/img-04.jpg";

// Creador de eventos
import imgRaul from "../img/team-raul.jpg";

export const eventos = [
  {
    id: 3,
    titulo: `Evento de prueba 3`,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nobis dolorum. lorem",
    fecha: "Mayo 28 2023",
    autor: "Manuel Sandoval",
    imgAutor: imgRaul,
    imgPrincipal: img_evento_03,
    img: [
      img_evento_03_01,
      img_evento_03_02,
      img_evento_03_03,
      img_evento_03_04,
    ],
    video: [],
  },
  {
    id: 2,
    titulo: "Evento de prueba 2",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nobis dolorum. lorem",
    fecha: "Julio 09 2023",
    autor: "Manuel Sandoval",
    imgAutor: imgRaul,
    imgPrincipal: img_evento_02,
    img: [img_evento_02_01, img_evento_02_02],
    video: [video_evento_02_01],
  },
  {
    id: 1,
    titulo: "Evento de prueba 1",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nobis dolorum. lorem",
    fecha: "Septiembre 17 2023",
    autor: "Manuel Sandoval",
    imgAutor: imgRaul,
    imgPrincipal: img_evento_01,
    img: [
      img_evento_01_01,
      img_evento_01_02,
      img_evento_01_03,
      img_evento_01_04,
      img_evento_01_05,
      img_evento_01_06,
      img_evento_01_07,
      img_evento_01_08,
    ],
    video: [],
  },
];
