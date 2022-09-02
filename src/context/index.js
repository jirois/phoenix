import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/url";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
