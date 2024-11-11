import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import TodoForm from './components/TodoForm'
import Login from './pages/Login';
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/create-todo' element={<TodoForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
