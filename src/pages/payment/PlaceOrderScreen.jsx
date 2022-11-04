import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import PaymentMethodScreen from "./Payment";
import PaypalOption from "./PaypalOption";
import { useGlobalContext } from "../../context";
import FlutterwaveOption from "./FlutterwaveOption";
import CreditCard from "./CreditCard";

const PlaceOrderScreen = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const handleChangePayment = (payment) => {
    setPayment(payment);
  };
  console.log(payment);

  if (!user) {
    navigate("/signin");
  }

  const { id: orderId } = useParams();
  console.log(orderId);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-8 lg:flex-row lg:justify-between lg:px-24">
      <div className="mt-0 w-full lg:flex-1 lg:w-2/6 pr-8 lg:-mt-60 ">
        <div>
          <h2 className="text-2xl font-medium m-0">Payment Method</h2>
        </div>
        <div>
          <PaymentMethodScreen onPayment={handleChangePayment} />
        </div>
      </div>
      <div className=" w-full lg:flex-2 lg:w-4/6">
        <h2 className="text-3xl font-medium">Order #11220</h2>
        <div className="bg-white rounded mt-4 shadow-lg py-8 px-6">
          <div className="">
            <div className="flex items-end">
              <div>
                <h3 className="text-xl">Product Name</h3>
              </div>
              <span className="text-xl ml-auto font-semibold">$20</span>
              <span className="text-xl text-gray-500 mb-px">/mo</span>
            </div>
            <span className="text-sm text-gray-500 mt-2">One Time Off</span>
          </div>
          <div className="mt-4 border-t pt-6">
            <div className="flex items-end">
              <div>
                <p className="text-lg ">Plan Discount 75%</p>
              </div>
              <span className="text-base ml-auto font-semibold ">$202</span>
            </div>
            <div className="flex items-end mt-2">
              <div>
                <p className="text-lg ">Tax/Fee</p>
              </div>
              <span className="text-base ml-auto font-semibold">$20</span>
            </div>
          </div>

          <div className="px mt-4 border-t pt-6 pb-6">
            <div className="flex items-end justify-between">
              <span className="font-semibold text-2xl">Total</span>
              <span className="font-semibold text-xl">$0</span>
            </div>
          </div>
          <div className="flex border-t pt-4 mt-4 justify-evenly">
            {payment === "paypal" && <PaypalOption />}
            {payment === "flutterwave" && <FlutterwaveOption />}
            {payment === "bitcoin" && <CreditCard />}
          </div>
          <div className="flex items-center px-8 mt-8">
            <div className="flex py-2">
              <span className="text-green-800 text-lg mt-1">
                <FiLock className="text-green-800" />
              </span>
              <span className="text-lg ml-1">
                Encrypted and Secure Payments
              </span>
            </div>
          </div>
          <div className="flex flex-col px-8 pt-4">
            <p>
              By checking out you agree with our{" "}
              <Link to="#" className="text-blue-400 cursor-pointer">
                Terms of Service.
              </Link>{" "}
              We will process your personal data for the fulfillment of your
              order and other purposes as per our{" "}
              <Link to="#" className="text-blue-400 cursor-pointer">
                Privacy Policy.
              </Link>{" "}
              You can cancel recurring payments at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
