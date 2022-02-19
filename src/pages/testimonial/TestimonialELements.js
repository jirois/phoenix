import styled from "styled-components";

export const TestimonialContainer = styled.div`
  padding: 5rem 0.5rem 10rem;
  background: rgba(27, 13, 3, 0.815);
  text-align: center;

  @media screen and (max-width: 486px) {
    padding: 5rem 0.5rem;
  }
`;

export const TestimonialH1 = styled.h1`
  color: #19a9d4;
  font-style: italic;
  font-size: 2.3rem;
  padding: 1rem 1.5rem 0.3rem;
  margin-bottom: 3.8rem;
  margin-top: 3rem;

  @media screen and (max-width: 486px) {
    font-size: 2rem;
  }
`;

export const TestimonialWarper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 30px;
  max-width: 1100px;
  width: 90%;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 486px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  width: 350px;
  max-width: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  height: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 486px) {
    height: 100%;
    width: 100%;
    margin-bottom: 5rem;
  }
`;

export const TestimonialVideo = styled.iframe`
  width: 100%;
  height: 350px;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border: none;
`;

export const TestimonialH2 = styled.h2`
  font-size: 25px;
  margin-top: 12px;
  text-align: left;
`;

export const TestimonialP = styled.p`
  font-size: 12px;
`;
