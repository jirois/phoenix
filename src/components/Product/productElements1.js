import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, values } from "../Styles";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media (max-height: 668px) {
    padding: 5rem 0;
    min-height: 100vh;
  }
`;

export const ProductWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const ProductsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 650px;
  box-shadow: ${values.lightShadow};
  transition: ${values.transition};

  &:hover {
    box-shadow: ${values.darkShadow};
  }
  @media screen and (max-width: 486px) {
    min-height: 600px;
    margin-bottom: 44px;
  }
`;
export const ProductIcon = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 44px;
  object-fit: cover;
`;
export const ProductIcon1 = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 44px;
  object-fit: cover;
`;
export const ProductH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  white-space: nowrap;

  @media screen and (max-width: 486px) {
    // display: none;
  }
`;

export const ProductH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 12px;

  @media screen and (max-width: 486px) {
    border-bottom: 1px solid;
  }
`;

export const ProductLink = styled(Link)`
  display: block;
  padding: 14px 20px;
  background: ${color.primary};
  border-radius: 50px;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 12px;
  margin-bottom: 3rem;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  transition: ${values.transition};
  transform: scale(1);
  cursor: pointer;

  &:hover {
    background: ${color.mainWhite};
    color: ${color.primary};
    border: 1px solid;
    transform: scale(1.2);
  }

  @media (max-width: 667px) {
    margin-bottom: 3.6rem;
  }
`;
