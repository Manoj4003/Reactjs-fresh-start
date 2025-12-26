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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("rating.")) {
      const fieldName = name.split("rating.")[1];

      setNewProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [fieldName]: Number(value)
        }
      }));
    } else {
      setNewProduct((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Product 👉", newProduct);
    alert("Product Added! Check console 🚀");
  };

  return (
    <Box className="page-center">
      <Paper elevation={12} className="paper">
        <Typography variant="h5" className="title" gutterBottom>
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

          {/* Price */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={newProduct.price}
              onChange={handleChange}
            />
          </Grid>

          {/* Rating Rate */}
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

          {/* Rating Count */}
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

          {/* Buttons */}
          <Grid item xs={12} className="btn-wrapper">
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleSubmit}
            >
              ADD PRIMARY
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
              
            >
              ADD SECONDARY
            </Button>

            <Button
              variant="contained"
              color="error"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
             
            >
              ADD DANGER
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
