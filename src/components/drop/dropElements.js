import styled from "styled-components";
import { color } from "../Styles";

export const DropDownContainter = styled.div`
  position: absolute;
  z-index: 10000;
  background-color: ${color.mainWhite};
  width: 18rem;
  padding: 2rem;
  margin-left: auto;
  border-radius: 0.5rem;

  @media (min-width: 1200px) {
    position: normal;
    top: 4rem;
    right: 1rem;
    left: 2.5rem;
    z-index: 11000;
  }
`;
export const DropDrowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 648px) {
    display: none;
  }
`;
export const DropDownTitle = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.7rem;
  color: ${color.mainBlack};
`;
export const DropDownInfo = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin-top: 1rem;
  border-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid;
  padding-botttom: 1.5rem;
  margin-bottom: 1rem;
  @media (max-width: 668px) {
    border-bottom: none;
    display: none;
  }
`;
export const DropDownInfoImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const DropDownInfoName = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${color.mainBlack};
  display: block;
`;
export const DropDownInfoRole = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: block;
`;
export const DropDownInfoEmail = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  display: block;
`;

export const DropDownContent = styled.div`
  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid;
  border-color: ${color.darkGrey};
  padding: 1rem 2rem;
  margin-top: 0;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;
export const DropDownItemBtn = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-radius: 0.5rem;
  padding: 0.75rem;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;

export const DropDownItemTitle = styled.span`
  font-weight: 600;
  color: ${color.mainBlack};
`;
export const DropDownItemDesc = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: block;
`;

export const LogoutWrapper = styled.div`
  margin-top: 1.25rem;
`;
