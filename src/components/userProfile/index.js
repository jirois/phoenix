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
import { useNavigate } from "react-router-dom";

// import { logOut, removeUser } from "../../features/user/userSlice";
import { useGlobalContext } from "../../context";

import userIcon from "../../assets/user.png";
import { userProfileData } from "../../data";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  // const { user: userSign } = useSelector((store) => store.user);
  // const dispatch = useDispatch();
  const { logoutUser, user } = useGlobalContext();
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/signin");
  };

  return (
    <ProfileWrapper on>
      <ProfileHeader>
        <ProfileTitle>User Profile</ProfileTitle>
      </ProfileHeader>
      <ProfileInfo>
        <ProfileImg src={userIcon} alt="PA" />
        <div>
          <ProfileName>{user.name}</ProfileName>
          <ProfileRole>{user.role}</ProfileRole>
          <ProfileEmail></ProfileEmail>
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
