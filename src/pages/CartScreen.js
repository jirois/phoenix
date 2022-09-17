import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const CartScreen = () => {
  const { cartState, dispatch } = useGlobalContext();
  const { cartItems } = cartState;
  const [total, setTotal] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let total = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
    let totalAmount = total * 0.1 + total;
    setTotal(total);
    setTotalAmount(totalAmount);
  }, [cartItems]);

  const checkoutHandler = () => {
    navigate("/signin?redirect=/payment");
  };

  return (
    <>
      <div className="checkout-steps step1"></div>
      <div className="bg-gray-100">
        <div className="container mx-auto mt-10 md">
          <div className="flex flex-col md:flex-row shadow-md my-10">
            <div className="w-full md:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Cart</h1>
                <h2 className="font-semibold text-2xl">{cartItems.length}</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Service Details
                </h3>

                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              <div>
                {cartItems.map((item, index) => {
                  const { _id, title, duration, price } = item;
                  return (
                    <div
                      key={index}
                      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    >
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img
                            className="h-24"
                            src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm"> {title}</span>
                          <span className="text-red-500 text-xs">
                            {duration}
                          </span>
                          <button
                            onClick={() => {
                              dispatch({
                                type: "REMOVE",
                                payload: cartItems._id,
                              });
                            }}
                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <span className="text-center w-1/5 font-semibold text-sm">
                        ${price}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ${price}
                      </span>
                    </div>
                  );
                })}

                <Link
                  to="/services"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div
              style={{ backgroundColor: "#f6f6f6" }}
              className="w-full md:w-1/4 px-8 py-10"
            >
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cartItems.length}
                </span>
                <span className="font-semibold text-sm">{total}</span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  VAT(10%)
                </span>
                <span className="font-semibold text-sm">{total * 0.1}%</span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{totalAmount}</span>
                </div>
                <button
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
