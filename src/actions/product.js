import axios from "axios";
import {setProducts, setSection} from "../reducer/productReducer";
import {useSelector} from "react-redux";
import {setCartStatus} from "../reducer/cartReducer";
export function loadFiles() {
    try {

    } catch (e) {
    }
}

export function getProduct() {
    return async dispatch => {
        try {
            const res = await axios.get(`http://localhost:4800/api/user/product`)
            console.log(res.data)
            dispatch(setProducts(res.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getSection() {
    return async dispatch => {
        try {
            const res = await axios.get(`http://localhost:4800/api/user/getSection`)
            console.log(res.data)
            dispatch(setSection(res.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function createOrder(client, cart) {
    return async dispatch => {
        try {
            // const cart = useSelector(state => state.cart.itemsInCart)
            const res = await axios.post(`http://localhost:4800/api/user/createOrder`,
                {client ,cart}
            )
            console.log(res)

        } catch (e) {

        }
    }
}