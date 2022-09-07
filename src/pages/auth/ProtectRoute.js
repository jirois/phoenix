import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();
  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
