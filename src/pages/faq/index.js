import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import FaqScreen from "./FaqScreen";

function index() {
  return (
    <>
      <NavbarHome bg="black" tp="black" />
      <FaqScreen />
      <Footer />
    </>
  );
}

export default index;
