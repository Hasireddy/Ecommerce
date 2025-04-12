import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log("re-render")
        setProducts(response.data); // Save products to state
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return ( 
    <div>
    <h2>Products</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {products.map(product => (
        <ProductCard product={product}/>
      ))}
    </ul>
  </div>
);
}