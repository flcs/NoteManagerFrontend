// lucas smidth

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
import { useToast } from "@chakra-ui/react";

import { apiGetProduto, apiPostProduto, apiGetProdutos } from "../../services/produto";
import Footer from "../../components/Footer";

const Produto = () => {
  const [showPreco, setShowPreco] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [preco, setPreco] = useState<string>("");

  const toast = useToast();
  const enviaProduto = async () => {
    try {
      const response = await apiPostProduto({ name: name, categoria: categoria, preco: preco });
      if (response.status === 201) {
        toast({
          title: "Sucesso!",
          description: response.data.msg,
          status: "success",
          duration: 90000,
          isClosable: true,
        });
      }
    } catch (error: any) {
      if (error.response.status === 422) {
        toast({
          title: "Erro 422",
          description: error.response.data.msg,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Erro",
          description: "Falha tente novamente mais tarde!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Flex
        minH={"calc(100vh - 64px)"}
        align={"center"}
        justify={"center"}
        bg={"blue.300"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Cadastro Produto
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              para poder vendê-lo ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id='name' isRequired>
                <FormLabel>Nome:</FormLabel>
                <Input type='text' onChange={(e) => setName(e.target.value)} />
              </FormControl>

              <FormControl id='categoria' isRequired>
                <FormLabel>Categoria:</FormLabel>
                <Input
                  type='text'
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </FormControl>
              <FormControl id='preco' isRequired>
                <FormLabel>Preco:</FormLabel>
                <InputGroup>
                  <Input
                    type={showPreco ? "text" : "password"}
                    onChange={(e) => setPreco(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPreco((showPreco) => !showPreco)
                      }
                    >
                      {showPreco ? <ViewIcon /> : <ViewOffIcon />}
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
                  onClick={enviaProduto}
                >
                  Cadastrar
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Já é um usuário?{" "}
                  <Link color={"blue.400"} href={"/"}>
                    Entre
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};

export default Produto;
