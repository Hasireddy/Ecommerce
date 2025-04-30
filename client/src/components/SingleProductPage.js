import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import {useCart} from '../context/CartContext';
 
const SingleProduct = () => {
    const { id } = useParams();  // Extract product ID from the URL
    const [product, setProduct] = useState(null);
    const {addToCart} = useCart()
  
    useEffect(() => {
      // Fetch the product details from the API using the ID
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }, [id]); // Fetch the product when the ID changes
  
    // Display loading state if product data is still being fetched
    if (!product) return <Typography variant="h5" align="center">Loading...</Typography>;
  
    return (
      <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 800, width: '100%',textAlign:'center'}}>
          {/* Product Image */}
          <CardMedia
            component="img"
            height="400"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: 'contain' }}
          />
          
          {/* Product Details */}
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              ${product.price}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              {product.description}
            </Typography>
  
            {/* Product Rating */}
            <Typography variant="subtitle1">
              <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
            </Typography>
          </CardContent>
  
          {/* Add to Cart Button */}
          <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
            
            <Button size="large" variant="contained" color="primary" onClick={()=>addToCart(product)}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  };
  
  export default SingleProduct;