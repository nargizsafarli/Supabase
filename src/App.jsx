import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PetData from './Pages/PetData'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='data' element={<PetData/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App