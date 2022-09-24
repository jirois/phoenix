import styled from "styled-components";
import { color } from "../../components/Styles";

export const ProfileWrapper = styled.div`
  display: block;
  background-color: ${color.mainWhite};
  width: 40rem;
  margin: 2rem auto;
  border-radius: 0.5rem;

  @media (max-width: 678px) {
    width: 25rem;
  }
`;
