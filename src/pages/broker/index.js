import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import BrokerScreen from "./BrokerScreen";

const index = () => {
  return (
    <>
      <NavbarHome bg="black" tp="black" />
      <BrokerScreen />
      <Footer />
    </>
  );
};

export default index;
