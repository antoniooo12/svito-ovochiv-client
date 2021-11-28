import React, {useState} from 'react';
import cl from './CartForm.module.scss'
import {createOrder} from "../../actions/product";
import {useDispatch, useSelector} from "react-redux";

const CartFrom = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [address, setAddress] = useState()
    const cart = useSelector(state => state.cart.itemsInCart)
    const onBtn = (e) => {
        e.preventDefault()
        dispatch(createOrder({name, number, address}, cart))
    }

    return (
        <div action="" className={cl.wrapper}>
            <div>Ім'я</div>
            <input id="form-name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <div>Адрес</div>
            <input id="form-name" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <div>Номер</div>
            <input id="form-name" type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <div>Побажання</div>
            <textarea rows="10" cols="45"></textarea>
            <button onClick={(e) => onBtn(e)}>Відпраивити</button>
        </div>
    );
};

export default CartFrom;