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

const BoardsTabs = () => {
  return (
    <Tabs variant='soft-rounded' colorScheme='green' mt='4'>
      <TabList>
        <Tab>Board 1</Tab>
        <Tab>Board 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex flexWrap={"wrap"} gap='16px'>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default BoardsTabs;
