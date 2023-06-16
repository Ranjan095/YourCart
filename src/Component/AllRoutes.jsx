import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Shoes from '../Pages/Shoes'
import Watch from '../Pages/Watch'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shoes' element={<Shoes/>}/>
            <Route path='/watch' element={<Watch/>}/>

            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes