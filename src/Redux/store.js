import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import shoesReducer from "./Shoes/shoesReducer";
import thunk from "redux-thunk";
import authReducer from "./Authantication/authReducer";
let rootReducer=combineReducers({
    shoesReducer,
    authReducer

})
export let store=legacy_createStore(rootReducer,applyMiddleware(thunk))