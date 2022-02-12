import React from "react";
import Icon1 from "../../img/img-mentor.jpg";
import Icon2 from "../../img/img-book.jpg";
import Icon3 from "../../img/phoenix_cert.jpeg";
import {
  ServiceContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServiceContainer id="service">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Experienced Mentors</ServicesH2>
          <ServicesP>
            Our team has over 3 years of combined experience within the industry
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Online Course Delivered Worldwide</ServicesH2>
          <ServicesP>
            In this online course, you will learn how to accurately analyse
            market structure, price action, and potential movements to profit
            from the markets utilising our trading strategy
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Get Certified</ServicesH2>
          <ServicesP>
            Upon completion of the Training, You will undergo an assessment by
            our top analyst and a certificate will be issued'
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServiceContainer>
  );
};

export default Services;
