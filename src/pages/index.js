import React from "react";
import HeroSection from "../components/Hero";
import Products from "../components/Product";
import Services from "../components/Services";
import Footer from "../components/Footer";
import NavbarHome from "../components/Navbar/NavbarSection";

const Home = () => {
  return (
    <>
      <NavbarHome />

      <HeroSection />
      <Services />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
