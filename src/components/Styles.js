import styled from "styled-components";

import { Link } from "react-router-dom";

export const color = {
  primary: "#ffb300",
  secondary: "#efb350",
  accent: "#458123",

  //darkest grey - used for headings
  mainGrey: "#ececec",
  darkGrey: "#afafaf",
  mainOverlay: "rgba(35, 10, 36, 0.4)",

  mainWhite: "#fff",
  offWhite: "#f7f7f7",
  mainRed: "#bd0303",
  mainBlack: "#222",
};

export const values = {
  transition: "all 0.3s linear",
  mainSpacing: "0.3rem",
  mainRadius: "0.25rem",
  lightShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
  darkShadow: "4px 10px 5px 0px rgba(0, 0, 0, 0.5)",
  smallWidth: "85vw",
  maxWidth: "40rem",
  fullWidth: "1170px",
  fluidWidth: "90vw",
  fixedWidth: "500px",
  mainBorderRadius: "0.25rem",
};

// General Styles
export const Header = styled.h1`
  letter-spacing: ${values.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`;
export const HeaderOne = styled(Header)`
  font-size: 3rem;
`;
export const HeaderTwo = styled(Header)`
  font-size: 2rem;
`;
export const HeaderThree = styled(Header)`
  font-size: 1.25rem;
`;
export const HeaderFour = styled(Header)`
  font-size: 0.875rem;
`;
export const Para = styled.p`
  margin-bottom: 1.25rem;
  color: ${color.grey_five};
`;

// Error

export const ErrorPage = styled.div`
  margin: 15rem auto;
  width: 90vw;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  text-transform: capitalize;
`;

export const ErrorBtn = styled(Link)`
  padding: 0.45rem 0.8rem;
  letter-spacing: ${values.mainSpacing};
  display: inline-block;
  transition: ${values.transition};
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: ${values.mainBorderRadius};
  text-transform: uppercase;
  text-decoration: none;

  background: ${color.primary};
  color: ${color.mainWhite};
  border-color: transparent;

  &:hover {
    background: ${color.mainWhite};
    color: ${color.primary};
    border: solid;
  }
`;
export const Page = styled.section`
  min-height: calc(100vh - 6rem);
  width: ${values.fluidWidth};
  max-width: ${values.maxWidth};
  margin: 0 auto;
  padding-top: 3rem;
`;
export const PageCenter = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
