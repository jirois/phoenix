import styled from "styled-components";
import { css } from "styled-components";
import { color, values } from "../../components/Styles";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;
  margin-top: 4rem;
  ${(props) =>
    props.wrapper &&
    css`
      box-shadow: 0 0 20px 0 rgba(184, 22, 31, 0.3);
      > * {
        padding: 1em;
      }

      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        > * {
          padding: 2em;
        }
      }
    `}
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  color: ${color.primary};
`;

export const Input = styled.input`
  border: 1px solid ${color.accent};
  padding: 1em;
  width: 100%;
`;
export const Label = styled.label`
  display: block;
`;

export const StyledButton = styled.button`
  background: ${color.secondary};
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;
  transition: ${values.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${color.primary};
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid ${color.accent};
  padding: 1em;
  width: 100%;
`;
export const StyledTitle = styled.h1`
  color: ${color.primary};
  font: 70px;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;
