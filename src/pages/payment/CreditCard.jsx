import React from "react";

const CreditCard = () => {
  return (
    <div className=" w-full">
      <div className="bg-white rounded mt-4 ">
        <div className="grid grid-cols-2 gap-4 px-8 pb-8">
          <div className="">
            <label className="text-xs font-semibold" htmlFor="cardNumber">
              Name On Card
            </label>
            <input
              className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="">
            <label className="text-xs font-semibold" htmlFor="cardNumber">
              Card number
            </label>
            <input
              className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="">
            <label className="text-xs font-semibold" htmlFor="cardNumber">
              Expiry Date
            </label>
            <input
              className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="">
            <label className="text-xs font-semibold" htmlFor="cardNumber">
              CVC/CVV
            </label>
            <input
              className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
              type="password"
              placeholder="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
