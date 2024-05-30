import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';
import { Container } from '@mui/material';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(/api/products/${id});
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <Container>
      {product ? <ProductDetails product={product} /> : <p>Loading...</p>}
    </Container>
  );
};

export default SingleProductPage;