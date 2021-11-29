import React from 'react';
import BtnProduct from "../../UI/BtnProduct/BtnProduct";
import cl from './CartListElement.module.scss'

const CartListElement = ({product}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.leftBlock}>
                <div className={cl.title}>{product.title}</div>
                <div className={cl.unit}>{product.price} ₴ <span>{product.unit || 'кг'}</span></div>
            </div>
            <BtnProduct
                active={true}
                price={product.price}
                id={product.id}
                title={product.title}
            />
        </div>
    );
};

export default CartListElement;