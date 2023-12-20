import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/sousComponents/Home";
import Airlines from "./components/sousComponents/Airlines";
import Hotels from "./components/sousComponents/Hotels";
import Ship from "./components/sousComponents/Ship";
import Omra from "./components/sousComponents/Omra";
import Contact from "./components/sousComponents/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/airlines" element={<Airlines />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/ship" element={<Ship />} />
      <Route path="/omra" element={<Omra />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
