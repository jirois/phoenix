import React from "react";
import "./userProfileElements";
import {
  LogoutWrapper,
  ProfileContent,
  ProfileEmail,
  ProfileHeader,
  ProfileImg,
  ProfileInfo,
  ProfileName,
  ProfileRole,
  ProfileTitle,
  ProfileWrapper,
  ProfilteItemDesc,
  ProfilteItemTitle,
} from "./userProfileElements";

import userIcon from "../../assets/user.png";
import { userProfileData } from "../../data";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";

const UserProfile = () => {
  return (
    <ProfileWrapper on>
      <ProfileHeader>
        <ProfileTitle>User Profile</ProfileTitle>
      </ProfileHeader>
      <ProfileInfo>
        <ProfileImg src={userIcon} alt="PA" />
        <div>
          <ProfileName>Hi Phoenix</ProfileName>
          <ProfileRole>Admin</ProfileRole>
          <ProfileEmail>info@phoenix.com</ProfileEmail>
        </div>
      </ProfileInfo>
      <div>
        {userProfileData.map((item, index) => (
          <ProfileContent key={index}>
            <div>
              <ProfilteItemTitle>{item.title}</ProfilteItemTitle>
              <ProfilteItemDesc>{item.desc}</ProfilteItemDesc>
            </div>
          </ProfileContent>
        ))}
      </div>
      <LogoutWrapper>
        <NavBtnLinkBtn>Log out</NavBtnLinkBtn>
      </LogoutWrapper>
    </ProfileWrapper>
  );
};

export default UserProfile;
