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
import { useHistory } from "react-router-dom";

import { logout } from "../../features/auth/authSlice";

import userIcon from "../../assets/user.png";
import { userProfileData } from "../../data";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const { user: userSign } = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    history.push("/signin");
  };

  return (
    <ProfileWrapper on>
      <ProfileHeader>
        <ProfileTitle>User Profile</ProfileTitle>
      </ProfileHeader>
      <ProfileInfo>
        <ProfileImg src={userIcon} alt="PA" />
        <div>
          <ProfileName>{userSign.user.name}</ProfileName>
          <ProfileRole>{userSign.user.role}</ProfileRole>
          <ProfileEmail>info@phoenixcap.com</ProfileEmail>
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
        <NavBtnLinkBtn onClick={onLogout}>Log out</NavBtnLinkBtn>
      </LogoutWrapper>
    </ProfileWrapper>
  );
};

export default UserProfile;
