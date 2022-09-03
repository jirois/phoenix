import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/url";
const AppContext = React.createContext();
const initialState = {
  userProfile: false,
  cart: false,
  notification: false,
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
  useEffect(() => {
    fetchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
