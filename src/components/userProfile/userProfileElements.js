import styled from "styled-components";
import { color } from "../Styles";

export const ProfileWrapper = styled.div`
  position: absolute;
  top: 4rem;
  right: 0.25rem;
  z-index: 10000;
  background-color: ${color.mainWhite};
  width: 18rem;
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 668px) {
    position: normal;
    top: 4rem;
    right: 2.5rem;
    left: 2.5rem;
    z-index: 11000;
  }
`;
export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 648px) {
    display: none;
  }
`;
export const ProfileTitle = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.7rem;
  color: ${color.mainBlack};
`;
export const ProfileInfo = styled.div`
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
export const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${color.mainBlack};
`;
export const ProfileRole = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: block;
`;
export const ProfileEmail = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  display: block;
`;

export const ProfileContent = styled.div`
  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid;
  border-color: ${color.darkGrey};
  padding: 1rem 2rem;
  margin-top: 0, 2rem;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;
export const ProfileItemBtn = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-radius: 0.5rem;
  padding: 0.75rem;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;

export const ProfilteItemTitle = styled.span`
  font-weight: 600;
  color: ${color.mainBlack};
  display: block;
`;
export const ProfilteItemDesc = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: block;
`;

export const LogoutWrapper = styled.div`
  margin-top: 1.25rem;
`;
