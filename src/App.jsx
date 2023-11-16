import './App.css'
import AboutUs from './Pages/AboutUs';

import HomePage from "./Pages/HomePage";
import NotFound from './Pages/NotFound';
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/SignUp';
import Login from './Pages/Login.jsx'
import CourseList from './Pages/Course/CourseList.jsx';
import Contact from './Pages/Contact.jsx';
import Denied from './Pages/Denied.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/denied' element={<Denied/>}/> 

        <Route path='/courses' element={<CourseList/>}/>
      </Routes>
      

    </>
  )
}

export default App
