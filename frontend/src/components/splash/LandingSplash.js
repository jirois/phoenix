import React from 'react';
import logo from './logo.jpeg'

function LandingSplash(props) {
    return (
        <div className="bg-black min-h-screen ">
        <div className="w-1/4 h-1/4 mx-auto my-auto flex column items-center ">
            <img src={logo} alt="logo" className="object-fit w-full mt-56" />
        </div>
        </div>
    );
}

export default LandingSplash;