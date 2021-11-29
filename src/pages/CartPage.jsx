import React from 'react';
import CartFrom from "../components/Cart/CartForm/CartFrom";
import {useSelector} from "react-redux";
import CartList from "../components/Cart/CartList/CartList";

const CartPage = () => {
    let products = useSelector(state => state.cart.itemsInCart)
    return (
        <div>
            <CartList/>
        </div>
    );
};

export default CartPage;