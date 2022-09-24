import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

import userIcon from "../../assets/user.png";
import { DropDownContainter, DropDownContent, DropDownInfo, DropDownInfoEmail, DropDownInfoImg, DropDownInfoName, DropDownInfoRole, DropDownItemDesc, DropDownItemTitle, DropDownTitle, DropDrowHeader, LogoutWrapper } from "./dropElements";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";

const Dropdown = () => {
  const { logoutUser, user } = useGlobalContext();
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/signin");
  };

  return (
    <DropDownContainter>
    <DropDrowHeader>
      <DropDownTitle>User Profile</DropDownTitle>
    </DropDrowHeader>
    <DropDownInfo>
      <DropDownInfoImg src={userIcon} alt="PA" />
      <div>
        <DropDownInfoName>{user.name}</DropDownInfoName>
        <DropDownInfoRole>{user.role}</DropDownInfoRole>
        <DropDownInfoEmail></DropDownInfoEmail>
      </div>
    </DropDownInfo>
    <div>
        <DropDownContent>
          <Link to='/profile'>
            <DropDownItemTitle>My Profile</DropDownItemTitle>
            <DropDownItemDesc>Account Settings</DropDownItemDesc>
          </Link>
        </DropDownContent>
        <DropDownContent>
          <Link to='/cart'>
            <DropDownItemTitle>Cart</DropDownItemTitle>
            <DropDownItemDesc>Orders</DropDownItemDesc>
          </Link>
        </DropDownContent>
        <DropDownContent>
          <Link to='/dashboard'>
            <DropDownItemTitle>Dashboard</DropDownItemTitle>
            <DropDownItemDesc>Go to Dashboard</DropDownItemDesc>
          </Link>
        </DropDownContent>
        <DropDownContent>
          <div>
            <DropDownItemTitle>Products</DropDownItemTitle>
            <DropDownItemDesc>Go to your products </DropDownItemDesc>
          </div>
        </DropDownContent>
    
    </div>
    <LogoutWrapper>
      <NavBtnLinkBtn onClick={onLogout}>Log out</NavBtnLinkBtn>
    </LogoutWrapper>
  </DropDownContainter>
);
};

export default Dropdown;




