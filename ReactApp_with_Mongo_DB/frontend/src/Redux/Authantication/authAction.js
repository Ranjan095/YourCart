/** @format */

import axios from "axios";
import { baseURL, reqres } from "../../utils/assets";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./AuthType";

export let userRegister = (formData) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`${baseURL}/user/register`, formData)
    .then((res) => {
      alert(res.data.msg)
      // console.log(res);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch((err) => {
      alert(`${err.response.data.msg}! Login Please `);
      console.log(err);
      dispatch({ type: REGISTER_ERROR });
    });
};

/** THE FUNCTION IS FOR LOGIN THE USER */
export let userLogin = (formData, tost) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`${baseURL}/user/login`, formData)
    .then((res) => {
      let token = res?.data.token;
      dispatch({ type: LOGIN_SUCCESS, payload: token });
      alert(`Welcome ${res?.data.author} Login Successful`);
      // console.log(res);
      // console.log(token);
    })
    .catch((err) => {
      console.log(err);
      alert(`${err.response.data.msg}`);
      dispatch({ type: LOGIN_ERROR });
    });
};
