import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Sorting from '../components/Sorting';
import CustomPagination from '../components/CustomPagination';
import { Container, Grid } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState({});
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', { params: { ...filters, ...sorting, ...pagination } });
        setProducts(response.data.products);
        setPagination((prev) => ({ ...prev, total: response.data.total }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [filters, sorting, pagination.page]);

  return (
    <Container>
             <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Filters onChange={setFilters} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Sorting onChange={setSorting} />
          <ProductList products={products} />
          <CustomPagination
            pagination={pagination}
            onChange={(newPage) => setPagination((prev) => ({ ...prev, page: newPage }))}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllProductsPage;
