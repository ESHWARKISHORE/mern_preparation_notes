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
        }
    }
})

export const {addUser, clearUser} = userSlice.actions
export default userSlice.reducer;