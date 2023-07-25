/** @format */

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import shoesReducer from "./Shoes/shoesReducer";
import authReducer from "./Authantication/authReducer";
import cartReducer from "./Cart/cartReducer";
let rootReducer = combineReducers({
  shoesReducer,
  authReducer,
  cartReducer,
});
export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));
