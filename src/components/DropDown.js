import React from "react";
import styled from "styled-components";
import { color } from "./Styles";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link>Profile</Link>
        </li>
        <li>
          <Link>Account</Link>
        </li>
        <li>
          <Link>Transaction</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  background: ${color.mainWhite};
  z-index: 10;
  diplay: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
  }
  Link {
    display: block;
    padding: 1rem 1.5rem;
  }
`;

export default DropDown;
