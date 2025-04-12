
import React, { useState} from 'react';

const ProductFilter = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from the products
  const categories = [...new Set(products.map(product => product.category))];

  // Handle change in filter
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    // If no category is selected, show all products
    if (category === '') {
      setFilteredProducts(products);
    } else {
      // Filter products by selected category
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
      console.log('Filtered Products:', filtered);  
    }
  };

  return (
    <div>
      <label htmlFor="categoryFilter">Filter by Category: </label>
      <select
        name="categoryFilter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">-- Select Category --</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;

