import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import {toast} from "react-hot-toast";
import axios from "axios";

const initialState = {
    courseData :[]
}

export const getAllCourses = createAsyncThunk('/course/get' , async() => {
    console.log('fetching courses');
    try{
        const response = axiosInstance.get('/courses');
        toast.promise(response,{
            loading:"Loading courses....",
            success:"Courses loaded successfully",
            error:"Failed to get the courses",
        })
        const res = await response;
        console.log(res);
        return (await response).data.courses;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
})


export const deleteCourse = createAsyncThunk('/course/delete' , async(id) => {
    try{
        const response = axiosInstance.delete(`/courses/${id}`);
        toast.promise(response,{
            loading:"Deleting ....",
            success:"Course deleted successfully",
            error:"Failed to delete the course",
        })
        const res = await response;
        return (await response).data;
    }catch(err){
        console.log(err);
        return toast.error(err?.response?.data?.message);
    }
})

export const createNewCourse = createAsyncThunk('/course/create', async(data)=>{
    try{
        const formData = new FormData();
        formData.append('title', data?.title);
        formData.append('description', data?.description);
        formData.append('category', data?.category);
        formData.append('createdBy', data?.createdBy);
        formData.append('thumbnail', data?.thumbnail);

        const response = axiosInstance.post('/courses', formData);
        toast.promise
        (
            response,
            {
                loading:"Creating new course",
                success:"Course Created Successfully",
                error:'Error in creating a course'
            }
        )

        return (await response).data
    }catch(e){
        return toast.error(e.response.data.message);
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