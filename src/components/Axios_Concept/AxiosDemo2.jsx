import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AxiosDemo2.css';
import useFetch from '../CustomHook/useFetch';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AxiosDemo2() {

    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(true); // 🔥 loading state

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("API response error");
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setProducts(data);
    //             setLoading(false); // ✅ data loaded
    //         })
    //         .catch((err) => {
    //             console.error("Fetch Error:", err);
    //             setError("Failed to load products. Please try again later.");
    //             setLoading(false); // ✅ stop loading on error
    //         });
    // }, []);
   let navigate=useNavigate()
    let {products,error,isLoading}=useFetch("https://fakestoreapi.com/products")

    return (
        <>
            {/* 🟡 Loading Message */}
            {isLoading && (
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                    Loading products...
                </p>
            )}

            {/* 🔴 Error Message */}
            {!isLoading && error && (
                <p style={{ color: "red", textAlign: "center" }}>
                    {error}
                </p>
            )}

            {/* 🟢 Products */}
            {!isLoading && products.length !== 0 && (
                <section className="product-section">
                    {products.map((product) => (
                        <Card key={product.id} className="product-card">

                            <Card.Img
                                variant="top"
                                src={product.image}
                                className="product-img"
                            />

                            <Card.Body>
                                <Card.Title className="title">
                                    {product.title}
                                </Card.Title>

                                <Card.Text className="textsize">
                                    {product.description}
                                </Card.Text>

                                <Button variant="primary">
                                    ADD
                                </Button>
                                <Button variant="primary" color='secondary' onClick={()=>{
                                   navigate(`/update/${product.id}`)
                                }}>
                                    Update
                                </Button>
                                <Button variant="primary" color='danger'>
                                    Delete
                                </Button>
                            </Card.Body>

                            <Card.Footer>
                                <Button variant="success">
                                    ₹ {product.price}
                                </Button>
                            </Card.Footer>

                        </Card>
                    ))}
                </section>
            )}
        </>
    );
}
