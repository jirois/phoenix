import React from 'react';
import {social} from '../../data'
import './footer.css'

function Footer(props) {
    return (
        <div className="footer-container">
            <p >info@phoenixfx.com</p>
            <ul className="socials">
                {social.map((social) => (
                    <li key={social.id} > 
                        <a href={social.url}>{social.icon}</a>
                    </li>
                ))}
            </ul>
            <p >&copy;2021 by jinncyco</p>
        </div>
    );
}

export default Footer;