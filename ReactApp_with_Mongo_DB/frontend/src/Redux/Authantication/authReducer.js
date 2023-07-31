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
      localStorage.setItem("token", payload);
      return { ...state, isLoading: false };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
