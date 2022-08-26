import React, { useState } from "react";
// import { logout } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import userIcon from "../../assets/user.png";

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
import {
  DropIcon,
  Greeting,
  Textdiv,
  UserDiv,
  UserImg,
  UserName,
} from "../Navbar/navbarELements";
import UserProfile from "../userProfile";
const Sidebar = ({ isOpen, toggle }) => {
  const { user } = useSelector((store) => store.auth);
  // const history = useHistory();
  // const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  // const onLogout = () => {
  //   dispatch(logout());
  //   history.push("/signin");
  // };
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        {user && (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "4rem" }}
            onClick={handleClick}
          >
            <UserDiv>
              <UserImg src={userIcon} />
              <Textdiv>
                <Greeting>Hi</Greeting>
                <UserName>Phoenix</UserName>
              </Textdiv>
              <DropIcon />
            </UserDiv>
            {isClick && <UserProfile />}
          </div>
        )}
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
          {!user && <SidebarRouter to="/signin">Sign In</SidebarRouter>}
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
