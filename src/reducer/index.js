import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from "redux-thunk";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware((thunk))))