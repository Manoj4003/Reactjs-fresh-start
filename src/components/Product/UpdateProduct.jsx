import React, { useEffect, useState } from "react";
import {
    Box,
    Paper,
    TextField,
    Typography,
    Button,
    Grid
} from "@mui/material";
import "./NewProduct.css";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {

    const [UpdateProduct, setUpdateproduct] = useState(null)

    let newObject=useParams()
  
    useEffect(()=>{

    },[])
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Nested object (rating) handle
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
            // Normal fields
            setNewProduct((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {

    };
if(UpdateProduct!==null)
{
    return (
        <Box className="page-center">
            <Paper elevation={12} className="paper">
                <Typography variant="h5" className="title" gutterBottom>
                    Udate New Product
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

                    {/* Button */}
                    <Grid item xs={12} className="btn-wrapper">
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            SAVE
                        </Button>

                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
else{
    <div>
        Loading....
    </div>
}
    
}
