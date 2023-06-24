

import React from 'react'
import { ADD_TO_CART } from './cartType'
let initialState={
cart:[]
}
const cartReducer = (state=initialState,{type,payload}) => {

    switch (type){
        case ADD_TO_CART:{
            return {...state,cart:[...state.cart,payload]}
        }
        default :{
            return state
        }
    }

}

export default cartReducer