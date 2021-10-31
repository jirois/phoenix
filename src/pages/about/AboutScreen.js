import React from 'react';
import './about.css'

function About(props) {
    return (
        <div className="about">
            <div className="hero-img">
            <img src="/img/about_hero_img.jpg" alt="about" />
            </div>
            <div className="about-body">
                <h1>About Us</h1>
            </div>
        </div>
    );
}

export default About;