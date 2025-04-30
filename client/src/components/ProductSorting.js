import React from 'react';

const ProductSorting = ({products,setFilteredProducts}) => {
 const handleSortChange = (e) =>{
  const value = e.target.value;
  let sorted = [...products];

  if (value === 'price-asc') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (value === 'price-desc') {
    sorted.sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(sorted);
 }
  
  
  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSortChange} defaultValue="">
        <option value="">-- Select Sort Option --</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductSorting;
