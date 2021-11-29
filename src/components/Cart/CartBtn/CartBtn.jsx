import React, {useEffect, useState} from 'react';
import cl from './CartBtn.module.scss'
import {Link, Route, useLocation,} from 'react-router-dom'
import CartPage from "../../../pages/CartPage";
import {Routes} from "react-router-dom";
import {useSelector} from "react-redux";


const CartBtn = () => {
    const sum = useSelector(state => state.cart.sum)
    let location = useLocation();
    const [cartBtnStatus, setCartBtnStatus] = useState()
    useEffect(() => {
        setCartBtnStatus(location.pathname)
    }, [location])
    return (
        <>
            <Link to="/cart">
                <div className={cl.wrapper}>


                    <p>Доставка після 13:00</p>
                    <div className={cl.cartBtn}>
                        {cartBtnStatus === '/cart'
                            ?
                            <p>Зробити замовлення</p>
                            :
                            <>
                                {sum > 0 ?
                                    <>
                                        <p>Замовити</p>
                                        <p>{sum} ₴</p>
                                    </>
                                    :
                                    <div>
                                        Покищо пусто
                                    </div>
                                }

                            </>
                        }


                    </div>
                </div>
            </Link>


        </>
    );
};

export default CartBtn;