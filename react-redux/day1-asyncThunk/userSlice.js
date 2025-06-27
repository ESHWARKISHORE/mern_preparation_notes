import { createSlice } from '@reduxjs/toolkit'
import fetchUser from './userAPI' 

const initialState = {
    users:[],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addUser(fetchUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addUser(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = null;
            state.users = action.payload
        })
        .addUser(fetchUser.rejected, (state)=>{
            state.loading = false;
            state.error = 'Failed to fetch the data form API'
        })
    }
})

export default userSlice.reducer;

