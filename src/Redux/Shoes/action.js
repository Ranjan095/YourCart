/** @format */

import axios from "axios";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionType";
import { baseURL } from "../../utils/assets";




export let getData =(obj)=>(dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`${baseURL}/shoes`,obj)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_ERROR });
    });
};
