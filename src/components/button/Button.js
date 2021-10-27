import React, { useState } from 'react';
import NavbarDropDown from '../sidebar/NavbarDropDown';

import "./button.css"
function Button(props) {
    const [isToggle, setToggle] = useState(false)
    const toggleClass = () => {
        setToggle(!isToggle)
    }
    const closeSidebar = () => {
        setToggle(false)
    }
    return (
        <>
        <div 
        aria-pressed='false'
        tabIndex='0'
        role='button'
        onKeyDown={toggleClass}
        onClick={toggleClass}
        className={`
            ${ isToggle ? 'menu-icon open' : 'menu-icon'}
        `}>
            <span></span>   
            <span></span>   
            <span></span>
        </div>
        <NavbarDropDown isToggle={isToggle} closeSidebar={closeSidebar} />
        </>
    )
}

export default Button;