import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('http://localhost:8086/products', {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const { data } = await response.json();
        return data.Products;
    }

    else throw new Error('Could not get products!');
});

export const fetchOneProduct = createAsyncThunk('products/fetchOneProduct', async ({ id }) => {
    const response = await fetch(`http://localhost:8086/products/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        const { data } = await response.json();
        return data.Product;
    }

    else throw new Error('Could not get this product!');
});