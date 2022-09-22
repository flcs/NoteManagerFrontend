import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/auth";
import Routes from "./routes";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
