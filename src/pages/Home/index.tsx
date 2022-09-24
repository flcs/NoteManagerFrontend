import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BoardsTabs from "../../components/BoardsTabs";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/auth";
import { IBoard } from "../../interfaces/board";

import {
  getAdminBoards as serviceGetAdminBoards,
  getViwerBoards as serviceGetViwerBoards,
} from "../../services/board";

const Home = () => {
  const { user, signOut } = useAuth();
  const [container, setContainer] = useState<"adm" | "viwer">("adm");
  const [boards, setBoards] = useState<IBoard[] | undefined>(undefined);
  const handleContainer = (newContainer: "adm" | "viwer") => {
    if (newContainer !== container) {
      setContainer(newContainer);
    }
  };

  useEffect(() => {
    getBoards();
  }, [container]);

  const getAdminBoards = async () => {
    try {
      const response = await serviceGetAdminBoards({ admin: user?._id });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getViwerBoards = async () => {
    try {
      const response = await serviceGetViwerBoards({ viwer: user?._id });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getBoards = async () => {
    if (container === "adm") {
      const response = await getAdminBoards();
      setBoards(response?.data.boards);
    }
    if (container === "viwer") {
      const response = await getViwerBoards();
      setBoards(response?.data.boards);
    }
  };

  return (
    <Box minH={"100vh"} bg={"blue.300"}>
      <Navbar handleContainer={handleContainer} />
      {boards && <BoardsTabs boards={boards} />}
      {boards?.length === 0 && (
        <Text m='5'>Não foi encontrado nenhum quadro</Text>
      )}
      {/* {container === "adm" && <AdmBoards />}
      {container === "viwer" && <ViwerBoards />} */}
    </Box>
  );
};

export default Home;
