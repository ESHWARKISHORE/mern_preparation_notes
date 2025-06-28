import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[]
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers:{
        addUser(state, action){
            state.users.push(action.payload)
        },
        clearUser(state){
            state.users = []
        },
        deleteUser(state, action){
            state.users = state.users.filter((user)=> user.email !== action.payload)
        }
    }
})

export const { addUser, clearUser, deleteUser } = userSlice.actions
export default userSlice.reducer;