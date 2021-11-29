import React, {useEffect, useState} from 'react';
import cl from './CartList.module.scss'
import {useSelector} from "react-redux";
import CartListElement from "../CartListElement/CartListElement";

const CartList = () => {
    const cartItems = useSelector(state => state.cart.itemsInCart)
    const [items, setItems] = useState([])
    useEffect(()=>{
        setItems(cartItems)
    },[cartItems])
        console.log(items)
    return (
        <div className={cl.wrapper}>
            {cartItems.map(product =>
                <CartListElement
                key={product.id}
                product={product}

                />
            )}
        </div>
    );
}
;

export default CartList;