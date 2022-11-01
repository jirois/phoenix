import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useGlobalContext } from "../context";
import axios from "axios";
import { baseUrl } from "../utils/url";
import useFetchOrder from "../hooks/useFetchOrder";
import { Card, Loading, Row } from "../components/Styles";
import useFetchPayOrder from "../hooks/useFetchPay";

const OrderScreen = () => {
  const { id: orderId } = useParams();
  const { data: order } = useFetchOrder(orderId);
  const { loadingPay, errorPay, successPay } = useFetchPayOrder;
  console.log(order);
  console.log(order.service._id);
  console.log(order.service.orderServices);

  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get(baseUrl + "config/paypal");
      console.log(data);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order.service._id) {
    } else {
      if (!order.service.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [order, sdkReady]);

  const successPaymentHandler = () => {};

  return (
    <div>
      <h1>Order {order.service._id}</h1>
      <div className="flex flex-wrap justify-between items-start">
        <div className="" style={{ flex: "2 1 50rem" }}>
          <ul>
            <li>
              <Card>
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong>
                  {order.service.paymentMethod}
                </p>
                {order.service.isPaid ? (
                  <div>Paid at {order.service.paidAt}</div>
                ) : (
                  <div>Not Paid</div>
                )}
              </Card>
            </li>
            <li>
              <Card>
                <h2>Order Items</h2>
                <ul>
                  {order.service.orderServices.map((item) => (
                    <li key={item.service}>
                      <Row>
                        <div className="" style={{ minWidth: "30rem" }}>
                          <Link to={`/services/${item.service}`}>
                            {item.title}
                          </Link>
                        </div>

                        <div>${item.price}</div>
                      </Row>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <Card>
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${order.service.servicePrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.service.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <Row>
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.service.totalPrice.toFixed(2)}</strong>
                  </div>
                </Row>
              </li>
              {!order.service.isPaid && (
                <li>
                  {!sdkReady ? (
                    <div className="loading"></div>
                  ) : (
                    <>
                      {errorPay && <div>{errorPay}</div>}
                      {loadingPay && <div className="loading"></div>}

                      <PayPalButton
                        amount={order.service.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
