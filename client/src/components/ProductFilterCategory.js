import React, { useState } from 'react';

const ProductFilter = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(products.map(product => product.category))];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === '') {
      setFilteredProducts(products); // show all products
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <label htmlFor="categoryFilter">Filter by Category: </label>
      <select
        id="categoryFilter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">-- Select Category --</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
