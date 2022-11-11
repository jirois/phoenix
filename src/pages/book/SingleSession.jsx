import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetchSession";
import { Image, InnerWrapper, TabButton, Wrapper } from "./Styles";
import FlutterWave from "../payment/FlutterwaveOption";
import PayPal from "../payment/PaypalOption";
import { Loading } from "../../components/Styles";
import { useGlobalContext } from "../../context";
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
  const { isLoading, error, data } = useFetch("session", sessionId);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  const { title, image, price, hours } = data;

  const paymentToken = {
    user,
    totalPrice: price,
  };

  return (
    <Wrapper>
      <Image src={image} alt="phoenix booking" />
      <InnerWrapper>
        <h3>{title}</h3>
        <p>
          This session last for {hours} hour after which you wiil be require to
          book again
        </p>

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
          {value === 0 && <FlutterWave payment={paymentToken} />}
          {value === 1 && <PayPal />}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SingleSession;
