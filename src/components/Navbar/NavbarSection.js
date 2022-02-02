import React, { useState } from 'react';
import Navbar from './index';
import Sidebar from '../sidebar';


const NavbarHome = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSide = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleSide} />
            <Navbar toggle={toggleSide} />
        </>
    );
};

export default NavbarHome;