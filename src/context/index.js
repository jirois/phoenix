import React, { useContext, useReducer } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/url";
import reducer from "./reducer";
import { getLocalStorage } from "../utils/getLocalStorage";
// import { useNavigate, useLocation } from "react-router-dom";
import { axiosPrivate } from "../api/axios";

const AppContext = React.createContext();
const initialState = {
  userProfile: false,
  cart: false,
  notification: false,
};
const initialModalState = {
  name: false,
  email: false,
  password: false,
  image: false,
};

const initialStateCart = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  PaymentMethod: "Flutterwave",
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(getLocalStorage("user"));
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceSuccess, setServiceSuccess] = useState(false);
  const [order, setOrder] = useState("");
  const [isOpen, setIsOpen] = useState(initialModalState);
  const [auth, setAuth] = useState({});
  const [newUser, setNewUser] = useState();
  // const navigate = useNavigate();
  // const location = useLocation();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleModal = (clicked) => {
    setIsOpen({ ...initialModalState, [clicked]: true });
  };

  const closeModal = (clicked) => {
    setIsOpen({ ...initialModalState, [clicked]: false });
  };

  const saveUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(baseUrl + "users/showMe");
      saveUser(data.user);
    } catch (err) {
      removeUser();
    }
    setLoading(false);
  };
  const logoutUser = async () => {
    try {
      await axios.delete(baseUrl + "auth/logout");
      removeUser();
      localStorage.removeItem("user");
    } catch (err) {
      console.log(err);
    }
  };

  // cart
  const [cartState, dispatch] = useReducer(reducer, initialStateCart);
  console.log(cartState.cartItems);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(
    () => {
      localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    fetchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // create order
  const createOrder = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(baseUrl + "orderService", values, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      setOrder(data);
      setServiceSuccess(true);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // use refresh

  const useRefreshToken = () => {
    const refresh = async () => {
      const { response } = await axios.get(baseUrl + "auth/refresh", {
        withCredentials: true,
      });
      setAuth((prev) => {
        console.log(JSON.stringify(prev));
        console.log(response.data.accessToken);
        return { ...prev, accessToken: response.data.accessToken };
      });
      return response.data.accessToken;
    };

    return refresh;
  };

  // useprivateAxiol

  // const useAxiosPrivate = () => {
  //   const refresh = useRefreshToken();

  //   useEffect(() => {
  //     const requestIntercept = axiosPrivate.interceptors.request.use(
  //       (config) => {
  //         if (!config.headers["Authorization"]) {
  //           config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
  //         }
  //         return config;
  //       },
  //       (error) => Promise.reject(error)
  //     );

  //     const responseIntercept = axiosPrivate.interceptors.response.use(
  //       (response) => response,
  //       async (error) => {
  //         const prevResquest = error?.config;
  //         if (error?.response?.status === 403 && !prevResquest?.sent) {
  //           prevResquest.sent = true;
  //           const newAccessToken = await refresh();
  //           prevResquest.headers["Authorization"] = `Bearer ${newAccessToken}`;
  //           return axiosPrivate(prevResquest);
  //         }
  //         return Promise.reject(error);
  //       }
  //     );
  //     return () => {
  //       axiosPrivate.interceptors.request.eject(requestIntercept);
  //       axiosPrivate.interceptors.response.eject(responseIntercept);
  //     };
  //   }, [refresh]);

  //   return axiosPrivate;
  // };

  // const axiosPrivates = useAxiosPrivate();
  // create new userobject
  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUser = async () => {
  //     try {
  //       const { data } = await axiosPrivates.get("users/showMe", {
  //         signal: controller.signal,
  //       });
  //       console.log(data.user);
  //       isMounted && setNewUser(data.user);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  console.log(auth);

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        saveUser,
        logoutUser,
        user,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        handleClick,
        sessions,
        setSessions,
        services,
        setServices,
        removeItem,
        dispatch,
        cartState,
        serviceSuccess,
        order,
        createOrder,
        handleModal,
        isOpen,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
