import styled from "styled-components";
import { color, values } from "../../components/Styles";

export const Wrapper = styled.div`
  max-width: 45rem;
  margin: 5rem auto 0;
  align-items: center;
  box-shadow: 3px 2px 36px -11px rgba(163, 150, 150, 0.75);
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

export const InnerWrapper = styled.div`
  padding: 1.8rem 2rem 1rem;
  text-align: center;

  & h3 {
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 2rem;
  }
  & p {
    font-size: 0.87rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;
export const TabButton = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 2.5rem;
  justify-content: center;
  background: rgb(249 250 251);

  & button {
    width: 225px;
    display: inline-block;
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 1px;
    margin: 0 0.1rem;
    transition: ${values.transition};
    cursor: pointer;
    padding: 0.25rem 1rem;
    line-height: 1;
    outline-color: ${color.secondary};
  }

  @media (min-689px) {
    margin: 0 2rem 4rem;
  }
`;
