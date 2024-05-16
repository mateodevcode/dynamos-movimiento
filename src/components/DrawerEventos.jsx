import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { useAuth } from "../context/AuthContext";

function DrawerEventos({imagenes}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { darkMode } = useAuth();
  const indice = imagenes

  return (
    <>
      <TfiLayoutSliderAlt
        onClick={onOpen}
        className="-mb-12 z-40 text-white w-12 h-8 text-2xl justify-end cursor-pointer ml-64"
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={darkMode ? "#111827" : "white"}>
          <DrawerCloseButton
            bg={darkMode ? "white" : "black"}
            color={darkMode ? "#111827" : "white"}
          />

          <DrawerBody>
            <div className="flex flex-wrap justify-between items-center">
              {indice.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Imagen ${index}`} />
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// const FotosEventos = () => {

//   return eventos.map((imagen, i) => {
//     return (
//       <div key={i} className="flex flex-col justify-start items-start">
//         <div
//           className={`flex flex-col justify-start items-center`}
//         >
//           {imagen.map((img, i) => {
//             return (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`evento ${imagen.titulo}`}
//                 className="w-96 rounded-xl m-4"
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   });
// };

export default DrawerEventos;
