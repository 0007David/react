import React from "react";
import FilterableProductTable from "./components/FilterableProductTable";

import Products from './data/product.json'

export default function App() {
    const PRODUCTS = Products;

    return (
        <>
            <h1>App Component</h1>
            <FilterableProductTable products={PRODUCTS} />
        </>

    );
}