import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProductCard({ product }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, margin: 2,textAlign:'center',height: '100%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: 'contain', padding: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
            <strong>Price:</strong> ${product.price}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" variant="contained" color="primary">
            Add to cart
          </Button>
          <Button
              size="small"
              variant="contained"
              color="primary"
              component={Link}
              to={`/single-product/${product.id}`} 
            >
              Learn more
          </Button>
                    
      </CardActions>
    </Card>
  );
}
