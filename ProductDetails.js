import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductDetails = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.imageUrl || 'https://via.placeholder.com/300'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: {product.price} USD
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Rating: {product.rating} Stars
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;