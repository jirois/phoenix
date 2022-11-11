import { useState, useEffect, useCallback } from "react";
import { axiosPrivate } from "../api/axios";

const useFetch = (uri, urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState({});

  const fetchUrl = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.get(`${uri}/${urlParams}`);
      const dataResult = data.service;
      if (dataResult) {
        setData(dataResult);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, [uri, urlParams]);

  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, data };
};

export default useFetch;
