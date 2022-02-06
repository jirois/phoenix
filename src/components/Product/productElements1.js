import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 800px;

  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  @media screen and (max-width: 486px) {
    min-height: 1300px;
  }
`;

export const ProductWrapper = styled.div`
  max-widht: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 540px;
`;
export const ProductIcon = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 44px;
  object-fit: cover;
`;
export const ProductH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;

  @media screen and (max-width: 486px) {
    display: none;
  }
`;

export const ProductH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductP = styled.p`
  font-size: 1rem;
  text-align: center;
  border-bottom: 1px solid;
  padding-bottom: 12px;
`;

export const ProductLink = styled(Link)`
  display: block;
  padding: 14px 12px;
  background: #ffb200;
  border-radius: 50px;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 12px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease-out

  &:hover {
    background: #fff;
    color: #ffb200;
    transition: all 0.3s ease-out
  }
`;
