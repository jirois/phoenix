import React, { useState } from "react";
import paypalLogo from "../../assets/paypal.png";
import flutterwavelogo from "../../assets/flutterwave.png";
import bitcoinLogo from "../../assets/bitcoin.png";

const PaymentMethodScreen = ({ onPayment }) => {
  // const [values, setValues] = useState('')
  const paymentChangeHandler = (e) => {
    onPayment(e.target.value);
  };
  return (
    <ul className="flex flex-col gap-4 m-10 w-full mx-auto">
      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="paypal"
          name="payment"
          onChange={paymentChangeHandler}
          id="answer_yes"
        />
        <label
          className="flex justify-between first-letter:px-4 py-1 bg-white border border-gray-300 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent"
          for="answer_yes"
        >
          <span className="font-bold text-xl pl-8 pt-2">PayPal </span>
          <img src={paypalLogo} alt="paypal " className="h-12 pr-12" />
        </label>

        {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
          👍
        </div> */}
      </li>

      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="flutterwave"
          name="payment"
          onChange={paymentChangeHandler}
          id="answer_no"
        />
        <label
          className="flex justify-between bg-white border py-1 border-gray-300 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent"
          for="answer_no"
        >
          {/* <span>
            <Flutterwave
              className="text-sm h-10"
              style={{ fontSize: "0.8rem" }}
            />
          </span> */}
          <img src={flutterwavelogo} alt="flutterwave" className="h-12 pl-6" />
        </label>

        {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
          👎
        </div> */}
      </li>

      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="bitcoin"
          name="payment"
          onChange={paymentChangeHandler}
          id="answer_maybe"
        />
        <label
          className="flex justify-between bg-white border border-gray-300 py-1 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent"
          for="answer_maybe"
        >
          <span className="font-bold text-xl pl-8 pt-2">Cryptocurrency </span>
          <img src={bitcoinLogo} alt="Bitcoin " className="h-10 pr-12" />
        </label>

        {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
          🤔
        </div> */}
      </li>
    </ul>
  );
};

export default PaymentMethodScreen;
