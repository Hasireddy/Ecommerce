import React, { useState} from 'react';

const ProductSorting =({products,setSortedProducts})=>{
    const handleSortChange = (event)=>{
        const selectedOption = event.target.value;
        let sortedProducts;

    }
    return(
        <div>
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" onChange={handleSortChange}>
                <option value="">-- Select Sort Option --</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
            </select>
        </div>
    )
}

export default ProductSorting;