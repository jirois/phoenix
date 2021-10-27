import {links} from '../../data'
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar(props) {


    return (
        <>
        <nav className="navbar  ">
            <a className="menu-logo " href="/">
                Welcome to phoenix cap
            </a>
            <div className="menu-btn ">
    
                <Button />
            </div>

            <ul className=" menu-item">
            
               {links.map((link) =>{
                   const {id, url, text} = link
                   return(
                       <li key={id}>
                            <NavLink exact to={url} className="text-desknav" activeClassName="activeClass" >{text}</NavLink>
                       </li>
                   )
                    
               })}
    
            </ul>
           
        </nav>
        
            
        </>
    );
}

export default Navbar;