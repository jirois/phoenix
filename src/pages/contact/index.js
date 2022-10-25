import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import ContactScreen from "./ContactScreen";

const index = () => {
  return (
    <>
      <NavbarHome bg="black" tp="black" />
      <ContactScreen />
      <Footer />
    </>
  );
};

export default index;
