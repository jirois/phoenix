import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import TestimonialScreen from "./TestimonialScreen";

function index() {
  return (
    <>
      <NavbarHome bg="black" tp="black" />
      <TestimonialScreen />
      <Footer />
    </>
  );
}

export default index;
