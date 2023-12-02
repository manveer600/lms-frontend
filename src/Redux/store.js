import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice.js'
import courseSliceReducer from './Slices/CourseSlice.js'
import razorpaySliceReducer from './Slices/Razorpay.js'
import LectureSlice from "./Slices/LectureSlice.js";

const store = configureStore({
    reducer : {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:LectureSlice
    },
    devTools:true
})

export default store;