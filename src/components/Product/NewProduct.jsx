import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Grid
} from "@mui/material";
import "./NewProduct.css";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState({
    id: 1,
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest.",
    category: "",
    image:
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;

    // Handle nested rating
    if (name === "rate" || name === "count") {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [name]: value
        }
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value
      });
    }
  }

  console.log(newProduct);

  return (
    <Box className="page-center">
      <Paper elevation={12} className="paper">
        <Typography variant="h5" className="title">
          Create New Product
        </Typography>

        <Grid container spacing={2}>
          {/* Title */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="title"
              label="Title"
              value={newProduct.title}
              onChange={handleChange}
            />
          </Grid>

          {/* Category */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="category"
              label="Category"
              value={newProduct.category}
              onChange={handleChange}
            />
          </Grid>

          {/* Rate */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="rating.rate"
              label="Rate"
              type="number"
              value={newProduct.rating.rate}
              onChange={handleChange}
            />
          </Grid>

          {/* Count */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="rating.count"
              label="Count"
              type="number"
              value={newProduct.rating.count}
              onChange={handleChange}
            />
          </Grid>

          {/* Button */}
          <Grid item xs={12} className="btn-wrapper">
            <Button variant="contained" size="large">
              ADD
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
