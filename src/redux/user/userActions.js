import { createAsyncThunk } from "@reduxjs/toolkit";
export const loginUser = createAsyncThunk('user/loginUser', async ({ username, password }) => {
    const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        return true;
    } else {
        return false;
    }
});

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
        throw new Error('You must log in to view content of this page!');
    }

    const response = await fetch('http://localhost:8080/users/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (response.ok) {
        const { data } = await response.json();
        return data.User;
    }

    else throw new Error('Unable to fetch user data');
});