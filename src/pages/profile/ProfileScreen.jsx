import React from "react";
import {  useNavigate } from "react-router-dom";
import { ProfileEmail, ProfileHeader, ProfileImg, ProfileInfo, ProfileName, ProfileRole, ProfileTitle, ProfileWrapper } from "./profileElement";
import { useGlobalContext } from "../../context";
import userIcon from "../../assets/user.png";
import { LogoutWrapper } from "./profileElement";
import { NavBtnLinkBtn } from "../../components/Navbar/navbarELements";


const ProfileScreen =() => {
  const { logoutUser, user } = useGlobalContext();
  const navigate = useNavigate();
  console.log(user)

  const onLogout = () => {
    logoutUser();
    navigate("/signin");
  }

  return (
    
    <ProfileWrapper >
      <ProfileHeader>
        <ProfileTitle>Welcome back!</ProfileTitle>
      </ProfileHeader>
      <ProfileInfo>
        <ProfileImg src={userIcon} alt="PA" />
        <div>
          <ProfileName>{user.name}</ProfileName>
          <ProfileRole>{user.role}</ProfileRole>
          <ProfileEmail>{user.email}</ProfileEmail>
        </div>
      </ProfileInfo>
      <LogoutWrapper>
        <NavBtnLinkBtn
        onClick={onLogout}
        >
            Log Out
        </NavBtnLinkBtn>
      </LogoutWrapper>
    
    </ProfileWrapper>
  );
  
}

export default ProfileScreen
