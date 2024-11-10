import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='text-red-700'>
      <BrowserRouter>
        <Navbar/>
        <Dashboard/>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
