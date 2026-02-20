import React from "react";

export default function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show product in stock
            </label>
        </form>
    );
}