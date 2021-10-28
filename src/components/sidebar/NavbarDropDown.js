import React from 'react';
import {links} from '../../data'
import { NavLink } from 'react-router-dom';
import logo from '../../image-holder-icon.png'
import './navdropdown.css'

function NavbarDropDown({isToggle, closeSidebar}) {
    return (
        <div 
         role="button"
         tabIndex="77"
         onKeyDown=""
         onClick={closeSidebar}
        className={`${isToggle? 'sidebar open' : 'sidebar'}`}>
            <nav className="sidebar-content  flex flex-col w-5/6 max-w-sm mx-auto py-6 px-6 overflow-y-auto ">
                <div className=" sidebar-logo">
                    <a href="/">
                     <img src={logo} alt="icon holder" />
                     <span>Log In</span>
                    </a>
                </div>
                <div>
                    
                    <ul>
                    {links.map((link) =>{
                   const {id, url, text} = link
                   return(
                       <li key={id} className="sidebar-item-list">
                            <NavLink exact to={url} className="text-sidebar" activeClassName="activeClass" >{text}</NavLink>
                       </li>
                   )
                    
               })}
                        
                    </ul>
                
                </div>
              
            </nav>
        </div>
    );
}

export default NavbarDropDown;