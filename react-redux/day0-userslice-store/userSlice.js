import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:"",
    email:""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action){
            state.name = action.payload.name;
            state.email = action.payload.email
        },
        deleteUser(state){
            state.name = "";
            state.email = "";
        }
    }
})

export const { addUser, deleteUser} = userSlice.actions
export default userSlice.reducer;