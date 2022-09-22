import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default PublicRoutes;
