import React from "react";
import "./userProfileElements";
import {
  LogoutWrapper,
  ProfileContent,
  ProfileEmail,
  ProfileHeader,
  ProfileInfo,
  ProfileName,
  ProfileRole,
  ProfileTitle,
  ProfileWrapper,
  ProfilteItemDesc,
  ProfilteItemTitle,
} from "./userProfileElements";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../context";

// import userIcon from "../../assets/user.png";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";
import { initials } from "../../utils/greeting";

const UserProfile = () => {
  const { logoutUser, user } = useGlobalContext();
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/signin");
  };

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileTitle>User Profile</ProfileTitle>
      </ProfileHeader>
      <ProfileInfo>
        <div
          className="w-12 h-12 rounded-full bg-yellow-600 m-5 text-center text-black align-center mx-auto"
          style={{ lineHeight: "3rem", fontSize: "1.4rem" }}
        >
          {initials(user)}
        </div>
        <div>
          <ProfileName>{user.name}</ProfileName>
          <ProfileRole>{user.role}</ProfileRole>
          <ProfileEmail></ProfileEmail>
        </div>
      </ProfileInfo>
      <div>
        <ProfileContent>
          <Link to="/profile">
            <ProfilteItemTitle>My Profile</ProfilteItemTitle>
            <ProfilteItemDesc>Account Settings</ProfilteItemDesc>
          </Link>
        </ProfileContent>
        <ProfileContent>
          <Link to="/cart">
            <ProfilteItemTitle>Cart</ProfilteItemTitle>
            <ProfilteItemDesc>Orders</ProfilteItemDesc>
          </Link>
        </ProfileContent>
        <ProfileContent>
          <Link to="/dashboard">
            <ProfilteItemTitle>Dashboard</ProfilteItemTitle>
            <ProfilteItemDesc>Admin Dashboard</ProfilteItemDesc>
          </Link>
        </ProfileContent>
        <ProfileContent>
          <div>
            <ProfilteItemTitle>Products</ProfilteItemTitle>
            <ProfilteItemDesc>Go to your products </ProfilteItemDesc>
          </div>
        </ProfileContent>
      </div>
      <LogoutWrapper>
        <NavBtnLinkBtn onClick={onLogout}>Log out</NavBtnLinkBtn>
      </LogoutWrapper>
    </ProfileWrapper>
  );
};

export default UserProfile;
