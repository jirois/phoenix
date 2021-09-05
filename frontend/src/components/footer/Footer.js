import React from 'react';
import {social} from '../../data'

function Footer(props) {
    return (
        <div className="bg-black flex flex-col p-4 text-center text-white">
            <p className="text-xs tracking-widest">info@phoenixfx.com</p>
            <ul className="socials flex justify-center my-2">
                {social.map((social) => (
                    <li key={social.id} className="mr-4 py-2"> 
                        <a className="bg-transparent" href={social.url}>{social.icon}</a>
                    </li>
                ))}
            </ul>
            <p className="text-xs tracking-widest">&copy;2021 by jinncyco</p>
        </div>
    );
}

export default Footer;