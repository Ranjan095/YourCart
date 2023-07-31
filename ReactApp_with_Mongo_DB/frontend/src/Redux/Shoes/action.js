/** @format */

import axios from "axios";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionType";
import { baseURL } from "../../utils/assets";
let token = localStorage.getItem("token");
export let getData = (obj) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  // console.log(token);
  return axios
    .get(`${baseURL}/shoes`, {
      params: {
        data: obj,
      },
      headers: {
        authorization: `Berear ${token}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      alert(`${err.response.data.msg}`);
      console.log(err);
      dispatch({ type: GET_ERROR });
    });
};
