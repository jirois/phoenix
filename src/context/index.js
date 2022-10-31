import React, { useContext, useReducer } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/url";
import reducer from "./reducer";
import { axiosPrivate } from "../api/axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { axiosPrivate } from "../api/axios";

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
  const [user, setUser] = useState(null);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceSuccess, setServiceSuccess] = useState(false);
  const [successPay, setSuccessPay] = useState(false);
  const [errorPay, setErrorPay] = useState("");
  const [loadingPay, setLoadingPay] = useState("");
  const [order, setOrder] = useState({});
  const [orderDetail, setOrderDetail] = useState({});
  const [isOpen, setIsOpen] = useState(initialModalState);
  const [auth, setAuth] = useState({});
  // const [newUser, setNewUser] = useState();
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
      const { data } = await axiosPrivate.get("users/showMe");
      saveUser(data.user);
    } catch (err) {
      removeUser();
    }
    setLoading(false);
  };
  const logoutUser = async () => {
    try {
      await axiosPrivate.delete("auth/logout");
      removeUser();
      console.log(user);
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
        withCredentials: true,
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
  // get orderDetails
  const getOrder = async (id) => {
    setLoading(true);
    try {
      const { data } = await axiosPrivate.get(`orderService/${id}`);
      console.log(data);
      setOrderDetail(data);
      setServiceSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  // get orderDetails
  const orderPay = async (id, value) => {
    setLoadingPay(true);
    try {
      const { data } = await axiosPrivate.put(`orderService/${id}/pay`, value);
      console.log(data);
      setOrder(data);
      setSuccessPay(true);
      setLoadingPay(false);
    } catch (error) {
      setLoadingPay(false);
      setErrorPay(error);
    }
  };

  console.log(order);
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
        getOrder,
        orderPay,
        orderDetail,
        successPay,
        loadingPay,
        errorPay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
