import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Cadastre-se
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            para aproveitar todos os nossos recursos interessantes ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='firstName' isRequired>
              <FormLabel>Nome:</FormLabel>
              <Input type='text' />
            </FormControl>

            <FormControl id='email' isRequired>
              <FormLabel>Endereço de email:</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Senha:</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Cadastrar
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Já é um usuário? <Link color={"blue.400"}>Entre</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
