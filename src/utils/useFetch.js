import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { baseUrl } from "./url";

const useFetch = (urlParams) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState({});

  const fetchUrl = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(baseUrl + `service/${urlParams}`);
      if (data) {
        setData(data.service || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, [urlParams]);

  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, data };
};

export default useFetch;
