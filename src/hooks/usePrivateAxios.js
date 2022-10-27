import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import useRefreshToken from "./useRefresh";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useGlobalContext();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevResquest = error?.config;
        if (error?.response?.status === 403 && !prevResquest?.sent) {
          prevResquest.sent = true;
          const newAccessToken = await refresh();
          prevResquest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevResquest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
