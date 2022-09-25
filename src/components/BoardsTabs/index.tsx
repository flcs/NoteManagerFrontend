import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import Note from "../Note";
import { IBoard } from "../../interfaces/board";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { HiOutlineShare } from "react-icons/hi";
import NoteForm from "../NoteForm";
import { INote } from "../../interfaces/note";
import { getNotes as serviceGetNotes } from "../../services/note";
interface IBoardsTabs {
  boards: IBoard[];
  createBoard: () => void;
  deleteBoard: (_id: string | undefined) => void;
}

const BoardsTabs = ({ boards, createBoard, deleteBoard }: IBoardsTabs) => {
  const [noteModalOpen, setNoteModalOpen] = useState<boolean>(false);
  const closeModal = () => setNoteModalOpen(false);

  const [note, setNote] = useState<INote | undefined>(undefined);
  const [notes, setNotes] = useState<INote[] | undefined>(undefined);

  const [tabIndex, setTabIndex] = useState(0);

  const [update, setUpdate] = useState<boolean>(false);
  const reload = () => setUpdate(!update);

  const getNotes = async (boardId: string | undefined) => {
    try {
      const response = !!boardId && (await serviceGetNotes({ board: boardId }));
      console.log(response);
      response && setNotes(response.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tabIndex < boards.length && getNotes(boards[tabIndex]._id);
    // console.log(tabIndex);
  }, [tabIndex, boards, noteModalOpen, update]);

  return (
    <>
      {noteModalOpen && (
        <NoteForm
          isOpen={noteModalOpen}
          note={note}
          close={closeModal}
          type={"new"}
        />
      )}
      <Tabs
        m='5'
        variant='soft-rounded'
        onChange={(index) => setTabIndex(index)}
      >
        <TabList flexWrap={"wrap"}>
          {boards.map((board, i) => (
            <Tab _selected={{ color: "Black", bg: "white" }}>
              Quadro {i + 1}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {boards.map((board, i) => (
            <TabPanel>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                p='4px 16px'
                mb={"10px"}
                gap={5}
                bgColor={"white"}
                borderRadius='full'
              >
                <Flex gap={5} m='16px 0 '>
                  <Flex
                    gap={2}
                    alignItems={"center"}
                    color='black'
                    cursor={"pointer"}
                    onClick={() => createBoard()}
                  >
                    <AddIcon width={"24px"} height={"24px"} />
                    Criar Quadro
                  </Flex>
                  <Flex
                    gap={2}
                    alignItems={"center"}
                    color='black'
                    cursor={"pointer"}
                  >
                    <HiOutlineShare size={"24px"} />
                    Compartilhar
                  </Flex>
                </Flex>
                <DeleteIcon
                  width={"20px"}
                  height='20px'
                  cursor={"pointer"}
                  color={"red"}
                  onClick={() => {
                    deleteBoard(board._id);
                  }}
                />
              </Flex>
              <Flex flexWrap={"wrap"} gap='16px'>
                {notes?.map((n, i) => (
                  <Note
                    _id={n._id}
                    title={n.title}
                    description={n.description}
                    board={n.board}
                    reload={reload}
                  />
                ))}
                {notes?.length === 0 && <Text>Quadro Vazio</Text>}
                <Flex
                  gap={2}
                  alignItems={"center"}
                  color='white'
                  cursor={"pointer"}
                  onClick={() => {
                    setNote({
                      title: "",
                      description: "",
                      board: board?._id,
                    });
                    setNoteModalOpen(true);
                  }}
                >
                  <AddIcon width={"24px"} height={"24px"} />
                  Nova nota
                </Flex>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default BoardsTabs;
