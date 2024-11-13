// frontend/src/App.js
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import Home from './components/Home'
import About from './components/About'
import JobListings from './components/JobListings'
import Contact from './components/Contact'
import CompanyShowcase from './components/CompanyShowcase'
import Login from './components/Login'
import { Logout } from './components/Logout'
import Register from './components/Register'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(
    () => {
      // chech if token is stored
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    },
    []
  )
  // active link style
  const activeStyle = { backgroundColor: 'white', color:"#333", fontWeight: 'bold' }
  const defaultStyle = { color: '#fff', fontWeight: 'bold' }

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/jobs" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
            <Button color="inherit">Jobs</Button>
          </NavLink>
          <NavLink to="/companies" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
            <Button color="inherit">Companies</Button>
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
            <Button color="inherit">Contact</Button>
          </NavLink>

          {isAuthenticated ? (
            <Button color="inherit" onClick={() => { Logout(); setIsAuthenticated(false); }}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<CompanyShowcase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
