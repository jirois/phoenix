import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { color, values } from "./Styles";

export const BackgroundArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FormContent = styled.div`
  width: ${values.fluidWidth};
  max-width: ${values.maxWidth};
  margin: 0 auto;
  box-shadow: -3px 2px 37px 0px rgba(0, 0, 0, 0.26);

  padding-top: 3rem;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  margin-bottom: ${(props) => props.mb}px;
  text-transform: uppercase;
  color: ${(props) => props.color || color.primary};
`;
export const StyledSubTitle = styled.h4`
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => props.color || color.primary};
`;

export const StyledButton = styled(LinkR)`
  padding: 10px;
  width: 150px;
  border-radius: 25px;
  border: 2px solid ${color.primary};
  color: ${color.primary};
  background-color: transparent;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${color.primary};
    color: ${color.mainColor};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 13px;
  margin: 0;
  margin-bottom: 4px;
`;

export const StyledFormInput = styled.input`
  width: 340px;
  padding: 15px;
  padding-left: 50px;
  letter-spacing: 1px;
  border: 0;
  font-size: 17px;
  outline: 0;
  border: 0.5px solid;
  color: ${color.mainBlack};
  margin: -25px auto 15px auto;
  display: block;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid && `background-color: ${color.red}; color: ${color.primary};`}

  &:focus {
    background-color: ${color.mainGrey};
    color: ${color.darkGrey};
  }
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || color.secondary};
  padding: 47px 55px;
  text-align: center;
  margin-top: 25px;
  box-shadow: -3px 2px 17px 0px rgba(0, 0, 0, 0.26);

  @media (max-width: 486px) {
    margin-top: 5px;
  }
`;

export const StyledFormAreaSignup = styled(StyledFormArea)`
  margin-top: 35px;
`;

export const StyleButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin-top: 1.5rem;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: ${(props) => props.wd || 150}px;
  border-radius: 25px;
  border: 2px solid ${color.primary};
  color: ${color.primary};
  background-color: transparent;
  text-align: center;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 1rem;

  &:hover {
    // background-color: ${color.primary};
    // color: ${color.mainWhite};
  }
`;

export const FormAvatar = styled.div`
  width: ${(props) => props.wd || 85}px;
  height: ${(props) => props.ht || 85}px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  margin: auto;
`;

export const StyledFormButtonBig = styled(StyledFormButton)`
  width: 250px;
`;
export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${color.mainRed};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: 18px;
  padding: 2px;
  color: ${(props) => (props.color ? props.color : color.darkGrey)};
  @media (width: 480px) {
    font-size: 14px;
  }
`;

export const TextLink = styled(LinkR)`
  font-size: 18px;
  color: ${color.primary};

  @media (width: 480px) {
    font-size: 14px;
  }
`;
export const StyledIcon = styled.p`
  color: ${color.mainBlack};
  position: absolute;
  font-size: 23px;
  top: 30px;
  ${(props) => props.right && "right:-5px;"}
  ${(props) => !props.right && "left: -5px;"}
`;

export const FieldContainer = styled.div`
  position: relative;
  margin: 0;
`;
