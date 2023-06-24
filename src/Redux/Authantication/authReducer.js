/** @format */

import React from "react";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./AuthType";
let initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case REGISTER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case REGISTER_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("isAuth", true);
      return { ...state, isLoading: false, isAuth: true, token: payload };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
