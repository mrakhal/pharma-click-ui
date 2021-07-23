import { GET_PRODUCT } from "../Helper"

const INITIAL_STATE = {
    product_list: []
}

export const productReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case GET_PRODUCT:
            // console.log("reducer", action.payload)
            return {...state, product_list: action.payload}
        default: 
            return state
    }
}