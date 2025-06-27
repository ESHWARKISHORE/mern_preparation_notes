import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const GETAPI = 'https://jsonplaceholder.typicode.com/users'

export const fetchUser = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get(GETAPI);
    const filtered = response.data.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website
    }));

    return filtered;
})