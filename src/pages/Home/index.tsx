import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import AdmBoards from "../../containers/AdmBoards";
import ViwerBoards from "../../containers/ViwerBoards";
import { useAuth } from "../../context/auth";

const Home = () => {
  const { user, signOut } = useAuth();
  const [container, setContainer] = useState<"adm" | "viwer">("adm");

  const handleContainer = (newContainer: "adm" | "viwer") => {
    if (newContainer !== container) {
      setContainer(newContainer);
    }
  };

  useEffect(() => {
    console.log(container);
  }, [container]);

  return (
    <div>
      <Navbar handleContainer={handleContainer} />
      {container === "adm" && <AdmBoards />}
      {container === "viwer" && <ViwerBoards />}
    </div>
  );
};

export default Home;
