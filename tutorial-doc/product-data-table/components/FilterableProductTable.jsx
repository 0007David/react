import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);
    return (
        <div>
            <h2>FilterableProductTable Component</h2>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}