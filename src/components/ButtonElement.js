import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { color } from "./Styles";

export const Button = styled(Link)`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? `${color.primary}` : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`;
export const ButtonLinK = styled(LinkR)`
  border-radius: 5px;
  background: ${({ primary }) =>
    primary ? `${color.primary}` : `${color.darkGrey}`};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${color.mainWhite};
  font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? `${color.mainWhite}` : `${color.primary}`};
    color: ${color.primary};
  }
`;
