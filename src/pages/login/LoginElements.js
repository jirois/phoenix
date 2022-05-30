import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../img/bg-img.jpg";

export const LoginWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 3rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  display: flex;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const Form = styled.form`
  width: 90vw;
  max-width: 500px;
  border-radius: 4px;
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  position: relative;
`;

export const Button = styled.button`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  margin: 0;
  text-align: center;
  color: white;
  padding: 5px;
  font-size: 16px;
`;

export const Links = styled(Link)`
  display: inline-block;
  margin-left: 0.25rem;
  text-transform: capitalize;
  color: #ffb300;
  cursor: pointer;
`;
