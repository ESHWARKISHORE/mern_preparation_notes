import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users:[]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        deleteUser(state, action){
            state.users = state.users.filter((user)=> user.id !== action.payload)
        }
    }
})

const { deleteUser } = userSlice.actions;
export default userSlice.reducers;