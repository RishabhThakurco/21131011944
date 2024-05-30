import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl || 'https://via.placeholder.com/150'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price} USD
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.rating} Stars
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.discount}% Off
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Button component={Link} to={/product/${product.id}} variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;