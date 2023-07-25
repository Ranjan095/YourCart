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

/**THIS FUNCTION IS FOR CHACKING USER IS EXISTS WITH EMAIL OR NOT IT SHOULD RETURN BOOLEAN VALUE */
function checkUser(email) {
  axios.get(`${baseURL}/user`).then((res) => {
    let user = res.data;
    let flag = false;
    user.map((ele) => {
      if (ele.email === email) {
        flag = true;
      }
    });
    return flag;
  });
}
/** THE FUNCTION IS FOR USER REGISTRATION */
export let userRegister = (formData) => (dispatch) => {
  /* there is #BUG checkUser function is always return undefined so check it*/
  console.log(checkUser(formData?.email));
  if (checkUser(formData?.email)) {
    alert("user is already exists Please Login");
    return axios.post(`${baseURL}/wrong`, formData);
  } else {
    dispatch({ type: REGISTER_REQUEST });
    return axios
      .post(`${baseURL}/user`, formData)
      .then((res) => {
        console.log(res);
        dispatch({ type: REGISTER_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: REGISTER_ERROR });
      });
  }
};

/** THE FUNCTION IS FOR LOGIN THE USER */
export let userLogin = (formData) => (dispatch) => {
dispatch({type:LOGIN_REQUEST})
axios.post(reqres,formData).then((res)=>{
  let token=res?.data.token;
dispatch({type:LOGIN_SUCCESS,payload:token})
  console.log(token)
}).catch((err)=>{
  console.log(err)
  dispatch({type:LOGIN_ERROR})
})

};

/** THE FUNCTION IS FOR LOGIN THE USER */
/**
 export let userLogin = (formData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .get(`${baseURL}/user`)
    .then((res) => {
      let users = res.data;
      let flag = false;
      users.map((ele) => {
        if (
          ele.email === formData?.email &&
          ele.password === formData?.password
        ) {
          flag = `"${ele.firstName}"`;
          localStorage.setItem("userId",ele.id)
          localStorage.setItem("name",ele.firstName)
          return;
        }
      });
      // console.log(flag);
      if (flag) {
        dispatch({ type: LOGIN_SUCCESS, payload: flag });
      } else {
        dispatch({ type: LOGIN_ERROR });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
*/
