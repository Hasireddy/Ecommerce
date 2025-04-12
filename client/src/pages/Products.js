import React, { useEffect, useState } from 'react';
import {Grid} from '@mui/material';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilterCategory.js';
import  ProductSorting from '../components/ProductSorting.js';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const allProducts = response.data;
        setProducts(allProducts); // Save all products to state
        setFilteredProducts(allProducts); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return ( 
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'}  marginTop={'50px'} marginBottom={'50px'}>
        <Grid size={12}>
            <ProductFilter products={products} setFilteredProducts={setFilteredProducts}/>
            <h2>Products</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </ul>
          </Grid>
          <Grid size={6}>
            <ProductSorting products={products}/>
          </Grid>
      </Grid>
  </div>
);
}