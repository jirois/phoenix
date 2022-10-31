import { useEffect, useState } from "react";
import { axiosPrivate } from "../api/axios";

const useFetchOrder = (param) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState({});

  const fetchOrder = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.get(`orderService/${param}`);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setError({ show: true, msg: err.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading,
    error,
    data,
    fetchOrder,
  };
};

export default useFetchOrder;
