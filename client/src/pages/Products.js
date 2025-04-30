import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box ,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilterCategory';
import ProductSorting from '../components/ProductSorting';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 ,display:'flex',flexDirection:'column',marginBottom:'2rem'}, width: '100%' }}>
      <Grid container spacing={5}>
        {/* Left Sidebar: Filter and Sorting (Side by Side) */}
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <Grid container spacing={3} direction="column">
              {/* Product Filter */}
              <Grid item>
                <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />
              </Grid>

              {/* Product Sorting */}
              <Grid item>
                <ProductSorting products={products} setFilteredProducts={setFilteredProducts}/>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Column: Title + Product Cards */}
        <Grid item xs={12} md={9}>
          <Typography variant="h2" align="center" gutterBottom>
            Products
          </Typography>
          <Box sx={{ padding: 2 }}>
            <Grid container spacing={3}>
              {filteredProducts.map(product => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
