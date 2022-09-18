import React from "react";
import Icon1 from "../../img/phoenix_bible.jpg";
import Icon2 from "../../img/phoenix_course.jpg";
import Icon3 from "../../img/img-phone.jpg";

import {
  ProductContainer,
  ProductWrapper,
  ProductH1,
  ProductsCard,
  ProductIcon,
  ProductH2,
  ProductP,
  ProductLink,
} from "./productElements1";
import { useGlobalContext } from "../../context";

const Products = () => {
  const { user } = useGlobalContext();
  return (
    <ProductContainer id="service">
      <ProductH1>Our Products</ProductH1>
      <ProductWrapper>
        <ProductsCard>
          <ProductIcon src={Icon1} />
          <ProductH2>Experienced Mentors</ProductH2>
          <ProductP>
            Our team has over 3 years of combined experience within the industry
          </ProductP>
          <div>
            {user ? (
              <ProductLink to="/sessions">Book a session now</ProductLink>
            ) : (
              <ProductLink to="/signup">Get started</ProductLink>
            )}
          </div>
        </ProductsCard>
        <ProductsCard>
          <ProductIcon src={Icon2} />
          <ProductH2>Online Course Delivered Worldwide</ProductH2>
          <ProductP>
            In this online course, you will learn how to accurately analyse
            market structure, price action, and potential movements to profit
            from the markets utilising our trading strategy
          </ProductP>
          <div className="p-4">
            {user ? (
              <ProductLink to="/services">Check out our services</ProductLink>
            ) : (
              <ProductLink to="/signup">Get started</ProductLink>
            )}
          </div>
        </ProductsCard>
        <ProductsCard>
          <ProductIcon src={Icon3} />
          <ProductH2>Get Certified</ProductH2>
          <ProductP>
            Upon completion of the Training, You will undergo an assessment by
            our top analyst and a certificate will be issued'
          </ProductP>
          <div>
            {user ? (
              <ProductLink to="/services">Check out our services</ProductLink>
            ) : (
              <ProductLink to="/signup">Get started</ProductLink>
            )}
          </div>
        </ProductsCard>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;
