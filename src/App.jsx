import { Routes, Route } from "react-router-dom";

import "./App.css";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login.jsx";
import CourseList from "./Pages/Course/CourseList.jsx";
import Contact from "./Pages/Contact.jsx";
import Denied from "./Pages/Denied.jsx";
import CourseDescription from "./Pages/Course/CourseDescription.jsx";
import RequireAuth from "./Components/Auth/RequireAuth.jsx";
import { CreateCourse } from "./Pages/Course/CreateCourse.jsx";
import { Profile } from "./Pages/User/Profile.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/course/description" element={<CourseDescription />} />
        <Route path="/courses" element={<CourseList />} />
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path="/user/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
