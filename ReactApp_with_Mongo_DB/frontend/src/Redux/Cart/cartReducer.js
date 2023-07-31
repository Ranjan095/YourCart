/** @format */

import React from "react";
import { ADD_TO_CART, CART_QTY_MINUS, CART_QTY_PLUS, REMOVE_FROM_CART } from "./cartType";
let initialState = {
  cart: [],
};
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
        let flag=false;
        state.cart.map((pro)=>{
            if(pro._id==payload._id){
                pro.qty++;
                flag=true;
            }
        })
        if(!flag){
            return {...state,cart:[...state.cart,payload]}
        }
      
    }
    case CART_QTY_PLUS: {
    state.cart.map((ele) => {
        if (ele._id === payload) {
          ele.qty++
        //   console.log(state)
        } 
      });
      return {...state}
    }
    case CART_QTY_MINUS:{
        state.cart.map((ele)=>{
            if(ele._id===payload){
                ele.qty--
            }
        })
        return {...state}
    };
    case REMOVE_FROM_CART: {
      let newCart = state?.cart?.filter((ele) => ele._id != payload);
      return { ...state, cart: [...newCart] };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
