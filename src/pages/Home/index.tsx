import React from "react";
import { useAuth } from "../../context/auth";

const Home = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      Home
      <button onClick={signOut}>sair</button>
    </div>
  );
};

export default Home;
