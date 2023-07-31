/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  let isAuth = localStorage.getItem("isAuth");

  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace />
  );
};

export default PrivateRoute;
