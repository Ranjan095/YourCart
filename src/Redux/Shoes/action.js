/** @format */

import axios from "axios";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionType";
export let baseURL = "http://localhost:8080/shoes";

// for Saling price 
export let SP = (mrp, offer) => {
  let res = Math.floor((mrp * (100 - offer)) / 100);
  return res;
};

//for Size

export let SIZE = (arr) => {
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      bag += arr[i];
    } else {
      bag += `${arr[i]},${" "}`;
    }
  }
  return bag;
};

export let getData =(obj)=>(dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`${baseURL}`,obj)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_ERROR });
    });
};
