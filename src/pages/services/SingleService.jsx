import React from "react";
import { useGlobalContext } from "../../context";
import { Link, useParams } from "react-router-dom";
import "./service.css";
import axios from "axios";
import { baseUrl } from "../../utils/url";
import useLocalState from "../../hooks/localState";
import useFetch from "../../utils/useFetch";

const SingleService = () => {
  const { dispatch, cartState } = useGlobalContext();
  const params = useParams();
  const { id: serviceId } = params;
  const { success, setSuccess, showAlert, alert } = useLocalState();

  const handleAddToCart = async () => {
    try {
      const { data } = await axios.get(baseUrl + `service/${serviceId}`);
      const cartItem = data.service;
      console.log(cartItem);
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          title: cartItem.title,
          duration: cartItem.duration,
          price: cartItem.price,
          service: cartItem._id,
        },
      });
      localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
      console.log(cartState);
      setSuccess(true);
      showAlert({ text: `${cartItem.title} added to cart`, type: "success" });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //       hideAlert()
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // })

  const { isLoading, error, data } = useFetch(serviceId);
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex container font-semibold text-left">Loading...</div>
    );
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/services" className="btn">
          back to service
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg" style={{ margin: "0 auto" }}>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <div className="service-card">
        <span className="service-title">{data.title}</span>
        <div className="service-price">
          <span>$</span>
          <span className="price">{data.price}</span>
        </div>
        <span className="duration">{data.duration}</span>
        <span className="description">{data.description}</span>

        {!success ? (
          <button onClick={handleAddToCart} className="service-btn">
            Purchase Now
          </button>
        ) : (
          <Link to="/cart" className="service-btn">
            Proceed to Cart
          </Link>
        )}
      </div>
      <div className="p-5 text-blue-400 font-semibold cursor-pointer ">
        <Link to="/services">Go to services</Link>
      </div>
    </div>
  );
};

export default SingleService;
