import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const GETAPI = 'https://jsonplaceholder.typicode.com/users'

export const fetchUser = createAsyncThunk('user/fetchUser', async ()=>{
    const response = await axios.get(GETAPI);
    return response.data;
})