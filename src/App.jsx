import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='product' element={<ProductPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App