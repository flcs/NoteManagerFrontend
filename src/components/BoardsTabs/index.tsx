import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from "@chakra-ui/react";
import Note from "../Note";
import { IBoard } from "../../interfaces/board";
import { DeleteIcon } from "@chakra-ui/icons";
interface IBoardsTabs {
  boards: IBoard[];
  createBoard: () => void;
  deleteBoard: (_id: string | undefined) => void;
}

const BoardsTabs = ({ boards, createBoard, deleteBoard }: IBoardsTabs) => {
  console.log(boards);
  return (
    <Tabs m='5' variant='soft-rounded'>
      <TabList flexWrap={"wrap"}>
        {boards.map((board, i) => (
          <Tab _selected={{ color: "Black", bg: "white" }}>Quadro {i + 1}</Tab>
        ))}
        <Tab
          bg={"white"}
          m='1'
          _selected={{ color: "Black", bg: "white" }}
          onClick={createBoard}
        >
          +
        </Tab>
      </TabList>
      <TabPanels>
        {boards.map((board, i) => (
          <TabPanel>
            <Flex
              justifyContent={"end"}
              color={"red"}
              alignItems={"center"}
              m='8px'
            >
              <DeleteIcon
                cursor={"pointer"}
                onClick={() => deleteBoard(board._id)}
              />
            </Flex>
            <Flex flexWrap={"wrap"} gap='16px'>
              <Note />
              <Note />
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default BoardsTabs;
