import React from "react";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/Navbar/NavbarSection";
import BookScreen from "./BookScreen";

export const Book = () => {
  return (
    <>
      <NavbarHome bg="black" tp="black" />
      <BookScreen />
      <Footer />
    </>
  );
};
export default Book;
