import { createSlice } from '@reduxjs/toolkit'
import fetchUser from './userAPI' 

const initialState = {
    users:[],                //data will be received here 
    loading: false,          //provide us the loading state that we can use in the UI
    error: null              // provide error if some issue happen if we call an API
}

const userSlice = createSlice({
    name:'user',               //name of the slice
    initialState,              //Giving the state to the slice
    reducers:{},               // In the normal slice we will provide the reducer over here
    extraReducers: (builder) => {         //Here we are providing here because the reducer and all is already handled in the fetchUser file
        builder                           //Normally all the case will be like object to handle that we are using builder here    
        .addCase(fetchUser.pending, (state)=>{   //addCase is the default we have to use in this builder and asyncThunk 
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = null;
            state.users = action.payload
        })
        .addCase(fetchUser.rejected, (state)=>{
            state.loading = false;
            state.error = 'Failed to fetch the data form API'
        })
    }
})
//In normal slice we use to give the destructure the actions and give but here that will be handled by the thunk
export default userSlice.reducer;  //exporting the reducer to user in the store.

