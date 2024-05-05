import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { enviarCorreo } from "../config/enviarCorreo";

function MensajeCorreo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();


  return (
    <>
      <BsFillEnvelopeAtFill
        className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-black dark:hover:text-white"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Quiero ser TeamDynamos
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Nombre</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Ingresa tu nombre"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="username">Correo</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Ingresa tu correo"
                />
              </Box>

              <Text>Queremos asegurarnos de brindarte la mejor experiencia posible. En breve te enviaremos un correo para que puedas personalizar tu solicitud.</Text>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={enviarCorreo}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MensajeCorreo;
