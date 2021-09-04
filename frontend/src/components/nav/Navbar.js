import React, { useRef, useState } from 'react';
import {links} from '../../data'
import Button from '../button/Button';

function Navbar(props) {
    const [showLinks, setShowLinks] = useState(true)
    
    const openLink = () => {
        setShowLinks(true)
        console.log("click")
        console.log(showLinks)
    }   
   
    const closeLink = () => {
        setShowLinks(false)
        console.log("click")
        console.log(showLinks)
    }   

    return (
        <>
        <nav className="relative px-2 py-4 flex justify-between bg-black text-center z-10">
            <a className="menu-logo text-lg py-6 px-6 text-wrap font-bold leading-6 uppercase text-white text-center" href="/">
                Welcome to phoenix cap
            </a>
            <div className="md:flex lg:hidden -top-1">
               
                <Button />
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex lg:mx-auto lg:text-center lg:w-auto lg:space-x-6">
            
               {links.map((link) =>{
                   const {id, url, text} = link
                   return(
                       <li key={id}>
                            <a  className="text-grey" href={url}>{text}</a>
                       </li>
                   )
                    
               })}
    
            </ul>
            <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 px-6 py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="/">Sign In</a>
            <a className="hidden lg:inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-xl font-bold transition duration-200" href="/">Sign Up</a>

        </nav>
        
            
        </>
    );
}

export default Navbar;