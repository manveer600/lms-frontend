import './App.css'
import AboutUs from './Pages/AboutUs';

import HomePage from "./Pages/HomePage";
import NotFound from './Pages/NotFound';
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/SignUp';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      

    </>
  )
}

export default App
