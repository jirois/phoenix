import React, { useContext, useReducer } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/url";
import reducer from "./reducer";
import { getLocalStorage } from "../utils/getLocalStorage";

const AppContext = React.createContext();
const initialState = {
  userProfile: false,
  cart: false,
  notification: false,
};
// const initialStateCart = {
//   loading: false,
//   cart: {
//     cartItems: [],
//     paymentMethod: "PayPal",
//   },
// };
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

const initialUser = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : null;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(getLocalStorage("userInfo"));
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

  return (
    <AppContext.Provider
      value={{
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
