import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <Typography variant="h2" align="center" sx={{ marginTop:'5rem'}}>
        Your cart is empty.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} sx={{ marginTop: '200px', marginBottom: '200px' }}>
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>Price: ${item.price}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                <Button color="error" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Checkout</Button>
      </Box>
    </Box>
    </Grid>
  );
};

export default CartPage;
