import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const FlutterwaveOption = () => {
  const config = {
    public_key: "FLWPUBK_TEST-ea4bcb03cfff2a2d9a1e7ad34cf29371-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "PhoenixCap Course",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Flutterwave Pay",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="border-t pt-4 mt-4 w-full">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default FlutterwaveOption;
