import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '../Redux/Slices/AuthSlice.js'
import cartSliceReducer from '../Redux/Slices/CartSlice.js'
const store = configureStore({
    reducer : {
        auth: authSliceReducer,
        cart:cartSliceReducer
    },
    devTools:true
})

export default store;