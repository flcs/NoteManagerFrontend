import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";

const PrivateRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
export default PrivateRoutes;
