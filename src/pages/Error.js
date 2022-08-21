import React from "react";
import {
  ErrorBtn,
  ErrorContainer,
  ErrorPage,
  HeaderOne,
  HeaderFour,
} from "../components/Styles";
const Error = () => {
  return (
    <ErrorPage>
      <ErrorContainer>
        <HeaderOne>404</HeaderOne>
        <HeaderFour>page not found</HeaderFour>
        <ErrorBtn to="/">back home</ErrorBtn>
      </ErrorContainer>
    </ErrorPage>
  );
};

export default Error;
