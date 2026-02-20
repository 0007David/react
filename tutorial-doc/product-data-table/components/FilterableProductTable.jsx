import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {

    return (
        <div>
            <h2>FilterableProductTable Component</h2>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}