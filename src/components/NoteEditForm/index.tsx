import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

interface INoteEditForm {
  isOpen: boolean;
  close: () => void;
}

const NoteEditForm = ({ isOpen, close }: INoteEditForm) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar nota</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input placeholder='Título' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Textarea placeholder='Descrição' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Salvar
            </Button>
            <Button onClick={close}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NoteEditForm;
