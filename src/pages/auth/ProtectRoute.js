import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useSelector((store) => store.auth);
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Navigate to="/" />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
