/** @format */

import axios from "axios";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionType";
let baseURL = "http://localhost:8080/shoes";

export let getData = (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`${baseURL}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_ERROR });
    });
};
