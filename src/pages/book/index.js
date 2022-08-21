import React from "react";
import Footer from "../../components/Footer";
import NavbarSection from "../../components/Navbar";
import BookScreen from "./BookScreen";

export const Book = () => {
  return (
    <>
      <NavbarSection />
      <BookScreen />
      <Footer />
    </>
  );
};
export default Book;
