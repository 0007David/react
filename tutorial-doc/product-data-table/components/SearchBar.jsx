import React from "react";

export default function SearchBar({ filterText,
    inStockOnly, onFilterTextChange, onInStockOnlyChange }) {

    return (
        <form>
            <input
                style={{ display: 'block' }}
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(evt) => onFilterTextChange(evt.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    value={inStockOnly}
                    onChange={(evt) => onInStockOnlyChange(evt.target.checked)}
                />
                {' '}
                Only show product in stock
            </label>
        </form>
    );
}