import React from "react";
import { logout } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRouter,
} from "./sidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  const { user } = useSelector((store) => store.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    history.push("/signin");
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/sessions" onClick={toggle}>
            Book Private Session
          </SidebarLink>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/services" onClick={toggle}>
            Our Services & Prices
          </SidebarLink>
          <SidebarLink to="/broker" onClick={toggle}>
            Recommended Broker
          </SidebarLink>
          <SidebarLink to="/testimonials" onClick={toggle}>
            Testimonials
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="faq" onClick={toggle}>
            FAQ
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          {user ? (
            <SidebarRouter onClick={onLogout}>Log Out</SidebarRouter>
          ) : (
            <SidebarRouter to="/signin">Sign In</SidebarRouter>
          )}
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
