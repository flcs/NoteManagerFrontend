import React, { useContext } from "react";

import { useAuth } from "../context/auth";

import { BrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Loading from "../components/Loading";

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      {signed ? <PrivateRoute /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default Routes;
