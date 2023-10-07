import './App.css'
import AboutUs from './Pages/AboutUs';

import HomePage from "./Pages/HomePage";
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </>
  )
}

export default App
