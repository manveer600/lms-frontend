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
        const res = axiosInstance.post("user/register", data);
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

export const login = createAsyncThunk('/auth/login', async (data) => {
    try {
        const res = axiosInstance.post("user/login", data);
    
        toast.promise(res, {
          loading: "Wait! Authenticating.....",
          success: (data) => {
            return data?.data?.message;
          },
          error: "Failed to Login",
        });
        return (await res).data;
    }
    catch (error) {
        toast.error(error?.response?.data?.message);
        return;
    }
})

export const logout = createAsyncThunk('/auth/logout', async() => {
    try {
        const res = axiosInstance.get("user/logout");
    
        toast.promise(res, {
          loading: "Wait! Logging You out.....",
          success: (data) => {
            return data?.data?.message;
          },
          error: "Failed to logout",
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
        builder
        .addCase(login.fulfilled, (state,action) =>{
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.user?.role);
            localStorage.setItem('data', JSON.stringify(action?.payload?.user));

            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
        .addCase(logout.fulfilled, (state,action) => {
            localStorage.clear();
            state.data = {};
            state.isLoggedIn = false;
            state.role = "";
        })
    }
})


export const {} = authSlice.actions;
export default authSlice.reducer;