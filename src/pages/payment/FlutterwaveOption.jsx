import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

const FlutterwaveOption = ({ payment }) => {
  const navigate = useNavigate();
  const config = {
    public_key: "FLWPUBK_TEST-1a86e70f2cfa0d382e2f48f677e4cedd-X",
    tx_ref: Date.now(),
    amount: payment.totalPrice,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: payment.user.email,
      phone_number: "070********",
      name: payment.user.name,
    },
    customizations: {
      title: "Phoenix",
      description: "Payment for items in cart",
      logo: "https://res.cloudinary.com/jinncy/image/upload/v1662071930/phoenix_logo_dzdyzw.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Flutterwave Pay",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      navigate("/");
    },
  };

  return (
    <div className=" pb-4">
      <FlutterWaveButton
        {...fwConfig}
        className="border text-white bg-yellow-500 hover:bg-yellow-600 px-6 py-4 rounded-sm cursor-pointer"
      />
    </div>
  );
};

export default FlutterwaveOption;
