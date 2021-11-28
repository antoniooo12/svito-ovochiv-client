const SET_ITEM_IN_CART = "SET_ITEM_IN_CART"
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART"
const INCREASE_SELECTED_ITEM = "INCREASE_SELECTED_ITEM"
const REDUCE_SELECTED_ITEM = "REDUCE_SELECTED_ITEM"


const defaultState = {
    sum: 0,
    itemsInCart: [],
}

export default function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ITEM_IN_CART:
            let item = action.payload
            item.weight = 0.2
            return {...state, itemsInCart: [...state.itemsInCart, item]}
        case DELETE_ITEM_FROM_CART:
            return {...state, itemsInCart: [...state.itemsInCart, action.payload]}
        case INCREASE_SELECTED_ITEM:
            return {
                ...state, itemsInCart: state.itemsInCart.map(
                    item => {
                        if (item.id === action.payload.id) {
                            item.weight = Math.round(((item.weight + 0.1) + Number.EPSILON) * 100) / 100
                        }
                        return item
                    }
                )
            }
        case REDUCE_SELECTED_ITEM:
            const productIndex = state.itemsInCart.findIndex(p => p.id === action.payload.id)
            const product = state.itemsInCart[productIndex]
            let changedProduct
            if (product) {
                changedProduct = {
                    ...product,
                    weight: Math.round(((product.weight - 0.1) + Number.EPSILON) * 100) / 100
                }
            }
            if (changedProduct.weight < 0.1) {
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart.slice(0, productIndex), ...state.itemsInCart.slice(productIndex + 1)]
                }
            } else {
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart.slice(0, productIndex), changedProduct, ...state.itemsInCart.slice(productIndex + 1)]
                }
            }
        default:
            return state
    }
}

export const setProductInCart = (product) => ({type: SET_ITEM_IN_CART, payload: product})
export const deleteProductFromCart = (product) => ({type: DELETE_ITEM_FROM_CART, payload: product})
export const increaseProductInCart = (product) => ({type: INCREASE_SELECTED_ITEM, payload: product})
export const reduceProductFromCart = (product) => ({type: REDUCE_SELECTED_ITEM, payload: product})

// import {createSlice} from "@reduxjs/toolkit";
//
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         itemsInCart: []
//     },
//     reducers: {
//         setItemInCart: (state, action) => {
//             state.itemsInCart.push(action.payload)
//         },
//         deleteItemFromCart: (state, action) => {
//             state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload.id)
//         }
//     }
// })
//
//
// export const {setItemInCart, deleteItemFromCart, } = cartSlice.actions
// export default cartSlice.reducer