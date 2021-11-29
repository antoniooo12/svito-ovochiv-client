import React from 'react';
import cl from './ProductCard.module.scss';
import BtnProduct from "../UI/BtnProduct/BtnProduct";

const ProductCard = ({item}) => {
    return (
        <div className={cl.wrapper}>
            {/*<img src="images/products/Tomatos.jpg" alt=""/>*/}
            <div className={cl.description}>
                 <h5>{item.title}</h5>
            </div>

            <p>{item.minWeight}</p>

            <div className={cl.btn}>
                <BtnProduct price={item.price}
                            id={item.id}
                            title={item.title}
                            active={item.selected}
                />
            </div>
        </div>
    );
};

export default ProductCard;