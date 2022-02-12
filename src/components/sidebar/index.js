import React from "react";

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
          <SidebarRouter to="/signin">Sign In</SidebarRouter>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
