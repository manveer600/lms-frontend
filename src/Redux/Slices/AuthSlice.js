import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance.js"
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || {}
};
export const createAccount = createAsyncThunk('/auth/signup', async (data) => {
    try {
        console.log("before axiosInstance");
        console.log(data);
        const res = axiosInstance.post("user/register", data);
        console.log("result is:", res);
        console.log('result data is', res.data);
        console.log("after axiosInstance");
        toast.promise(res, {
          loading: "Wait! Creating your account",
          success: (data) => {
            console.log("hurrayyyyyyyy!!!!!!!!!!!!!!!!!!!",data);
            return data?.data?.message;
          },
          error: "Failed to create account",
        });
        console.log("data is:", data);
        return (await res).data;
    }
    catch (error) {
        toast.error(error?.response?.data?.message);
        // return;
    }
})

export const login = createAsyncThunk('/auth/signup', async (data) => {
    try {
        const res = axiosInstance.post("user/login", data);
    
        toast.promise(res, {
          loading: "Wait! Authenticating.....",
          success: (data) => {
            return data?.data?.message;
          },
          error: "Failed to Login",
        });
        console.log("data is:", data);
        return (await res).data;
    }
    catch (error) {
        toast.error(error?.response?.data?.message);
        return;
    }
})


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled, (state,action) =>{
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.user?.role);
            localStorage.setItem('data', JSON.stringify(action?.payload?.user));
            
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
    }
})


export const {} = authSlice.actions;
export default authSlice.reducer;