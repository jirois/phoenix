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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
