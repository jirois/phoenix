import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import ServiceScreen from "./ServiceScreen";

const Services = () => {
  return (
    <>
      <NavbarHome bg="transparent" tp="black" />
      <ServiceScreen />
      <Footer />
    </>
  );
};

export default Services;
