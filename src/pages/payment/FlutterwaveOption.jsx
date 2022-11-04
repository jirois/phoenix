import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const FlutterwaveOption = ({ payment }) => {
  const config = {
    public_key: "FLWPUBK_TEST-ea4bcb03cfff2a2d9a1e7ad34cf29371-X",
    tx_ref: Date.now(),
    amount: payment.order.service.totalPrice,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: payment.user.email,
      phone_number: "070********",
      name: payment.user.name,
    },
    customizations: {
      title: "Phoenix course",
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
    <div className="border text-white bg-yellow-500 px-6 py-6 rounded-sm cursor-pointer">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default FlutterwaveOption;
