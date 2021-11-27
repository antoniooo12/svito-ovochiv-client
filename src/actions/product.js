import axios from "axios";
import {setProducts, setSection} from "../reducer/productReducer";

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