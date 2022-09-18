import styled from "styled-components";
import { color } from "../../components/Styles";

export const profileContainer = styled.div`
  background: ${color.offWhite};
  text-align: left;
  padding: 1rem;
`;
export const ProfileWrapper = styled.div`
  display: block;
  background-color: ${color.mainWhite};
  width: 40rem;
  margin: 2rem auto;
  border-radius: 0.5rem;
  box-shadow: 3px 2px 36px -11px rgba(163, 150, 150, 0.75);

  @media (max-width: 678px) {
    width: 25rem;
  }
`;
export const ProfileHeader = styled.div`
  text-align: center;
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
  flex-direction: column;
  margin-top: 1rem;
  border-color: rgba(0, 0, 0, 0.9);
  padding-botttom: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;
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
`;
export const ProfileEmail = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  display: block;
  padding-bottom: 2rem;
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
`;
export const ProfilteItemDesc = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const LogoutWrapper = styled.div`
  margin-top: 1.25rem;
`;
