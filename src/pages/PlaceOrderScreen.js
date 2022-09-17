import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { useGlobalContext } from "../context";

const PlaceOrder = () => {
  const { cart } = useGlobalContext();
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = cart.cart.reduce((acc, item) => acc + Number(item.price), 0);
    let totalAmount = total * 0.1 + total;
    setTotal(total);
    setTotalAmount(totalAmount);
  }, [cart]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="flex flex-wrap justify-between items-start">
        <div className="col-2" style={{ flex: "2 1 50rem" }}>
          <ul>
            <li>
              <div
                className="rounded-2xl m-4 p-4"
                style={{
                  border: "0.1rem #c0c0c0 solid ",
                  backgroundColor: "#f8f8f8",
                }}
              >
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div
                className="rounded-2xl m-4 p-4"
                style={{
                  border: "0.1rem #c0c0c0 solid ",
                  backgroundColor: "#f8f8f8",
                }}
              >
                <h2>Order Items</h2>
                <ul>
                  {cart.cart.map((item) => (
                    <li key={item.product}>
                      <div className="flex flex-wrap justify-between items-center">
                        <div>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30" style={{ minWidth: "30rem" }}>
                          <Link to={`/services/${item._id}`}>{item.title}</Link>
                        </div>

                        <div>${item.price}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Tax</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div></div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {}}
                  className="primary block"
                  //   disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
