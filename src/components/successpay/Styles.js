import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding: 40px 0;
  background: #ebf0f5;

  & h1 {
    color: #88b04b;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  & p {
    color: #404f5e;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    margin: 0;
  }
  & i {
    color: #9abc66;
    font-size: 100px;
    line-height: 200px;
    margin-left: -15px;
  }
`;

export const InnerWrapper = styled.div`
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
`;

export const CheckMarkDiv = styled.div`
  border-radius: 200px;
  height: 200px;
  width: 200px;
  background: #f8faf5;
  margin: 0 auto;
`;