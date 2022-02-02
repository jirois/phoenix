import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules';



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

} from './navbarELements'


const NavbarSection = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])



    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer >
                <NavLogo to='/' onClick={toggleHome}>
                    PhoenixCapng
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/session"
                            exact={true}

                        >
                            Book Private Session
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about"
                            exact={true}

                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                            exact={true}
                        >
                            Our Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/broker"
                            exact={true}
                        >
                            Broker
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/testimonials"
                            exact={true}
                        >
                            Testimonials
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact"
                            exact={true}

                        >
                            Contacts
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/faq"
                            exact={true}
                        >
                            FAQ
                        </NavLinks>
                    </NavItem>


                </NavMenu>
                <NavBtn>
                    <NavBtnLinkOne to="/signin">
                        Sign In
                    </NavBtnLinkOne>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};



export default NavbarSection;
