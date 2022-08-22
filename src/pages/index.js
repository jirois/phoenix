import React from "react";
import HeroSection from "../components/Hero";
import Products from "../components/Product";
import Services from "../components/Services";
import Footer from "../components/Footer";
import NavbarHome from "../components/Navbar/NavbarSection";
import useLocalState from "../utils/localState";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const { isSuccess, user } = useSelector((store) => store.auth);
  const { showAlert, alert } = useLocalState();

  useEffect(() => {
    if (isSuccess) {
      showAlert({ text: user.msg, type: "success" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, user]);
  return (
    <div>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <NavbarHome />

      <HeroSection />
      <Services />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
