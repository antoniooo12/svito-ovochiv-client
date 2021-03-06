const GET_PRODUCT = "GET_PRODUCT"
const GET_SECTION = "GET_SECTION"
const defaultState = {
    products: [],
    sections: [],
}

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, products: action.payload}
        case GET_SECTION:
            return {...state, sections: action.payload}
        default:
            return state
    }
}


export const setProducts = (products) => ({type: GET_PRODUCT, payload: products})
export const setSection = (sections) => ({type: GET_SECTION, payload: sections})