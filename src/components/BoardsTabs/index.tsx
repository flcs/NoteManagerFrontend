import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import Note from "../Note";
import { IBoard } from "../../interfaces/board";

interface IBoardsTabs {
  boards: IBoard[];
}

const BoardsTabs = ({ boards }: IBoardsTabs) => {
  console.log(boards);
  return (
    <Tabs m='5' variant='soft-rounded'>
      <TabList flexWrap={"wrap"}>
        {boards.map((board, i) => (
          <Tab _selected={{ color: "Black", bg: "white" }}>Board {i + 1}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {boards.map((board, i) => (
          <TabPanel>
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
