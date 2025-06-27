import { configureStore } from "@reduxjs/toolkit";
import userReducer from './feature/user/userSlice'
import userReducerFromAPI from './feature/userFromAPI/userFromAPISlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        userFromAPI: userReducerFromAPI
    }
})

export default store;

