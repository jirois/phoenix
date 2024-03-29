import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetchSession";
import { Image, InnerWrapper, TabButton, Wrapper } from "./Styles";
// import FlutterWave from "../payment/FlutterwaveOption";
// import PayPal from "../payment/PaypalOption";
import CreditCard from "../payment/CreditCard";
import { Loading } from "../../components/Styles";
import { useGlobalContext } from "../../context";
import PaypalCheckoutButton from "../../utils/PaymentCheckoutButton";
const payment = ["pay with flutter", "pay with Paypal"];

const SingleSession = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  if (!user) {
    navigate("/signin");
  }
  const { id: sessionId } = useParams();
  const [value, setValue] = useState(0);
  console.log(value);
  const { isLoading, data } = useFetch("session", sessionId);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  const { title, image, price, hours } = data;

  // const paymentToken = {
  //   user,
  //   totalPrice: price,
  // };

  return (
    <Wrapper>
      <Image src={image} alt="phoenix booking" />
      <InnerWrapper>
        <h3>{title}</h3>
        <p>
          This session last for {hours} hour after which you will be require to
          book again
        </p>
        <div className="flex justify-center px-3 mb-6">
          <span className="font-extrabold text-3xl">{price}</span>
          <span className="font-extrabold text-sm">$</span>
        </div>

        <TabButton>
          {payment.map((item, index) => (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`${index === value && "active-btn"}`}
            >
              {item}
            </button>
          ))}
        </TabButton>
        <div className="text-center flex justify-center">
          {value === 0 && <CreditCard />}
          {value === 1 && <PaypalCheckoutButton info={data} />}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SingleSession;
