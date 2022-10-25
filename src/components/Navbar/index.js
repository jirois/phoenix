import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
// import { useSelector } from "react-redux";
import { useGlobalContext } from "../../context";
import { animateScroll as scroll } from "react-scroll/modules";
// import userIcon from "../../assets/user.png";
import { getFirstName, initials } from "../../utils/greeting";

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
  UserDiv,
  Textdiv,
  Greeting,
  UserName,
  DropIcon,
} from "./navbarELements";
import Dropdown from "../drop/DropDownProfile";
// import { AvatarDiv } from "../Avatar";

const NavbarSection = ({ toggle, tp, bg, pos }) => {
  const [scrollNav, setScrollNav] = useState(false);
  // const { user: usern } = useSelector((store) => store.user);
  const { user } = useGlobalContext();

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav} tp={tp} bg={bg} pos={pos}>
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
            <div onMouseEnter={onHover} onMouseLeave={onHover}>
              <UserDiv>
                {/* <UserImg src={userIcon} /> */}
                <div
                  className="w-8 h-8 rounded-full bg-yellow-600 m-5 text-center text-black align-center mx-auto"
                  style={{ lineHeight: "2rem", fontSize: "1.1rem" }}
                >
                  {initials(user)}
                </div>
                <Textdiv>
                  <Greeting>Hi</Greeting>
                  <UserName>{getFirstName(user)}</UserName>
                </Textdiv>
                <DropIcon />
              </UserDiv>
              {hover && <Dropdown />}
            </div>
          ) : (
            <NavBtnLinkOne to="/login">Sign In</NavBtnLinkOne>
          )}
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default NavbarSection;
