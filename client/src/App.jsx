import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/*Public routes*/}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>

          {/*Protected routes*/}
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Navbar/>
              <Dashboard/>
            </ProtectedRoute>
          }/>
          <Route path='/profile' element={
            <ProtectedRoute>
              <Navbar/>
              <Profile/>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
