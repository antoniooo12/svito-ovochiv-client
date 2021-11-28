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

        case SET_ITEM_IN_CART: {
            let item = action.payload
            item.weight = 0.2
            let updatedSum = Math.round(((item.price * item.weight) + Number.EPSILON) * 100) / 100
            item.sum = updatedSum

            return {
                ...state,
                itemsInCart: [...state.itemsInCart, item],
                sum: Math.round(((state.sum + updatedSum) + Number.EPSILON) * 100) / 100
            }
        }
        case DELETE_ITEM_FROM_CART: {
            return {...state, itemsInCart: [...state.itemsInCart, action.payload]}
        }
        case INCREASE_SELECTED_ITEM: {
            let updatedWeight = 0;
            let updatedSum = 0;
            let oldSum;
            return {
                ...state, itemsInCart: state.itemsInCart.map(
                    item => {
                        if (item.id === action.payload.id) {
                            updatedWeight = Math.round(((item.weight + 0.1) + Number.EPSILON) * 100) / 100
                            updatedSum = Math.round(((item.price * updatedWeight) + Number.EPSILON) * 100) / 100
                            oldSum = item.sum;
                            item.weight = updatedWeight
                            item.sum = updatedSum
                        }
                        return item
                    }
                ), sum: Math.round(((state.sum + updatedSum - oldSum) + Number.EPSILON) * 100) / 100
            }
        }
        case REDUCE_SELECTED_ITEM: {
            const productIndex = state.itemsInCart.findIndex(p => p.id === action.payload.id)
            let item = state.itemsInCart[productIndex]
            let changedItem
            let updatedWeight = 0
            let updatedSum = 0
            if (item) {
                updatedWeight = Math.round(((item.weight - 0.1) + Number.EPSILON) * 100) / 100
                updatedSum = Math.round(((item.price * updatedWeight) + Number.EPSILON) * 100) / 100
                changedItem = {
                    ...item,
                    weight: updatedWeight,
                    sum: updatedSum,
                }
            }
            if (changedItem.weight < 0.1) {
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart.slice(0, productIndex), ...state.itemsInCart.slice(productIndex + 1),

                    ], sum: Math.round(((state.sum - item.sum) + Number.EPSILON) * 100) / 100
                    ///todo
                }
            } else {
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart.slice(0, productIndex), changedItem, ...state.itemsInCart.slice(productIndex + 1)],
                    sum: Math.round(((state.sum - item.sum + updatedSum) + Number.EPSILON) * 100) / 100
                }
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
