import React from 'react';
import cl from './ProductSection.module.scss';
import BtnProduct from "../UI/BtnProduct/BtnProduct";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = () => {
    const items = [
            {
                section: "Помидор",
                items: [
                    {id: 0, description: "Помідорки коктельні Аравія", img: "images/products/Tomatos.jpg", price: 58, minWeight: 250},
                    {id: 0, description: "помидор араваив", img: "images/products/Tomatos.jpg", price: 58, minWeight: 250},
                    {id: 0, description: "помидор араваив", img: "images/products/Tomatos.jpg", price: 58, minWeight: 250},
                    {id: 0, description: "помидор араваив", img: "images/products/Tomatos.jpg", price: 58, minWeight: 250}

                ]
            },
            {
                section: "огірки",
                items: [
                    {id: 0, description: "Огірок араваив", img: "images/products/Tomatos.jpg", price: 58,minWeight: 250},
                    {id: 0, description: "Огірок араваив", img: "images/products/Tomatos.jpg", price: 58,minWeight: 250},
                    {id: 0, description: "Огірок араваив", img: "images/products/Tomatos.jpg", price: 58,minWeight: 250},
                    {id: 0, description: "Огірок араваив", img: "images/products/Tomatos.jpg", price: 58,minWeight: 250},
                    {id: 0, description: "Огірок араваив", img: "images/products/Tomatos.jpg", price: 58,minWeight: 250},
                    {id: 0, description: "Огірок араваив", img: "images/products/Tomatos.jpg", price: 58,minWeight: 250}
                ]
            }

        ]

    return (
        <div className={cl.wrapper}>
            {items.map((section, index) => {
                return (
                    <>
                        <h4> {section.section}</h4>
                        <div className={cl.itemsSection}>{section.items.map(item =>
                            <div>
                                <ProductCard
                                    item={item}
                                />
                            </div>

                        )}</div>
                    </>

                )
            })}
                </div>
                );
                };

                export default ProductSection;