import { createSlice } from "@reduxjs/toolkit"
import { fetchUser } from "./userFromAPI"

const initialState = {
    usersFromAPI: [],
    loading: false,
    error: null
}

const userFromAPISlice = createSlice({
    name: 'usersFromApi',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = null;
            state.usersFromAPI = action.payload;
        })
        .addCase(fetchUser.rejected, (state)=>{
            state.loading = false;
            state.error = 'The Data s not been fetched'
        })
    }
})

export default userFromAPISlice.reducer;