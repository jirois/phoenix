import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

// import userIcon from "../../assets/user.png";
import { DropDownContainter, DropDownContent, DropDownInfo, DropDownInfoEmail,  DropDownInfoName, DropDownInfoRole, DropDownItemDesc, DropDownItemTitle, DropDownTitle, DropDrowHeader, LogoutWrapper } from "./dropElements";
import { NavBtnLinkBtn } from "../Navbar/navbarELements";
import { initials } from "../../utils/greeting";

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
    <div
        className="w-16 h-16 rounded-full text-3xl bg-yellow-600  text-center text-black align-center mx-auto"
          style={{ lineHeight: "4rem" }}>{initials(user)}</div>
      {/* <DropDownInfoImg src={userIcon} alt="PA" /> */}
      <div className="-ml-4">
        <DropDownInfoName>{user.name}</DropDownInfoName>
        <DropDownInfoRole>{user.role}</DropDownInfoRole>
        <DropDownInfoEmail>{user.email}</DropDownInfoEmail>
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




