import {links} from '../../data'
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar(props) {


    return (
        <>
        <nav className="desktopbar relative px-2 py-6 flex justify-between bg-black ">
            <a className="menu-logo text-lg py-4 px-14 text-wrap font-bold leading-6 uppercase text-white text-center lg:py-12" href="/">
                Welcome to phoenix cap
            </a>
            <div className="md:flex lg:hidden top-1 -mr-4">
    
               
                <Button />
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex lg:mx-auto lg:text-center lg:w-auto lg:space-x-6">
            
               {links.map((link) =>{
                   const {id, url, text} = link
                   return(
                       <li key={id}>
                            <NavLink exact to={url} className="text-desknav" activeClassName="activeClass" >{text}</NavLink>
                       </li>
                   )
                    
               })}
    
            </ul>
            {/* <a className="hidden lg:hidden lg:ml-auto lg:mr-3 px-6 py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="/">Sign In</a>
            <a className="hidden lg:hidden-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-xl font-bold transition duration-200" href="/">Sign Up</a> */}

        </nav>
        
            
        </>
    );
}

export default Navbar;