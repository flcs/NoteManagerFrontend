import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import { HiOutlineShare } from "react-icons/hi";
import userEvent from "@testing-library/user-event";
import { useAuth } from "../../context/auth";
import { DeleteIcon } from "@chakra-ui/icons";

interface IShareModal {
  viwerBoards: string[] | undefined;
  boardId: string | undefined;
}

const ShareModal = ({ viwerBoards, boardId }: IShareModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        gap={2}
        alignItems={"center"}
        color='black'
        cursor={"pointer"}
        onClick={onOpen}
      >
        <HiOutlineShare size={"24px"} />
        Compartilhar
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gerenciar compartilhamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Adicionar visualizador</FormLabel>
              <Input placeholder='ID do visualizador' />
            </FormControl>
            <List>
              {viwerBoards?.map((vb, i) => (
                <ListItem>
                  {vb}
                  <DeleteIcon
                    width={"20px"}
                    height='20px'
                    cursor={"pointer"}
                    color={"red"}
                    onClick={() => {
                      console.log("alou");
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareModal;
