import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useGlobalContext } from "../context";
import axios from "axios";
import { baseUrl } from "../utils/url";
import useFetchOrder from "../hooks/useFetchOrder";
import { Loading } from "../components/Styles";
// import useFetchPayOrder from "../hooks/useFetchPay";

const OrderScreen = () => {
  const { id: orderId } = useParams();
  const { data: order } = useFetchOrder(orderId);
  console.log(order);
  console.log(order.service._id);

  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get(baseUrl + "config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
  }, [orderId, sdkReady]);

  return (
    <div>
      <h1>Order {order.service._id}</h1>
      {/* <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong>
                  {orderDetail.paymentResult}
                </p>
                {orderDetail.isPaid ? (
                  <div>Paid at {orderDetail.paidAt}</div>
                ) : (
                  <div>Not Paid</div>
                )}
              </div>
            </li> */}
      {/* <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {orderDetail.orderItems.map((item) => (
                    <li key={item.service}>
                      <div className="row">
                        <div className="min-30">
                          <Link to={`/service/${item.service}`}>
                            {item.title}
                          </Link>
                        </div>

                        <div>${item.servicePrice}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li> */}
      {/* </ul> */}
      {/* </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${orderDetail.servicePrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${orderDetail.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>${orderDetail.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {!orderDetail.isPaid && (
                <li>
                  {!sdkReady ? (
                    <div className="loading"></div>
                  ) : (
                    <>
                      {errorPay && <div>{errorPay}</div>}
                      {loadingPay && <div className="loading"></div>}

                      <PayPalButton
                        amount={orderDetail.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )} */}
      {/* </ul> */}
      {/* </div> */}
      {/* </div> */}
      {/* // </div> */}
    </div>
  );
};

export default OrderScreen;
