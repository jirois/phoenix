import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import AboutScreen from "./AboutScreen";

const index = () => {
  return (
    <>
      <NavbarHome bg="black" tp="black" pos="relative" />
      <AboutScreen />
      <Footer />
    </>
  );
};

export default index;
