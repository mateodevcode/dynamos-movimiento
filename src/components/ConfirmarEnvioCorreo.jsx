import { Alert, AlertIcon } from "@chakra-ui/react";

const ConfirmarEnvioCorreo = () => {
  return (
    <Alert status="success" variant="top-accent">
      <AlertIcon />
      Data uploaded to the server. Fire on!
    </Alert>
  );
};

export default ConfirmarEnvioCorreo;
