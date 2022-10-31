import { useEffect, useState } from "react";
import { axiosPrivate } from "../api/axios";

const useFetchPayOrder = (orderId, paymentResult) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [successPay, setSuccessPay] = useState(false);
  const [data, setData] = useState({});

  const fetchPayOrder = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.put(
        `orderService/${orderId}/pay`,
        paymentResult
      );
      setData(data);
      setSuccessPay(true);
      setIsLoading(false);
    } catch (err) {
      setError({ show: true, msg: err.message });
    }
  };
  useEffect(() => {
    fetchPayOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading,
    error,
    successPay,
    data,
  };
};

export default useFetchPayOrder;
