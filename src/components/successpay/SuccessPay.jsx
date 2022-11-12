import React from "react";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";
import { CheckMarkDiv, InnerWrapper, Wrapper } from "./Styles";

const SuccessPay = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <CheckMarkDiv>
          <i class="checkmark">✓</i>
        </CheckMarkDiv>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </InnerWrapper>
      <NavBtnLinkBtn to="/">Go Back Home</NavBtnLinkBtn>
    </Wrapper>
  );
};

export default SuccessPay;
