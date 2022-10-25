import React, { useState } from "react";
import Navbar from "./index";
import Sidebar from "../sidebar";

const NavbarHome = ({ bg, tp, pos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSide} />
      <Navbar toggle={toggleSide} bg={bg} tp={tp} pos={pos} />
    </>
  );
};

export default NavbarHome;
