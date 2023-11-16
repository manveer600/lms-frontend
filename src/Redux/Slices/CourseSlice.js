import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import {toast} from "react-hot-toast";

const initialState = {
    courseData :[]
}

export const getAllCourses = createAsyncThunk('/course/get' , async() => {
    try{
        const response = axiosInstance.get('/courses');
        toast.promise(response,{
            loading:"Loading courses....",
            success:()=>{"Courses loaded successfully",console.log("response is", response)},
            
            error:"Failed to get the courses",
        })
        return (await response).data.courses;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
})

const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(getAllCourses.fulfilled , /*reducer function*/ (state, action) => {
            if(action?.payload){
                console.log('action is', action);
                console.log(action.payload);
                state.courseData = [...action.payload];
            }
        })
    }
})


export default courseSlice.reducer;