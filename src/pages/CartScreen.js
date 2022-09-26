import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const CartScreen = () => {
  const { cartState, dispatch, createOrder, serviceSuccess, order, loading } =
    useGlobalContext();
  const { cartItems } = cartState;
  const navigate = useNavigate();

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

  cartState.servicePrice = toPrice(
    cartItems.reduce((acc, item) => acc + Number(item.price), 0)
  );
  cartState.taxPrice = toPrice(0.1 * cartState.servicePrice);
  cartState.totalPrice = toPrice(cartState.servicePrice + cartState.taxPrice);

  console.log(cartState.cartItems);
  console.log({ ...cartState });

  // createOrder

  const data = {
    ...cartState,
    orderServices: cartState.cartItems,
  };

  const checkoutHandler = () => {
    createOrder(JSON.stringify(data));
  };

  useEffect(() => {
    if (serviceSuccess) {
      navigate(`/order/${order._id}`);
    }
  });

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
                  const { service, title, duration, price } = item;
                  console.log(service);
                  return (
                    <div
                      key={service}
                      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    >
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img
                            className="h-24"
                            src="https://res.cloudinary.com/jinncy/image/upload/v1664184754/phoenix_course_img_fwppdy.jpg"
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
                                payload: service,
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
                <span className="font-semibold text-sm">
                  {cartState.servicePrice}
                </span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  VAT(10%)
                </span>
                <span className="font-semibold text-sm">
                  {cartState.taxPrice}%
                </span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{cartState.totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={checkoutHandler}
                  disabled={loading}
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  {loading ? "Please wait..." : "Checkout"}
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
