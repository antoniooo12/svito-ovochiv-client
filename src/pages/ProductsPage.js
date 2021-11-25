import React from 'react';
import ProductSelect from "../components/ProductsSelect/ProductSelect";
import ProductSection from "../components/ProductSection/ProductSection";

const ProductsPage = () => {
    return (
        <div>
            <ProductSelect/>
            <ProductSection/>
        </div>
    );
};

export default ProductsPage;