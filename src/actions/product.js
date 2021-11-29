import axios from "axios";
import {setProducts, setSection} from "../reducer/productReducer";
import {useSelector} from "react-redux";
import {setCartStatus} from "../reducer/cartReducer";
import {URL} from '../API'
export function loadFiles() {
    try {

    } catch (e) {
    }
}

export function getProduct() {
    return async dispatch => {
        try {
            const res = await axios.get(URL+`/api/user/product`)
            dispatch(setProducts(res.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getSection() {
    return async dispatch => {
        try {
            const res = await axios.get(URL+`/api/user/getSection`)
            dispatch(setSection(res.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function createOrder(client, cart) {
    return async dispatch => {
        console.log(URL)
        try {
            // const cart = useSelector(state => state.cart.itemsInCart)
            const res = await axios.post( URL+`/api/user/createOrder`,
                {client ,cart}
            )
            console.log(res)

        } catch (e) {

        }
    }
}