import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const Filters = ({ onChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    availability: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {
    onChange(filters);
  };

  return (
    <div>
      <TextField
        name="category"
        label="Category"
        value={filters.category}
        onChange={handleChange}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="fashion">Fashion</MenuItem>
        <MenuItem value="home">Home</MenuItem>
      </TextField>

      <TextField
        name="company"
        label="Company"
        value={filters.company}
        onChange={handleChange}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="company1">Company 1</MenuItem>
        <MenuItem value="company2">Company 2</MenuItem>
        <MenuItem value="company3">Company 3</MenuItem>
      </TextField>

      <TextField
        name="rating"
        label="Rating"
        value={filters.rating}
        onChange={handleChange}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="1">1 Star</MenuItem>
        <MenuItem value="2">2 Stars</MenuItem>
        <MenuItem value="3">3 Stars</MenuItem>
        <MenuItem value="4">4 Stars</MenuItem>
        <MenuItem value="5">5 Stars</MenuItem>
      </TextField>

      <TextField
        name="availability"
        label="Availability"
        value={filters.availability}
        onChange={handleChange}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="in_stock">In Stock</MenuItem>
        <MenuItem value="out_of_stock">Out of Stock</MenuItem>
      </TextField>

      <Button variant="contained" color="primary" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Filters;