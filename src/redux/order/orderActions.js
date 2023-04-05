import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderList = createAsyncThunk('order/fetchOrderList', async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
        throw new Error('You must log in to view content of this page!');
    }

    const response = await fetch('http://localhost:8081/orders/order_list', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (response.ok) {
        const { data } = await response.json();
        return data.OrderList;
    } else {
        throw new Error('Unable to fetch order data');
    }
});

export const fetchOneOrder = createAsyncThunk('order/fetchOneOrder', async ({ id }) => {
    const response = await fetch(`http://localhost:8081/orders/order_details/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const { data } = await response.json();
        return data.Order;
    } else {
        throw new Error('Unable to fetch order data');
    }
});

export const createOrder = createAsyncThunk('order/createOrder', async ({ products_list, total }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('You must log in to view content of this page!');
    }

    const response = await fetch('http://localhost:8081/orders', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ products_list, total, token })
    });

    if (response.ok) {
        return true;
    } else {
        throw new Error('Unable to create order');
    }
});