import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PetData from './Pages/PetData'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Dasboard from './Components/Dashboard/Dasboard'
import FormPage from './Pages/FormPage'
import PrivateRoute from './Components/Private/PrivateRoute'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='data' element={<PetData/>}/>
      <Route path='register' element={<FormPage/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='dashboard' element={
        <PrivateRoute>
          <Dasboard/>
        </PrivateRoute>
      }/>
    </Routes>
   </BrowserRouter>
  )
}

export default App