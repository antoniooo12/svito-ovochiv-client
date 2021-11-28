import React, {useEffect, useState} from 'react';
import cl from './BtnProduct.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {increaseProductInCart, reduceProductFromCart, setProductInCart} from "../../../reducer/cartReducer";

const BtnProduct = ({price, id, title}, ...props) => {
    const dispatch = useDispatch()
    const productInCart = useSelector(state => state.cart.itemsInCart.filter(p => p.id === id)[0])
    console.log(productInCart)

    const [isActive, setIsActive] = useState(false)
    const [weight, setWeight] = useState(productInCart && productInCart.weight)

    useEffect(() => {
        setWeight(productInCart && productInCart.weight)
    }, [productInCart])


    const onBtn = async (e) => {
        e.stopPropagation()
        dispatch(setProductInCart({price, id, title}))
        setWeight(productInCart && productInCart.weight)
        setIsActive(true)
    }

    const onPLus = async (e) => {
        e.stopPropagation()
        await dispatch(increaseProductInCart({id}))
        await setWeight(productInCart && productInCart.weight)
        console.log(weight)

    }
    const onMinus = async (e) => {
        e.stopPropagation()
        await dispatch(reduceProductFromCart({id}))
        await setWeight(productInCart && productInCart.weight)
        if (productInCart.weight - 0.1 < 0.1) {
            setIsActive(false)
        }
    }
    return (
        <button {...props} className={[cl.wrapper, isActive && cl.wrapperDisable].join(' ')}
                onClick={(e) => onBtn(e)}
        >
            <div onClick={(e) => onMinus(e)}
                 className={[cl.minus, !isActive && cl.minusHide].join(' ')}>
                <svg width="11" height="3" viewBox="0 0 11 3" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.93548 0.435486H1.06452C0.479032 0.435486 0 0.914518 0 1.5C0 2.08549 0.479032 2.56452 1.06452 2.56452H9.93548C10.521 2.56452 11 2.08549 11 1.5C11 0.914518 10.521 0.435486 9.93548 0.435486Z"
                        fill="#2C2C2C"/>
                </svg>
            </div>
            <div className={[cl.number, isActive && cl.numberHide].join(' ')}>{price} ₴</div>
            <div
                className={[cl.weight, !isActive && cl.weightHide].join(' ')}>{weight} кг
            </div>
            <div onClick={(e) => onPLus(e)}
                 className={[cl.plus, !isActive && cl.plusHide].join(' ')}>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.9286 7.37911H7.28571C7.16738 7.37911 7.07143 7.47505 7.07143 7.59339V11.2362C7.07143 11.8279 6.59169 12.3077 6 12.3077C5.40831 12.3077 4.92857 11.8279 4.92857 11.2362V7.59339C4.92857 7.47505 4.83262 7.37911 4.71429 7.37911H1.07143C0.479736 7.37911 0 6.89937 0 6.30768C0 5.71599 0.479736 5.23625 1.07143 5.23625H4.71429C4.83262 5.23625 4.92857 5.1403 4.92857 5.02196V1.37911C4.92857 0.787415 5.40831 0.307678 6 0.307678C6.59169 0.307678 7.07143 0.787415 7.07143 1.37911V5.02196C7.07143 5.1403 7.16738 5.23625 7.28571 5.23625H10.9286C11.5203 5.23625 12 5.71599 12 6.30768C12 6.89937 11.5203 7.37911 10.9286 7.37911Z"
                        fill="#2C2C2C"/>
                </svg>
            </div>
        </button>
    );
};

export default BtnProduct;