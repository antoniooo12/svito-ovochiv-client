import React from 'react';
import cl from './CartBtn.module.scss'
import {Link, Route,} from 'react-router-dom'
import CartPage from "../../pages/CartPage";
import {Routes} from "react-router-dom";


const CartBtn = () => {
    return (
        <>
            <Link to="/cart">
                <div className={cl.wrapper}>
                    <p>Доставка після 13:00</p>
                    <div className={cl.cartBtn}>
                        <p>Замовити</p>
                        <p>685 ₴</p>
                    </div>
                </div>
            </Link>


        </>
    );
};

export default CartBtn;