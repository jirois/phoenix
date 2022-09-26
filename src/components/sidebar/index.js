import React, { useState } from "react";
// import { logout } from "../../features/auth/authSlice";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import userIcon from "../../assets/user.png";
// import {logoutUser} from '../../context'
// import { useNavigate } from "react-router-dom";

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
  UserName,
} from "../Navbar/navbarELements";
import UserProfile from "../userProfile";
import { useGlobalContext } from "../../context";
import { getFirstName, initials } from "../../utils/greeting";
const Sidebar = ({ isOpen, toggle }) => {
  const { user } = useGlobalContext();
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  // const onLogout = () => {
  //   logoutUser()
  //   navigate("/signin");
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
              <div
                className="w-8 h-8 rounded-full bg-yellow-600 text-center text-black align-center mx-auto"
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
