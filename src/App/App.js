import React from 'react';
import Header from "../components/header/Header";
import cl from './App.module.scss'
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

const App = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            {/*<HomePage/>*/}
            <ProductsPage/>
        </div>
    );
};

export default App;
