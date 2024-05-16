import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { useAuth } from "../context/AuthContext";
import eventoDynamo28 from "../data/eventoDynamo28-05-23";
import eventoDynamo from "../data/eventoDynamo28-05-23";
// import { CardEvento } from "./Eventos";

function DrawerEventos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { darkMode } = useAuth();

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
            <div className="flex h-screen flex-grid justify-between items-center">
              <FotosEventos />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const FotosEventos = () => {
  return eventoDynamo28,eventoDynamo.map((listImage, i) => {
    
    return (
      <div key={i} className="flex justify-center items-center sm:m-3 sm:mb-5">
        <div
          className={`flex flex-col justify-center items-center md:p-4 rounded-md`}
        >
          <div className="flex flex-col items-end"></div>
          <Link to={"."}>
            <img
              src={listImage.img}
              alt={`evento ${listImage.titulo}`}
              className="w-80 rounded-xl mb-4"
            />
          </Link>
        </div>
      </div>
    );
  });
};

export default DrawerEventos;
