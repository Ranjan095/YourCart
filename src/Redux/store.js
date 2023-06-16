import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import shoesReducer from "./Shoes/shoesReducer";
import thunk from "redux-thunk";
let rootReducer=combineReducers({
    shoesReducer

})
export let store=legacy_createStore(rootReducer,applyMiddleware(thunk))