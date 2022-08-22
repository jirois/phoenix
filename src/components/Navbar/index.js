import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";
// import { logout } from "../../features/userslice/authSlice";
import userIcon from "../../assets/user.png";
import { ChevronUser } from "../../assets/Icon";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLinkOne,
  UserIcon,
  UserDiv,
} from "./navbarELements";

const NavbarSection = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { user } = useSelector((store) => store.auth);

  // const onLogout = () => {
  //   dispatch(logout());
  //   history.push("/signin");
  // };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          PhoenixCap
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/sessions" activeClassName="selected">
              Book Private Session
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about" exact={true}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services" exact={true}>
              Our Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/broker" exact={true}>
              Broker
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/testimonials" exact={true}>
              Testimonials
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact" exact={true}>
              Contacts
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/faq" exact={true}>
              FAQ
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {user ? (
            <UserDiv className="user-icon">
              <UserIcon src={userIcon} />
              <ChevronUser />
            </UserDiv>
          ) : (
            <NavBtnLinkOne to="/signin">Sign In</NavBtnLinkOne>
          )}
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default NavbarSection;
