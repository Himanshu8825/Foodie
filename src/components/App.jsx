import React from 'react'
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
