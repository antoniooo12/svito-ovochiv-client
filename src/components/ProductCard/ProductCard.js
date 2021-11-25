import React from 'react';
import cl from './ProductCard.module.scss';
import BtnProduct from "../UI/BtnProduct/BtnProduct";

const ProductCard = ({item}) => {
    return (
        <div className={cl.wrapper}>
            <img src="images/products/Tomatos.jpg" alt=""/>
            {/*<div className={cl.text}>*/}
            <div className={cl.description}>
                 <h5>{item.description}</h5>
            </div>

            <p>{item.minWeight}</p>
            {/*</div>*/}

            <div className={cl.btn}>
                <BtnProduct price={item.price}/>
            </div>
        </div>
    );
};

export default ProductCard;