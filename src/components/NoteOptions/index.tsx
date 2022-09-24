import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import NoteEditForm from "../NoteEditForm";

const NoteOptions = () => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const closeModal = () => setEditModalOpen(false);

  return (
    <>
      {/* You may move the Popover outside Flex.  */}
      <NoteEditForm isOpen={editModalOpen} close={closeModal} />
      <Flex justifyContent='center' mt={4}>
        <Popover placement='bottom' isLazy>
          <PopoverTrigger>
            <IconButton
              aria-label='More server options'
              icon={<BsThreeDotsVertical />}
              variant='solid'
              w='fit-content'
            />
          </PopoverTrigger>
          <PopoverContent w='fit-content' _focus={{ boxShadow: "none" }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  w='194px'
                  variant='ghost'
                  rightIcon={<EditIcon />}
                  justifyContent='space-between'
                  fontWeight='normal'
                  fontSize='sm'
                  onClick={() => setEditModalOpen(true)}
                >
                  Editar
                </Button>
                <Button
                  w='194px'
                  variant='ghost'
                  rightIcon={<AiOutlineShareAlt />}
                  justifyContent='space-between'
                  fontWeight='normal'
                  fontSize='sm'
                >
                  Compartilhar
                </Button>
                <Button
                  w='194px'
                  variant='ghost'
                  rightIcon={<DeleteIcon />}
                  justifyContent='space-between'
                  fontWeight='normal'
                  colorScheme='red'
                  fontSize='sm'
                >
                  Excluir
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </>
  );
};

export default NoteOptions;
