import React, { useState } from "react";
import { ButtonLinK } from "../ButtonElement";
import video from "../../videos/video_6.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroBlur,
  TelegramLink,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <HeroBlur>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBlur>
      </HeroBg>
      <HeroContent>
        <HeroH1>Phoenix Capital</HeroH1>
        <HeroP>Speed Your Trading Journey with our Unique Trading System</HeroP>
        <HeroBtnWrapper>
          <ButtonLinK
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLinK>
          <TelegramLink href="telegram" target="_blank">
            Join our Telegram
          </TelegramLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
