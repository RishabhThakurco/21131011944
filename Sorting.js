import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

const Sorting = ({ onChange }) => {
  const [sorting, setSorting] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSorting(value);
    onChange({ sortBy: value });
  };

  return (
    <TextField
      name="sortBy"
      label="Sort By"
      value={sorting}
      onChange={handleChange}
      select
      fullWidth
      margin="normal"
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value="price">Price</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
      <MenuItem value="discount">Discount</MenuItem>
    </TextField>
  );
};

export default Sorting;