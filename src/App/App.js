import React from 'react';
import Header from "../components/header/Header";
import cl from './App.module.scss'
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartBtn from "../components/Cart/CartBtn/CartBtn";
import {Route, Routes} from "react-router-dom";
import CartPage from "../pages/CartPage";

const App = () => {
    return (
        <div className={cl.wrapper}>
                <Header/>
                <CartBtn/>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={<ProductsPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
