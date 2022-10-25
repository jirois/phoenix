import React from "react";
import "./about.css";

function AboutScreen(props) {
  return (
    <div className="about">
      <div className="about-hero-img">
        <img src="/img/about_hero_img.jpg" alt="about" />
      </div>
      <div className="about-body">
        <h1>About Us</h1>
        <p>
          Our team has a combined experience of over 6 years. Within the last 2
          years we have become one of the Nigeria leading and fastest growing
          academy of trading, as well as having a worldwide student base.
          Throughout our years of trading Forex market, we have faced so many
          obstacles and have had to deal with many setbacks aswell. It was not
          an easy journey and most importantly, we have had to face many of the
          common issues that a lot of traders go through. Because of all this,
          we have decided to help traders out there by dedicating our time to
          both teaching, mentoring and also providing analysis with detailed
          explanations to those that would love to earn while they learn. Our
          aim at phoenixcapital is to take all our years of experience and help
          tradersto better understand the process in a simplified yet systematic
          approach
        </p>
      </div>
    </div>
  );
}

export default AboutScreen;
