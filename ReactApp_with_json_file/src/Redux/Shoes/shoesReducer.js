/** @format */

import React from "react";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionType";
let initialState = {
  isLoading: false,
  isError: false,
  shoes: [],
};
const shoesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_SUCCESS: {
      return { ...state, isLoading: false, shoes: [...payload] };
    }
    case GET_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};

export default shoesReducer;
