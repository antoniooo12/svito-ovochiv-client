import productReducer from "./productReducer";

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"

const defaultState = {
    products: [],
}


export default function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {...state, products: [...state.products, action.payload]}
        default:
            return state
    }
}


export const setProduct = (product) =>({type: ADD_PRODUCT_TO_CART, payload: product})