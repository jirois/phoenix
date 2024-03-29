import styled from "styled-components";
import { values } from "../Styles";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 1rem 0 6rem;

  @media (max-height: 668px) {
    padding: 5rem 0;
    padding-top: 0;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 20rem;
  min-height: 25rem;
  padding: 1rem 0 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    box-shadow: ${values.lightShadow};
    cursor: pointer;
  }

  @media (max-height: 668px) {
  }
`;
export const ServicesIcon = styled.img`
  height: 120px;
  // width: 120px;
  margin-bottom: 64px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  padding: 2rem 0 3rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 12px;
`;
