import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import TodoForm from './components/TodoForm'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/create-todo' element={<TodoForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
