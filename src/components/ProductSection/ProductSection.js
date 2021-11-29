import React, {useEffect, useState} from 'react';
import cl from './ProductSection.module.scss';
import BtnProduct from "../UI/BtnProduct/BtnProduct";
import ProductCard from "../ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getProduct, getSection} from "../../actions/product";

const ProductSection = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products) || []
    const sections = useSelector(state => state.products.sections) || []
    const itemsInCart = useSelector(state => state.products.itemsInCart) || []
    const sumInCart = useSelector(state => state.products.sum) || 0
    const productsWithoutSection = products.filter(el => el.typeId === null)

    const [productView, setProductView] = useState([])




    useEffect(() => {
        dispatch(getSection())
        dispatch(getProduct())
        setProductView()
    }, [])



    return (
        <div className={cl.wrapper}>
            {sections.map(section => {
                return (
                    <>
                        <h4  key={'t' + section.id}> {section.title}</h4>
                        <div key={'b' + section.id} className={cl.itemsSection}>
                            {products.filter(el => el.typeId === section.id).map(item =>
                                <div key={item.id}>
                                    <ProductCard
                                        item={item}
                                    />
                                </div>)


                            }
                        </div>

                    </>

                )
            })}


            {productsWithoutSection >0 &&
            <>
                <h4>не визначена секція</h4>
                <div className={cl.itemsSection}>
                    {productsWithoutSection.map(item =>
                        <div>
                            <ProductCard
                                item={item}
                            />
                        </div>)

                    }
                </div>
            </>
            }
                </div>
                );
            };

                export default ProductSection;